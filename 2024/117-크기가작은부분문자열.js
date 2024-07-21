// [프로그래머스] - 크기가 작은 부분 문자열
// https://school.programmers.co.kr/learn/courses/30/lessons/147355

function solution(t, p) {
    const p_length = p.length;
    
    let count = 0;
    let i = 0;
    
    while (1) {
        if (t.length - i < p_length ) break;
        
        const t_slice = t.slice(i, p_length+i);
        
        if (t_slice <= p) count++;
        i++;
        
    }
    
    return count;
}
