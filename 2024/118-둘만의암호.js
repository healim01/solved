// [프로그래머스] - 둘만의 암호 
// https://school.programmers.co.kr/learn/courses/30/lessons/155652

function solution(s, skip, index) {
    let answer = '';
    const skipArr = skip.split(""); 

    for (let i = 0; i < s.length; i++) {
        let charCode = s.charCodeAt(i); 
        let shiftCount = 0;

        while (shiftCount < index) {
            charCode++; 
            if (charCode > 122) { 
                charCode = 97; 
            }

            if (!skipArr.includes(String.fromCharCode(charCode))) {
                shiftCount++;
            }
        }

        answer += String.fromCharCode(charCode);
    }

    return answer;
}
