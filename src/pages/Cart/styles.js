import styled from 'styled-components/native';
import ItemList from '~/components/ItemList';

export const Container = styled.View`
  flex: 1;
  background-color: #ccc;
  padding: 20px;
  justify-content: flex-start;
`;

export const ContainerList = styled.View``;

export const MenuList = styled.FlatList`
  /* margin: 10px; */
  /* background-color: blueviolet;  */
`;

export const MenuItem = styled(ItemList)`
  flex-direction: row;
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
  height: 65;
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
export const ItemPrice = styled.Text`
  font-size: 16px;
  color: #0b2031;
  letter-spacing: 0;
  text-align: left;
  font-weight: bold;
`;

export const ItemTime = styled.Text`
  font-size: 10;
  color: #706e7b;
  letter-spacing: 0.46;
  text-align: left;
`;
export const BottomContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 10px;
`;

export const BackToMenu = styled.TouchableOpacity`
  background-color: #ddd;
  padding: 10px;
  border-radius: 20px;
`;

export const FinishOrder = styled.TouchableOpacity`
  background-color: #e5293e;
  border-radius: 20px;
  /* height: 30px; */
  /* width: 200px; */
  padding: 10px;
  padding-left: 20px;
  padding-right: 10px;
  justify-content: center;
  flex-direction: row;
`;

export const ButtonText = styled.Text`
  font-family: Helvetica-Bold;
  font-size: 14px;
  color: #ffffff;
  letter-spacing: 0;
  text-align: center;
`;
