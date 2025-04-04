function solution(schedules, timelogs, startday) {
   let prize = 0; 
    
   timelogs.forEach((logs, idx) => {
       let [hour, minute] = [Math.floor(schedules[idx] / 100), schedules[idx] % 100 + 10];
        let startTime = hour * 100; 
        startTime += minute >= 60 ? 100 + (minute - 60) : minute;
       
       let day = startday - 1;
       let isLate = false;
       
       logs.forEach((log) => {
            day = day % 7 + 1;
            if (day >= 6) return;
           
           if (startTime - log < 0) isLate = true; 
       })
       
       if (!isLate) prize++; 
   })
    
    return prize; 
}