import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import EventIndexItem from './event_index_item';

class EventIndex extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    this.props.fetchEvents();
  }


  render(){
    return (
      <div>
        <h1>Event Index</h1>
        <ul>
        {
          this.props.events.map(event => (
            <EventIndexItem key={event.id} event={event} />
          ))
        }
        </ul>
      </div>
    );
  }
}

export default EventIndex;
