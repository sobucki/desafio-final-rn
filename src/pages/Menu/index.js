import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ActivityIndicator } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
  MenuList,
  MenuItem,
  ItemCover,
  InfoItemContainer,
  ItemName,
  ItemDescription,
  ItemTime,
} from './styles';
import DefaultContainer from '~/components/DefaultContainer';
import DefaultImage from '~/Assets/images/pizza.jpg';
import CatalogAction from '~/store/ducks/catalog';

class Menu extends Component {
  static navigationOptions = () => ({
    title: 'Pizzaria Don Juan',

    // headerStyle: {
    //   // borderBottomWidth: 0,
    // },
    headerRight: (
      <TouchableOpacity
        style={{
          backgroundColor: '#e5293e',
          marginRight: 20,
          height: 40,
          width: 40,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 20,
        }}
      >
        <Icon name="shopping" size={22} color="#fff" />
      </TouchableOpacity>
    ),
    headerLeft: (
      <TouchableOpacity
        style={{
          marginLeft: 20,
          height: 40,
          width: 40,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 20,
        }}
      >
        <Icon name="history" size={22} color="#fff" />
      </TouchableOpacity>
    ),
  });

  componentDidMount() {
    this.loadCategories();
  }

  loadCategories = () => {
    const { loadCategoriesRequest } = this.props;
    loadCategoriesRequest();
  };

  goToNext() {
    const { navigation } = this.props;
    navigation.navigate('Flavor');
  }

  render() {
    const { categories, loading } = this.props;
    return (
      <DefaultContainer>
        {/* {loading ? (
          <ActivityIndicator />
        ) : ( */}
        <MenuList
          data={categories}
          keyExtractor={item => String(item.id)}
          onRefresh={this.loadCategories.bind(this)}
          refreshing={loading}
          renderItem={({ item }) => (
            <MenuItem onPress={() => this.goToNext()}>
              <ItemCover source={item.cover ? { uri: item.cover.url } : DefaultImage} />
              <InfoItemContainer>
                <ItemName>{item.name}</ItemName>
                <ItemDescription>{item.description}</ItemDescription>
                <ItemTime>
                  <Icon name="alarm" />
                  {item.time}
                </ItemTime>
              </InfoItemContainer>
            </MenuItem>
          )}
        />
        {/* )} */}
      </DefaultContainer>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.catalog.categories,
  loading: state.catalog.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators(CatalogAction, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Menu);
