var convertor = (a, b) => {
  var c = a + b;

  var binary = "";

  while (c > 0) {
    console.log(c % 2);
    binary = (c % 2) + binary;
    c = Math.floor(c / 2);
  }
  console.log(binary);
};
convertor(5, 5);
