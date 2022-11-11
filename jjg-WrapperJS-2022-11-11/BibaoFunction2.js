//(function(){})()写法
var BibaoFunction2;

(function () {
    "use strict";

    let unit = 'meter';
    function shuchu() 
    {
        console.log('This is BibaoFunction2 !!!')
    }
    
    function sum(arrs) {
        let res = 0;
        for(let i=0;i<arrs.length;i++)
        {
            res += arrs[i];
        }
        return res;
    }

    function hdf() {
        return function(a,b) {
            let res = a - b;
            console.log('hdf:'+ res);
            res = null;
        }
    }

    BibaoFunction2 = {
        unit: unit,
        log: shuchu,
        qiuhe:sum,
        subtract: hdf,
    }
    if(typeof module !== "undefined")
       module.exports = BibaoFunction2;
})()
