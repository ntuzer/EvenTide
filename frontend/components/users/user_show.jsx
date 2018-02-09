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
  }

  render(){
    if (this.props.events === undefined) return null;
    let events = this.props.bookmarks;
    let eArr = [];
    this.props.bookmarks.map(el => eArr.push(el.id));
    return(
      <div className="profile-outer">
        <header className="profile-page">
          <div></div>
          <div className="profile-bar">
            Hi {this.props.email}!
          </div>
          <div className="profile-event-links">
            Your Events
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
