import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';

class UserShow extends React.Component {

  render(){

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
            {
              
            }
          </div>
        </section>
      </div>
    );
  }
}

export default UserShow;
