import React, { Component } from 'react';

import { TextInput } from 'react-native';

import {
  BackgroundImage,
  Container,
  ImageContainer,
  Name,
  Email,
  Gradient,
  LogoPizza,
  Password,
  EnterButton,
  TextEnter,
  OptionText,
} from './styles';

export default class CreateAccount extends Component {
  componentDidMount() {}

  gotToLogin() {
    const { navigation } = this.props;
    navigation.navigate('Login');
  }

  render() {
    return (
      <BackgroundImage>
        <Gradient>
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
        </Gradient>
      </BackgroundImage>
    );
  }
}
