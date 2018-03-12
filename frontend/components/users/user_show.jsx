import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import EventIndexItem from '../events/event_index_item';
import TicketIndex from '../tickets/tickets_container';
import Evts from '../events/my_events_container';


class UserShow extends React.Component {
  constructor(props){
    super(props);
    this.state = undefined;
    this.subPage = this.subPage.bind(this);
    this.bookmarks = this.bookmarks.bind(this);
  }

  componentDidMount(){

    this.props.fetchEvents().then(this.props.fetchBookmarks());
    let path = this.props.location.pathname.split("/");
    if (path.length === 3) {
      this.props.history.push(`${this.props.userId}/bookmarks`);
    }
  }

  bookmarks(){
    let events = this.props.bookmarks;
    let eArr = [];
    this.props.bookmarks.map(el => eArr.push(el.id));
    return (
      <section className="user-show-body-outer">
        <div className="u-s-b-o">
          <div className="user-show-body">
            {
              events.map(evt => {
                let bool = "false";
                if (eArr.includes(evt.id)) bool = "true";
                return <EventIndexItem key={evt.id}
                  loggedIn = "true"
                  createBookmark={this.props.createBookmark}
                  removeBookmark={this.props.removeBookmark}
                  bookmark={bool} event={evt} />;
              })
            }
          </div>
        </div>
      </section>
    );
  }

  subPage(){
    let path = this.props.location.pathname.split("/");
    if (path[path.length - 1] === "bookmarks"){
      return this.bookmarks();
    } else if (path[path.length - 1] === "tickets") {
      return (<TicketIndex />);
    } else if (path[path.length - 1] === "events") {
      return (<Evts />);
    }
  }

  render(){
    if (this.props.events === undefined) return null;

    let path = this.props.location.pathname.split("/");
    let bookmark = path[3] === "bookmarks" ?
      "active-item" : "profile-event-links-items";
    let tickets = path[3] === "tickets" ?
      "active-item" : "profile-event-links-items";
    let evts = path[3] === "events" ?
      "active-item" : "profile-event-links-items";

    return(
      <div className="profile-outer">
        <header className="profile-page">
          <div></div>
          <div className="profile-bar">
            Hi {this.props.email}!
          </div>
          <div className="profile-event-links">
            <Link to={`/users/${this.props.userId}/bookmarks`}
              className={bookmark}>Bookmarks</Link>
            <Link to={`/users/${this.props.userId}/tickets`}
              className={tickets}>Tickets</Link>
            <Link to={`/users/${this.props.userId}/events`}
              className={evts}>Scheduled Events</Link>

          </div>
        </header>


        {
          this.subPage()
        }


      </div>
    );
  }
}

export default UserShow;
