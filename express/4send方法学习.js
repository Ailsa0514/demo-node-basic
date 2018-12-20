

// 引入express 框架
const express = require('express')
// 实例化express
const app = express();

// 访问根目录
app.get('/',(req,res)=>{
    // send 回调函数的使用
    // 1 字符串
    // res.send("Hello World!")

    // 2 json格式
    // res.send({name:'lili',age:18})

    // 3  html 文件
    // res.send("<input type='date'>")
    
    // 4 发送状态码
    // res.status(404).send("Bad") 


    // 使用res.write()方法就要使用res.end()来结束
    res.write("dsdsfsdf")
    res.write("dsdsfsdf")
    res.write("dsdsfsdf")
    res.write("dsdsfsdf")
    res.end("结束了")
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))