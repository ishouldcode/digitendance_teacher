/**
 * @format
 */

import ignoreWarnings from 'react-native-ignore-warnings';
ignoreWarnings('Setting a timer');

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import 'react-native-gesture-handler';
import * as firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyA2tPKcoAkn7jEafTBUgQjXlq56Mgyl1Bo",
    authDomain: "digitendance-ae1f3.firebaseapp.com",
    databaseURL: "https://digitendance-ae1f3.firebaseio.com",
    projectId: "digitendance-ae1f3",
    storageBucket: "digitendance-ae1f3.appspot.com",
    messagingSenderId: "407327706668",
    appId: "1:407327706668:web:12dce55cdde23493860b89"
};

firebase.initializeApp(firebaseConfig);

AppRegistry.registerComponent(appName, () => App);
