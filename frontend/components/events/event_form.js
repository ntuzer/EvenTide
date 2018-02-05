import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';


class EventForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    console.log('VIEW eF');
    return (
      <div>
        <h1>Event Form</h1>
      </div>
    );
  }
}

export default EventForm;
