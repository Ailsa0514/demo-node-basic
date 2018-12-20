
// 1 导入fs
const fs = require("fs");

let rs = fs.createReadStream("C:/Users/Administrator/Desktop/status.txt");
let ws = fs.createWriteStream("status.txt")

// 3 监听流的打开和关闭

ws.once("open",()=>{
    console.log("打开通道");
})
ws.once("close",()=>{
    console.log("关闭通道");
})
rs.once("open",()=>{
    console.log("打开通道");
})
rs.once("close",()=>{
    console.log("关闭通道");
})

// 4 绑定DATA
rs.on("data",(data)=>{
    // 写入
    console.log("正在写入");
    console.log(data);
    ws.write(data)
})

