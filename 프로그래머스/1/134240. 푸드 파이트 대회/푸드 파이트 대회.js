function solution(food) {
    var answer = '';
    
    for (let i=1; i<food.length; i++) {
      const num = Math.floor(food[i] / 2); 
      answer = answer + String(i).repeat(num);   
    }
    const reverse = answer.split("").reverse().join("");
    
    answer = answer + '0' + reverse;
    
    return answer;
}