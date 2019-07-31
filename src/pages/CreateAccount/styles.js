import styled from 'styled-components/native';

import LinearGradient from 'react-native-linear-gradient';
import Logo from '~/Assets/images/logo.png';
import BackgroundPicture from '~/Assets/images/fundo.jpg';

export const BackgroundImage = styled.ImageBackground.attrs({
  source: BackgroundPicture,
})`
  flex: 1;
`;
export const Gradient = styled(LinearGradient).attrs({
  colors: ['rgba(0,0,0, 0.5)', 'rgba(0,0,0,0.9)'],
})`
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
  align-items: stretch;
  justify-content: center;
  padding: 30px;
`;

export const ImageContainer = styled.View`
  align-items: center;
  margin-bottom: 20px;
`;

export const LogoPizza = styled.Image.attrs({
  source: Logo,
})`
  height: 72px;
  width: 72px;
`;

export const Name = styled.TextInput.attrs({
  placeholderTextColor: '#999',
  autoCorrect: false,
  autoCompleteType: 'name',
})`
  background: #fff;
  border-radius: 4px;
  margin-bottom: 20px;
  padding: 0 20px;
  height: 52px;
  font-size: 16px;
  color: #333;
`;
export const Email = styled.TextInput.attrs({
  placeholderTextColor: '#999',
  autoCapitalize: 'none',
  autoCorrect: false,
  autoCompleteType: 'email',
  keyboardType: 'email-address',
})`
  background: #fff;
  border-radius: 4px;
  margin-bottom: 20px;
  padding: 0 20px;
  height: 52px;
  font-size: 16px;
  color: #333;
`;

export const Password = styled.TextInput.attrs({
  placeholderTextColor: '#999',
  autoCapitalize: 'none',
  autoCorrect: false,
  autoCompleteType: 'password',
  secureTextEntry: true,
})`
  background: #fff;
  border-radius: 4px;
  padding: 0 20px;
  margin-bottom: 20px;
  height: 52px;
  font-size: 16px;
  color: #333;
`;

export const EnterButton = styled.TouchableOpacity`
  background-color: #e5293e;
  border-radius: 4px;
  height: 52px;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
`;

export const TextEnter = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
export const OptionText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
`;
