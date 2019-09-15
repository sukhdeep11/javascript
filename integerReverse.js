function integerReverse(num) {
  var rev = 0,
    neg = 0;

  if (num < 0) {
    num = -num;
    neg = 1;
  }

  while (num > 0) {
    rev = rev * 10 + (num % 10);
    // console.log("rev", rev, "modulus", num % 10);
    num = Math.floor(num / 10);
  }
  if (neg) {
    rev = -rev;
    console.log(rev);
  } else {
    console.log(rev);
  }
}
integerReverse(120);
integerReverse(12345);
integerReverse(-12345);

//another method

function integerReverse1(num) {
  var neg = Math.sign(num);
  var rev = parseInt(
    num
      .toString()
      .split("")
      .reverse()
      .join("")
  );

  console.log(rev * neg);
}
integerReverse1(-12345);
integerReverse1(12345);
