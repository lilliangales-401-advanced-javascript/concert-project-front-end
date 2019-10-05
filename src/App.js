import React, { Component } from 'react';

import Header from './components/header/header';
import Login from './components/auth/login';
import LoginProvider from './components/auth/context';
import ArtistForm from './components/artistForm/artistForm';
import Concerts from './components/concerts/concerts';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
       <LoginProvider>
        {/* <ArtistForm /> */}
        <Concerts />
        <Login />
       </LoginProvider>
      </div>
    );
  }
}


export default App;
