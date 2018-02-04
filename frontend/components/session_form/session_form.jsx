import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    console.log("VIEW constructor");
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
    console.log('VIEW sf cwrp');
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
    console.log('VIEW sf handleSubmit');
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  navLink() {
    console.log('VIEW sf navlink');
    if (this.props.formType === 'login') {
      return <Link to="/signup">Or would you like to sign up instead</Link>;
    } else {
      return <Link to="/login">Or would you like to log in instead</Link>;
    }
  }

  renderErrors() {
    console.log('VIEW sf renderErrors');
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
    // let Email = "DemoUser@EvenTide.com";
    // let Pass = "password";
    // let tEmail;
    // let tPass;
    // if (this.state.email !== "DemoUser@EvenTide.com") {
    //   for (var i = 0; i <= Email.length; i++) {
    //     tEmail = Email.slice(0,i+1);
    //     this.setState({"email": tEmail, password: "" });
    //     setTimeout(this.update("email"), 500);
    //   }
    // }




    this.setState({email: "DemoUser@EvenTide.com", password: "password"});
    console.log("demo", this.state);
    this.props.processForm({user: {email: "test", password: "password"}});
    // setTimeout(() => this.handleSubmit, 300);

  }

  home(e){
    e.preventDefault();
    this.props.history.push("/");
  }

  render() {
    console.log('VIEW sf render');
    // console.log("helooooooooo", this.props.formType);
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
            <div className="sent-one">Let's get signed {this.props.formType === "signup" ? "up" : "in"}.</div>
              <div className="sent-two">
                <h3>{this.navLink()}?</h3>
              </div>
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
