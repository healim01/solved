function solution(s, n) {
   return [...s].map((a) => {
       if (a === ' ') return a;
       
       let code = a.charCodeAt() + n; 
       let returnGap = 'Z'.charCodeAt() - 'A'.charCodeAt() + 1; 
       
       if (code > 'Z'.charCodeAt() && a.charCodeAt() < 'a'.charCodeAt()) code -= returnGap;
       if (code > 'z'.charCodeAt()) code -= returnGap;
       return String.fromCharCode(code);
   }).join('')
}