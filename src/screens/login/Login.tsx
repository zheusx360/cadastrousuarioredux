import React from "react";
import * as Styled from './Login.styled'
import Icone from 'react-native-vector-icons/Ionicons'
import { useNavigation } from "@react-navigation/native";
import { SnackBar } from "../../components/snackBar/SnackBar";


export const Login: React.FC = () => {

   const { navigate } = useNavigation()

   const Login = () => {
      SnackBar('Projeto ainda em construção', 'error');
      //navigate('Home')
   }

   return (
      <Styled.Container>
         <Icone name='person' size={55} color='#fff' />
         <Styled.Title>Login</Styled.Title>
         <Styled.SubTitle>
            Nome de usuário
         </Styled.SubTitle>
         <Styled.Input placeholder={'Nome de usuário'} />
         <Styled.SubTitle>
            Senha
         </Styled.SubTitle>
         <Styled.Input placeholder={'Senha'} keyboardType="numeric" secureTextEntry={true} />
         <Styled.ButtomCreate onPress={() => navigate('Registrar')}>
            <Styled.TextCriarConta>
               Registrar-se
            </Styled.TextCriarConta>
         </Styled.ButtomCreate>
         <Styled.ButtomLogin>
            <Styled.BtText onPress={() => Login()}>
               Acessar
            </Styled.BtText>
         </Styled.ButtomLogin>
      </Styled.Container>
   )

}