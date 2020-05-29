import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

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
