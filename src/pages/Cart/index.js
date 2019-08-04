import React, { Component } from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container,
  ContainerList,
  MenuList,
  MenuItem,
  ItemCover,
  InfoItemContainer,
  ItemName,
  ItemDescription,
  ItemPrice,
  BottomContainer,
  BackToMenu,
  FinishOrder,
  ButtonText,
} from './styles';
import DefaultContainer from '~/components/DefaultContainer';

const data = [
  {
    name: 'Pizza Calabresa',
    size: 'Tamanho: Média',
    price: 42,
    image: require('../../Assets/images/pizzas/2.png'),
  },
  {
    name: 'Pizza 4 Queijos',
    size: 'Tamanho: Pequena',
    price: 29,
    image: require('../../Assets/images/pizzas/3.png'),
  },
  {
    name: 'Coca Cola',
    size: 'Lata 300ML',
    price: 6,
    image: require('../../Assets/images/calzone.jpg'),
  },
];

export default class Menu extends Component {
  static navigationOptions = () => ({
    title: 'Carrinho',
  });

  componentDidMount() {}

  gotToNext() {
    const { navigation } = this.props;
    navigation.navigate('FinishOrder');
  }

  render() {
    return (
      <DefaultContainer>
        <ContainerList>
          <MenuList
            data={data}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => String(item.name)}
            renderItem={({ item }) => (
              <MenuItem>
                <ItemCover source={item.image} />
                <InfoItemContainer>
                  <ItemName>{item.name}</ItemName>
                  <ItemDescription>{item.size}</ItemDescription>
                  <ItemPrice>{`R$${item.price}`}</ItemPrice>
                </InfoItemContainer>
                <Icon name="delete-forever" size={20} color="#e5293e" />
              </MenuItem>
            )}
          />
        </ContainerList>
        <BottomContainer>
          <BackToMenu>
            <Icon name="cart-plus" size={20} color="#666666" />
          </BackToMenu>
          <FinishOrder onPress={() => this.gotToNext()}>
            <ButtonText>REALIZAR PEDIDO</ButtonText>
            <Icon name="chevron-right" size={20} color="#fff" />
          </FinishOrder>
        </BottomContainer>
      </DefaultContainer>
    );
  }
}
