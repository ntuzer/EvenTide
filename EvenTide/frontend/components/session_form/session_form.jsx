import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    console.log("constructor");
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demo = this.demo.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    console.log('sf cwrp');
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }

    if (nextProps.location !== this.props.location) {
      this.props.clearErrors();
    }

  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    console.log('handleSubmit');
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  navLink() {
    console.log('sf navlink');
    if (this.props.formType === 'login') {
      return <Link to="/signup">sign up instead</Link>;
    } else {
      return <Link to="/login">log in instead</Link>;
    }
  }

  renderErrors() {
    console.log('sf renderErrors');
    if (this.props.errors === null) return null;
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

  demo(e){
    e.preventDefault();
    this.setState({email: "test", password: "password"});
    this.props.processForm(this.state);

  }

  render() {
    // console.log('sf render');
    // console.log("helooooooooo", this.props.formType);
    return (
      <div className="growing-box">
        <div className="close-form">

        </div>
        <div className="outer-form">
          <div className="form-box">
            <div>
              <span className="e-circle">E</span>
            </div>
            <div className="sent-one">Let's get you signed {this.props.formType === "signup" ? "up" : "in"}.</div>
            <div className="sent-two">Or would you like to {this.navLink()}?</div>
            <form onSubmit={this.handleSubmit} className="login-form-box">
              {this.renderErrors()}
              <div className="login-form">
                <br/>
                <label>Email address
                  <input type="text"
                    value={this.state.email}
                    onChange={this.update('email')}
                    className="login-input"
                    autoFocus
                    placeholder="Enter email"
                  />
                </label>
                <br/>
                <label>Password:
                  <input type="password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    className="login-input"
                  />
                </label>
                <br/>
                <input type="submit" className="submit" value="Submit" />
                <button className="demo-user" onClick={this.demo}>Demo User</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
