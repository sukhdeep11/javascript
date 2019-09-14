function isIsogram(str) {
  if (typeof str === "") {
    return true;
  }
  var repeat = true;
  str = str.toLowerCase();
  var counts = {};

  for (i = 0; i <= str.length; i++) {
    var letter = str.charAt(i);
    if (counts[letter]) {
      counts[letter] = 1 + counts[letter];
    } else {
      counts[letter] = 1;
    }
    if (counts[letter] > 1) {
      repeat = false;
    }
  }
  return repeat;
}

console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("isogram"));
console.log(isIsogram("aba"));
console.log(isIsogram("moOse"));
console.log(isIsogram("isIsogram"));
console.log(isIsogram(""));
