import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})`
  background-color: #fff;
  border-radius: 5px;
  align-items: center;
  padding: 15px;
  box-shadow: 10px 10px 10px #000;
  elevation: 5;
`;
