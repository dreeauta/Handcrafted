import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './addEvents.actions';
import { Link } from 'react-router';
import Dropzone from 'react-dropzone';


class addEvents extends React.Component {


render() {
  return (
    <div>

    <label> Event Name: </label>
    <input type="text" onChange={event => this.props.onChangeEvents(event.target.value,'name')}/>
    <br/>

    <label> Description: </label>
    <input type="text" onChange={event =>
    this.props.onChangeEvents(event.target.value,'description')}/>

    <br/>

    <label> Location: </label>
    <input type="text" onChange={event =>
    this.props.onChangeEvents(event.target.value,'location')}/>

    <br/>


    <label> Date: </label>
    <input type="date" onChange={event =>
    this.props.onChangeEvents(event.target.value,'date')}/>

    <br/>


    <label> Time: </label>
    <input type="time" onChange={event =>
    this.props.onChangeEvents(event.target.value,'time')}/>

    <br/>

    <label> Image: </label>
    <input type="text" onChange={event =>
    this.props.onChangeEvents(event.target.value,'image')}/>

    <br/>

    <label> Link: </label>
    <input type="text" onChange={event =>
    this.props.onChangeEvents(event.target.value,'link')}/>

    <br/>

    <button className ="signup-btn" onClick={() =>
    this.props.submitEvents(
      this.props.eventsadd.name,
      this.props.eventsadd.description,
      this.props.eventsadd.location,
      this.props.eventsadd.date, this.props.eventsadd.time, this.props.eventsadd.image, this.props.eventsadd.link)}> Add Event </button>



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
