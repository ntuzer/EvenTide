import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';


class EventForm extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(){

  }

  render(){
    console.log('VIEW eF');
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Event Title
            <input type="text"
             placeholder="Give it a short distinct name"
             value=""></input>
          </label>
          <br/>
          <label>
            Location
            <input type="text"
             placeholder="Enter address of venue"
             value=""></input>
          </label>
          <br/>
          <label>
            Start date
            <input type="datetime-local"
             value=""></input>
          </label>
          <br/>
          <label>
            End date
            <input type="datetime-local"
             value=""></input>
          </label>
          <br/>
          <label>
            Description
            <input placeholder="Enter a Description"></input>
          </label>



        </form>

      </div>
    );
  }
}

export default EventForm;
