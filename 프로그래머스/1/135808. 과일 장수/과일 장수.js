function solution(k, m, score) {
    let answer = 0;
    var boxs = [];
    score.sort((a,b) => b-a);
    
    for (let i=0; i < score.length; i += m) {
        let temp;
        temp = score.slice(i, i + m)
        boxs.push(temp)
    }
    
    boxs.forEach((box) => {
        if (box.length !== m) return; 
        answer += box[box.length - 1] * m;
    })
    
    return answer;
}