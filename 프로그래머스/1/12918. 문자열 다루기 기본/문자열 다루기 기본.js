function solution(s) {
    let alpha = s.split('').filter((a) => isNaN(a));
    return !alpha.length && (s.length == 4 || s.length == 6);
}