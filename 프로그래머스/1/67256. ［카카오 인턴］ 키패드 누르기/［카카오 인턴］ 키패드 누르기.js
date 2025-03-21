const howFar = (to, from) => {
    let x = to[0] - from[0];
    let y = to[1] - from[1];

    return Math.abs(x) + Math.abs(y); 
}

function solution(numbers, hand) {
    // 1,4,7 -> 왼손 / 3,6,9 -> 오른손 
    // 2,5,8,0 -> 가까운 손 , 위치 같으면 손잡이가 
    
    // numbers 숫자 보면서 L,R 위치 업데이트
    // 가운데 줄 숫자 나오면 해당 숫자부터 위치가 얼마나 먼지 확인
    let answer = '';
    const keypad = {
        1: [0,3],
        2: [1,3],
        3: [2,3],
        4: [0,2],
        5: [1,2],
        6: [2,2],
        7: [0,1],
        8: [1,1],
        9: [2,1],
        0: [1,0],
    }
    let L_num = [1,4,7], R_num = [3,6,9]; 
    let L = [0,0], R = [2, 0];
    
    numbers.forEach((num) => {
        if (L_num.includes(num)) {
            answer += 'L';
            L = keypad[num];
        }
        else if (R_num.includes(num)) {
            answer += 'R';
            R = keypad[num];
        }
        else {
            let rFar = howFar(R, keypad[num]); 
            let lFar = howFar(L, keypad[num]);
            if (rFar === lFar) {
                answer += hand === 'right' ? 'R' : 'L';
                hand === 'right' ? R = keypad[num] : L = keypad[num];
            }
            
            if (rFar > lFar) {
                answer += 'L';
                L = keypad[num];
            }
            if (rFar < lFar) {
                answer += 'R';
                R = keypad[num];
            }
        }
        
        
    })
    
    return answer;
}