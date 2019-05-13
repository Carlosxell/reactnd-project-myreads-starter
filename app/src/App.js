import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Search from './views/Search';
import HomePage from './views/Home';

class BooksApp extends React.Component {
  state = {};

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Route component={ HomePage } exact path='/' />
          <Route component={ Search } exact path='/search' />
        </div>
      </BrowserRouter>
    )
  }
}

export default BooksApp
