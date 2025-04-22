const trans = (s) => {
    let first = [...s].filter((a) => a !== '0').join(''); 
    return [s.length - first.length, first.length.toString(2)]; 
}

function solution(s) {
    let answer = 0; 
    let tried = 0;
    
    while (s != '1') {
        const [cnt, num] = trans(s); 
        s = num; 
        tried++; 
        answer += cnt;
    }
    
    return [tried, answer];
}