function solution(nums) {
    let nlength = nums.length; 
    let ordinary = [...new Set(nums)]; 
    return ordinary.length >= nlength/2 ? nlength/2 : ordinary.length;
}