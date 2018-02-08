import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';

class Rsvp extends React.Component {
  constructor(props){
    super(props);
    this.state = props.rsvp;
    let a = {quantity: undefined, event_id: this.props.match.params.eventId};
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createRSVP(this.state);
  }

  handleChange(e){
    this.setState({quantity: e.target.value, event_id: this.props.match.params.eventId});
  }


  render(){
    return(
      <header className="profile-page">
        <h1>Register</h1>
        <select className="ticket-num" onChange={e => this.handleChange(e)}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <div className="register" onClick={this.handleSubmit}>
          Register for Event
        </div>
      </header>
    );
  }
}

export default Rsvp;
