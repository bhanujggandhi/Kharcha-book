//
// Object Destructuring
//

// const book = {
//   title: "Who will cry when you die?",
//   author: "Robin Sharma",
//   publisher: {
//     name: "Jaico Books",
//   },
// };

// const { name: publisherName = "Self-Published" } = book.publisher;

// console.log(publisherName);

//
// Array Destructuring
//

const item = ["Çoffee (hot)", "Rs.150", "Rs.180", "Rs.200"];

const [C, , M] = item;

console.log(`A medium ${C} costs ${M} `);
