// function solution(people, limit) {
//     let count = 0;
//     people.sort((a,b) => b - a); 
    
//     let skinny = people.length - 1; 
    
//     for (let i=0; i<people.length; i++) {
//         if (i > skinny) break; 
     
//         if (people[i] + people[skinny] <= limit) {
//             skinny--;
//         }
        
//         count++; 
//     }  
    
//     return count;
// }


function solution(people, limit) {
    let cnt = 0; 
    people.sort((a,b) => b-a);
    
    let point = people.length -1; 
    for (let i=0; i<people.length; i++) {
        if (i > point) break;
        
        if (people[i] + people[point] <= limit) {
            point--; 
        }
        cnt++; 
    }

    return cnt;
}