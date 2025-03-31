function solution(book_time) {
    // 대실 시작 시각을 기준으로 솔팅 
    // 나갈 방 없으면 새로운 방에 추가 
    // 추가 후 솔팅 (대실 종료 시각 기준)
    // 나갈 방 있는지 확인 [0] (대실 종료 시각 < 대실 시작 시각) 
    // 들어올 때마다 Max 값 업데이트 
    
    let rooms = [];
    let maxRoom = 0; 
    function makeRoom(book) {
        rooms.push(book); 
        rooms.sort((a,b) => {
            const [aTime, aMin] = a[1].split(":"); 
            const [bTime, bMin] = b[1].split(":"); 
        
            const aTotalMinutes = parseInt(aTime) * 60 + parseInt(aMin);
            const bTotalMinutes = parseInt(bTime) * 60 + parseInt(bMin);
        
            return aTotalMinutes - bTotalMinutes; 
        }); 
        
       maxRoom = Math.max(maxRoom, rooms.length); 
    }
    
    book_time.sort((a, b) => {
        const [aTime, aMin] = a[0].split(":"); 
        const [bTime, bMin] = b[0].split(":"); 
        
        const aTotalMinutes = parseInt(aTime) * 60 + parseInt(aMin);
        const bTotalMinutes = parseInt(bTime) * 60 + parseInt(bMin);
        
        return aTotalMinutes - bTotalMinutes;
    }); 
    
    book_time.forEach((book) =>{
        if (rooms.length === 0) return makeRoom(book);
        
        const [sTime, sMin] = book[0].split(":"); 
        const [eTime, eMin] = rooms[0][1].split(":"); 
        
        const sTotalMinutes = parseInt(sTime) * 60 + parseInt(sMin);
        const eTotalMinutes = parseInt(eTime) * 60 + parseInt(eMin);
        
        let gap = sTotalMinutes - eTotalMinutes; 
        if (gap >= 10) {
            rooms.splice(0,1); 
        }
        makeRoom(book);
    })
    
    return maxRoom;
}