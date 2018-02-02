import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class Navbar extends React.Component {


  render(){
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
              Sign In
            </div>
          </div>

        </nav>

    </header>
    );
  }
}

export default withRouter(Navbar); //why do i need withRouter here?

// <img src={staticImages.logo} alt=""/>
