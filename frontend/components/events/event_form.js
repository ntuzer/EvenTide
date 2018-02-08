import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import merge from 'lodash/merge';


class EventForm extends React.Component {
  constructor(props) {
    super(props);
    // console.log('constructor', props);
    if (props.event === undefined) {
      this.state = {
        event: { title: "", description: "", location: "",
        start_date: "", min_price: 0, max_price: 0, end_date: "",
        event_image_url: "", category_id: 1 },
        ticketType: undefined,
        ticket: {
          ticket_name: undefined,
          quantity: undefined,
          price: 0,
          event_id: undefined
        },
      };
    }else {
      // console.log("i'll never execute");
      this.state = {
        event: props.event,
        ticketType: props.ticketType,
        ticket: props.ticket
      };
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.prettyErrors = this.prettyErrors.bind(this);
    this.ticketForm = this.ticketForm.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  componentWillUnmount(){
    this.props.clearErrors();
  }

  update(type, field) {
    let newState = merge({}, this.state);

    return e => {
      // newState.event.field = e.currentTarget.value;

      let value = e.currentTarget.value;

      if (field === "quantity" || field === "price") value = parseInt(value);
      newState[type][field] = value;
      return this.setState(newState);
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const event = this.state.event;
    this.props.createForm(event)
      .then(evt => {
        let result = merge({}, this.state.ticket, {event_id: evt.event.id});
        // AJ!!! THIS WAS SOOOOO COMPLICATED BRO!!! Please dont make me change it.
        return this.props.createTicket(result).then(
          () => (this.props.history.push(`/events/${evt.event.id}`)),
          () => (this.props.deleteEvent(evt.event.id))
        );
      }
    );

  }



  prettyErrors(){
    let result = {
      title: "", location: "", description: "",
      start: "", end: "", tName: "", tQty: "", tPrice: ""
    };
    this.props.errors.events.map(el => {
      if(el === 'Title can\'t be blank') result.title = el;
      if(el === 'Location can\'t be blank') result.location = el;
      if(el === 'Description can\'t be blank') result.description = el;
      if(el === 'Start date can\'t be blank') result.start = el;
      if(el === 'End date can\'t be blank') result.end = el;
    });
    this.props.errors.tickets.map(el => {
      if(el === "Ticket name can't be blank") result.tName = " * Ticket name can't be blank";
      if(el === "Quantity can't be blank") result.tQty = " * Quantity can't be blank and must be a number";
      if(el === "Price can't be blank") result.tPrice = " * Quantity can't be blank and must be a number";
    });
    return result;
  }

  ticketForm(){
    let errors = this.prettyErrors();
    if (this.state.ticketType === undefined) {
      return (
        <section className="ticket-buttons">
          <div className="ticket-button"
            onClick={() => this.updateState("ticketType", "freeTicket")}>
            Free Ticket</div>
          <div className="ticket-button"
            onClick={() => this.updateState("ticketType", "paidTicket")}>
            Paid Ticket</div>
          <div className="ticket-button"
            onClick={() => this.updateState("ticketType", "donation")}>
            Donation</div>
        </section>
      );
    } else if (this.state.ticketType === "freeTicket") {
      return (
        <div className="ticket-form">
          <div className="free-ticket-form">
            Ticket Name:
            <h1>{errors.tName}</h1>
            <br/>
            <input onChange={this.update("ticket", "ticket_name")}
              placeholder="Name"></input>
            <br/>
            Quantity:
            <h1>{errors.tQty}</h1>
            <br/>
            <input onChange={this.update("ticket", "quantity")}
              placeholder="Qty"></input>
          </div>
        </div>
      );
    } else if (this.state.ticketType === "paidTicket") {
      return (
        <div className="ticket-form">
          <div className="paid-ticket-form">
            Ticket Name:
            <h1>{errors.tName}</h1>
            <br/>
            <input onChange={this.update("ticket", "ticket_name")}
              placeholder="Name"></input>
            <br/>
            <br/>
            Quantity:
            <h1>{errors.tQty}</h1>
            <br/>
            <input onChange={this.update("ticket", "quantity")}
              placeholder="Qty"></input>
              <br/>
              <br/>
              Price:
              <h1>{errors.tPrice}</h1>
              <br/>
              <input onChange={this.update("ticket", "price")}
                placeholder="Price"></input>
              <br/>
          </div>
        </div>
      );
    } else if (this.state.ticketType === "donation") {
        return (
          <div className="ticket-form">
            <div className="donation-ticket-form">
              Ticket Name:
              <h1>{errors.tName}</h1>
              <br/>
              <input onChange={this.update("ticket", "ticket_name")}
                placeholder="Name"></input>
              <br/>
              Quantity:
              <h1>{errors.tQty}</h1>
              <br/>
              <input onChange={this.update("ticket", "quantity")}
                placeholder="Qty"></input>
            </div>
          </div>
        );
    }
  }

  updateState(type, value){
    let newState = merge({}, this.state);
    newState[type] = value;
    this.setState(newState);
  }
  // freeTicket(){
  //
  // }
  //
  // paidTicket(){
  //
  // }
  //
  // donation(){
  //
  // }


  render(){
    let divStyle = {paddingTop: 0};
    let errors = this.prettyErrors();
    let ticketForm = this.ticketForm();
    // console.log('render');
    return (
      <div className="main-form-page">
        <div className="create-bar">
          <h1>Create An Event</h1>
        </div>
        <div className="gray-bar">
          <h2>EDIT</h2>
        </div>

        <div className="main-form">
          <div className="form-header">
            <div>1</div>
            <h2>Event Details</h2>
          </div>
          <div className="header-line">
            <hr/>
          </div>
          <div className="form">
            <form onSubmit={this.handleSubmit}>
              <div>
                <br/>
                Event Title <h1 className="errors">{errors.title}</h1>
                <input type="text" onChange={this.update("event", "title")}
                 placeholder="Give it a short distinct name"
                 value={this.state.event.title}
                 ></input>
              </div>
              <br/>
              <div>
                <br/>
                Location <h1 className="errors">{errors.location}</h1>
                <input type="text" onChange={this.update("event", "location")}
                 placeholder="Enter address of venue"
                 value={this.state.event.location}
                 ></input>
              </div>
              <br/>
              <label>
                <br/>
                Starts <h1 className="errors">{errors.start}</h1>
                <input type="datetime-local"
                  onChange={this.update("event", "start_date")}
                  value={this.state.event.start_date}></input>
              </label>
              <br/>
              <label>
                <br/>
                Ends <h1 className="errors">{errors.end}</h1>
                <input type="datetime-local" onChange={this.update("event", "end_date")}
                 value={this.state.event.end_date}></input>
              </label>
              <br/>
              <div>
                Description <h1 className="errors">{errors.description}</h1>
                <br/>
                <textarea
                  className="form-desc" onChange={this.update("event", "description")}
                  type="text" value={this.state.event.description}
                  placeholder="Enter a Description"></textarea>
              </div>

              <div className="form-header2">
                <div>2</div>
                <h2>Create Tickets</h2>
              </div>
              <div className="header-line2" style={divStyle}>
                <hr/>
              </div>
              <br/>


              {ticketForm}


              <br/>
              <div className="form-header2">
                <div>3</div>
                <h2>Additional Settings</h2>
              </div>
              <div className="header-line2" style={divStyle}>
                <hr/>
              </div>


              <label>Event Type</label>
              <br/>
              <select className="category-dropdown" >
                <option value="">Food & Drink</option>
                <option value="">Party</option>
                <option value="">Nature</option>
              </select>


              <br/>

              <div className="space">
                <div>
                  <label>Nice job! You're almost done.</label>
                  <input type="submit" value="Make your event live"></input>
                </div>
              </div>

            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default EventForm;




// <form onSubmit={this.handleSubmit}>
//   <div>
//     <br/>
//     Event Title <h1 className="errors">{errors.title}</h1>
//     <input type="text"
//      placeholder="Give it a short distinct name"
//      value="changeme"
//      ></input>
//   </div>
//   <br/>
//   <div>
//     <br/>
//     Location <h1 className="errors">{errors.location}</h1>
//     <input type="text"
//      placeholder="Enter address of venue"
//      value="changeme"
//      ></input>
//   </div>
//   <br/>
//   <label>
//     <br/>
//     Starts <h1 className="errors">{errors.start}</h1>
//     <input type="datetime-local"
//       onChange={this.update("event", "start_date")}
//       value={this.state.event.start_date}></input>
//   </label>
//   <br/>
//   <label>
//     <br/>
//     Ends <h1 className="errors">{errors.end}</h1>
//     <input type="datetime-local" onChange={this.update("event", "end_date")}
//      value={this.state.event.end_date}></input>
//   </label>
//   <br/>
//   <div>
//     Description <h1 className="errors">{errors.description}</h1>
//     <br/>
//     <textarea
//       className="form-desc"
//       type="text" value="changeme"
//       placeholder="Enter a Description"></textarea>
//   </div>
//
//   <div className="form-header2">
//     <div>2</div>
//     <h2>Create Tickets</h2>
//   </div>
//   <div className="header-line2" style={divStyle}>
//     <hr/>
//   </div>
//   <br/>
//
//
//   {ticketForm}
//
//
//   <br/>
//   <div className="form-header2">
//     <div>3</div>
//     <h2>Additional Settings</h2>
//   </div>
//   <div className="header-line2" style={divStyle}>
//     <hr/>
//   </div>
//
//
//   <label>Event Type</label>
//   <br/>
//   <select className="category-dropdown" >
//     <option value="">Food & Drink</option>
//     <option value="">Party</option>
//     <option value="">Nature</option>
//   </select>
//
//
//   <br/>
//
//   <div className="space">
//     <div>
//       <label>Nice job! You're almost done.</label>
//       <input type="submit" value="Make your event live"></input>
//     </div>
//   </div>
//
// </form>
