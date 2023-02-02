import { createStore } from 'redux';

//Importando o rootReeducer que contem os reducer combinados
import rootReducer from './modules/rootReducer';

//Ao criar a store são iniciados todos os reducers
const store = createStore(rootReducer);

declare global {
  type RootState = ReturnType<typeof store.getState>;
}

//Exportamos a store
export default store;
