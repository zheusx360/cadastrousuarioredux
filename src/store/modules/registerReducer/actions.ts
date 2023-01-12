import * as types from '../types';

export function saveDataUser(payload) {
  console.tron.log('Payload', payload);
  return {
    type: types.SAVE_DATA_USER,
    payload,
  };
}
export function clearDataUser() {
  return {
    type: types.CLEAR_DATA_USER,
  };
}
