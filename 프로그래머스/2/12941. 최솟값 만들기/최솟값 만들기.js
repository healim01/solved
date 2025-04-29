function solution(A,B){
    A.sort((a,b) => a -b); 
    B.sort((a,b) => b -a);
    
    return A.map((a, idx) => a*B[idx]).reduce((acc, cur) => acc + cur);
}