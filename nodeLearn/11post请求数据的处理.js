// 引入HTTP  模块
const http = require("http");

// 引入url 模块
const url = require("url")

// querystring
const querystring = require('querystring');
//创建服务器
// 方法一
const  server = http.createServer( (req,res) => {
    
    console.log(req.url);
    //1 匹配路由 获取请求的路由地址  postmsg  地址是请求服务器的地址 判断是不是post请求
    if(req.url ==="/postmsg" && req.method.toLocaleLowerCase() ==="post"){
        // 因为node 会将数据分成一小段一小段数据,所以监听buff 并且将接收到的数据进行拼接
        let allData = "";
        //2 接收一小段的数据
        req.on("data",(buf) =>{
            allData += buf;
        })
        // 3 监听所有数据传递完毕
        req.once('end',()=>{
            res.end("OK!")
            console.log(allData);
            /**
             * name=3342ewqe&age=rwerew&sex=%E5%A5%B3&lesson=HTML5&lesson=NodeJS&lesson=React&img=4866dd08adbaac8a3feacae917b82f86.jpg

             */ 
            // 将接收到 的 name=1&age=1&img=1 内容转换成对象 querystring
            let dataObj = querystring.parse(allData)
            console.log(dataObj);  
            /**
             * {
                        name: '3342ewqe',
                        age: 'rwerew',
                        sex: '女',
                        lesson: [ 'HTML5', 'NodeJS', 'React' ],
                        img: '4866dd08adbaac8a3feacae917b82f86.jpg' 
               }
             *  */
        })
    }
    console.log(req.method)

}).listen(3000,"127.0.0.1")