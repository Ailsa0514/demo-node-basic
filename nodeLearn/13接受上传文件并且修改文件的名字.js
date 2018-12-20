// 引入HTTP  模块
const http = require("http");

// 引入url 模块
const url = require("url")

// querystring 解析url中的数据转化成对象的形式
const querystring = require('querystring');

// 引入表单处理模块  npm i -S formidable
const formidable = require("formidable");

const util = require('util')

//生成随机编码  npm install uuid
const uuidv1 = require('uuid/v1');

// path 模块用于处理文件与目录的路径
const path = require('path')

// 文件系统
const fs = require('fs')



//创建服务器
const  server = http.createServer( (req,res) => { 
    //1 匹配路由 获取请求的路由地址  postmsg  地址是请求服务器的地址 判断是不是post请求
    if(req.url ==="/postmsg" && req.method.toLocaleLowerCase() ==="post"){
        // 2 实例化一个formidable 的对象
        let form = formidable.IncomingForm();
        // 3 设置上传的文件路径  创建文件夹uploads

        form.uploadDir = "./uploads";  
        //这里的配置地址写相对路径会报错，就用绝对路径能指向当前的文件内部
        // 4 获取表单内容
        form.parse(req, (err, fields, files) => {
            // 4.1 生成随机的编码，修改文件的名称
            let name = uuidv1();
            // 4.2 获取上传文件的后缀名
            let extname = path.extname(files.avatar.name);
            console.log(extname);
            // 4.3 获取文件的路径
            console.log(__dirname);  //获取当前文件的路径名称
            let oldPath = __dirname + "/" + files.avatar.path;
            console.log(oldPath)
            let newPath = __dirname + "/uploads/" + name + extname;
            console.log(newPath)

            // 4.4 fs 修改文件的名字
            fs.rename(oldPath,newPath,(err) => {
                if(!err){
                    res.writeHead(200, {'content-type': 'text/html;charset=UTF-8'});
                    res.write('上传成功');       
                       // 前台的文件form 表单必须设置成 enctype="multipart/form-data"   
                      //  util.inspect 转换成对象的格式输出
                    res.end(util.inspect({fields: fields, files: files}));
                }else{
                    throw err;
                }
            })
        });
       
    }

}).listen(3000,"127.0.0.1")