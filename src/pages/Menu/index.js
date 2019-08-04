import React, { Component } from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
  HeaderContainer,
  LocalName,
  MenuList,
  MenuItem,
  ItemCover,
  InfoItemContainer,
  ItemName,
  ItemDescription,
  ItemTime,
} from './styles';
import DefaultContainer from '~/components/DefaultContainer';

const data = [
  {
    name: 'Pizza',
    description: 'Mais de 50 sabores de pizza em até 4 tamanhos diferentes de fome.',
    time: '30 mins',
    image: require('../../Assets/images/pizza.jpg'),
  },
  {
    name: 'Massa',
    description: '10 tipos de massas com diferentes molhos para te satisfazer.',
    time: '25 mins',
    image: require('../../Assets/images/pasta.jpg'),
  },
  {
    name: 'Calzones',
    description: 'Calzones super recheados com mais de 50 sabores diferentes.',
    time: '15 mins',
    image: require('../../Assets/images/calzone.jpg'),
  },
  {
    name: 'Bebidas não-alcóolicas',
    description: 'Refrigerantes, sucos, chá gelado, energéticos e água.',
    time: '5 mins',
    image: require('../../Assets/images/coke.jpg'),
  },
  {
    name: 'Bebidas alcóolicas',
    description: 'Cervejas artesanais, vinhos e destilados.',
    time: '5 mins',
    image: require('../../Assets/images/cerveja.jpg'),
  },
];

export default class Menu extends Component {
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

  componentDidMount() {}

  goToNext() {
    const { navigation } = this.props;
    navigation.navigate('Flavor');
  }

  render() {
    return (
      <DefaultContainer>
        <MenuList
          data={data}
          keyExtractor={item => String(item.name)}
          renderItem={({ item }) => (
            <MenuItem onPress={() => this.goToNext()}>
              <ItemCover source={item.image} />
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
      </DefaultContainer>
    );
  }
}
