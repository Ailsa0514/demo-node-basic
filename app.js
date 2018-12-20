
const fs = require('fs')
// 引入express 框架
const express = require('express')
// 实例化express
const app = express();


// 指定模版文件的位置
app.set('views',"./static")

// 注册使用的模版引擎
// register the template engine
app.set('view engine', 'ejs') 

app.get('/',(req,res)=>{
    // res.render("目标文件","数据",回调)
    getDataJson((dataJson) =>{
        res.render('index',dataJson)
    })
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))



const getDataJson = (callback) =>{
    fs.readFile("./data/list.json",(err,data) => {
        if(!err){
            let jsonData = JSON.parse(data);
            callback(jsonData)
        }else{
            throw err
        }
    })
}