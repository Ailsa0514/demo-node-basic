

// 引入express 框架
const express = require('express')
// 实例化express
const app = express();




//创建服务器

// http.createServer((req,res) => {
    // res.end('sssasas')
// }).listen(3200,"127.0.0.1")


// 引入静态资源库

app.use(express.static("./static"))

app.get('/',(req,res)=>{
    res.send('你好!')
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))