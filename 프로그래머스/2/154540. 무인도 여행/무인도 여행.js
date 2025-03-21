function solution(maps) {
    var answer = [];
    maps = maps.map((m) => m.split(''));
    let visited = Array.from(Array(maps.length), () => Array(maps[0].length).fill(false));
    
     const directions = [
        [-1, 0], // 위
        [1, 0],  // 아래
        [0, -1], // 왼쪽
        [0, 1]   // 오른쪽
    ];
 
    function dfs(x, y) {
        let stack = [[x, y]];  // 스택을 이용한 DFS (재귀 호출 대신 반복문 사용)
        let total = Number(maps[y][x]);  // 시작 위치에서의 식량 양
        
        visited[y][x] = true;  // 현재 위치 방문 처리
        
        while (stack.length > 0) {
            let [cx, cy] = stack.pop();  // 스택에서 좌표를 꺼냄
            
            // 4방향 탐색
            for (let [dx, dy] of directions) {
                let nx = cx + dx;
                let ny = cy + dy;
                
                // 범위 체크 및 방문하지 않은 땅('X'가 아닌 곳)인 경우
                if (nx >= 0 && ny >= 0 && nx < maps[0].length && ny < maps.length && !visited[ny][nx] && maps[ny][nx] !== 'X') {
                    visited[ny][nx] = true; 
                    total += Number(maps[ny][nx]); 
                    stack.push([nx, ny]); 
                }
            }
        }
        
        return total;  
    }
    
     for (let y = 0; y < maps.length; y++) {
        for (let x = 0; x < maps[0].length; x++) {
            if (maps[y][x] !== 'X' && !visited[y][x]) {
                answer.push(dfs(x, y));  
            }
        }
    }
    
    
    return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}