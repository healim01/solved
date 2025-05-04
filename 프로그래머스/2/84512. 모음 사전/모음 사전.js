function solution(word) {
    const alpha = ['A', 'E', 'I', 'O', 'U'];
    let weight = []
    
    for (let i = 0; i < 5; i++) {
        let w = 0;
        for (let j = i; j < 5; j++) {
            w += Math.pow(5, 4 - j);
        }
        weight.push(w);
    }
    
    let answer = 0;

    for (let i = 0; i < word.length; i++) {
        const idx = alpha.indexOf(word[i]);
        answer += idx * weight[i] + 1;
    }

    return answer;
}
