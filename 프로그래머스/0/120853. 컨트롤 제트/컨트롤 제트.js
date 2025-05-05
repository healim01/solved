function solution(s) {
    let answer = 0;
    
    s = s.split(' ');
    s.forEach((a, idx) => {
        if (a === 'Z') answer -= Number(s[idx-1]);
        else answer += Number(a);
    });
    
    return answer;
}