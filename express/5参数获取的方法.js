

// 引入express 框架
const express = require('express')
// 实例化express
const app = express();

app.get('/',(req,res)=>{
  res.send("43242")
})
// 获取一个参数
// app.get('/:name',(req,res)=>{
    // name 的访问方法
    // 1
    // let name = req.params.name;
    // 2
    // let name = req.params[name];
    // res.end(name);
// })
// 获取多个参数
app.get('/:user/:age',(req,res)=>{
    let age = req.params.age;
    let user = req.params.user;
    res.write(age)
    res.end(user);
})
app.listen(3000, () => console.log('Example app listening on port 3000!'))