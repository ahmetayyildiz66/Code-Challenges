//https://www.codewars.com/kata/jaden-casing-strings/train/javascript
String.prototype.toJadenCase = function() {
  console.log(this);

  var result = this.split(" ")
  for (var i = 0; i < result.length; i++) {
    result[i] = result[i].charAt(0).toUpperCase() + result[i].substr(1);
  }
  return result;
};

var str = "How can mirrors be real if our eyes aren't real";
var jadenStr = str.toJadenCase();
console.log(jadenStr);

// function jadenCase(s){
//     var result = s.split(" ").map((c, index) => {
//         //result[index] = result[index].charAt(0).toUpperCase() + result[i].substr(1)
//         return c[0].toUpperCase() + c.substr(1)
//     })
//     // for(var i = 0; i < result.length; i++){
//     //     result[i] = result[i].charAt(0).toUpperCase() + result[i].substr(1)
//     // }
//     return result;
// }

// var result = jadenCase("How can mirrors be real if our eyes aren't real")
// console.log('Result: '+ result)
