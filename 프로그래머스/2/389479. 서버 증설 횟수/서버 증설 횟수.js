function solution(players, m, k) {
    // 시간별로 players 를 해당 서버로 감당 가능한지 확인 
    // 감당 불가능하면 서버 추가 
    
    // 서버는 최소 1대 존재
    // player < m -> 필요 없음 
    // n * m <= player < (n+1) * m -> n 대 추가 
    // k 시간 지나면 반납해야함 
    
    let server = []; // [빌린 시간, 증설한 서버]
    let answer = 0;
    
    players.forEach((player, time) => {
        if (player < m) return; 
        
        let curServer = server.reduce((acc, cur) => {
            if (cur[0] + k > time) acc += cur[1]; 
            return acc;
        }, 1);
        
        if (player >= curServer * m) {
            let newServer = Math.ceil((player - (curServer * m - 1))/m);
            answer += newServer
            server.push([time, newServer])
        }
    })
    
    return answer;
}