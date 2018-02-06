import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';


class EventForm extends React.Component {
  constructor(props) {
    super(props);
  }


  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }





  handleSubmit(){

  }

  render(){
    let divStyle = {paddingTop: 0};
    // console.log('VIEW eF');
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
                Event Title
                <br/>
                <input type="text"
                 placeholder="Give it a short distinct name"
                 ></input>
              </div>
              <br/>
              <div>
                Location
                <br/>
                <input type="text"
                 placeholder="Enter address of venue"
                 ></input>
              </div>
              <br/>
              <label>
                Starts
                <br/>
                <input type="datetime-local"
                 value=""></input>
              </label>
              <br/>
              <label>
                Ends
                <br/>
                <input type="datetime-local"
                 value=""></input>
              </label>
              <br/>
              <div>
                Description
                <br/>
                <textarea
                  className="form-desc"
                  type="text"
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
            </form>
          </div>
          <div className="space">
            <div>
              <label>Nice job! You're almost done.</label>

              <input type="submit" name="" value="Make your event live"></input>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EventForm;
