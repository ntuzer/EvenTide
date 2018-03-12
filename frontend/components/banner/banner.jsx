import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import merge from 'lodash/merge';
const bn1 = "/assets/b8.jpg";
const bn2 = "/assets/b6.jpg";
const bn3 = "/assets/b7.jpg";
const bn4 = "/assets/b5.jpg";


class Banner extends React.Component {
  constructor(props){
    super(props);
  }




  // <img className="banner-img"
  //   src={src}
  // ></img>
  render(){
    return (
      <div className="banner">
        <figure>
          <img src="https://raw.githubusercontent.com/ntuzer/EvenTide/master/app/assets/images/b8.jpg" alt></img>
          <img src="https://raw.githubusercontent.com/ntuzer/EvenTide/master/app/assets/images/b6.jpg" alt></img>
          <img src="https://raw.githubusercontent.com/ntuzer/EvenTide/master/app/assets/images/b7.jpg" alt></img>
          <img src="https://raw.githubusercontent.com/ntuzer/EvenTide/master/app/assets/images/b5.jpg" alt></img>
          <img src="https://raw.githubusercontent.com/ntuzer/EvenTide/master/app/assets/images/b8.jpg" alt></img>
        </figure>
      </div>
    );
  }
}

export default Banner;
