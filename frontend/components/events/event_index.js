import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import EventIndexItem from './event_index_item';

class EventIndex extends React.Component {
  constructor(props) {
    super(props);
    this.shuffle = this.shuffle.bind(this);
  }
  componentDidMount(){
    this.props.fetchEvents();
  }

  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  render(){
    return (
      <div className="event-index">
        <h1>Local events for you.</h1>

        <ul>
        {
          this.shuffle(this.props.events).slice(0, 9).map(event => (
            <EventIndexItem key={event.id} event={event} />
          ))
        }
        </ul>
      </div>
    );
  }
}

export default EventIndex;
