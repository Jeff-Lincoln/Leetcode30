// const fib = () => {
//    let a = 0, b = 1, sum = 0;
//    for (let i = 0; i < 10; i++) {
//       console.log(a);
//       sum += a;
//       let temp = a;
//       a = b;
//       b = temp + b;
//    }
//    console.log('Sum of first 10 Fibonacci numbers:', sum);
// };

// fib();

const sumOfFibonacci = (n) => {
   for (let i = 0; i < n; i++) {
      let sum;
      if (i <= 1) {
         sum = i;
      } else {
         sum = fibonacci(i - 1) + fibonacci(i - 2);
      }
   }
}