import React, { Component } from 'react';

import ItemDetails from '../itemDetails';
import ErrorMessage from '../errorMessage';
import { Field } from '../itemDetails/itemDetails';

import gotService from '../../services/gotService';

export default class BookItem extends Component{

  state = {
    error: false
  }

  gotService = new gotService();

  componentDidCatch() {
    this.setState({
      error: true
    })
  }

  render() {

    const {error} = this.state

    if (error) {
      return <ErrorMessage/>
    }

    return (
      <ItemDetails 
        itemId={this.props.selectedPath}
        getData={this.gotService.getBook}
        name='book'
        >
          <Field field='numberOfPages' label='Number of pages' />
          <Field field='publisher' label='Publisher' />
          <Field field='authors' label='Author' />
      </ItemDetails>
    )
  }
}