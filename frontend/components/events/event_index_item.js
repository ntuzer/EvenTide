import React from 'react';
import { Link } from 'react-router-dom';
import moment from './moments';

const EventIndexItem = ({ event }) => {
  let price = event.max_price - event.min_price === 0 ? "Free" : `$${event.max_price - event.min_price}`;
  let dateObj = new Date(event.start_date).toString();
  let ampm = 2;
  let date = `${dateObj.slice(0,3)}, ${dateObj.slice(4,15)}`;
  let category = "category";
  console.log('DATE', date);
  if (event === undefined) return null;
  return (
    <div key={event.id} className="e-i-i">
      <div className="e-i-box">
        <div className="ii-upper">
          <Link to={`/events/${event.id}`}>

            <div className="img-div">
              <img className="ii-img"src={event.event_image_url} height="165" width="330" alt=""></img>
              <span>{price}</span>
            </div>

            <div className="ii-text">
              <div className="ii-t-date">{date}</div>
              <div className="ii-t-title">{event.title}</div>
              <div className="ii-t-location">{event.location}</div>
            </div>
          </Link>
        </div>

        <div className="ii-footer">
          <Link to="/">#{category}</Link>
          <div className="ii-bookmark">
            <Link to="/"><i className="far fa-bookmark"></i></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventIndexItem;
// onClick={() => deleteEvent(event.id)}
