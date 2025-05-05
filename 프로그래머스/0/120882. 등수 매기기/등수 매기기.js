function solution(score) {
    const avg = score.map((s) => (s[0] + s[1]) / 2);
    const rank = [...avg].sort((a, b) => b - a);

    return avg.map(a => rank.findIndex(s => s === a) + 1);
}
