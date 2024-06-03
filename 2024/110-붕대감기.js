// [프로그래머스] PCCP 기출문제 - 1번 / 붕대 감기
// https://school.programmers.co.kr/learn/courses/30/lessons/250137

function solution(bandage, health, attacks) {
    
    let time = 0;
    let tryTime = 0; 
    const maxHealth = health; 
    
    while (health > 0) {
        time += 1; 
        tryTime += 1; 
        
        if (!attacks.length) break;
        
        let attacked = false;
        if (attacks[0][0] === time) {
            health -= attacks[0][1];
            
            tryTime = 0;
            attacks.shift();
            
            attacked = true;
        }
        
        if (health <= 0) break; 
        
        if (!attacked) {
            health += bandage[1];
        
            if (tryTime === bandage[0]) {
                health += bandage[2]; 
                tryTime = 0;
            }
            
            if (health > maxHealth) health = maxHealth;
            
        }
        
    }
    
    return health > 0 ? health : -1;
}
