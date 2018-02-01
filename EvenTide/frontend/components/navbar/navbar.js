import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class Navbar extends React.Component {


  render(){
    return(
      <div className='navbar'>
        <a className="logo">
          <img src={staticImages.logo} alt=""/>
        </a>
        <div className="button1">
        </div>
        <div className="button2">
        </div>
      </div>
    );
  }
}

export default withRouter(Navbar); //why do i need withRouter here?
