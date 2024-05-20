// [프로그래머스] - 디스크 컨트롤러
// https://school.programmers.co.kr/learn/courses/30/lessons/42627?language=javascript

class Heap {
    constructor() {
        this.heap = [[null, null]];
    }
    
    getHeap() {
        return this.heap;
    }
    
    size() {
        return this.heap.length - 1;
    }
    
    swap(a, b) {
        [ this.heap[a], this.heap[b] ] = [ this.heap[b], this.heap[a] ]
    }
    
    push(value) {
        this.heap.push(value);
        let curIndex = this.heap.length - 1;
        let parIndex = Math.floor(curIndex / 2);
        
        while (curIndex > 1 && this.heap[parIndex][1] > this.heap[curIndex][1]) {
            this.swap(curIndex, parIndex); 
            curIndex = parIndex; 
            parIndex = Math.floor(curIndex / 2);
        }
    }
    
    pop() {
         const min = this.heap[1];
        
        if (this.heap.length <= 2) this.heap = [null];
        else this.heap[1] = this.heap.pop();   
        
        
        let curIndex = 1; 
        let leftIndex = curIndex * 2; 
        let rightIndex = curIndex * 2 + 1; 
        
        if (!this.heap[leftIndex]) return min;
        if (!this.heap[rightIndex]) {
             if (this.heap[curIndex][1] > this.heap[leftIndex][1]) {
               this.swap(leftIndex, curIndex);
            }
            return min; 
        }
        
        
        while (this.heap[curIndex][1] > this.heap[leftIndex][1] || this.heap[curIndex][1] > this.heap[rightIndex][1]) {
            
            const minIndex = this.heap[leftIndex][1] > this.heap[rightIndex][1] ? rightIndex : leftIndex;
            this.swap(minIndex, curIndex);
            
            curIndex = minIndex;
            leftIndex = curIndex * 2;
            rightIndex = curIndex * 2 + 1;
            
            if (leftIndex >= this.size()) break;
        }

        
        return min; 
    }
}

function solution(jobs) {
    jobs.sort((a,b) => a[0] - b[0]);
    const heap = new Heap();
    const count = jobs.length;
    
    let time = 0;
    let complete = 0;
    let workTime = 0;
  
  while (jobs.length || heap.size()) {
      
    while (jobs.length && jobs[0][0] === time) {
        heap.push(jobs.shift());
    }
    
    if (heap.size() && time >= complete) {
      const task = heap.pop();
      complete = task[1] + time;
      workTime += complete - task[0];
    }
      
    time++;
  } 
    
    return Math.floor(workTime / count);
}
