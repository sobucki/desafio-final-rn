import React from 'react';

import { Gradient, ImgBackground } from './styles';

const BackgroundCoverGradient = ({ children }) => (
  <Gradient>
    <ImgBackground />
    {children}
  </Gradient>
);

export default BackgroundCoverGradient;
