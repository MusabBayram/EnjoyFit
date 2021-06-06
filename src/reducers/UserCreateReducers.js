import { USER_CHANGED, CREATE_REQUEST, CREATE_REQUEST_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
  isim: '',
  soyisim: '',
  tel:'',
  yas:'',
  boy:'',
  kilo:'',
  cinsiyet:'',
  email:'',
  password:'',
  sigara: '',
  sigarasay:'',
  sigarapara:'',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_CHANGED:
      return { ...state, [action.payload.props]: action.payload.value };
    case CREATE_REQUEST:
      return { ...state, loading: true };
    case CREATE_REQUEST_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;

  }
};