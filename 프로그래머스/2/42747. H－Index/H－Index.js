function solution(citations) {
    citations.sort((a, b) => a - b);

    let hIndex = 0;
    
    for (let i = 0; i < citations.length; i++) {
        let h = citations.length - i;
        if (citations[i] >= h) {
            hIndex = h;
            break;
        }
    }

    return hIndex;
}
