import React, { Component } from 'react';

class SelectType extends Component {
  state = {
    listOptions: [{
      id: 1,
      text: 'Move to...',
      value: 'move',
    }, {
      id: 2,
      text: 'Currently Reading',
      value: 'currentlyReading',
    }, {
      id: 3,
      text: 'Want to Read',
      value: 'wantToRead',
    }, {
      id: 4,
      text: 'Read',
      value: 'read',
    }, {
      id: 5,
      text: 'None',
      value: 'none',
    }]
  };

  handleChange(ev) {}

  render() {
    return (
      <div className="book-shelf-changer">
        <select value={ this.props.selecionado } onChange={ this.handleChange }>
          { this.state.listOptions.map((item, ind) => {
            return <option disabled={ item.id === 1 }
                           key={ item.id }
                           value={ item.value }>{ item.text }</option>;
          }) }
        </select>
      </div>
    );
  };
}

export default SelectType;
