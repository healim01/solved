function solution(n) {
    var answer = 0;
    const one = n.toString(2).split('').filter((a) => a == 1).length; 

    while (1) {
        n++;
        const num = n.toString(2); 
        if (one === num.split('').filter((a) => a == 1).length) return parseInt(num, 2);   
    }
    
    return one;
}