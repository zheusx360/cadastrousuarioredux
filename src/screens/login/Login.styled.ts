import styled from 'styled-components/native';

interface Types {
  ml?: number;
}

export const Container = styled.View<Types>`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #57737b;
  padding-bottom: 20%;
  margin-bottom: ${(props) => props.ml || '0'}px;
`;

export const Title = styled.Text`
  font-size: 42px;
  font-family: 'Rowdies-Regular';
  color: white;
`;

export const SubTitle = styled.Text`
  font-size: 18px;
  font-weight: 500;
  color: #fff;
  margin: 5% 0 2%;
`;

export const Input = styled.TextInput`
  width: 84%;
  font-size: 16px;
  background-color: #bbb;
  border-radius: 15px;
  padding-left: 18px;
`;

export const ButtomLogin = styled.TouchableOpacity`
  width: 84%;
  height: 55px;
  background-color: #829da6;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  position: absolute;
  bottom: 5%;
`;
export const ButtomCreate = styled.TouchableOpacity`
  width: 84%;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
`;
export const TextCriarConta = styled.Text`
  font-size: 18px;
  font-family: 'Rowdies-Regular';
  color: #fff;
`;

export const BtText = styled.Text`
  font-size: 22px;
  font-weight: 800;
  color: #fff;
`;
