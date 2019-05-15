import React, { Component } from 'react';
import { update } from "./BooksAPI";

class SelectType extends Component {
  state = {
    value: '',
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

  componentDidMount() {
    this.setState({ value: this.props.selecionado ? this.props.selecionado : 'none' });
  }

  async handleChange(obj) {
    await update({id : obj.ident }, obj.value).then(res => {
      this.setState({ value: obj.value });
      return obj.changeType();
    });
  }

  render() {
    return (
      <div className="book-shelf-changer">
        <select value={ this.state.value }
                onChange={ (ev) => this.handleChange({ ...this.props, value: ev.target.value }) }>
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
