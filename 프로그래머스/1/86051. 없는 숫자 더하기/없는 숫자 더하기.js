function solution(numbers) {
    let answer = 0;
    
    for (let i=1; i<=9; i++) {
       if (!numbers.find((num) => num === i)) answer += i;
    }
    
    return answer;
}