//https://www.codewars.com/kata/55908aad6620c066bc00002a/solutions/javascript

function XO(str) {
  //code here
  var xCount = 0;
  var oCount = 0;
  str
    .toUpperCase()
    .split("")
    .map(c => {
      if (c === "X") {
        xCount++;
      } else if (c === "O") {
        oCount++;
      }
    });
  return xCount === oCount;
}

console.log(XO("xxOomx"));

//Best Practise Solution
const XO = str => {
  str = str.toLowerCase().split("");
  return (
    str.filter(x => x === "x").length === str.filter(x => x === "o").length
  );
};
