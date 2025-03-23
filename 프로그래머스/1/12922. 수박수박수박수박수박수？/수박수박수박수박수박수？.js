function solution(n) {
    const word = ['수', '박'];
    return Array(n).fill().map((_, i) => word[i%2]).join('');
}