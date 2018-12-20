
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url')


http.createServer((req,res) => {
    //1 获取url地址
    let pathUrl = url.parse(req.url);
    // 2 获取当前地址的名称  /aa.css 或者是 /
    let pathName = pathUrl.pathname;
        /**输出
     *  /
        /index.css
        /index.html
     */
    // 3 处理路径
    if(pathName.lastIndexOf(".")===-1){
        pathName +="/index.html"
    }
    // 4 路径拼接 path.normalize()可以将地址中的无效斜杠去掉
    let fileUrl ="./" + path.normalize("./static" + pathName);
    // console.log( fileUrl);
    // 读取文件类型
    let extname  = path.extname(fileUrl)
    // 5 读取文件 
    fs.readFile(fileUrl,(err,data) => {
        // 4.1 没有找到
        if(err){
            res.writeHead(404,{"Content-Type":"text/html;charset=UTF-8"});
            res.end("<h2>404!您要的文件没有找到</h2>");
        }
        // 找到了就 判断文件的类型 将类型文件在另外的函数中进行处理和读取
        getContentType(extname, (contentType) =>{
            res.writeHead(200,{"Content-Type": contentType});
            res.end(data);
        })
    })

    // console.log(pathName);
}).listen(3200,"127.0.0.1")

function getContentType (extname,callback) {
    fs.readFile("./mime.json",(err,data) => {
        if(err){
            throw err;
            return
        }
        /**
         * data 的值
         * <Buffer 7b 20 0d 0a 20 20 20 20 22 2e 33 32 33 22 3a 22 74 65 78 74 2f 68 33 32 33 22 20 2c 0d 0a 20 20 20 20 22 2e 33 67 70 22 3a 22 76 69 64 65 6f 2f 33 67 ... >
<Buffer 7b 20 0d 0a 20 20 20 20 22 2e 33 32 33 22 3a 22 74 65 78 74 2f 68 33 32 33 22 20 2c 0d 0a 20 20 20 20 22 2e 33 67 70 22 3a 22 76 69 64 65 6f 2f 33 67 ... >
         */
        // 读取的文件流转换成对象的格式
        let mimeData = JSON.parse(data);
        // 获取Content-Type 的类型  读取json 文件的格式应该为这样
        let contentType = mimeData[extname] || "text/plain";
    
        // contentType 以回调函数的形式返回
        callback(contentType)

    })
}