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
    showAllEvents = this.props.events.all_events.map((input, idx) => <p key={idx}>  {input.name} <br/> {input.image} <br/> {input.description} <br/> {input.date} {input.time} <br/> {input.link} </p>  );
  }


  return(

    <div>
    <h3> Events </h3>

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
