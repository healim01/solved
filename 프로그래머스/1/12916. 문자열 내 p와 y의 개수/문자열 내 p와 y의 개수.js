function solution(s){
    let p = s.toLowerCase().split('').filter((a) => a === 'p'); 
    let y = s.toLowerCase().split('').filter((a) => a === 'y'); 
    return p.length === y.length;
}