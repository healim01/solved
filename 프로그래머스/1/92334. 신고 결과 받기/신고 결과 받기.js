function solution(id_list, report, k) {
    var answer = [];
    
    let reported = id_list.reduce((acc, name) => {
        acc[name] = 0;
        return acc;
    }, {});
    let report_list = id_list.reduce((acc, name) => {
        acc[name] = [];
        return acc;
    }, {});
    
    report.forEach((rep) => {
        const [a, b] = rep.split(' '); 
       
        if (!report_list[a].includes(b)) {
             report_list[a].push(b);
            reported[b]++; 
        }
    })
    
    return id_list.map((id) => {
        let cnt = 0; 
        report_list[id].map((name) => {
            if (reported[name] >= k) cnt++; 
        })
        return cnt; 
    })
}