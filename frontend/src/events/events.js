import React from 'react';
import '.././index.css';
import * as ReactRedux from 'react-redux';
import * as actions from './events.actions';
import { Link } from 'react-router';


class eventsComponent extends React.Component {
  componentDidMount() {
    this.props.fetchEvents(this.props.params.data)
  }

render() {

  let showAllEvents;

  if (this.props.events.all_events) {
    showAllEvents = this.props.events.all_events.map((input, idx) => <span  className="event-info" key={idx}>  <h2 className="event-name"> {input.name} </h2> <img className="event-image" src={input.image}/>
    <br/>
    <span className="event-description"> {input.description}
    </span>
    <br/>
    <span className="event-date">
   {input.date}
      <br/>
      {input.time}
   </span>
     <br/> <a href={input.link} className="event-link"> {input.link}</a> </span>  );
  }


  return(

    <div className="event-title-div">
    <span className="event-title">
       Events
    </span>


    { showAllEvents}



    </div>


  );

  }
}


const eventsContainer = ReactRedux.connect(
  state => state,
  // state.events

  actions
)(eventsComponent);


export default eventsContainer;
