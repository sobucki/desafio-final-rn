import styled from 'styled-components/native';

import ItemButtonList from '~/components/ItemButtonList';

export const Container = styled.View`
  flex: 1;
  background-color: #ccc;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const LocalName = styled.Text`
  font-family: Helvetica-Bold;
  font-size: 18px;
  color: #ffffff;
  letter-spacing: 0;
  text-align: left;
`;

export const MenuList = styled.FlatList.attrs({
  contentContainerStyle: { paddingBottom: 20, paddingTop: 20 },
  showsVerticalScrollIndicator: false,
})``;

export const MenuItem = styled(ItemButtonList)`
  flex-direction: row;

  align-items: center;
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: 15px;
`;

export const ItemCover = styled.Image`
  width: 79px;
  height: 79px;
  border-radius: 5px;
  margin-right: 10px;
`;

export const InfoItemContainer = styled.View`
  flex: 1;
  height: 80;
  justify-content: space-around;
`;

export const ItemName = styled.Text`
  font-size: 12;
  color: #0b2031;
  letter-spacing: 0;
  text-align: left;
  font-family: Helvetica;
`;
export const ItemDescription = styled.Text`
  font-size: 11;
  line-height: 14px;
  color: #706e7b;
  letter-spacing: 0;
  text-align: left;
  font-family: Helvetica;
`;

export const ItemTime = styled.Text`
  font-size: 10;
  color: #706e7b;
  letter-spacing: 0.46;
  text-align: left;
`;
