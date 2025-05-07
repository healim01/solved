// function solution(number, k) {
//     let answer = []; 
//     let cnt = 0; 
    
//     [...number].forEach((n) => {            
//         while (answer.length > 0 && answer[answer.length - 1] < n && cnt < k) {
//             answer.pop(); 
//             cnt++;
//         }
        
//         answer.push(n);
//     })
    
//      if (answer.length > number.length - k) {
//         answer = answer.slice(0, number.length - k);
//     }
    
//     return answer.join('');
// }

function solution(number, k) {
    const stack = []; 
    
    let trash = 0; 
    [...number].forEach((n) => {
        while (trash < k && stack.length !== 0) {
            const prev = stack.pop(); 
            
            if (prev < n) trash++; 
            else {
                stack.push(prev); 
                break;
            }
        }
        
        stack.push(n);
    })
    
    return stack.slice(0, number.length - k).join('');
}