import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import EventIndexItem from '../events/event_index_item';

class UserShow extends React.Component {
  constructor(props){
    super(props);
    this.state = undefined;
  }

  componentDidMount(){

    this.props.fetchEvents().then(this.props.fetchBookmarks());
    let path = this.props.location.pathname.split("/");
    if (path.length === 3) this.props.history.push(`${this.props.userId}/bookmarks`);
  }




  render(){
    if (this.props.events === undefined) return null;

    let events = this.props.bookmarks;
    let eArr = [];
    this.props.bookmarks.map(el => eArr.push(el.id));

    let path = this.props.location.pathname.split("/");

    let bookmark = path[path.length - 1] === "bookmarks" ?
      "active-item" : "profile-event-links-items";
    let tickets = path[path.length - 1] === "tickets" ?
      "active-item" : "profile-event-links-items";
    let evts = path[path.length - 1] === "events" ?
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


      </div>
    );
  }
}

export default UserShow;




// {
//   Object.values(this.state.bookmarks).map(bk => {
//     <EventIndexItem key={bk.id}
//   })
// }
