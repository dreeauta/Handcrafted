const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Promise = require('bluebird');
const stripePackage = require('stripe');
const stripe = require("stripe")("sk_test_EElhhlSdMzy3X57xSDruteG7");


const pgp = require('pg-promise')(
  {
    promiseLib: Promise
  }
);

const bcrypt = require('bcrypt');
const uuid = (require('uuid'));

const config = require('./config.js');
const db = pgp(config);
// const db = pgp({
//   database: 'art_db'
// });

const app = express();

app.use(bodyParser.json());
app.use(cors());


app.use(express.static('public'));

app.get('/api/products', (req, resp, next) => {
  db.any('select * from product')
  .then(pages => resp.json(pages))
  .catch(next);
})

app.get('/api/artwork', (req, resp,next) => {
  // db.any('select * from artist where artist.category LIKE "%artwork%"')
  db.any('select * from artist')
  .then(pages => resp.json(pages))
  .catch(next);
})

app.get('/api/artwork/:id', (req, resp, next) => {
  let id = req.params.id;

  db.any('select p.*, a.name as artist_name, a.bio as bio, a.artist_image as artist_image, a.email as email from product as p inner join artist as a on (p.artist_id = a.id) where p.artist_id = $1', [id])
  .then(page => {
    if(page === null) {
      resp.status(404);
      resp.json({
        message: 'Page no found'
      });
    } else {
      resp.json(page);
    }
  })
  .catch(next);
})



app.get('/api/artworkItem/:id', (req, resp, next) => {
  let id = req.params.id;

  db.oneOrNone('select * from product where id = $1', [id])
  .then(page => {
    if(page === null) {
      resp.status(404);
      resp.json({
        message: 'Page no found'
      });
    } else {
      resp.json(page);
    }
  })
  .catch(next);
})


// app.get('/api/category/:id', (req, resp, next) => {
//   let id = req.params.id;
//   db.any('select * from product where id = $1', id)
//   .then(page => {
//     if(page === null) {
//       resp.status(400);
//       resp.json({
//         message: 'Page no found'
//       });
//     } else {
//       resp.json(page);
//     }
//   })
//   .catch(next);
// })

app.get('/api/events', (req, resp, next) => {
  db.any('select * from events ORDER BY date ASC')
  .then(pages => resp.json(pages))
  .catch(next);
})

app.post('/api/events', (req, resp, next) => {
  let data = req.body;
  db.one(`insert into events values (default, $1, $2, $3, $4, $5, $6, $7) returning *`,
    [data.name,
    data.location,
    data.link,
    data.date,
    data.image,
    data.description,
    data.time]
  )
  .then(pages => resp.json(pages))
  .catch(next);
})


/*
Request body shape:
{
  username: "lolcat",
  password: "forthelolz",
  email: "lol@cat.com",
  first_name: "lol",
  last_name: "cat"
}
*/


app.post('/api/user/signup', (req, resp, next) => {
  let data = req.body;
  bcrypt.hash(data.password, 10)
    .then((encryptedPassword) =>
      db.one(`
        insert into customer
        values (default, $1, $2, $3, $4, $5, $6)
        returning username, email, first_name, last_name, user_image
        `,
        [data.username,
          data.email,
          encryptedPassword,
          data.first_name,
          data.last_name,
          data.user_image]
      )
    )
    .then(data => resp.json(data))
    .catch(next);
});

/*
Request body shape:
{
  username: "lolcat",
  password: "forthelolz",
}
*/

app.post('/api/user/login', (req, res, next) => {
  let username = req.body.username;
  let password = req.body.password;
  console.log("hello 1");
  db.one(
    'select * from customer where username = $1',
    [username])
    .then(customer =>
      [customer,
        bcrypt.compare(password, customer.password)])
    .spread((customer, matches) => {
      if (matches) {
        let token = uuid.v4();
        console.log('hello 342');
        return [
          customer,
          db.one(
            `insert into login_session values ($1, default, $2) returning *`, [token, customer.id]
          )
        ];
      } else {
        throw new Error('login failed');
      }
    })
    .spread((customer, loginSession) => {
      console.log(customer);
      console.log(loginSession);
      res.json({
        username: customer.username,
        email: customer.email,
        first_name: customer.first_name,
        last_name: customer.last_name,
        auth_token: loginSession.token,
        customer_id: customer.id
      });
    })
    .catch(next);
  });

function respondUnauthorized(resp) {
  resp.status(403);
  resp.json({
    message: 'Unauthorized'
  });
}

app.use(function Authenticate(req, resp, next) {
    let token = req.query.token || req.body.token;
    if (!token) {
      respondUnauthorized(resp);
      return;
    }
    db.oneOrNone(`select * from login_session where token = $1`, token)
      .then(loginSession => {
        if (!loginSession) {
          respondUnauthorized(resp);
          return;
        }
        req.loginSession = loginSession;
        next();
      })
      .catch(next);
  });


app.post('/api/shopping_cart', (req, res, next) => {
  let data = req.body;
  // data.auth_token

  // db.any('select * from login_session where customer_id = $1', [req.user.customer_id])

  db.one(`insert into product_in_shopping_cart values (default, $1, $2) returning * `,
  [data.id,
  req.loginSession.customer_id]
 )
 .then(data => db.any('select * from product_in_shopping_cart where customer_id = $1', [req.loginSession.customer_id]))

.then(data => res.json(data))
.catch(next);
});


app.delete('/api/shopping_cart/', (req, res, next) => {
  let data = req.body;
  console.log(data.id);

  db.result('delete from product_in_shopping_cart where id = $1', [data.id])
  .then(data => res.json(data))
  .catch(next);
})


app.get('/api/shopping_cart', (req, res, next) => {
  let data = req.body;
  let customerId = req.loginSession.customer_id;

  db.any('select * from product_in_shopping_cart as pisc join product as p on (pisc.product_id = p.id) where customer_id = $1 ', customerId)
  .then(data => res.json(data))
  .catch(next);
});


app.post('/api/checkout', (req, res, next) => {
  let data = req.body;
  db.one(`insert into purchase values (default, $1, $2, $3, $4, $5, $6, $7) returning customer_id, total_price, address, address2, city, zipcode, email`, [req.user.customer_id, data.total_price, data.address, data.address2, data.city, data.zipcode, data.email])
  .then(results => {
      return db.none(`delete from shopping_cart where customer_id = $1`, results.customer_id)
  })
  .then(()=> {
      resp.json({message: "purchase successful"});
  })
  .catch((error) => {
      if (error.message === 'No data returned from the query.') {
          resp.status(401);
          resp.json({message: "User not authenticated"});
      } else {
          throw error;
      }
  })
  .catch(next);
});

// Checkout
// app.post('/api/checkout', (req, resp, next) => {
//     let token = req.body.token;
//     db.one(`select user_id from tokens join users on tokens.user_id = users.id and tokens.token = $1`, token)
//         .then(results => {
//             return [results, db.any(`select product_id from products inner join shopping_cart on shopping_cart.product_id = products.id where shopping_cart.user_id = $1`, results.user_id)]
//         })
//         .spread((results, items) => {
//             if (items.length === 0) {
//                 resp.json({message: "No items in user's shopping cart."});
//             } else {
//                 return [results, items, db.one(`insert into purchases values (default, $1) returning id`, parseInt(results.user_id))]
//             }
//         })
//         .spread((results, items, purchase) => {
//             items.forEach(item => {
//                 db.none(`insert into products_purchases values (default, $1, $2)`, [purchase.id, item.product_id])
//             })
//             return results;
//         })
//         .then(results => {
//             return db.none(`delete from shopping_cart where user_id = $1`, results.user_id)
//         })
//         .then(()=> {
//             resp.json({message: "purchase successful"});
//         })
//         .catch((error) => {
//             if (error.message === 'No data returned from the query.') {
//                 resp.status(401);
//                 resp.json({message: "User not authenticated"});
//             } else {
//                 throw error;
//             }
//         })
//         .catch(next)
// })

// Click Submit payment button
app.post('/api/ccinfo', (req, res, next) => {
    let stripeToken = req.body.stripeToken;
    let email = req.body.email;
    let amount = req.body.amount;
    // stripe.customers.create({
    //         email: email
    //     })
    //     .then(customer => {
    //         return stripe.customers.createSource(customer.id, {
    //             source: stripeToken
    //         });
    //     })
    stripe.charges.create({
              amount: amount,
              currency: 'usd',
              source: token,
              description: 'Test Charge'
          })
    .catch(next);
});



app.use((err, req,resp, next) => {
  resp.status(500);
  resp.json({
    error:err.message,
    stack: err.stack.split('\n')
  });
});


app.listen(3333, () => {
  console.log('listening on port 3333');
});
