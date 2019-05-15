import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CardBook from '../CardBook';
import { getAll } from '../BooksAPI';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      all: [],
      read: [],
      wantToRead: [],
      currentlyReading: [],
    };

    this.updateList = this.updateList.bind(this);
  };

  componentDidMount() {
    this.updateList();
  }

  updateList() {
    getAll().then((res) => {
      const read = res.filter(it => it.shelf === 'read');
      const wantToRead = res.filter(it => it.shelf === 'wantToRead');
      const currentlyReading = res.filter(it => it.shelf === 'currentlyReading');

      this.setState({ all: res, read, wantToRead, currentlyReading });
    });
  }

  render() {
    const hasCurrentlyReading = this.state.currentlyReading.length;
    const hasWantToRead = this.state.currentlyReading.length;
    const hasRead = this.state.currentlyReading.length;

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        <div className="list-books-content">
          <div>
            { hasCurrentlyReading ? (
              <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>

                <div className="bookshelf-books">
                  <ol className="books-grid">
                    { this.state.currentlyReading.map(item => <CardBook key={ item.id } dados={ item } fnUpdate={ this.updateList } />) }
                  </ol>
                </div>
              </div>
              ) : ('')
            }

            { hasWantToRead ? (
              <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>

                <div className="bookshelf-books">
                  <ol className="books-grid">
                    { this.state.wantToRead.map(item => <CardBook key={ item.id } dados={ item } fnUpdate={ this.updateList } />) }
                  </ol>
                </div>
              </div>
              ) : ('')
            }

            { hasRead ? (
              <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>

                <div className="bookshelf-books">
                  <ol className="books-grid">
                    { this.state.read.map(item => <CardBook key={ item.id } dados={ item } fnUpdate={ this.updateList } />) }
                  </ol>
                </div>
              </div>
              ) : ('')
            }
          </div>
        </div>

        <div className="open-search">
          <Link to={'search'}>Add a book</Link>
        </div>
      </div>
    );
  }
}

export default HomePage;
