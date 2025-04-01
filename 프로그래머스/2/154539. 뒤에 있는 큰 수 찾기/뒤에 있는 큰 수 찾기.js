function solution(numbers) {
    let answer = new Array(numbers.length).fill(-1);
    let stack = []

    for (let i = numbers.length - 1; i >= 0; i--) {
        let current = numbers[i];

        while (stack.length > 0 && numbers[stack[stack.length - 1]] <= current) {
            stack.pop();
        }

        if (stack.length > 0) {
            answer[i] = numbers[stack[stack.length - 1]];
        }
        
        stack.push(i);
    }

    return answer;
}
