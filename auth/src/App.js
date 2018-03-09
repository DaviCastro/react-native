import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {

  state = { loggedIn: false };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCylkOok_tdbBzLKIa95w4K6CrT2KKyhDA',
      authDomain: 'authentication-cfd03.firebaseapp.com',
      databaseURL: 'https://authentication-cfd03.firebaseio.com',
      projectId: 'authentication-cfd03',
      storageBucket: 'authentication-cfd03.appspot.com',
      messagingSenderId: '840614834794'
    });

    firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            this.setState({ loggedIn: true });
          } else {
            this.setState({ loggedIn: false });
          }
    });
  }

  render() {
    return (
      <View>
      <Header headerText="Authentication" />
      <LoginForm />
      </View>
    );
  }

}
export default App;
