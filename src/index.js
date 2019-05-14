import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class LoginForm extends React.Component {


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">
            Email Address
          </label><br/>
          <input
            id="email"
          /><br/>
          <label htmlFor="password">
            Password
          </label><br/>
          <input
            id="password"
          /><br/>
          <button id="signIn">
            sign in
          </button><br/>
          <button id="create-account">
            create an account
          </button><br/>
          <button id="forgot-password">
            forgot password
          </button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(
  <LoginForm />,
  document.getElementById('login-form')
);
