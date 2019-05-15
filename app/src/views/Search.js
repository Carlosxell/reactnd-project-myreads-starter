import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {getAll, search} from '../BooksAPI';
import CardBook from "../CardBook";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searched: false,
      list: [],
      value: '',
      all: [],
    };

    this.getResults = this.getResults.bind(this);
    this.updateList = this.updateList.bind(this);
  }

  componentDidMount() {
    this.updateList();
  }

  updateList() {
    getAll().then((res) => {
      this.setState({ all: res });
      console.info(res, 'lista de livros que já tem');
    });
  }

  async getResults(event) {
    this.setState({ value: event.target.value.length ? event.target.value : '' });
    this.setState({ searched: event.target.value.length });

    if(!event.target.value.length) return this.setState({ list: [] });

    await search(event.target.value).then(resp => {
      let list = [];

      if((resp && !resp.error)) {
        list = resp.filter(item => {
          this.state.all.forEach((it => {
            if(it.id === item.id) {
              item.shelf = it.shelf;
              return item;
            }
          }));

          return item;
        });
      }

      this.setState({ list: (resp && !resp.error) ? list : [] });
    });
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to={'/'}>Close</Link>
          <div className="search-books-input-wrapper">
            <input onChange={ this.getResults }
                   placeholder="Search by title or author"
                   type="text"
                   value={ this.state.value }  />
          </div>
        </div>

        <div className="search-books-results">
          { this.state.list.length ? (
              <ol className="books-grid">
                { this.state.list.map(item => <CardBook key={ item.id } dados={ item } fnUpdate={ this.updateList } /> ) }
              </ol>
          ) : (
            this.state.searched ? (<p className="search-books-noResults">Nenhum dado encontrado para essa busca</p>) : ('')
          ) }
        </div>
      </div>
    );
  }
}

export default Search;
