import React, { Component } from 'react';

import { Image, View, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import BackgroundPicture from '~/Assets/fundo.jpg';

import {
  BackgroundImage,
  Gradient,
  Container,
  ImageContainer,
  LogoPizza,
  Email,
  Password,
  EnterButton,
  TextEnter,
  CreateAccount,
} from './styles';

export default class Login extends Component {
  componentDidMount() {}

  render() {
    return (
      <BackgroundImage>
        <Gradient>
          <Container>
            <ImageContainer style={{ alignItems: 'center' }}>
              <LogoPizza />
            </ImageContainer>

            <Email placeholder="Seu e-mail" />

            <Password placeholder="Senha secreta" />

            <EnterButton>
              <TextEnter>Entrar</TextEnter>
            </EnterButton>

            <CreateAccount onPress={() => {}}>Criar conta gratuita</CreateAccount>
          </Container>
        </Gradient>
      </BackgroundImage>
    );
  }
}
