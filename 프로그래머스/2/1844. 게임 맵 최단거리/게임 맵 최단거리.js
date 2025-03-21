class Queue {
    items = [];
    front = 0; 
    rear = 0;
    
    push(item) {
        this.items.push(item);
        this.rear++;
    }
    
    pop() {
        return this.items[this.front++];
    }
    
    isEmpty() {
        return this.front === this.rear;
    }
}


function solution(maps) {
    var answer = 0;
    
    const moves = [[-1, 0], [0, -1], [0, 1], [1, 0]];
    
    const n = maps.length;
    const m = maps[0].length;
    
    const visited = Array.from({ length: n }, () => Array(m).fill(-1));
    
    function bfs(start) {
        const q = new Queue(); 
        q.push(start);
        visited[start[0]][start[1]] = 1;

        while (!q.isEmpty()) {
            const here = q.pop(); 
            
            for (let [dx, dy] of moves) {
                const row = here[0] + dx;
                const column = here[1] + dy;
                
                if (row < 0 || row >= n || column < 0 || column >= m) continue; 
                if (maps[row][column] === 0) continue;
                
                if (visited[row][column] === -1) {
                    q.push([row, column]);
                    visited[row][column] = visited[here[0]][here[1]] + 1;
                }
            }
        }
        
        return visited;
    }
    
    bfs([0,0])
    
    
    return visited[n - 1][m - 1];
}