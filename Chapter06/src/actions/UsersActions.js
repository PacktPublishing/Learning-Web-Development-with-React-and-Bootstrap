import * as types from '../constants/ActionTypes';

export function addUser(name) {
  return {
    type: types.ADD_USER,
    name
  };
}

export function deleteUser(id) {
  return {
    type: types.DELETE_USER,
    id
  };
}
