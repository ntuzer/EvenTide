import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';


class EventShow extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state = this.props.events;
  // }

  componentDidMount(){
    this.props.fetchEvent(this.props.eventId);
  }


  // componentWillReceiveProps(nextProps) {
  //   this.props.fetchEvent(nextProps.match.params.eventId);
  // }

  render(){
    let event = this.props.events;
    let dateObj = new Date(event.start_date).toString();
    let dateEnd = new Date(event.end_date).toString();
    let ampm1 = parseInt(dateObj.slice(16,18)) > 12 ? "PM" : "AM";
    let ampm2 = parseInt(dateEnd.slice(16,18)) > 12 ? "PM" : "AM";
    let times = `${dateObj.slice(16,21)} ${ampm1} - ${dateEnd.slice(16,21)} ${ampm2}`;
    let mon = `${dateObj.slice(4, 7)}`;
    let day = `${dateObj.slice(8, 10)}`;
    let date = `${dateObj.slice(0,3)}, ${dateObj.slice(4,15)}`;
    let price = event.max_price - event.min_price === 0 ? "Free" : `$${event.max_price - event.min_price}`;

    if (this.props.events.title === undefined) return null;
    return (
      <div className="event-back">
        <div className="event-show">

          <div className="show-top">
            <img src={event.event_image_url} alt="img"></img>
            <div className="show-top-right">
              <h1 className="show-mon">{mon}</h1>
              <h1 className="show-day">{day}</h1>
              <h1 className="show-title">{event.title}</h1>
              <h1 className="show-owner"></h1>
              <h1 className="show-price">{price}</h1>
            </div>
          </div>

          <div className="show-bar">
            <Link to="/" className="show-bar-icon"><i className="far fa-bookmark fa-lg"></i></Link>
            <Link to="/" className="show-register">Register</Link>
          </div>

          <div className="show-bottom">

            <div className="show-bottom-left">
              <div className="show-desc">
                <h2 className="show-br-titles">DESCRIPTION</h2>
                <h3>{event.description}</h3>
              </div>
            </div>

            <div className="show-bottom-right">
              <div className="show-datetime">
                <h2 className="show-br-titles">DATE AND TIME</h2>
                <h3>{date}</h3>
                <h3>{times}</h3>
              </div>


              <label>
                <h2 className="show-br-titles">LOCATION</h2>
                <h3>{event.location}</h3>
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EventShow;
