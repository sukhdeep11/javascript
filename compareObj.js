function compareObj(str1, str2) {
  var char1 = buildCharMap(str1);
  var char2 = buildCharMap(str2);
  console.log(char1);
  console.log(char2);

  if (Object.keys(char1).length == Object.keys(char2).length) {
    for (char in char1) {
      if (char1[char] == char2[char]) {
        console.log("keys are identical ");
      } else {
        console.log("keys are not identical");
      }
    }
  }
}
function buildCharMap(str) {
  var chars = {};
  for (let letter of str) {
    if (chars[letter]) {
      chars[letter] = 1 + chars[letter];
    } else {
      chars[letter] = 1;
    }
  }
  return chars;
}

compareObj("reactive", "creative");
