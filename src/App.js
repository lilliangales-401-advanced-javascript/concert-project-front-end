import React, { Component } from 'react';
import superagent from 'superagent';

import Auth from './components/auth/auth';
import Login from './components/auth/login';
import LoginProvider from './components/auth/context';

const Read = (props) => {
  return (
    <Auth capability="read">
      <span>Read</span>
    </Auth>
  );
};

const Update = (props) => {
  return (
    <Auth capability="update">
      <span>Update</span>
    </Auth>
  );
};

class App extends Component {
  state = {
    selectedArtist: '',
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    superagent.post(`${process.env.REACT_APP_BACKEND_API}/search`)
      .set('Content-Type', 'application/json')
      .send({ selectedArtist: JSON.stringify(this.state.selectedArtist) })
      .then((result) => {
        console.log('RESULT', result.body);
      });
  }


  render() {
    return (
      <div className="App">
       <LoginProvider>
        <Login />
        <Read />
        <Update />
       </LoginProvider>
        <form onSubmit={this.onSubmit}>
                <input onChange={this.onChange} label="Selected Artist" name="selectedArtist" />
                <br/>
                <button type='Submit' variant="contained" color="primary">
                  Send
                </button>
        </form>
      </div>
    );
  }
}


export default App;
