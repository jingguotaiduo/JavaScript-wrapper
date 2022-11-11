function JJGFunction(value)
{
    this.value = value;
    console.log('This is Class1 which is defined by function!');
}

JJGFunction.prototype.getValue = function() {
    return this.value;
}

JJGFunction.prototype.setValue = function(val) {
    this.value = val;
}

JJGFunction.prototype.log = function() {
    console.log(this.value);
}

export default JJGFunction;