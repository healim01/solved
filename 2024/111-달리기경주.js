// [프로그래머스] - 달리기 경주
// https://school.programmers.co.kr/learn/courses/30/lessons/178871

function solution(players, callings) {
    
    const indexMap = {};
    players.forEach((player, index) => {
        indexMap[player] = index;
    });
    
    callings.map((call) => {
        const index = indexMap[call];
        
        [players[index], players[index-1]] = [players[index-1], players[index]]
        
        indexMap[players[index]] = index;
        indexMap[players[index - 1]] = index - 1;
    })
    
    return players;
}
