import styled from 'styled-components/native';

import HeaderImage from '~/Assets/images/headers/header-background.png';

export const Container = styled.View`
  flex: 1;
`;

export const HeaderImageBackground = styled.ImageBackground.attrs({
  source: HeaderImage,
})`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 150;
`;
