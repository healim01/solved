function solution(arr)
{
    var answer = [];

    let prev = null; 
    arr.forEach((a) => {
        if (prev !== a) {
            prev = a; 
            answer.push(a); 
        }
    })
    
    return answer;
}