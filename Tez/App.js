import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Platform, View, Text, StyleSheet } from 'react-native';
import firebase from '@firebase/app';
import '@firebase/auth';
import Root from './src/Root';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
 
export default class App extends Component {
  componentDidMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDypg3bN875-HCpQum9kZTrYWYfUZuDeTU',
      authDomain: 'enjoyfit.firebaseapp.com',
      projectId: 'enjoyfit',
      storageBucket: 'enjoyfit.appspot.com',
      messagingSenderId: '646713800582',
      appId: '1:646713800582:web:f2575282c4eca13ab75e07',
      measurementId: 'G-YBE36EZCY5'
    });
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider style={styles.container} store={store}>
          <Root />
      </Provider>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});