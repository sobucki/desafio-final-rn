import React, { Component } from 'react';

import {
  Container,
  ImageContainer,
  Name,
  Email,
  LogoPizza,
  Password,
  EnterButton,
  TextEnter,
  OptionText,
} from './styles';

import BackgroundCoverGradient from '~/components/BackgroundCoverGradient';

export default class CreateAccount extends Component {
  componentDidMount() {}

  gotToLogin() {
    const { navigation } = this.props;
    navigation.navigate('Login');
  }

  render() {
    return (
      <BackgroundCoverGradient>
        <Container>
          <ImageContainer style={{ alignItems: 'center' }}>
            <LogoPizza />
          </ImageContainer>

          <Name placeholder="Nome completo" />
          <Email placeholder="Seu e-mail" />

          <Password placeholder="Senha secreta" />

          <EnterButton>
            <TextEnter>Criar conta</TextEnter>
          </EnterButton>

          <OptionText onPress={() => this.gotToLogin()}>Já tenho login</OptionText>
        </Container>
      </BackgroundCoverGradient>
    );
  }
}
