import styled from 'styled-components';

export const Buttom = styled.TouchableOpacity`
  width: ${(props) => props.size || '84%'};
  height: ${(props) => props.heigth || '55'}px;
  border-radius: ${(props) => props.radius || '22'}px;
  background-color: ${(props) => props.color || '#247a97'};
  justify-content: center;
  align-items: center;
  position: ${(props) => props.position || 'absolute'};
  bottom: ${(props) => props.bottom || '5%'};
`;

export const TextButtom = styled.Text`
  font-size: ${(props) => props.txtsize || '20'}px;
  color: ${(props) => props.txtcolor || '#fff'};
  font-family: 'Rowdies-Regular';
`;
