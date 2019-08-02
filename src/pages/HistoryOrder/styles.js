import styled from 'styled-components/native';
import ItemList from '~/components/ItemList';

export const Container = styled.View``;

export const MenuItem = styled(ItemList)`
  /* flex-direction: row; */
  align-items: flex-start;
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: 15px;
`;

export const OrderNumber = styled.Text`
  font-family: Helvetica;
  font-size: 12px;
  color: #0b2031;
  letter-spacing: 0;
  text-align: left;
`;

export const OrderDate = styled.Text`
  font-family: Helvetica;
  font-size: 11px;
  color: #706e7b;
  letter-spacing: 0;
  line-height: 14px;
  text-align: left;
`;

export const OrderValue = styled.Text`
  font-family: Helvetica-Bold;
  font-size: 16px;
  color: #0b2031;
  letter-spacing: 0;
  text-align: center;
`;
