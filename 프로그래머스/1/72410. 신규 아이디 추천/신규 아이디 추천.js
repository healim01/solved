function solution(new_id) {
    // 1단계: 모든 대문자를 소문자로 변환
    new_id = new_id.toLowerCase();
    
    // 2단계: 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거
    let reg = /[^a-z0-9\-_.]/g;
    new_id = new_id.replace(reg, '');
    
    // 3단계: 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환
    let dotReg = /\.{2,}/g;
    new_id = new_id.replace(dotReg, '.');
    
    // 4단계: 마침표(.)가 처음이나 끝에 위치한다면 제거
    if (new_id[0] === '.') new_id = new_id.slice(1);
    if (new_id[new_id.length - 1] === '.') new_id = new_id.slice(0, -1);

    // 5단계: 빈 문자열이라면, new_id에 "a"를 대입합니다.
    if (!new_id.length) new_id = 'a'; 
    
    // 6단계: 16자 이상이면, 첫 15개의 문자를 제외한 나머지 문자들을 제거
    // 만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거
    if (new_id.length >= 16) new_id = new_id.slice(0, 15); 
    if (new_id[new_id.length - 1] === '.') new_id = new_id.slice(0, -1);
    
    // 7단계: 2자 이하라면, 마지막 문자를 new_id 길이가 3이 될 때까지 반복해서 추가
    if (new_id.length <= 2) new_id += new_id[new_id.length-1].repeat(3 - new_id.length); 
    
    return new_id;
}
