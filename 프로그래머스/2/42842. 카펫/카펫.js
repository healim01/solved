function getDivisors(n) {
  const divisors = [];
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      divisors.push(i);
      if (i !== n / i) {
        divisors.push(n / i);
      }
    }
  }
  return divisors.sort((a, b) => a - b);
}


function solution(brown, yellow) {
  const total = brown + yellow;
  const arr = getDivisors(total);

  for (let i = 0; i < arr.length; i++) {
    let a = arr[i];
    let b = total / a;

    if (2 * a + 2 * b === brown + 4) {
      if ((a - 2) * (b - 2) === yellow) {
        return [Math.max(a, b), Math.min(a, b)];
      }
    }
  }

  return [];
}
