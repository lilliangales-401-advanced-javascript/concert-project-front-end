import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/header';
import App from './App';
import './style/app.scss';

const Main = () => {
  return (
    <>
  <Header />
  <App />
    </>
  );
};

const root = document.getElementById('root');
ReactDOM.render(<Main />, root);
