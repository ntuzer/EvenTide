import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demo = this.demo.bind(this);
    this.home = this.home.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/index');
    }

    if (nextProps.location !== this.props.location) {
      this.props.clearErrors();
    }
    this.setState({email: "", password: ""});

  }

  componentWillUnmount(){
    this.props.clearErrors();

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

  navLink() {
    if (this.props.formType === 'login') {
      return (
        <div className="sent-two-other">
          Or would you like to
          <Link to="/signup" className="sent-two-link"> SIGN UP </Link>
           instead?
        </div>
      );
    } else {
      return (
        <div className="sent-two-other">
          Or would you like to
          <Link to="/login" className="sent-two-link"> LOGIN </Link>
           instead?
        </div>
      );
    }
  }

  renderErrors() {
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

    this.setState({email: "DemoUser@EvenTide.com", password: "password"});
    this.props.demoForm(
      {user: {email: "DemoUser@EvenTide.com", password: "password"}}
    );

  }

  home(e){
    e.preventDefault();
    this.props.history.push("/");
  }

  render() {
    // console.log('VIEW sf render');
    return (
      <div className="growing-box">
        <button className="close-form" onClick={this.home}>
          <div>x</div>
        </button>
        <div className="outer-form">
          <div className="form-box">
            <div>
              <span className="e-circle">E</span>
            </div>
            <div className="sent-one">
            Let's get signed {this.props.formType === "signup" ? "up" : "in"}.
            </div>
              <div className="sent-two">
                <h3>{this.navLink()}</h3>
              </div>
            <form onSubmit={this.handleSubmit} className="login-form-box">
              <div className="login-errors" >
                {this.renderErrors()}
              </div>
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
                <label>Password
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
