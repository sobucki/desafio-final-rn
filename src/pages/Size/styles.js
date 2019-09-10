import styled from 'styled-components/native';

import { metrics } from '~/styles';
import ItemList from '~/components/ItemList';

export const Container = styled.View`
  flex: 1;
  background-color: #ccc;
`;

export const SizeList = styled.FlatList.attrs({
  numColumns: 2,
  showsVerticalScrollIndicator: false,
})`
  margin: 5px;
`;

export const SizeItem = styled(ItemList)`
  flex: 1;
  margin: 5px;
  justify-content: center;
  align-items: center;
  height: ${metrics.screenWidth / 1.9};
`;

export const TypeImage = styled.Image`
  width: 79px;
  height: 79px;
`;

export const DescriptionText = styled.Text`
  margin-top: 15px;
  font-family: Helvetica-Bold;
  font-size: 16px;
  color: #0b2031;
  letter-spacing: 0;
  text-align: center;
  font-weight: bold;
`;
export const PriceText = styled.Text`
  opacity: 0.6;
  font-family: Helvetica-Bold;
  font-size: 16px;
  color: #0b2031;
  letter-spacing: 0;
  text-align: center;
  /* font-weight: bold; */
`;
