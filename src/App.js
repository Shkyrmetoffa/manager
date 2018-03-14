import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
// import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyD4UjkNfIub6EWKgfsJNpbAHi7mHahNe6Y",
      authDomain: "manager-317c1.firebaseapp.com",
      databaseURL: "https://manager-317c1.firebaseio.com",
      projectId: "manager-317c1",
      storageBucket: "",
      messagingSenderId: "598950553723"
    };
      firebase.initializeApp(config);
  };

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}> 
        <LoginForm />
      </Provider>
    )
  }
}
export default App;