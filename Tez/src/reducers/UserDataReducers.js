import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/database';
import { USER_LIST_DATA_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_LIST_DATA_SUCCESS:
      return action.payload;
    default:
    return state;

  }
};