import Icone from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';
import { StatusBar, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');
const BarHeight = StatusBar.currentHeight + height * 0.11;

export const Container = styled.View`
  position: absolute;
  top: 0%;
  width: 100%;
  height: ${BarHeight};
  border-bottom-left-radius: 22px;
  border-bottom-right-radius: 22px;
  background-color: #247a97;
  justify-content: center;
  align-items: center;
  padding-top: ${StatusBar.currentHeight};
`;
export const Title = styled.Text`
  font-size: 22px;
  font-family: 'Rowdies-Regular';
  color: #fff;
`;

export const BackButton = styled.TouchableOpacity`
  height: 40px;
  width: 40px;
  border-radius: 22px;
  background-color: rgba(255, 255, 255, 0.2);
  position: absolute;
  justify-content: center;
  align-items: center;
  top: 55%;
  left: 6%;
`;
export const Icones = styled(Icone).attrs(() => ({
  name: 'chevron-back',
  size: 25,
  color: '#fff',
}))``;
