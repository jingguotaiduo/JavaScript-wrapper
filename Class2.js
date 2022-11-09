class Class2
{
    constructor(a, b)
    {
        this.r = a - b;
        this.e = a + b;
    }

    get r()
    {
        return this.r;
    }

    get e()
    {
        return this.e;
    }

    set set_r(val)
    {
        this.r = val;
    }

    set set_e(val)
    {
        this.e = val;
    }
    toString = function()
    {
        console.log(this.r.toString()+this.e.toString());
    }

    print() 
    {
        console.log(this.r,this.e);
    }
}