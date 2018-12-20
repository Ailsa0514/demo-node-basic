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

let person = new personModel ({
    name  : "lili",
    age : 52,
    chat :"243643543453441"
})

// 文档操作构造函数来插入数据
person.save((err,product)=>{
    if(!err){
        console.log(product);
    }
})
