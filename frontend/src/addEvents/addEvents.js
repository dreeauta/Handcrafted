import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './addEvents.actions';
import { Link } from 'react-router';


class addEvents extends React.Component {


render() {


  return (
    <div className="addevents">

    <span className="addevent-title">
      Add Event
    </span>

    <div className="event-form">

    <label> Event Name: </label>
    <br/>
    <input type="text" onChange={event => this.props.onChangeEvents(event.target.value,'name')}/>
    <br/>

    <label> Description: </label>
    <br/>
    <input type="text" onChange={event =>
    this.props.onChangeEvents(event.target.value,'description')}/>

    <br/>

    <label> Location: </label>
    <br/>
    <input type="text" onChange={event =>
    this.props.onChangeEvents(event.target.value,'location')}/>

    <br/>


    <label> Date: </label>
    <br/>
    <input type="date" onChange={event =>
    this.props.onChangeEvents(event.target.value,'date')}/>

    </div>

    <br/>
    <div className="event-form2">

    <label> Time: </label>
    <br/>
    <input type="time" onChange={event =>
    this.props.onChangeEvents(event.target.value,'time')}/>

    <br/>


    <label> Link: </label>
    <br/>
    <input type="text" onChange={event =>
    this.props.onChangeEvents(event.target.value,'link')}/>

    <br/>


    <button  onClick={event =>this.props.uploadEventImage(event.target.value,'image')}> Upload Image </button>


    <span className="addevent-submit">
    <button onClick={() =>
    this.props.submitEvents(
      this.props.eventsadd.name,
      this.props.eventsadd.description,
      this.props.eventsadd.location,
      this.props.eventsadd.date, this.props.eventsadd.time,
      this.props.eventsadd.image, this.props.eventsadd.link)}> Add Event </button>
    </span>
    </div>

      <img className="event-tree-gif" src="./tree.gif"/>

    </div>


  );
}

}

const addEventsContainer = ReactRedux.connect(
  state => state,
  //  reducer eventsadd

  actions
)(addEvents);

export default addEventsContainer;
