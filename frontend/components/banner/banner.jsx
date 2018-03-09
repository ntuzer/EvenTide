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
    this.state = {count: 0};
    this.changePic = this.changePic.bind(this);
  }

  changePic(){
    let newCount = (this.state.count + 1) % 4;
    this.setState({count: newCount});
  }

  componentDidMount(){
    setInterval(this.changePic, 8000);
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
        ></img>
      </div>
    );
  }
}

export default Banner;
