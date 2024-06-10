// [프로그래머스] - 공원 산책
// https://school.programmers.co.kr/learn/courses/30/lessons/172928

function findStartPosition(park) {
    for (let i = 0; i < park.length; i++) {
        const row = park[i];
        const j = row.indexOf('S');
        if (j !== -1) {
            return [i, j]; 
        }
    }
    return null;
}

function solution(park, routes) {
    let startPosition = findStartPosition(park);
    const parkMatrix = park.map(row => row.split(''));

    routes.forEach((route) => {
        let [i, j] = startPosition;
        const way = route.split(" ")[0];
        const length = route.split(" ")[1];

        for (let step = 1; step <= length; step++) {
            if (way === 'E') j += 1;
            if (way === 'W') j -= 1;
            if (way === 'S') i += 1;
            if (way === 'N') i -= 1;

            // 경계 체크
            if (i < 0 || i >= parkMatrix.length || j < 0 || j >= parkMatrix[0].length) {
                break;
            }

            // 장애물 체크
            if (parkMatrix[i][j] === 'X') {
                break;
            }
            
            
            if (step == length) startPosition = [i, j];
        }
    });

    return startPosition;
}
