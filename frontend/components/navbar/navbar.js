import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props){
    super(props);
    this.uporout = this.uporout.bind(this);
  }

  uporout(e){
    e.preventDefault();
    if (this.props.loggedIn) {
      this.props.signOut();
    } else {
      this.props.history.push("/login");
    }
  }

  render(){
    console.log('VIEW navbar render');
    let inorout = this.props.loggedIn ? "sign out" : "sign in";

    // let signout = inorout === "sign out" ? ;
    // console.log("yoooo",this.props);
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
            <div className="createEvent">
              Create Event
            </div>
            <div className="user">
              <button onClick={this.uporout}>{inorout}</button>
            </div>
          </div>
        </nav>

    </header>
    );
  }
}

export default withRouter(Navbar); //why do i need withRouter here?

// <img src={staticImages.logo} alt=""/>

// <Link to="/login" >{inorout}</Link>
