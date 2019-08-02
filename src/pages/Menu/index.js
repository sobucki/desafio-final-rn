import React, { Component } from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ImageBackground } from 'react-native';
import {
  Container,
  HeaderContainer,
  LocalName,
  MenuList,
  MenuItem,
  ItemCover,
  InfoItemContainer,
  ItemName,
  ItemDescription,
  ItemTime,
  BackgroundImage,
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
  componentDidMount() {}

  render() {
    return (
      <DefaultContainer>
        <HeaderContainer>
          <Icon name="restore-clock" size={35} color="#fff" />
          <LocalName>Pizzaria Don Juan</LocalName>
          <Icon name="restore-clock" size={35} color="#fff" />
        </HeaderContainer>
        <MenuList
          data={data}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => String(item.name)}
          renderItem={({ item }) => (
            <MenuItem>
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
