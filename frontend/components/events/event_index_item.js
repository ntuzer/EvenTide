import React from 'react';
import { Link } from 'react-router-dom';


const EventIndexItem = ({ event }) => {
  console.log('EVENT',event);
  let price = "Placeholder";
  let date = "Placeholder";
  let category = "Placeholder";
  if (event === undefined) return null;
  return (
    <div key={event.id} classNameName="event-index-item">

      <div className="ii-upper">
        <Link to={`/events/${event.id}`}>
          <div className="ii-img">
            <img src={event.event_image_url} alt=""></img>
            <span>{price}</span>
          </div>
          <div className="ii-text">
            <div className="ii-t-date">{date}</div>
            <div className="ii-t-title">{event.title}</div>
            <div className="ii-t-location">{event.date}</div>
          </div>
        </Link>
      </div>


      <div className="ii-footer">
        <Link to="/">#{category}</Link>
        <div className="ii-bookmark">
          <Link to="/"></Link>
        </div>
      </div>

    </div>
  );
};

export default EventIndexItem;
// onClick={() => deleteEvent(event.id)}
