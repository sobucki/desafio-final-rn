import React from 'react';

import { Container, HeaderImageBackground } from './styles';

const DefaultContainer = ({ children }) => (
  <Container>
    <HeaderImageBackground />
    {children}
  </Container>
);

export default DefaultContainer;
