//https://www.codewars.com/kata/mumbling/train/javascript
function accum(s) {
  var newString = "";
  for (i = 0; i < s.length; i++) {
    for (j = 0; j <= i; j++) {
      if (j === 0) {
        if (s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122) {
          var code = s.charCodeAt(i) - 32;
          newString +=
            i !== j
              ? String.fromCharCode(code)
              : String.fromCharCode(code) + "-";
        }

        if (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90) {
          if (j === i && i !== s.length - 1) {
            newString += s[i] + "-";
          } else {
            newString += s[i];
          }
        }
      } else if (j !== 0) {
        if (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90) {
          var code = s.charCodeAt(i) + 32;
          newString += String.fromCharCode(code);
          if (j === i && i !== s.length - 1) {
            newString += "-";
          }
        }
        if (s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122) {
          if (j === i && i !== s.length - 1) {
            newString += String.fromCharCode(s.charCodeAt(i)) + "-";
          } else {
            newString += String.fromCharCode(s.charCodeAt(i));
          }
        }
      }
    }
  }
  return newString;
}

accum("ZpglnRxqenU");
accum("NyffsGeyylB");
accum("MjtkuBovqrU");
accum("EvidjUnokmM");
accum("HbideVbxncC");

//Best Practise Solution:
function accum(s) {
  return s
    .split("")
    .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
    .join("-");
}
