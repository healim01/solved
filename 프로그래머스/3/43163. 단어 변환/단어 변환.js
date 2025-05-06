function isOneLetterDiff(a, b) {
  return [...a].filter((c, i) => c !== b[i]).length === 1;
}

function solution(begin, target, words) {
    if (!words.includes(target)) return 0;
    
    const queue = [{ word: begin, steps: 0 }];

    while (queue.length) {
        const { word, steps } = queue.shift();
        if (word === target) return steps;

        for (let next of words) {
          if (isOneLetterDiff(word, next)) {
            queue.push({ word: next, steps: steps + 1 });
          }
        }
        
        words = words.filter(w => !isOneLetterDiff(word, w));
    }

    return 0;
}
