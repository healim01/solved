function solution(lottos, win_nums) {
    var answer = [];
    let reg = lottos.filter((l) => win_nums.includes(l)).length;
    let zero = lottos.filter((l) => l === 0).length; 
    
    let max = 7 - (reg + zero) > 6 ? 6 : 7 - (reg + zero); 
    let min = 7 - reg > 6 ? 6 : 7 - reg; 
    
    return [max, min];
}