// Task 1: Callback Functions
//    *- Write a function fetchData that simulates fetching data
//          from a server using a callback function.
//    * The function should take a callback that processes the data
//          after a delay of 2 seconds.
//    * Use setTimeout to simulate the server delay.
//    * The data should be an array of user names.
// Bonus Task: Implement error handling in the callback function
//      to simulate a case where the server might fail.
function fetchData(func) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() <= 0.5)
        resolve(["ramesh", "suresh", "amar", "akbar", "anthony"]);
      else reject("Rejected");
    }, 2000);
  })
    .then((res) => {
      console.log(func(res));
    })
    .catch((err) => console.log("Error", err));
}
const toUpper = (arr) => arr.map((name) => name.toUpperCase());

fetchData(toUpper);
