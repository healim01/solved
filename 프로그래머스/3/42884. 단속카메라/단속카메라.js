function solution(routes) {
    var answer = 1;
    routes.sort((a,b) => a[1] - b[1]); 
    
    let point = routes[0][1]; 
    routes.forEach((route) => {
      if (route[0] > point ||  point > route[1]) {
          point = route[1]; 
          answer++; 
      }  
    })
    
    return answer;
}