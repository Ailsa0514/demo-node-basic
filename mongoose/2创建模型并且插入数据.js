// 1引入模块mongoose
const  mongoose = require("mongoose")
// 2链接数据库
mongoose.connect('mongodb://localhost/m_data');
// 3监听状态

mongoose.connection.once('open',()=>{
    console.log("数据连接成功");
})
// 4 创建Schema模型对象
let Schema = mongoose.Schema;

let personSchema = new Schema({
    name  : String,
    age : Number,
    sex:{
        type : String,
        default :"男"
    },
    chat :String
})

// 3 创建model对象

let personModel = mongoose.model("person" ,personSchema)

// 4 插入文档
personModel.create({
    name  : "张三",
    age : 56,
    chat :"你猜"
},(err)=>{
    if(!err){
        console.log("插入成功")
    }else{
        throw err;
        console.log("插入失败")

    }
})
personModel.create({
    name  : "Gril",
    age : 26,
    chat :"lal",
    sex:"女"
},(err)=>{
    if(!err){
        console.log("插入成功")
    }else{
        throw err;
        console.log("插入失败")

    }
})
