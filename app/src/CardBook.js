import React, { Component } from 'react';
import SelectType from './SelectType';

class CardBook extends Component {
  state ={};

  render() {
    let img = this.props.dados.imageLinks ? (this.props.dados.imageLinks.smallThumbnail || this.props.dados.imageLinks.thumbnail) : false;
    let imgFallback = 'https://via.placeholder.com/128x193';

    return(
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ backgroundImage: `url(${ img ? img : imgFallback })` }}></div>
            <SelectType ident={ this.props.dados.id }
                        selecionado={ this.props.dados.shelf }
                        changeType={ () => this.props.fnUpdate() } />
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
