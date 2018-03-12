import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';


class MyEvents extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchMyEvents();
  }

  render(){
    if(this.props.events === undefined) return null;
    return (<h1>testing</h1>);
  }

}


export default MyEvents;
