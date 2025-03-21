function solution(dartResult) {
    var answer = [];
    let bonus = {
        'S': 1,
        'D': 2,
        'T': 3
    };
    // 숫자 -> 배열 넣기 
    // 보너스 (S,D,T) -> 배열 값 곱하기 
    // 옵션 -> 배열에 값 변경 
    
    for (let i = 0; i < dartResult.length; i++) {
        let dart = dartResult[i];

        if (dart === '1' && dartResult[i + 1] === '0') {
            answer.push(10);
            i++;
        } else if (!isNaN(dart)) {
            answer.push(Number(dart));
        }

        if ('SDT'.includes(dart)) {
            answer[answer.length - 1] = Math.pow(answer[answer.length - 1], bonus[dart]);
        }

        if (dart === '*') {
            answer[answer.length - 1] *= 2;
            if (answer.length !== 1) answer[answer.length - 2] *= 2;
        }

        if (dart === '#') {
            answer[answer.length - 1] *= -1;
        }
    }

    return answer.reduce((a,b) => a+b, 0);
}