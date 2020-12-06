import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: "AIzaSyBoTYX1PECPFpZ_24wfCPFi3P5GUWfKnMk",
  authDomain: "douglascollege-77495.firebaseapp.com",
  databaseURL: "https://douglascollege-77495.firebaseio.com",
  projectId: "douglascollege-77495",
  storageBucket: "douglascollege-77495.appspot.com",
  messagingSenderId: "66795936525",
  appId: "1:66795936525:web:ac7ec3bb86564ef75aae44"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;
