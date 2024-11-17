const equals = (a, b) => JSON.stringify(a) === JSON.stringify(b);

function solution(ingredient) {
    const burger = [1, 2, 3, 1];
    let answer = 0;
    let i = 0; 
    
    while (i <= ingredient.length - 4) { 
        const temp = ingredient.slice(i, i + 4); 
        if (equals(temp, burger)) {
            answer++;
            ingredient.splice(i, 4); 
            i = Math.max(i - 2, 0);
        } else {
            i++; 
        }
    }
    
    return answer;
}
