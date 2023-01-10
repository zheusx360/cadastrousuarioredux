//Criando aqui com o combineReducer a junção de todos os Reducers disponiveis
import { combineReducers } from 'redux';

//Importação dos reducers disponiveis
import exampleReducer from './exampleReducer/reducer'

//Expoortação dos reducers disponiveis
export default combineReducers({
   exampleReducer,
})