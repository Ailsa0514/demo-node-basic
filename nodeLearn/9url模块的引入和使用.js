
// 引入HTTP  模块
const http = require("http");

// 引入url 模块
const url = require("url")

//创建服务器
// 方法一
const  server = http.createServer( (req,res) => {
    console.log("9090909090");
    // 获取当前的访问路径
    let myUrl = url.parse(req.url)  // 解析数据为对象格式
    // req接收的请求
    console.log(myUrl)    //对象的形式
    // 发送一个响应头给请求和状态码
    res.writeHead(200, { 'Content-Type': 'text/html;charset=UTF-8;' });
    res.end("hello world")
}).listen(3000,"127.0.0.1")
