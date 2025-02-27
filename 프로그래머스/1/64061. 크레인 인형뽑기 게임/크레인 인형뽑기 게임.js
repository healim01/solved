function solution(board, moves) {
    var answer = 0;
    let box = [];
    let bArr = [];
    
    for (let i=0; i<board[0].length; i++) {
        let arr = []; 
        for (let j=board[0].length-1; j>=0; j--) {
           if (board[j][i] !== 0) arr.push(board[j][i]);
        }
        bArr.push(arr); 
    }
    
    moves.map((m) => {
        const doll = bArr[m-1].pop();
        if (!doll) return;
        
        if (box.length === 0) return box.push(doll);
        
        const top = box.pop(); 
        if (top === doll) {
            answer += 2;
        }
        else {
            box.push(top);
            box.push(doll);
        }
    })
    
    
    return answer;
}
