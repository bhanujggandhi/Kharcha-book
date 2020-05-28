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

const database = firebase.database();

export { firebase, database as default };

//========References==========

// database
//   .ref("expenses")
//   .once("value")
//   .then((snpashot) => {
//     const expenses = [];

//     snpashot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val(),
//       });
//     });
//     console.log(expenses);
//   });

// database.ref("expenses").on("value", (snpashot) => {
//   const expenses = [];

//   snpashot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val(),
//     });
//   });
//   console.log(expenses);
// });

// database.ref("expenses").push({
//   description: "chill",
//   amount: 5500,
//   note: "",
//   createdAt: 294387907340,
// });

// database
//   .ref()
//   .set({
//     name: "bhanujggandhi",
//     age: 19,
//     stressLevel: 6,
//     job: {
//       title: "Student",
//       company: "BVCOE",
//     },
//     location: {
//       city: "Panipat",
//       country: "India",
//     },
//   })
//   .then(() => {
//     console.log("Data is saved");
//   })
//   .catch((error) => {
//     console.log("This failed. ", error);
//   });

//======Removing data=========

// database
//   .ref("/isSingle")
//   .remove()
//   .then(() => {
//     console.log("Remove Succeeded");
//   })
//   .catch((error) => {
//     console.log("Remove failed: ", error.message);
//   });

//=========Updating Data===========

// database.ref().update({
//   name: "Priyanka Gandhi",
//   age: 24,
//   degree: "Doctor",
//   isSingle: null,
// });

// database.ref().update({
//   stressLevel: 9,
//   "job/company": "IIT Delhi",
//   "location/city": "New Delhi",
// });

//========== Reading Data=========

// database
//   .ref()
//   .once("value")
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((error) => {
//     console.log("Error: ", error);
//   });

// const onValueChange =  database.ref().on("value", (snapshot) => {
//   console.log(snapshot.val());
// });
