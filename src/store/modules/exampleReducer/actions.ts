import * as types from '../types';

export function actionTeste() {
  return {
    type: types.ACTION_TESTE,
  };
}

export function testeRedux2(login, text) {
  return {
    type: types.TESTE_2,
    payload: {
      login: login,
      text: text,
    },
  };
}
