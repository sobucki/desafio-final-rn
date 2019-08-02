import styled from 'styled-components/native';

export const Container = styled.View`
  /* padding: 20px; */
  flex: 1;
  align-items: stretch;
  flex-wrap: wrap;
  /* justify-content: center; */
  padding: 20px;
`;

export const Observation = styled.TextInput.attrs({
  multiline: true,
  numberOfLines: 5,
  underlineColorAndroid: 'transparent',
  placeholderTextColor: '#999',
})`
  background-color: #fff;
  border-radius: 4;
  /* margin-top: 20px; */
  margin-bottom: 20px;
  padding: 20px 20px;
  /* padding: 20px; */
  height: 156px;
  font-size: 16px;
  color: #333;
  text-align-vertical: top;

  box-shadow: 10px 10px 10px #000;
  elevation: 5;
`;

export const SimpleField = styled.TextInput.attrs({
  placeholderTextColor: '#999',
  autoCapitalize: 'none',
})`
  background: #fff;
  border-radius: 4px;
  padding: 0 20px;
  /* padding: 10px 20px; */
  margin-bottom: 20px;
  height: 52px;
  font-size: 16px;
  color: #333;

  box-shadow: 10px 10px 10px #000;
  elevation: 5;
  /* margin-left: 20px; */
`;

export const RowField = styled.View`
  flex-direction: row;
`;

export const ButtomContainer = styled.View`
  align-items: flex-end;
`;

export const FinishOrderButton = styled.TouchableOpacity`
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
