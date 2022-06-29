function fibonacciList() {
    var fibonacci = [];
    fibonacci[0] = 0;
    fibonacci[1] = 1;
    for (var i = 2; i < 10; i++) {
      fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
    }
    return fibonacci;
 }
  
  function checkFibonacci(checkingValue) {      
    return fibonacciList().some((elemento) => elemento === checkingValue);
  }
  
  const checkingValue = 9;
  if (checkFibonacci(checkingValue)) {
    console.log(`O número ${checkingValue} PERTENCE a sequência Fibonacci`);
  } else {
    console.log(`O número ${checkingValue} NÃO PERTENCE a sequência Fibonacci`);
  }
  