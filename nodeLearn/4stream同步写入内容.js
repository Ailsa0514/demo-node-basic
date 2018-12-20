//1 引入文件模块
const fs = require('fs')

// 2 创建一个写入流
let ws = fs.createWriteStream("te_1.txt")
console.log(ws);

// 3 打开通道写入
ws.once('open',()=>{
    console.log("通道打开")
})

ws.once('close',()=>{
    console.log("通道关闭");
})

// 4 写入内容
/**
 * 任意写很多的内容
 */
ws.write("买马买")
ws.write("买马买")
ws.write("买马买")
ws.write("买马买")
ws.write("买马买")
ws.write("买马买")
ws.write("买马买")

// 5 通道关闭
ws.end();