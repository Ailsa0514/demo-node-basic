

// 引入express 框架
const express = require('express')
// 实例化express
const app = express();




//创建服务器

// http.createServer((req,res) => {
    // res.end('sssasas')
// }).listen(3200,"127.0.0.1")


app.get('/', (req, res) =>{
    console.log(req.url)
    res.send('Hello World!')
})
app.get('/html/:name', (req, res) =>{
    console.log(req.params.name)
    res.send('你好:'+ req.params.name)
})
app.listen(3000, () => console.log('Example app listening on port 3000!'))