function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

function solution(n, m) {
  const gcdResult = gcd(n, m); 
  const lcmResult = lcm(n, m); 

  return [gcdResult, lcmResult]; 
}