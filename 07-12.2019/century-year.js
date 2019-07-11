//https://www.codewars.com/kata/century-from-year/train/javascript



//My Solutions

function century(year) {
  const span = year % 100 > 0 ? 1 : 0;
  const yuzyil = parseInt(year / 100);
  return yuzyil + span;
}

console.log(century(1705))
console.log(century(1900))
console.log(century(1601))
console.log(century(2000))
console.log(century(89))

//Best Practise. Someone's code
const century = year => Math.ceil(year/100)// <3
