import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import merge from 'lodash/merge';

class Rsvp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      quantity: undefined,
      event_id: this.props.match.params.eventId,
      ticketQty: undefined
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.soldOut = this.soldOut.bind(this);
    this.register = this.register.bind(this);
    this.home = this.home.bind(this);
  }

  componentWillMount(){
    this.props.fetchTicket(parseInt(this.props.match.params.eventId)).then(
      ticket => {
        this.setState(
          merge({}, this.state, {ticketQty: ticket.ticket.quantity})
        );
      }
    );
  }

  handleSubmit(e){
    e.preventDefault();
    let location = `/users/${this.props.userId}/tickets`;
    this.props.createRSVP(this.state).then(() => this.props.history.push(location));
  }

  handleChange(e){
    this.setState(
      {quantity: e.target.value, event_id: this.props.match.params.eventId}
    );
  }

  soldOut(){
    return (
      <div className="sold-register">
        <h1>Sorry this event is sold out.</h1>
      </div>
    );
  }
  register(){
    return (
      <div className="sold-register">
        <select className="ticket-num" onChange={e => this.handleChange(e)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <div className="rsvp-footer">
          <div className="register" onClick={this.handleSubmit}>
            Register for Event
          </div>
        </div>
      </div>
    );
  }
  home(e){
    e.preventDefault();
    let id = this.props.match.params.eventId;
    this.props.history.push(`/events/${id}`);
  }

  render(){
    let remaining = this.state.ticketQty ? this.state.ticketQty : 0;
    let buttons;
    if (remaining > 0){
      buttons = this.register();
    } else {
      buttons = this.soldOut();
    }
    // if (this.props === undefined) return null;
    return(
      <header className="rsvp-page">
        <div className="rsvp-inner">
          <div className="rsvp-headerbar">
            <h1 className="rsvp-title">Register</h1>
            <button className="close-form" onClick={this.home}>
              <div>x</div>
            </button>
          </div>
          <h3 className="tickets-remaining">
            Remaining tickets available: {remaining}
          </h3>
          {buttons}
        </div>
      </header>
    );
  }
}

export default Rsvp;
