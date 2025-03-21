function solution(numbers) {
    // return numbers.sort((a,b) => Number(`${b}${a}`) > Number(`${a}${b}`) ? 1 : -1).join('');
    
     const sorted = numbers.sort((a, b) => {
        const ab = `${a}${b}`;
        const ba = `${b}${a}`;
        return ba - ab;
    });

    // 정렬된 배열을 이어 붙여서 결과 문자열을 만듬
    const result = sorted.join('');

    // 결과가 "0"만 있으면, "0"을 반환
    return result[0] === '0' ? '0' : result;
}