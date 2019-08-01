import React, { Component } from 'react';

import { View } from 'react-native';

import {
  Container, TypeImage, SizeList, SizeItem, DescriptionText, PriceText,
} from './styles';

const data = [
  {
    id: 1,
    type: 'Gigante',
    price: 76,
    image: require('../../Assets/images/sizes/tamanho-gg.png'),
  },
  {
    id: 2,
    type: 'Grande',
    price: 59,
    image: require('../../Assets/images/sizes/tamanho-g.png'),
  },
  {
    id: 3,
    type: 'Média',
    price: 42,
    image: require('../../Assets/images/sizes/tamanho-m.png'),
  },
  {
    id: 4,
    type: 'Pequena',
    price: 29,
    image: require('../../Assets/images/sizes/tamanho-p.png'),
  },
];

export default class Size extends Component {
  componentDidMount() {}

  render() {
    return (
      <Container>
        <SizeList
          data={data}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <SizeItem>
              <TypeImage source={item.image} />
              <DescriptionText>{item.type}</DescriptionText>
              <PriceText>{`R$${item.price}`}</PriceText>
            </SizeItem>
          )}
        />
      </Container>
    );
  }
}
