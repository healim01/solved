// function solution(sizes) {
//     var width = 0, length = 0;
    
//     sizes.forEach((size) => {
//        size.sort((a,b) => a - b);
        
//         if (size[0] > length) length = size[0];
//         if (size[1] > width) width = size[1];
//     })
    
//     return width * length;
// }

function solution(sizes) {
    sizes = sizes.map((size) => [Math.min(...size), Math.max(...size)]);
    
    let width = sizes[0][0], height = sizes[0][1]; 
    sizes.forEach(([w,h]) => {
        width = Math.max(w, width); 
        height = Math.max(h, height); 
    })
    
    return width * height;
}