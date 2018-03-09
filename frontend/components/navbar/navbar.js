import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props){
    super(props);
    this.uporout = this.uporout.bind(this);
    this.createEventButton = this.createEventButton.bind(this);
    this.profile = this.profile.bind(this);
  }

  uporout(e){
    e.preventDefault();
    if (this.props.loggedIn) {
      this.props.signOut();
    } else {
      this.props.history.push("/login");
    }
  }

  createEventButton(){
    if (this.props.location.pathname !== '/events/new') {
      return (
        <Link className="createEvent" to="/events/new">
        Create Event
        </Link>
      );
    }
  }

  profile(e){
    // e.preventDefault();

    let profile = this.props.loggedIn ?
      <div className="user"><Link
        to={`/users/${this.props.userId}`}>
        My Profile
      </Link></div> : <div></div>;
    return profile;
  }


  render(){
    // console.log('VIEW navbar render');
    let inorout = this.props.loggedIn ? "sign out" : "sign in";
    let button = this.profile();
    return(
      <header className='navbar'>
        <nav>

          <div className="navleft">
            <Link to="/" >
              <p className="logo">
                EvenTide
              </p>
            </Link>
          </div>

          <div className="navRight">
            { this.createEventButton() }
            <div className="user">
              <div className="create" onClick={this.uporout}>{inorout}</div>
            </div>
            {
              button
            }
          </div>
        </nav>

    </header>
    );
  }
}

export default withRouter(Navbar); //why do i need withRouter here?
// this.props.location.pathname !== '/events/new'

// <img src={staticImages.logo} alt=""/>

// <Link to="/login" >{inorout}</Link>
