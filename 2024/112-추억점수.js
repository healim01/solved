// [프로그래머스] - 추억 점수
// https://school.programmers.co.kr/learn/courses/30/lessons/176963

function solution(name, yearning, photo) {
    return photo.reduce((acc, cur) => {
         acc.push(cur.reduce((acc, cur) => {
            const index = name.findIndex((ppl) => ppl === cur);
            
            if (index != -1) {
                return acc += yearning[index];
            }
            return acc;
        }, 0))
        
        return acc;
    }, []);
}
