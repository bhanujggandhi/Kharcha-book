import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAQObgSkVuVFs1n7q9h5Z17apzfymLxmII",
  authDomain: "kharcha-book.firebaseapp.com",
  databaseURL: "https://kharcha-book.firebaseio.com",
  projectId: "kharcha-book",
  storageBucket: "kharcha-book.appspot.com",
  messagingSenderId: "168480619982",
  appId: "1:168480619982:web:8139c22d3d0a2d1d213f9f",
  measurementId: "G-YJEDQ7DNX3",
};

firebase.initializeApp(firebaseConfig);

firebase.database().ref().set({
  name: "bhanujggandhi",
});
