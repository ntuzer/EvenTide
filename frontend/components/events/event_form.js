import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';


class EventForm extends React.Component {
  constructor(props) {
    super(props);
    if (props.event === undefined) {
      this.state = { title: "", description: "", location: "", start_date: "",
        min_price: 0, max_price: 0, end_date: "", event_image_url: "",
        category_id: 1 };
    }else {
      this.state = props.event;
    }



    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  renderErrors() {
    if (this.props.errors === null) return (<ul className="form-errors"></ul>);
    return(
      <ul className="form-errors">

        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }


  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    // console.log('handleSubmit');
    e.preventDefault();
    const event = this.state;
    this.props.createForm(event);
    this.props.history.push('/');
  }



  render(){
    let divStyle = {paddingTop: 0};
    // console.log('VIEW eF');
    // console.log("render", this.state);
    // console.log("errors", this.renderErrors());
    return (
      <div className="main-form-page">
        <div className="create-bar">
          <h1>Create An Event</h1>
        </div>
        <div className="gray-bar">
          <h2>EDIT</h2>
        </div>
        {this.renderErrors()}
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
                Event Title
                <br/>
                <input type="text" onChange={this.update("title")}
                 placeholder="Give it a short distinct name"
                 value={this.state.title}
                 ></input>
              </div>
              <br/>
              <div>
                Location
                <br/>
                <input type="text" onChange={this.update("location")}
                 placeholder="Enter address of venue"
                 value={this.state.location}
                 ></input>
              </div>
              <br/>
              <label>
                Starts
                <br/>
                <input type="datetime-local"
                  onChange={this.update("start_date")}
                  value={this.state.start_date}></input>
              </label>
              <br/>
              <label>
                Ends
                <br/>
                <input type="datetime-local" onChange={this.update("end_date")}
                 value={this.state.end_date}></input>
              </label>
              <br/>
              <div>
                Description
                <br/>
                <textarea
                  className="form-desc" onChange={this.update("description")}
                  type="text" value={this.state.description}
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
              <label>Ticket</label>
              <br/>
              <label>Ticket</label>
              <br/>
              <label>Ticket</label>

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
