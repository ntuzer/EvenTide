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
    this.props.fetchBookmarks();
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
    if (this.props.bookmarks === undefined) return null;
    let eArr = [];
    this.props.bookmarks.map(el => eArr.push(el.id));
    return (
      <div className="event-index">
        <div className="event-inner">
          <div className="event-spacer"></div>
          <h1>Local events for you.</h1>
          <div className="event-main">
            {
              this.shuffle(this.props.events).slice(0, 9).map(event => {
                let bool = "false";
                if (eArr.includes(event.id)) bool = "true";
                return <EventIndexItem key={event.id}
                  bookmark={bool}
                  createBookmark={this.props.createBookmark}
                  removeBookmark={this.props.removeBookmark} event={event} />;
              }
            )
            }
          </div>
        </div>
      </div>
    );
  }
}

export default EventIndex;
