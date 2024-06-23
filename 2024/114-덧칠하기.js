// [프로그래머스] - 덧칠하기 
// https://school.programmers.co.kr/learn/courses/30/lessons/161989

function solution(n, m, section) {    
    let paint = 0; 
    
    for (let i=1; i<=n; i++) {
        if (section[0] === i) {
            paint++; 
            section.splice(0,1); 
            for (let j=i+1; j<i+m; j++) {
                if (section[0] === j) section.splice(0,1);
            }
        }
    }
    
    return paint; 
}
