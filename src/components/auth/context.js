import React from 'react';

export const LoginContext = React.createContext();

// add api in process.env
const API = process.env.ReactAPI;

class LoginProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // all the auth data we want to pass to children
      loggedIn: false,
      token: null,
      user: {},
      login: this.login,
      logout: this.logout,
    };
  }

  // login
  login = (username, password, type) => {
    const options = {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: new Headers({
        Authorization: `Basic ${btoa(`${username}:${password}`)}`,
      }),
    };

    if (type === 'signup') {
      options.body = JSON.stringify({ username, password });
      options.headers = new Headers({
        'Content-Type': 'application/json',
      });
    }

    fetch(`${API}/${type}`, options)
      .then((response) => response.text())
      .catch(console.error);
  }

  // logout

  // validate token

  componentDidMount() {
    // when component is born - validate tokens
  }

  render() {
    return (
      <LoginContext.Provider>
        {this.props.children}
      </LoginContext.Provider>
    );
  }
}

export default LoginProvider; 
