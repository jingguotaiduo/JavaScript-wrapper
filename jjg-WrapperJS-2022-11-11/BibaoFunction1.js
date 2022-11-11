//(function(){})()写法
var BibaoFunction1  = (function () {

    function n(t, e) 
    {
        this.heading = t;
        this.roll = e;
        this.add(15,15);
    }

    n.prototype.print = function () {
        if(window !== undefined && window !== null)
        {
            window.alert("heading:"+this.heading+",roll:"+this.roll);
        }
        else
            console.log("heading:"+this.heading+",roll:"+this.roll);
    };

    n.prototype.add = function (h, r) {
        this.heading += h;
        this.roll += r;
    };
    
    n.prototype.remove = function () {
        this.heading = 0;
        this.roll = 0;
    };
    return n;
})()
