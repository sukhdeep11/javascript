function capitalize(str) {
  var sentence = [];
  for (word of str.split(" ")) {
    sentence.push(word[0].toUpperCase() + word.slice(1));
  }
  console.log(sentence.join(" "));
}
capitalize("my name is sukhdeep singh !");
capitalize("Coding is interesting");

//another method

function capitalize1(str) {
  var result = str[0].toUpperCase();
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " ") {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }
  console.log(result);
}

capitalize1("my name is sukhdeep singh !");
capitalize1("Coding is interesting");
