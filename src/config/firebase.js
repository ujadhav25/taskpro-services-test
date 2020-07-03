import firebase from "firebase";

const config = {
    apiKey: "AIzaSyD61lQtvBOdlsgJviDkSUuvr8_3jNE7pEI",
    authDomain: "taskproservices-f5ae0.firebaseapp.com",
    databaseURL: "https://taskproservices-f5ae0.firebaseio.com",
    projectId: "taskproservices-f5ae0",
    storageBucket: "taskproservices-f5ae0.appspot.com",
    messagingSenderId: "720783374159"
};

const firebaseDB = firebase.initializeApp(config);
// const firebaseDB = firebase.database();

export default firebaseDB;
