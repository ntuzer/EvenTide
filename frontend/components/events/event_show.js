import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';


class EventShow extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state = this.props.events;
  // }

  componentDidMount(){
    console.log("fe", this.props);
    this.props.fetchEvent(this.props.eventId);
  }


  // componentWillReceiveProps(nextProps) {
  //   this.props.fetchEvent(nextProps.match.params.eventId);
  // }

  render(){
    if (this.props.events.title === undefined) return null;
    let event = this.props.events;
    return (
      <div className="event-show">

        <div className="show-top">
          <img src={event.event_image_url} alt="img"></img>
          <div className="show-top-right">
            <h1 className="show-title">Title: {event.title}</h1>
            <h3 className="show-date">Date: {event.start_date}</h3>
          </div>
        </div>

        <div className="show-bar">
          <button type="button" name="ticket">Register</button>
        </div>
        <div className="show-bottom">

          <div className="show-bottom-left">
            <label>
              Description
              <h3>{event.description}</h3>
            </label>
          </div>

          <div className="show-bottom-right">
            <label>
              Date
              <h3>{event.start_date}</h3>
            </label>

            <label>
              Time
              <h3>{event.start_date}</h3>
            </label>

            <label>
              Location
              <h3>{event.location}</h3>
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default EventShow;
