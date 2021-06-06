import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/database';
import { Actions } from 'react-native-router-flux';
import { Alert } from 'react-native';
import { 
USER_CHANGED,
CREATE_REQUEST_SUCCESS,
CREATE_REQUEST,
USER_LIST_DATA_SUCCESS,
UPDATE_REQUEST_SUCCESS,
UPDATE_REQUEST,
DELETE_REQUEST_SUCCESS,
DELETE_REQUEST } from './types';


export const userChange = ({ props, value }) => {
  return (dispatch) => {
    dispatch({
      type: USER_CHANGED,
      payload: { props, value }
    });
  };
};
export const getUserData = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/Users`)
     .on('value', snapshot => {
       dispatch({ type: USER_LIST_DATA_SUCCESS, payload: snapshot.val() });
     });
  };
};

export const userCreate = ({ isim, soyisim, tel, yas, boy, kilo, cinsiyet, email, password, sigara, day, month, year, sigarasay, sigarapara }) => {
  return (dispatch) => {
    if( isim == '' || soyisim == '' || tel == '' || yas == '' || boy == '' || kilo == '' || cinsiyet == '' || email == '' || password == '' ){
      Alert.alert(
        'Mesaj',
        'Lütfen Bilgilerinizi doldurunuz..',
        [
          { text: 'Tamam', onPress: () => null }
        ]
      );
    }
    else {      
      dispatch({ type: CREATE_REQUEST });
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
          firebase.database().ref(`/Users`)
            .push({ isim, soyisim, tel, yas, boy, kilo, cinsiyet, email, password, sigara, day, month, year, sigarasay, sigarapara })
            .then(() => { createSucces(dispatch) });
        })
        .catch(() => loginFailCreate(dispatch));
      }
  };
};

export const userUpdate = ({ isim, soyisim, tel, yas, boy, kilo, cinsiyet, email, password, sigara, day, month, year, sigarasay, sigarapara, uid }) => {
  return (dispatch) => {
    dispatch({ type: UPDATE_REQUEST });
    firebase.database().ref(`/Users/${uid}`)
      .set({ isim, soyisim, tel, yas, boy, kilo, cinsiyet, email, password, sigara, day, month, year, sigarasay, sigarapara })
        .then(() => {
         dispatch({ type: UPDATE_REQUEST_SUCCESS });
          Actions.pop();
        });
  };
};

export const userDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    dispatch({ type: DELETE_REQUEST });
    firebase.database().ref(`/Users/${uid}`)
      .remove()
        .then(() => {
         dispatch({ type: DELETE_REQUEST_SUCCESS });
          Actions.pop();
        });
  };
};


const loginFailCreate = (dispatch) => {
  Alert.alert(
    'Mesaj',
    'Bu E-mail Kullanılıyor',
    [
      { text: 'Tamam', onPress: () => null }
    ]
  );
  dispatch({
    type: CREATE_REQUEST_SUCCESS
  });
};

const createSucces = (dispatch, ) => {
  Alert.alert(
    'Merhaba',
    'Aramıza Hoş Geldiniz',
    [
      { text: 'Hoş buldum', onPress: () => null }
    ]
  );
  dispatch({
    type: CREATE_REQUEST_SUCCESS
  });
  Actions.pop();
};