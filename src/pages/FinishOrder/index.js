import React, { Component } from 'react';

import { View } from 'react-native';

import { TextInput, ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Container,
  Observation,
  SimpleField,
  RowField,
  FinishOrderButton,
  ButtonText,
  ButtomContainer,
} from './styles';

import DefaultContainer from '~/components/DefaultContainer';

export default class FinishOrder extends Component {
  componentDidMount() {}

  render() {
    return (
      <DefaultContainer>
        <ScrollView>
          <Container>
            <Observation placeholder="Alguma observação?" />
            <SimpleField placeholder="Qual seu CEP?" />
            <RowField>
              <SimpleField placeholder="Rua" style={{ flex: 80 }} />
              <SimpleField placeholder="Nº" style={{ flex: 20, marginLeft: 20 }} />
            </RowField>
            <SimpleField placeholder="Bairro" />
            <ButtomContainer>
              <FinishOrderButton>
                <ButtonText>REALIZAR PEDIDO</ButtonText>
                <Icon name="chevron-right" size={20} color="#fff" />
              </FinishOrderButton>
            </ButtomContainer>
          </Container>
        </ScrollView>
      </DefaultContainer>
    );
  }
}
