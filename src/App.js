import React, { Component } from 'react';
// import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyD3pi8FS1Ra3Zqp_RAt9iZX3mLlL8n4f5Y",
      authDomain: "manager-d0aa4.firebaseapp.com",
      databaseURL: "https://manager-d0aa4.firebaseio.com",
      projectId: "manager-d0aa4",
      storageBucket: "manager-d0aa4.appspot.com",
      messagingSenderId: "519120848925"
    };
    // firebase.initializeApp(config);
    if (!firebase.apps.length) {
      firebase.initializeApp({});
  }
  };

  render() {
    return (
      <Provider store={createStore(reducers)}> 
        <LoginForm />
      </Provider>
    )
  }
}
export default App;