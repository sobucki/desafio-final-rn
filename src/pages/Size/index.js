import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  TypeImage, SizeList, SizeItem, DescriptionText, PriceText,
} from './styles';
import DefaultContainer from '~/components/DefaultContainer';
import DefaultImage from '~/Assets/images/pizza.jpg';

import CatalogAction from '~/store/ducks/catalog';

class Size extends Component {
  static navigationOptions = () => ({
    title: 'Selecione um tamanho',
  });

  state = {
    selectedProductId : 0
  }

  componentDidMount() {
    const { navigation } = this.props;
    const productId = navigation.getParam('productId');
    this.setState({ selectedProductId : productId });
    this.loadItemsByProductId(productId);
  }

  loadItemsByProductId = (productId) => {
    const { loadItemsRequest } = this.props;
    loadItemsRequest(productId);
  }

  goToNext() {
    const { navigation } = this.props;
    navigation.navigate('Cart');
  }

  render() {
    const { items, loading } = this.props;
    const { selectedProductId } = this.state;
    console.tron.log(selectedProductId);
    return (
      <DefaultContainer>
        <SizeList
          data={items}
          keyExtractor={item => String(item.id)}
          onRefresh={() => this.loadItemsByProductId(selectedProductId)}
          refreshing={loading}
          renderItem={({ item }) => (
            <SizeItem onPress={() => this.goToNext()}>
              <TypeImage source={item.cover ? { uri: item.cover.url } : DefaultImage} />
              <DescriptionText>{item.size}</DescriptionText>
              <PriceText>{`R$${item.price}`}</PriceText>
            </SizeItem>
          )}
        />
      </DefaultContainer>
    );
  }
}

const mapStateToProps = state => ({
  items: state.catalog.items,
  loading: state.catalog.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators(CatalogAction, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Size);
