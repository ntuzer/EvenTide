import React from 'react';
import { Link } from 'react-router-dom';


const EventIndexItem = ({ event }) => {
  return (
    <li key={event.id}>
      EVENT:
      <br/>
      {event.title}
    </li>);
};

export default EventIndexItem;
// onClick={() => deleteEvent(event.id)}
