import * as types from '../constants/ActionTypes';
import omit from 'lodash/object/omit';
import assign from 'lodash/object/assign';
import mapValues from 'lodash/object/mapValues';

const initialState = {
  users: [1, 2, 3],
  usersById: {
    1: {
      id: 1,
      name: 'Harmeet Singh'
    },
    2: {
      id: 2,
      name: 'Mehul Bhatt'
    },
    3: {
      id: 3,
      name: 'NayanJyoti Talukdar'
    }
  }
};

export default function users(state = initialState, action) {
  switch (action.type) {

    case types.ADD_USER:
      const newId = state.users[state.users.length-1] + 1;
      return {
        ...state,
        users: state.users.concat(newId),
        usersById: {
          ...state.usersById,
          [newId]: {
            id: newId,
            name: action.name
          }
        },
      }

    case types.DELETE_USER:
      return {
        ...state,
        users: state.users.filter(id => id !== action.id),
        usersById: omit(state.usersById, action.id)
      }

    default:
      return state;
  }
}
