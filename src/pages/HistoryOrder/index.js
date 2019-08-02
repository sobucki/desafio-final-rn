import React, { Component } from 'react';

import { FlatList } from 'react-native-gesture-handler';
import DefaultContainer from '~/components/DefaultContainer';

import {
  Container, MenuItem, OrderNumber, OrderDate, OrderValue,
} from './styles';

const data = [
  {
    number: 1,
    date: 'ontem',
    totalValue: 49,
  },
  {
    number: 2,
    date: 'ontem',
    totalValue: 45,
  },
  {
    number: 3,
    date: 'ontem',
    totalValue: 78,
  },
];

export default class HistoryOrder extends Component {
  componentDidMount() {}

  render() {
    return (
      <DefaultContainer>
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => String(item.number)}
          renderItem={({ item }) => (
            <MenuItem>
              <OrderNumber>{`Pedido #${item.number}`}</OrderNumber>
              <OrderDate>{item.date}</OrderDate>
              <OrderValue>{`R$${item.totalValue}`}</OrderValue>
            </MenuItem>
          )}
        />
      </DefaultContainer>
    );
  }
}
