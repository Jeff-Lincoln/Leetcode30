// recursive approach..
//easiest but least efficient

const fibonacci = (n) => {
    //edge cases
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

console.log(fibonacci(10));