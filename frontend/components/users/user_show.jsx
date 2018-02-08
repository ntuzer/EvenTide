import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';

class UserShow extends React.Component {

  render(){

    return(
      <header className="profile-page">
        <h1>USERSHOW</h1>
        <div className="profile-bar">
          Hi {this.props.email}!
        </div>
        <div className="profile-event-links">
          Your Events
        </div>
      </header>
    );
  }
}

export default UserShow;
