function solution(a, b) {
    var answer = 0;
    
    a.forEach((n, i) => {
        answer += (n * b[i])
    })
    
    return answer;
}

 