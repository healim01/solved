function solution(want, number, discount) {
    let answer = 0;

    const wantMap = new Map();
    for (let i = 0; i < want.length; i++) {
        wantMap.set(want[i], number[i]);
    }

    for (let i = 0; i <= discount.length - 10; i++) {
        const currentMap = new Map();

        for (let j = i; j < i + 10; j++) {
            currentMap.set(discount[j], (currentMap.get(discount[j]) || 0) + 1);
        }

        let isMatch = true;
        for (let [item, cnt] of wantMap.entries()) {
            if (currentMap.get(item) !== cnt) {
                isMatch = false;
                break;
            }
        }

        if (isMatch) answer++;
    }

    return answer;
}
