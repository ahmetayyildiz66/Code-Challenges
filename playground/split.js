function splitOperation(s) {
  return s.split("").map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i)).join("-");
}

console.log(splitOperation("ZpglnRxqenU"));

//s.split("") -> splits every character of the specified string