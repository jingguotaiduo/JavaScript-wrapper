----------------------------------------------------------------By JIAO Jingguo 2022.11.10 JavaScript代码封装---------------------------------------------------------------------------
注意事项如下：

（1）如果在HTML文件中引入，一旦声明export，则需要设置<script type="module" src="Class.js"></script> 或者<script type="module">import { Person } from './Class.js'</script>
（2）如果用Nodejs执行js代码，则可以考虑 将源文件后缀名改为.mjs 或者 同路径下添加package.json文件，文件内容写 {"type":"module"}
（3）模块文件可以用.cjs或 .mjs或 .js等后缀名格式
（4）var变量为全局变量，let变量为局部变量，学会选择使用
（5）如果没有判断词法环境，函数工厂，可能无法使用window，更不能使用alert()函数，一般使用console.log();
