import React, { Component } from 'react';

import ItemDetails from '../itemDetails';
import ItemList from '../itemList';
import ErrorMessage from '../errorMessage';

import gotService from '../../services/gotService';
import RowBlock from '../rowBlock';
import { Field } from '../itemDetails/itemDetails';

export default class HousePage extends Component {

  state = { 
    selectedItem: null,
    error: false
  }

  gotService = new gotService();

  onItemSelected = (id) => {
    this.setState({
        selectedItem: id
    })

  }


  componentDidCatch() {
    this.setState({
      error: true
    })
  }


  render() {

    if (this.state.error) {
      return <ErrorMessage/>
    }

    const itemList = (
      <ItemList 
          onItemSelected={this.onItemSelected}
          getData={this.gotService.getAllHouses}
          renderItem={({name}) => name} />
    )

    const itemDetails = (
      <ItemDetails 
        itemId={this.state.selectedItem}
        getData={this.gotService.getHouse}
        name='house'
        >
          <Field field='region' label='Region' />
          <Field field='coatOfArms' label='Coat of arms' />
          <Field field='words' label='Words' />
        </ItemDetails>
    )

    return (
      <RowBlock left={itemList} rigth={itemDetails}/>
    )
  }
}