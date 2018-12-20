// 引入HTTP  模块
const http = require("http");

// 引入url 模块
const url = require("url")

// querystring 解析url中的数据转化成对象的形式
const querystring = require('querystring');

// 引入表单处理模块  npm i -S formidable
const formidable = require("formidable");

const util = require('util')

//创建服务器
const  server = http.createServer( (req,res) => { 
    //1 匹配路由 获取请求的路由地址  postmsg  地址是请求服务器的地址 判断是不是post请求
    if(req.url ==="/postmsg" && req.method.toLocaleLowerCase() ==="post"){
        // 2 实例化一个formidable 的对象
        let form = formidable.IncomingForm();
        console.log(form)
        // 3 设置上传的文件路径  创建文件夹uploads

        form.uploadDir = "./uploads";  //这里的配置地址写相对路径会报错，就用绝对路径能指向当前的文件内部
        // 4 获取表单内容
        form.parse(req, (err, fields, files) => {
            res.writeHead(200, {'content-type': 'text/plain;charset=UTF-8'});
            res.write('received upload:\n\n');
              // 前台的文件form 表单必须设置成 enctype="multipart/form-data"
            res.end(util.inspect({fields: fields, files: files}));
        });
       
    }

}).listen(3000,"127.0.0.1")