

// 引入express 框架
const express = require('express')
// 实例化express
const app = express();




//创建服务器

// http.createServer((req,res) => {
    // res.end('sssasas')
// }).listen(3200,"127.0.0.1")


// 引入静态资源库,进行托管设置,访问所设置的路径就能进入首页    
app.use("/static",express.static("./static"));   //访问 : http://127.0.0.1:3000/static/
app.use("/file",express.static("./files"));     //访问 :http://127.0.0.1:3000/file/


// 访问根目录会出现你好
app.get('/',(req,res)=>{
    res.send('你好!')
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))