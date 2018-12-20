
// 引入HTTP  模块
const http = require("http");

//创建服务器
const  server = http.createServer( (req,res) => {

    // req接收的请求
    console.log(req.url)
    // 发送一个响应头给请求和状态码
    res.writeHead(200, { 'Content-Type': 'text/html;charset=UTF-8;' });
    res.write("<h1>3422432423</h1>")
    res.end("服务器已经启动")
})

// 监听服务器运行
server.listen(3000,"127.0.0.1")