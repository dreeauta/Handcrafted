import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './addEvents.actions';
import { Link } from 'react-router';
import AlertContainer from 'react-alert';


class addEvents extends React.Component {

  alertOptions = {
    offset: 14,
    position: 'bottom right',
    theme: 'light',
    time: 4250,
    transition: 'scale'
  }



  showAlert = () => {
    this.msg.show('Event Added!', {
      time: 2000,
      type: 'success',
      icon: <img src="./addevent/event-icon.png" />
    })
  }

render() {

let event_added;

if (this.props.events.event_added){
  event_added = <p> Event Added! </p>
}

  return (
    <div className="addevent-div">

    <span className="addevent-title">
      Add Event
    </span>

    <div className="event-form">

    <label> Event Name: </label>
    <br/>
    <input type="text" onChange={event => this.props.onChangeEvents(event.target.value,'name')}/>
    <br/>

    <label> Location: </label>
    <br/>
    <input type="text" onChange={event =>
    this.props.onChangeEvents(event.target.value,'location')}/>

    <br/>

        <label> Description: </label>
        <br/>
        <input className="addevent-description" type="text" onChange={event =>
        this.props.onChangeEvents(event.target.value,'description')}/>



    </div>

    <br/>
    <div className="event-form2">

    <label> Date: </label>
    <br/>
    <input type="date" onChange={event =>
    this.props.onChangeEvents(event.target.value,'date')}/>
<br/>
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

    <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />

    <span className="addevent-submit">
    <button onClick={(event) => {
    this.props.submitEvents(
      this.props.eventsadd.name,
      this.props.eventsadd.description,
      this.props.eventsadd.location,
      this.props.eventsadd.date, this.props.eventsadd.time,
      this.props.eventsadd.image, this.props.eventsadd.link)}, this.showAlert}> Add Event </button>
    </span>
    <br/> {event_added}
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
