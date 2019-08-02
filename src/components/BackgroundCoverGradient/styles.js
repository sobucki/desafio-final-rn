import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

import BackgroundPicture from '~/Assets/images/fundo.jpg';

export const Gradient = styled(LinearGradient).attrs({
  colors: ['rgba(0,0,0, 0.5)', 'rgba(0,0,0,0.9)'],
})`
  flex: 1;
  z-index: -1;
`;
export const ImgBackground = styled.ImageBackground.attrs({
  source: BackgroundPicture,
  resizeMode: 'cover',
})`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -20;
`;
