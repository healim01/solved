function solution(name, yearning, photo) {
    // photo 당 사람 이름 == 그리워하는 사람 이름 같은지 확인 
    // 인덱스 받기 
    // 인덱스로 yearing ++ 
    
    return photo.reduce((acc, cur) => {
         acc.push(cur.reduce((acc, cur) => {
            const index = name.findIndex((ppl) => ppl === cur);
            
            if (index != -1) {
                return acc += yearning[index];
            }
            return acc;
        }, 0))
        
        return acc;
    }, []);
}