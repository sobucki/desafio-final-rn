import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  TypeList, TypeImage, TypeItem, DescriptionText,
} from './styles';
import DefaultContainer from '~/components/DefaultContainer';
import DefaultImage from '~/Assets/images/pizza.jpg';

import CatalogAction from '~/store/ducks/catalog';

class Flavor extends Component {
  static navigationOptions = () => ({
    title: 'Selecione um tipo',
  });

  state = {
    selectedCategory: 1,
  }

  componentDidMount() {
    const { navigation } = this.props;
    const categoryId = navigation.getParam('categoryId');
    this.setState({ selectedCategory : categoryId });
    this.loadProductsByCategoryId(categoryId);
  }

  loadProductsByCategoryId = (categoryId) => {
    const { loadProductsRequest } = this.props;
    loadProductsRequest(categoryId);
  }

  gotToNext(productId) {
    const { navigation } = this.props;
    navigation.navigate('Size', {productId});
  }

  render() {
    const { products, loading } = this.props;
    const { selectedCategory } = this.state;
    return (
      <DefaultContainer>
        <TypeList
          data={products}
          keyExtractor={item => String(item.id)}
          onRefresh={() => this.loadProductsByCategoryId(selectedCategory)}
          refreshing={loading}
          renderItem={({ item }) => (
            <TypeItem onPress={() => this.gotToNext(item.id)}>
              <TypeImage source={item.cover ? { uri: item.cover.url } : DefaultImage} />
              <DescriptionText>{item.description}</DescriptionText>
            </TypeItem>
          )}
        />
      </DefaultContainer>
    );
  }
}

const mapStateToProps = state => ({
  products: state.catalog.products,
  loading: state.catalog.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators(CatalogAction, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Flavor);
