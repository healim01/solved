function solution(n, m, section) {
    // n 길이 짜리 벽 
    // section[i] 의 벽이 칠해져있는지 확인
    // 안칠해져있으면 i ~ i+m-1 까지 칠하기 
        // 칠하는 건 section 내부에 있는지 확인해서 지우기 
    // 다 칠할때까지 칠한 회수 ++ 
    
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