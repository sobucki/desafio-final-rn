import React from 'react';

// import { View } from 'react-native';

import { Container } from './styles';

const ItemList = ({ style, children }) => <Container style={style}>{children}</Container>;

export default ItemList;
