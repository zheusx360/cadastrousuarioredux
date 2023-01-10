import * as types from '../types'

const initialState = {
   login: false,
   text: 'Teste redux 2'
}

export default function (state = initialState, action) {
   const data = action.payload;
   switch (action.type) {
      case types.ACTION_TESTE :
         const newState = { ...state }
         newState.login = !newState.login
         return newState;

      case types.TESTE_2 :
         const newState2 = { ...state }
         newState2.login = data.login
         newState2.text = data.text
         return newState2

      default:
         return state;
   }
}