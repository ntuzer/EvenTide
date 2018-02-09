import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import EventIndexItem from '../events/event_index_item';

class UserShow extends React.Component {
  constructor(props){
    super(props);
    this.state = undefined;
  }
  componentWillMount(){
    this.props.fetchBookmarks().then(
      bks => {
        if (bks === undefined) return null;
        let events;
        // bks.bookmarks.map(el => {
        //
        // })
        this.setState(bks);
      }
    );
  }

  render(){
    console.log("est", this.state);
    if (this.state === undefined) return null;
    // debugger;
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
          <div className="user-show-body">
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
