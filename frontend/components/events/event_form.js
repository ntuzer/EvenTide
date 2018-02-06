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
    // console.log('VIEW eF');
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Event Title
            <br/>
            <input type="text"
             placeholder="Give it a short distinct name"
             ></input>
          </label>
          <br/>
          <label>
            Location
            <br/>
            <input type="text"
             placeholder="Enter address of venue"
             ></input>
          </label>
          <br/>
          <label>
            Start date
            <br/>
            <input type="datetime-local"
             value=""></input>
          </label>
          <br/>
          <label>
            End date
            <br/>
            <input type="datetime-local"
             value=""></input>
          </label>
          <br/>
          <label>
            Description
            <br/>
            <input type="text" placeholder="Enter a Description"></input>
          </label>
          <br/>
          <br/>
          <label>Ticket</label>
          <br/>
          <label>Ticket</label>
          <br/>
          <label>Ticket</label>
          <br/>
          <br/>

          <select className="category-dropdown" >
            <option value="">Food & Drink</option>
            <option value="">Party</option>
            <option value="">Nature</option>
          </select>


          <br/>
          <input type="submit" name="" value="Make your event live"></input>
        </form>

      </div>
    );
  }
}

export default EventForm;
