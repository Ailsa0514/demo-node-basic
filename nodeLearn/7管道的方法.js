// 1 导入模块
const fs = require('fs');


let rs = fs.createReadStream("C:/Users/Administrator/Desktop/status.txt");
let ws = fs.createWriteStream("status.txt")
// 使用管道的方法
rs.pipe(ws);