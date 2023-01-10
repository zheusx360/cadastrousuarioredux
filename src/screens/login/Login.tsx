import React, { useState } from "react";
import * as Styled from './Login.styled'
import Icone from 'react-native-vector-icons/Ionicons'
import { useNavigation } from "@react-navigation/native";
import { SnackBar } from "../../components/snackBar/SnackBar";
import { useDispatch, useSelector } from 'react-redux';
import * as exampleActions from '../../store/modules/exampleReducer/actions';


export const Login: React.FC = () => {

   const { navigate } = useNavigation()
   const dispatch = useDispatch();
   const user = useSelector(state => state.exampleReducer.login);
   console.tron.log('log', user)
   console.tron.log('Texto', useSelector(state => state.exampleReducer))

   const Login = () => {
      SnackBar('Projeto ainda em construção', 'error');
      dispatch(exampleActions.actionTeste());
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
         <Styled.TextCriarConta>
            {user ? 'Logado' : 'OffLine'}
         </Styled.TextCriarConta>
         <Styled.ButtomLogin>
            <Styled.BtText onPress={() => Login()}>
               Acessar
            </Styled.BtText>
         </Styled.ButtomLogin>
      </Styled.Container>
   )

}