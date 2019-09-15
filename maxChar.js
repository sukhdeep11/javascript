function maxChar(str) {
  var chars = {};
  var max = 0;
  var maxchar = "";
  for (let i = 0; i < str.length; i++) {
    var letter = str[i];

    if (chars[letter]) {
      chars[letter] = 1 + chars[letter];
    } else {
      chars[letter] = 1;
    }
  }
  for (let char in chars) {
    if (chars[char] > max) {
      max = chars[char];
      maxchar = char;
    }
  }
  console.log(maxchar + " in string occurs " + max + " times");
}

maxChar("sukh");
maxChar("sukhdeep");
maxChar("banana");
maxChar("s");
