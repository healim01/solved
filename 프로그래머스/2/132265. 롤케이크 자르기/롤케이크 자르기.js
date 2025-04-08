function solution(topping) {
    let answer = 0;
    
    const aSet = new Set();
    const bMap = new Map();

    for (let t of topping) {
        bMap.set(t, (bMap.get(t) || 0) + 1);
    }

    for (let i = 0; i < topping.length - 1; i++) {
        let t = topping[i];
        aSet.add(t);

        bMap.set(t, bMap.get(t) - 1);
        if (bMap.get(t) === 0) {
            bMap.delete(t);
        }

        if (aSet.size === bMap.size) {
            answer++;
        }
    }

    return answer;
}
