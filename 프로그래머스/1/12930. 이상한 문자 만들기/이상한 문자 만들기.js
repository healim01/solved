function solution(s) {
    return s.split(' ').map((word) => {
        return [...word].map((w, i) => {
            if (i%2 === 0) return w.toUpperCase(); 
            return w.toLowerCase(); 
        }).join('')
    }).join(' ')
}