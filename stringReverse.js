function stringReverse(str) {
  var str2 = "";
  var len = str.length;

  for (let i = 0; i <= len; i++) {
    str2 = str2 + str.charAt(len - i);
  }
  return str2;
}

console.log(stringReverse("sukh"));
console.log(stringReverse("sukhdeep"));
console.log(stringReverse("!sukhDeep"));

// another way

var a = "hello";
console.log(stringReverse(a));

//another way

var d = "sukhdeep";
var arr = d.split("");
arr.reverse();
var d = arr.join("");
console.log(d);
