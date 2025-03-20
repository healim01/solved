const scoreFunc = (survey, choice) => {
    if (choice == 4) return 0;
    
    if (choice < 4) return [survey[0], 4 - choice]; 
    return [survey[1], choice - 4];
}


function solution(survey, choices) {
    const types = {
        R: 0,
        T: 0,
        C: 0,
        F: 0,
        M: 0,
        J: 0,
        A: 0,
        N: 0
    };

    for (let i=0; i<survey.length; i++) {
        let score = scoreFunc(survey[i], choices[i]); 
        types[score[0]] += score[1];
    }
    
    let answer = '';
    answer += types['R'] >= types['T'] ? 'R' : 'T';
    answer += types['C'] >= types['F'] ? 'C' : 'F';
    answer += types['J'] >= types['M'] ? 'J' : 'M';
    answer += types['A'] >= types['N'] ? 'A' : 'N';
    
    return answer;
}