
const http = require('http');
const ejs = require('ejs');
const fs = require('fs');
const path = require('path');
const url = require('url')

//创建服务器

http.createServer((req,res) => {
    // 1 读取数据
    getDataJson((dataJson) =>{
        // 2 读取模版
        fs.readFile("./static/index.ejs",(err,data) =>{
            // 将获取的data 转换成字符串
            let ejsList = data.toString();
            // 3 实例化模版的对象 将数据注入到模版中
            let tmp = ejs.render(ejsList,dataJson)
            // 4 返回页面
            res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"})
            res.end(tmp);
        })
    })
}).listen(3200,"127.0.0.1")

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