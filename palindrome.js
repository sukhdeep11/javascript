var palindrome = str => {
  var str2 = str
    .split("")
    .reverse()
    .join("");

  if (str === str2) {
    console.log("palindrome");
  } else {
    console.log("not palindrome");
  }
};
// another solution

var palindrome2 = str => {
  return str.split("").every((char, i) => {
    return (char = str[str.length - i - 1]);
  });
};

palindrome("sukh");
palindrome2("suus");
console.log(palindrome2("suus"));
