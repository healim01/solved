// [프로그래머스] 2024 KAKAO WINTER INTERNSHIP - 가장 많이 받은 선물
// https://school.programmers.co.kr/learn/courses/30/lessons/258712

function solution(friends, gifts) {
    
    const nameIndexMap = {};
    friends.forEach((name, index) => {
      nameIndexMap[name] = index;
    });
    
    const N = friends.length;
    const giftMatrix = Array.from({ length: N }, () => Array(N).fill(0));
    
   const giftNum = friends.reduce((obj, name) => {
      obj[name] = 0;
      return obj;
    }, {});
    
    gifts.map((gift) => {
        const gi = gift.split(" ");
        
        giftNum[gi[0]] += 1; 
        giftNum[gi[1]] -= 1; 
        
        const senderIndex = nameIndexMap[gi[0]];
        const receiverIndex = nameIndexMap[gi[1]];

        giftMatrix[senderIndex][receiverIndex] += 1;
    })
    
    let maxGift = 0;
    for (let i = 0; i < N; i += 1) {
        let nextGift = 0;
        for (let j = 0; j < N; j += 1) {
            if (giftMatrix[i][j] > giftMatrix[j][i]) {
                nextGift += 1;
            } else if (giftMatrix[i][j] == giftMatrix[j][i]) {
                if (giftNum[friends[i]] > giftNum[friends[j]]) {
                    nextGift += 1;
                }
            }
        }
        if (nextGift > maxGift) {
            maxGift = nextGift;
        }
    }
    
    
    
    return maxGift;
}
