// function anagram(str1, str2) {
//   var len1 = str1.length;
//   var len2 = str2.length;
//   var found, notFound;
//   if (len1 === len2) {
//     for (let i = 0; i < len1; i++) {
//       found = 0;
//       for (let j = 0; j < len1; j++) {
//         if (str1[i] == str2[j]) {
//           found = 1;
//           break;
//         }
//       }
//       if (found == 0) {
//         notFound = 1;
//       }
//     }
//     if (notFound == 1) {
//       console.log("strings are not anagram");
//     } else {
//       console.log("strings are anagram");
//     }
//   } else {
//     console.log("strings are not anagram");
//   }
// }

// anagram("sukh", "sukh");
// anagram("sukh", "hkus");
// anagram("creative", "reactive");
// anagram("creative", "reactivee");

// another way

function anagram1(str1, str2) {
  var len1 = str1.length;
  var len2 = str2.length;

  if (len1 === len2) {
    var str1 = str1
      .split("")
      .sort()
      .join("");
    var str2 = str2
      .split("")
      .sort()
      .join("");

    if (str1 == str2) {
      console.log("strings are anagram");
    } else {
      console.log("strings are not anagram");
    }
  } else {
    console.log("strings are not anagram");
  }
}

anagram1("sukh", "sukh");
anagram1("sukh", "hkud");
anagram1("creative", "reactive");
anagram1("creative", "reactivee");
