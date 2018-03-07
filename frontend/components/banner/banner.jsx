import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import merge from 'lodash/merge';
const bn1 = "/assets/b1.png";
const bn2 = "/assets/b2.png";
const bn3 = "/assets/b3.png";
const bn4 = "/assets/b4.jpg";


class Banner extends React.Component {
  constructor(props){
    super(props);
    this.state = {count: 0};
    this.changePic = this.changePic.bind(this);
  }

  changePic(){
    let newCount = (this.state.count + 1) % 4;
    this.setState({count: newCount});
  }

  componentDidMount(){
    setInterval(this.changePic, 4000);
  }


  render(){
    const local = [
      bn4,
      bn2,
      bn3,
      bn1,
    ];
    let src=local[this.state.count];
    return (
      <div className="banner">
        <img className="banner-img"
          src={src}
          width="100%"
          height="300px" ></img>
      </div>
    );
  }
}

export default Banner;
