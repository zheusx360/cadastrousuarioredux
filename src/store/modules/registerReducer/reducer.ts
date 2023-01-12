import * as types from '../types';

const initialState = {
  nome: '',
  idade: '',
  telefone: '',
  email: '',
  rendaMensal: '',
  cidade: '',
  estado: '',
  senha: '',
};

export default function (state = initialState, action) {
  let newState, stateClear;
  switch (action.type) {
    case types.SAVE_DATA_USER:
      newState = { ...state };
      newState = action.payload;
      return newState;

    case types.CLEAR_DATA_USER:
      stateClear = { ...state };
      stateClear = initialState;
      return stateClear;

    default:
      return state;
  }
}
