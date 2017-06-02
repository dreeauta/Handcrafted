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
    showAllEvents = this.props.events.all_events.map((input, idx) => <div className="event-box" key={idx}>  <h2 className="event-name"> {input.name} </h2> <img className="event-image" src={input.image}/>
    <br/>
    <span className="event-description"> {input.description}
    </span>
    <br/>
    <span className="event-date">
   {input.date}
      <br/>
      {input.time}
   </span>
     <br/> <a href={input.link} className="event-link"> {input.link}</a> </div>  );
  }


  return(

    <div className="event-div">
    <div className="event-title">
    EVENTS
    </div>

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
