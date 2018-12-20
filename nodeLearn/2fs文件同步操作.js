//  1  引入模块
const fs = require('fs')
//  2  打开文件

/**
 * fs.openSync(path, flags[, mode])
 */

 let fd = fs.openSync("ss.txt",'w')
 console.log(fd);

//  3  写入内容
/**
 * fs.writeSync(fd, string[, position[, encoding]])
 * 
 */
fs.writeFileSync(fd,"哈哈哈哈哈,成功耶!424556656565")

// 4 保存并退出
/**
 * fs.closeSync(fd)
 */
fs.closeSync(fd)

console.log("sssss");