function fizzBuzz(num) {
  for (let i = 0; i <= num; i++) {
    if (i % 3 == 0 && num % 5 == 0) {
      console.log("FizzBuzz");
    } else if (i % 3 == 0) {
      console.log("Fizz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

// fizzBuzz(6);
fizzBuzz(15);
