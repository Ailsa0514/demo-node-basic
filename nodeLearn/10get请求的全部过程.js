// 引入HTTP  模块
const http = require("http");

// 引入url 模块
const url = require("url")

//创建服务器
// 方法一
const  server = http.createServer( (req,res) => {
    //1 获取请求的URL 并且使用url模块的parse方法将提交的内容转化成对象  
    let myUrl = url.parse(req.url,true);    // true 表示所有的数据都会以对象的形式输出
    // 2 获取到query中的值,是以键值对的形式出现
    let queryUrl = myUrl.query;
    console.log(queryUrl)
    console.log(queryUrl.name)
    console.log(queryUrl.age)
    console.log(queryUrl.sex)
    res.end("hello world")
}).listen(3000,"127.0.0.1")