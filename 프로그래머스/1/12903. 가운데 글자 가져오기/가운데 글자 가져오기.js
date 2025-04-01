function solution(s) {
    const mid = Math.floor((s.length - 1) / 2);     
    return s.length % 2 === 0 ? s.slice(mid, mid + 2) : s.slice(mid, mid + 1); 
}