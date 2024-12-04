function solution(number) {
    var answer = 0;
    
    for (let i=0; i<number.length; i++) {
        let three = number[i];
        for (let j=i+1; j<number.length; j++) {
            three += number[j]; 
            for (let k=j+1; k<number.length; k++) {
                three += number[k]; 
                if (three === 0) answer++; 
                three -= number[k];
            }
            three -= number[j];
        }
    }
    
    return answer;
}