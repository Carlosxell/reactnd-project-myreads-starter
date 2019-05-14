import React, { Component } from 'react';
import SelectType from './SelectType';

class CardBook extends Component {
  state ={};

  render() {
    return(
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ backgroundImage: `url(${ this.props.dados.imageLinks.smallThumbnail })` }}></div>
            <SelectType ident={ this.props.dados.id } selecionado={ this.props.dados.shelf } />
          </div>
          <div className="book-title">{ this.props.dados.title }</div>
          { (this.props.dados.authors) ? (
            <div className="book-authors">{ this.props.dados.authors.map((item, ind) => `${ item }, ` ) }</div>
          ) : ('') }
        </div>
      </li>
    );
  }
}

export default CardBook;
