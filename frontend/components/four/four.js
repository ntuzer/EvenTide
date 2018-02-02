import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';

class Four extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="fo-fo">
        <h2>404</h2>
        <p>Page does not exist.</p>
      </div>
    );
  }
}

export default Four;
