function solution(wallpaper) {
    let lux = Infinity, luy = Infinity, rdx = -Infinity, rdy = -Infinity;

    wallpaper.forEach((wall, windex) => {
        const row = wall.split('');
        row.forEach((r, rindex) => {
            if (r === '#') {
               
                lux = Math.min(lux, windex); 
                luy = Math.min(luy, rindex); 
               
                rdx = Math.max(rdx, windex); 
                rdy = Math.max(rdy, rindex);
            }
        });
    });

   
    return [lux, luy, rdx + 1, rdy + 1];
}
