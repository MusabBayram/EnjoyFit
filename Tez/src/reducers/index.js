import { combineReducers } from 'redux';
import kimlikdogrulamaReducers from './KimlikdogrulamaReducers';
import UsersListReducers from './UserCreateReducers';
import UserDataReducers from './UserDataReducers';
import UserUpdateReducers from './UserUpdateReducers';

export default combineReducers({
  kimlikdogrulamaResponse: kimlikdogrulamaReducers,
  userListRespone: UsersListReducers,
  userDataResponse: UserDataReducers,
  userUpdateResponse: UserUpdateReducers
});