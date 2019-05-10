import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// import * as BooksAPI from './BooksAPI';
import './App.css';
import Search from './views/Search';
import HomePage from './views/Home';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Route exact component={ HomePage } path='/' />
          <Route exact component={ Search } path='/search' />
        </div>
        {/*{this.state.showSearchPage ? ( <Search /> ) : ( <HomePage /> )}*/}
      </BrowserRouter>
    )
  }
}

export default BooksApp
