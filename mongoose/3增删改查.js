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

// 5 创建model对象

let personModel = mongoose.model("person" ,personSchema)

// 6  增删改查
// 6.1 增加
/**
 * personModel.create([
   {name:"李四",age:23},
   {name:"那英",age:56,sex:"女"},
   {name:"招儿",age:23},
   {name:"王老五",age:23},
   {name:"钻姐",age:44,sex:"女"},
   {name:"李四",age:23},
],(err)=>{
    if(!err){
        console.log("插入成功")
    }else{
        console.log("插入失败")
    }
})
 */

// 6.2 查数据
/**
 * personModel.find({},(err,docs)=>{
    if(!err){
        console.log("查询成功");
        console.log(docs);
    }else{
        throw err
    }
})
  直接在第一个对象中添需要的值，后面的对象中添加新的条件，
  // 按照条件查询
personModel.find({name:"李四"},{sex:0,_id:0},(err,docs)=>{
    if(!err){
        console.log("查询成功");
        console.log(docs);
    }else{
        throw err
    }
})
 // 查询从第n条开始，截至到第n+n条 使用{skip:1,limit:20},相当于分页的数据

  personModel.find({},{sex:0,_id:0},{skip:1,limit:3},(err,docs)=>{
    if(!err){
        console.log("查询成功");
        console.log(docs);
    }else{
        throw err
    }
})
// 6.3 改数据

 personModel.update({name:"李四"},{$set: {age: 30}},(err)=>{
    if(!err){
        console.log("修改成功");
    }else{
        throw err
    }
})
// 6.4 删除数据
// remove 删除所有符合条件的数据
//deleOne 会删除一条数据
personModel.remove({name:"李四"},(err)=>{
    if(!err){
        console.log("删除成功");
    }else{
        throw err
    }
})
 
 */
// 6.5 统计文档的个数
personModel.count({},(err,count)=>{
    if(!err){
        console.log(count);
    }else{
        throw err
    }
})