// Code your solutions in this file

function writeCards(array, events) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(`Thank you, ${array[i]}, for the wonderful ${events} gift!`);
  }
  return newArray;
}

// function writeCards(array, events) {
//   return array.map(
//     (name) => `Thank you, ${name}, for the wonderful ${events} gift!`
//   );
// }
// only pass positive integers here
function countDown(integer) {
  let i = integer;
  while (i >= 0) {
    console.log(i--);
  }
}
countDown(10);
