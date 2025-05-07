// function solution(routes) {
//     var answer = 1;
//     routes.sort((a,b) => a[1] - b[1]); 
    
//     let point = routes[0][1]; 
//     routes.forEach((route) => {
//       if (route[0] > point ||  point > route[1]) {
//           point = route[1]; 
//           answer++; 
//       }  
//     })
    
//     return answer;
// }


function solution(routes) {
    routes.sort((a,b) => a[1] - b[1]);
    
    let flag = 1; 
    let camera = routes[0][1]; 
    
    for (let route of routes) {
        const [start, end] = route; 
        
        if (start > camera || camera > end) {
            camera = end; 
            flag++; 
        }
    }
    
    return flag;
}

