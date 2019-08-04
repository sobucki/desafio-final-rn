import React from 'react';

// import { View } from 'react-native';

import { Container } from './styles';

const ItemList = ({ style, children, onPress }) => (
  <Container onPress={onPress} style={style}>
    {children}
  </Container>
);

export default ItemList;
