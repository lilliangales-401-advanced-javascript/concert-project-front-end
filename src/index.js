import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/header.js'
import './style/app.scss'

const App = () => {
  return (
  <>
  <Header />
  <h1>My React App!!</h1>
  </>
  );
};

const root = document.getElementById('root');
ReactDOM.render(<App />, root);
