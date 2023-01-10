import { createStore } from 'redux'

//Importando o rootReeducer que contem os reducer combinados
import rootReducer from './modules/rootReducer';

//Ao criar a store são iniciados todos os reducers
const store = createStore(rootReducer);

//Exportamos a store 
export default store;