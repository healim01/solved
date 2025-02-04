function solution(sizes) {
    var width = 0, length = 0;
    
    sizes.forEach((size) => {
       size.sort((a,b) => a - b);
        
        if (size[0] > length) length = size[0];
        if (size[1] > width) width = size[1];
    })
    
    return width * length;
}