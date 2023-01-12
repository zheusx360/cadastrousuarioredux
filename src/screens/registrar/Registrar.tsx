import React, { useState } from 'react';
import * as Styled from './Registrar.styled';
import { BaseHeader } from '../../components/baseHeader/BaseHeader';
import { BaseButton } from '../../components/baseButton/BaseButton';
import { useDispatch, useSelector } from 'react-redux';
import * as saveUser from '../../store/modules/registerReducer/actions';

const data = [
  { text: 'Nome', type: '', txtButtom: 'Próximo', field: 'nome' },
  { text: 'Idade', type: 'numeric', txtButtom: 'Próximo', field: 'idade' },
  {
    text: 'Telefone',
    type: 'numeric',
    txtButtom: 'Próximo',
    field: 'telefone',
  },
  { text: 'E-mail', type: '', txtButtom: 'Próximo', field: 'email' },
  {
    text: 'Renda Mensal',
    type: 'numeric',
    txtButtom: 'Próximo',
    field: 'rendaMensal',
  },
  { text: 'Cidade', type: '', txtButtom: 'Próximo', field: 'cidade' },
  { text: 'Estado', type: '', txtButtom: 'Próximo', field: 'estado' },
  {
    text: 'Crie uma senha',
    type: 'numeric',
    txtButtom: 'Próximo',
    field: 'senha',
  },
  { text: 'Confirme a Senha', type: 'numeric', txtButtom: 'Salvar' },
];

export const Registrar: React.FC = () => {
  const [text, setText] = useState();
  const [indice, setIndice] = useState(0);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.saveDataUser);
  console.tron.log('Array', user);

  const Next = () => {
    setIndice(indice + 1);
    user[data[indice].field] = text;
    console.tron.log('User', user);
    dispatch(saveUser.saveDataUser(user));
  };

  return (
    <>
      <BaseHeader title={'Registrar'} />
      <Styled.Container>
        <Styled.ItensText>{data[indice].text}</Styled.ItensText>
        <Styled.Input
          placeholder={data[indice].text}
          keyboardType={data[indice].type}
          secureTextEntry={indice >= 7 ? true : false}
          onChangeText={(text) => setText(text)}
        />
        <BaseButton text={data[indice].txtButtom} onPress={() => Next()} />
      </Styled.Container>
    </>
  );
};
