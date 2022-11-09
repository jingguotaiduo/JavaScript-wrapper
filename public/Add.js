function Add(a,b)
{
    return a+b;
}
export default Add;
// 如果使用export default则采用如下的引用方式来调用
{/* <script type="module">
import Add from "./public/Add.js"
console.log(Add(200,3));
</script> */}

// 如果没使用export default则采用如下的引用方式来调用
{/* <script type="text/javascript" src="./public/Add.js">
console.log(Add(200,3));
</script> */}