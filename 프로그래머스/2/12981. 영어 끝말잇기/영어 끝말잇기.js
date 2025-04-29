function solution(n, words) {
    const ppl = Array.from({ length: n }, () => []); 

    let prev = '';
    let loser = 0; 
    let turn = 0;  

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const isDup = words.slice(0, i).includes(word);
        const isWrong = prev && prev[prev.length - 1] !== word[0];

        const person = i % n;
        const numTurn = Math.floor(i / n) + 1; 

        ppl[person].push(word);

        if (isDup || isWrong) {
            return [person + 1, numTurn];
        }

        prev = word;
    }

    return [0, 0];
}
