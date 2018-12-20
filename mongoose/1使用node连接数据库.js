// 安装  npm i mongoose -D
// 引入模块mongoose
const  mongoose = require("mongoose")
// 链接数据库
mongoose.connect('mongodb://localhost/m_data');
// 监听状态
let db = mongoose.connection;

db.on('error',()=>{
    console.log("连接失败");
});
db.on('open',()=>{
    console.log("数据库连接成功");
})
db.on('close',()=>{
    console.log("数据库断开成功!!!");
})
