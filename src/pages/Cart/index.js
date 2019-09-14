/* eslint-disable max-len */
import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
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
import CartAction from '~/store/ducks/cart';
import DefaultImage from '~/Assets/images/pizza.jpg';
import { TouchableOpacity } from 'react-native-gesture-handler';

class Cart extends Component {
  static navigationOptions = ({ navigation }) => {
    const { state } = navigation;
    const totalValue = navigation.getParam('totalValue', 0);
    console.tron.log(totalValue);
    return {
      title: 'Carrinho',
      headerRight: <Text>{totalValue}</Text>,
    };
  };

  componentWillMount() {
    this.updateCount();
  }

  componentDidMount() {
    this.updateCount();
  }

  updateCount() {
    const { navigation, totalValue } = this.props;
    navigation.setParams({ totalValue });
  }

  gotToNext() {
    const { navigation } = this.props;
    navigation.navigate('FinishOrder');
  }

  goToMenu() {
    const { navigation } = this.props;
    navigation.navigate('Menu');
  }

  render() {
    const { items } = this.props;

    return (
      <DefaultContainer>
        <ContainerList>
          <MenuList
            data={items}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => String(item.idCart)}
            renderItem={({ item }) => (
              <MenuItem>
                <ItemCover
                  source={item.product.cover ? { uri: item.product.cover.url } : DefaultImage}
                />
                <InfoItemContainer>
                  <ItemName>{item.product.description}</ItemName>
                  <ItemDescription>{item.size}</ItemDescription>
                  <ItemPrice>{`R$${item.price}`}</ItemPrice>
                </InfoItemContainer>
                <TouchableOpacity>
                  <Icon name="delete-forever" size={28} color="#e5293e" />
                </TouchableOpacity>
              </MenuItem>
            )}
          />
        </ContainerList>
        <BottomContainer>
          <BackToMenu onPress={() => this.goToMenu()}>
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

const mapStateToProps = state => ({
  items: state.cart.items,
  totalValue: state.cart.totalValue,
  loading: state.cart.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators(CartAction, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart);
