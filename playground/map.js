//The map() method creates a new array with the results of calling a provided function on every element in the calling array.
var array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map((c,i) => c * i) 

console.log(map1);
// expected output: Array [0, 4, 18, 48]

