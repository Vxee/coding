function rectCover(number) {
  if (number === 0) {
    return 0;
  }
  let a = 1;
  let b = 2;
  while (--number) {
    b += a;
    a = b - a;
  }
  return a;
}
console.log(rectCover(3));
