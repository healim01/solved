function solution(operations) {
  let queue = []; 
    
    operations.forEach((op) => {
        const [command, num] = op.split(' '); 
        
        if (command == 'I') queue.push(num); 
        else {
            let discard = 0; 
            if (num == 1) discard = Math.max(...queue); 
            if (num == -1) discard = Math.min(...queue); 
            
            // console.log(discard);
            if (queue.length) queue = queue.filter((q) => q != discard); 
        }
        // console.log(queue);
    })
    
   return [
      queue.length ? Math.max(...queue) : 0,
      queue.length ? Math.min(...queue) : 0
    ];
}