function solution(price, money, count) {
    var answer = -1;
    
    answer = price * ((count * (count + 1)) / 2); 
    
    if (answer - money > 0) return answer - money;
    return 0;
}