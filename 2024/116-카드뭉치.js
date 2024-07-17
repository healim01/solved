// [프로그래머스] 카드 뭉치
// https://school.programmers.co.kr/learn/courses/30/lessons/159994

function solution(cards1, cards2, goal) {
    while (goal.length > 0) {
        if (goal[0] === cards1[0]) {
            cards1.splice(0, 1);
        } else if (goal[0] === cards2[0]) {
            cards2.splice(0, 1);
        } else {
            return "No";
        }
        goal.splice(0, 1);
    }
    
    return "Yes";
}
