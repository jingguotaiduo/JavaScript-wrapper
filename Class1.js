// JavaScript中第一种定义类的方法，也是最常用的方法
function Class1(value)
{
    this.value = value;
    console.log('This is Class1 which is defined by function!');
}

Class1.prototype.getValue = function() {
    return this.value;
}

Class1.prototype.setValue = function(val) {
    this.value = val;
}

Class1.prototype.log = function() {
    console.log(this.value);
}
// let JJG = {
//     Class1: Class1,
// };

export default Class1;
//如果添加export default这句话，则在其他文件中引入时可使用import，html文件中需要设置script的type为module,
// https://github.com/vuejs/vue/blob/d257c81a5889d45012f6df39873fba3f8697f0cc/dist/vue.js#L22 22行处