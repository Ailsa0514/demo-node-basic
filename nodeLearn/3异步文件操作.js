
// 1    引入模块
const fs = require('fs');


// 2 打开文件(异步操作)
/**
 * fs.open(path, flags[, mode], callback)
 * callback中的两个参数是{
 *  err <Error>
    fd <integer>
    }
 */

fs.open("file_test.txt",'a',(err,fd) =>{
   if (!err) {
    //  3  写入文件
    fs.writeFile(fd,"这是文件2131342323213",(err)=>{
        // 4  写入成功
        if(!err){
            console.log("写入文件成功")
        }else{
            throw err;
        }
        // 5 关闭文件
        fs.close(fd,(err)=>{
            if(!err){
                console.log("写入成功")
            }
        })
    });
   }else{
       throw err;
   }
})
/**
 * 异步的形式,可以同时进行
 */
