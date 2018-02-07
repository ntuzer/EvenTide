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
    if (this.props.events === undefined) return null;
    return (
      <div className="event-index">
        <div className="event-inner">
          <div className="event-spacer"></div>
          <h1>Local events for you.</h1>
          <div className="event-main">
            {
              this.shuffle(this.props.events).slice(0, 9).map(event => (
                <EventIndexItem key={event.id} event={event} />
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}

export default EventIndex;
