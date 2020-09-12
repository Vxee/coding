function Fibonacci(n) {
  let a = 0;
  let b = 1;
  while (n--) {
    b += a;
    a = b - a;
  }
  return a;
}
