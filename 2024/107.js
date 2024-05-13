// 프로그래머스 - 더 맵게 (JS)
// https://school.programmers.co.kr/learn/courses/30/lessons/42626?language=javascript

class Heap {
  constructor() {
   this.heap = [null];
  }

  size() {
      return this.heap.length - 1; 
  }
    
  getMin() {
        return this.heap[1];
    }
    
    swap(a, b) {
        [ this.heap[a], this.heap[b] ] = [ this.heap[b], this.heap[a] ];
    }
  
   heapPush(value) {
        this.heap.push(value);
       let curIdx = this.heap.length - 1;
       let parIdx = Math.floor(curIdx / 2);
       
       while (curIdx > 1 && this.heap[parIdx] > this.heap[curIdx]) {
          this.swap(parIdx, curIdx)
           curIdx = parIdx; 
           parIdx = Math.floor(curIdx / 2);
       }
    }
    
    heapPop() {
        const min = this.heap[1];
        
        if (this.heap.length <= 2) this.heap.splice(1, 1);
        else this.heap[1] = this.heap.pop();
        
        let curIdx = 1; 
        let leftIdx = curIdx * 2; 
        let rightIdx = curIdx * 2 + 1; 
        
        if (!this.heap[leftIdx]) return min; 
        
        if (!this.heap[rightIdx]) {
            if (this.heap[curIdx] > this.heap[leftIdx]) {
               this.swap(leftIdx, curIdx);
            }
            return min; 
        }
        
        while (this.heap[curIdx] > this.heap[leftIdx] || this.heap[curIdx] > this.heap[rightIdx]) {
            const minIdx = this.heap[leftIdx] > this.heap[rightIdx] ? rightIdx : leftIdx;
            this.swap(minIdx, curIdx);
            
            curIdx = minIdx;
            leftIdx = curIdx * 2;
            rightIdx = curIdx * 2 + 1; 
        }
        
        return min; 
    }
    
}

function solution(scoville, K) {
     const heap = new Heap();
    
     for (const sco of scoville) {
        heap.heapPush(sco);
      }
    
    
    let count = 0; 
    
      while (heap.size() >= 2 && heap.getMin() < K) {
        let firstMin = heap.heapPop();
        let secondMin = heap.heapPop();
        const newValue = firstMin + (secondMin * 2);
        
        heap.heapPush(newValue); 
        count++;
    }
    
    return heap.getMin() >= K ? count : -1; 
}
