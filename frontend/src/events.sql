CREATE TABLE events (
	id serial primary key,
	name varchar,
	description varchar,
	location varchar,
	date varchar,
	time varchar,
  link varchar,
  image varchar
	);



-- insert into events values
--   (default, 'name', 'description', 'location', 'date', 'time', 'link', 'image');



insert into events values
  (default, 'The Epic Regular Art Show', 'Come and enjoy a night of Art , Music and Culture . Dj Daddy duffle mixing all night . Catering by lili homaker. This event is 21 & up and is stirctly enforced!', '751 James P Brawley Drive Northwest
Atlanta, GA 30318', '6-1-2017', '6:00 PM – 9:00 PM', 'https://www.eventbrite.com/e/the-epic-regular-art-show-tickets-33420718268#tickets', './events/regularartshow.jpg');


insert into events values
  (default, 'Guys and Dolls', 'Markay Gallery brings something for everyone during the month of Father’s Day. Their First Friday show titled “Guys & Dolls” features a blend of feminine and masculine styled art.

In the Upper Gallery:
Fairhope, Alabama artist, Kelley Ogburn debuts her soft palette and fluid style blending illustrative lines with a loose, painterly brush. Kelley captures the anticipation of ballerina’s behind the curtain, the quietness of peaceful solitude with her figure work and the softness of flower petals with her flora paintings. Kelley’s work will be enjoyed with an artful wine pairing.

In the Lower Gallery:
A more masculine feel resonates in the lower gallery. Artwork perfect for any “Man Cave” takes centerstage. From pub tables encased in tools and gears to paintings in darker hues, artists share work meant to convey a rough and rugged feel. Buckets of beer will be chilled and ready for happy hour on this fun night.
', 'Markay Gallery
26 Winters Street
Marietta, GA 30060', '6-2-2017', '5:00 PM – 9:00 PM', 'http://markaygallery.com/', './events/guysanddolls.jpg');

insert into events values
(default, 'Virginia-Highland Summerfest 2017', 'The Virginia-Highland Civic Association is proud to present its 34th annual Virginia-Highland Summerfest in June. The juried artist market features artwork from 225 of the best artists in the southeast region and beyond, in a variety of media including painting, clay, glass, jewelry, photography, printmaking, fiber, wood, metal and mixed media. Summerfest enjoys an educated audience and is well attended. This cherished two day event takes place along tree-lined Virginia Avenue, in the heart of the historic and charming Virginia-Highland neighborhood.
', 'Virginia-Highlands
Atlanta, Georgia', '6-3-2017 - 6-4-2017', '10am – 6:30pm', 'http://www.vahi.org/', './events/vhsummerfest.jpeg');

insert into events values
(default, 'Art Opening for Elizabeth Fowler', 'Join us in the Atlanta debut of Mississippi artist, Elizabeth Fowler on Thursday, June 8th. Learn about her processes and inspirations as you enjoy her colorful, emotional abstract art. Refreshments from 11am - 7pm.', 'Join us in the Atlanta debut of Mississippi artist, Elizabeth Fowler on Thursday, June 8th. Learn about her processes and inspirations as you enjoy her colorful, emotional abstract art. Refreshments from 11am - 7pm.', '6-8-2017', '11:00 am – 7:00 pm', 'https://www.eventbrite.com/e/art-opening-for-elizabeth-fowler-tickets-34836106733', './events/elizabethfowler.jpg');

insert into events values
(default, 'Bob Ichter Solo Art Exhibition', 'Carré d'artistes Atlanta is hosting Local Artist, Bob Ichter, for a Solo Art Exhibition on June 17th from 6 to 8pm.

We will provide refreshments for this one night only event.

Bob Ichter is best known for his brilliantly colored, stylized landscapes in pastel on suede and acrylics on canvas, reverse acrylics on plexiglass, acrylic and resin 3-d koi, watercolors, and abstract oil and acrylics on canvas. His color-saturated landscapes and dragonflies convey his passion for the beauty of nature and his intense abstract works show his depth of imagination and spontaneity.

Ichter includes elements in his paintings from different regions of the United States and the world that he has experienced in his travels. All of these elements are transformed by his imagination into works with striking visual impact that are at the same time peaceful. ', 'Carré d'artistes Atlanta - Phipps Plaza
3500 Peachtree Rd. NE
Atlanta, GA 30326
', '6-17-2017', '6:00 PM – 8:00 PM', 'http://www.carredartistesatlanta.com/new-index', './events/bobichter.jpg');

insert into events values
  (default, 'Old Fourth Ward Arts Festival 2017', 'Held in which is considered to be the most up and coming neighborhhod in Metro Atlanta, the Old Fourth Ward Arts Festival is a two-day celebration of community and tradition presented by the Atlanta Foundation for Public Spaces, for people of all ages, races, customs and interests.  The Festival is a major celebration of the arts while honoring the rich history of our community.  At this festival, there is something for everyone: fine arts and crafts, a children's play area, local food and beverage concessions and live acoustic entertainment.  All this within the environment of Atlanta's most lovely park and part of the celebration on the Beltline redevelopment.  Formerly, this area flanked "City Hall East," which is now under redevelopment as Ponce City Market by Jamestown Properties.  This area is targeted as one of the prime examples of urban redevelopment and innovation, benefiting the surrounding communities.
', 'Historic Fourth Ward Park 592 N. Angier Ave., NE, Atlanta, GA 30308', '6-24-2017 - 6-25-2017', '10:00am - 5:00 pm', 'http://www.oldfourthwardparkartsfestival.com/', './events/ofwartsfest.jpeg');

-- insert into events values
--   (default, 'name', 'description', 'location', 'date', 'time', 'link', 'image');
