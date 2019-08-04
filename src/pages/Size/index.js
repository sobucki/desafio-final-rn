import React, { Component } from 'react';

import { View } from 'react-native';

import {
  Container, TypeImage, SizeList, SizeItem, DescriptionText, PriceText,
} from './styles';
import DefaultContainer from '~/components/DefaultContainer';

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
  static navigationOptions = () => ({
    title: 'Selecione um tamanho',
  });

  componentDidMount() {}

  goToNext() {
    const { navigation } = this.props;
    navigation.navigate('Cart');
  }

  render() {
    return (
      <DefaultContainer>
        <SizeList
          data={data}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <SizeItem onPress={() => this.goToNext()}>
              <TypeImage source={item.image} />
              <DescriptionText>{item.type}</DescriptionText>
              <PriceText>{`R$${item.price}`}</PriceText>
            </SizeItem>
          )}
        />
      </DefaultContainer>
    );
  }
}
