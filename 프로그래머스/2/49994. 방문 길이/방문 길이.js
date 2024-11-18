function solution(dirs) {
    const visited = new Set();
    let x = 0, y = 0;
    
    const move = {
        'U': [0, 1],
        'D': [0, -1],
        'R': [1, 0],
        'L': [-1, 0]
    };

    for (let dir of dirs) {
        let [dx, dy] = move[dir];
        let newX = x + dx;
        let newY = y + dy;

        
        if (Math.abs(newX) <= 5 && Math.abs(newY) <= 5) {
            let path1 = `${x},${y},${newX},${newY}`;
            let path2 = `${newX},${newY},${x},${y}`;

            
            if (!visited.has(path1) || !visited.has(path2)) {
                visited.add(path1);
                visited.add(path2);
            }

            x = newX;
            y = newY;
        }
    }

    return Math.floor(visited.size / 2); 
}