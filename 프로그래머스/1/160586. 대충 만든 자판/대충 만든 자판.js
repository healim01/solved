function findKey(target, keymap) {
    let minCount = 101; 
    for (let i = 0; i < keymap.length; i++) {
        for (let j = 0; j < keymap[i].length; j++) {
            if (keymap[i][j] === target) {
                if (minCount > j + 1) minCount = j + 1;
                break;
            }
        }
    }
    
    return minCount === 101 ? -1 : minCount; 
}

function solution(keymap, targets) {
    var answer = [];
    
    targets.forEach((target) => {
        let count = 0;
        let valid = true;
        
        for (let i = 0; i < target.length; i++) {
            let keyCount = findKey(target[i], keymap);
            if (keyCount === -1) {
                valid = false;
                break;
            }
            count += keyCount;
        }
        
        if (valid) {
            answer.push(count);
        } else {
            answer.push(-1);
        }
    })
    
    return answer;
}
