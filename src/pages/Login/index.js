import React, { Component } from 'react';

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
  CreateAccountText,
} from './styles';
import BackgroundCoverGradient from '~/components/BackgroundCoverGradient';

export default class Login extends Component {
  componentDidMount() {}

  goToCreateAccount() {
    const { navigation } = this.props;
    navigation.navigate('CreateAccount');
  }

  render() {
    return (
      <BackgroundCoverGradient>
        <Container>
          <ImageContainer style={{ alignItems: 'center' }}>
            <LogoPizza />
          </ImageContainer>

          <Email placeholder="Seu e-mail" />

          <Password placeholder="Senha secreta" />

          <EnterButton>
            <TextEnter>Entrar</TextEnter>
          </EnterButton>

          <CreateAccountText onPress={() => this.goToCreateAccount()}>
            Criar conta gratuita
          </CreateAccountText>
        </Container>
      </BackgroundCoverGradient>
    );
  }
}
