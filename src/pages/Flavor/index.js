import React, { Component } from 'react';

import {
  Container, TypeList, TypeImage, TypeItem, DescriptionText,
} from './styles';
import DefaultContainer from '~/components/DefaultContainer';

const data = [
  {
    id: 1,
    type: 'Portuguesa',
    image: require('../../Assets/images/pizzas/1.png'),
  },
  {
    id: 2,
    type: 'Calabresa',
    image: require('../../Assets/images/pizzas/2.png'),
  },
  {
    id: 3,
    type: 'Frango Frito',
    image: require('../../Assets/images/pizzas/3.png'),
  },
  {
    id: 4,
    type: 'Marguerita',
    image: require('../../Assets/images/pizzas/4.png'),
  },
  {
    id: 5,
    type: 'Bacon',
    image: require('../../Assets/images/pizzas/5.png'),
  },
  {
    id: 6,
    type: 'Quatro Queijos',
    image: require('../../Assets/images/pizzas/6.png'),
  },
];

export default class Flavor extends Component {
  static navigationOptions = () => ({
    title: 'Selecione um tipo',
    
  });

  componentDidMount() {}

  gotToNext() {
    const { navigation } = this.props;
    navigation.navigate('Size');
  }

  render() {
    return (
      <DefaultContainer>
        <TypeList
          data={data}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <TypeItem onPress={() => this.gotToNext()}>
              <TypeImage source={item.image} />
              <DescriptionText>{item.type}</DescriptionText>
            </TypeItem>
          )}
        />
      </DefaultContainer>
    );
  }
}
