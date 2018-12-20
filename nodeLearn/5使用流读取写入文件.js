// 1 引入模块
const fs = require('fs');

// 2 读取文件
/**
 *  path <string> | <Buffer> | <URL> | <integer> 文件名或文件描述符。
    options <Object> | <string>
    --encoding <string> | <null> 默认为 null。
    --flag <string> 详见支持的文件系统标志。默认为 'r'。
    callback <Function>
    --err <Error>
    --data <string> | <Buffer>
 */
/**fs.readFile("te_1.txt",(err,data)=>{
    // 2.1 判断
    if(!err){
        // 输出二进制内容
        console.log(data);
        // 转换内容
        console.log(data.toString());
    }else{
        throw err;
    }
})
 *  */
// 读取图片文件
fs.readFile("99.png",(err,data)=>{
    // 2.1 判断
    if(!err){
    //    2.2 写入图片文件
    fs.writeFile("img.jpg",data,()=>{
        if(!err){
            console.log("写入成功")
        }else{
            throw err;
        }
    })
    }else{
        throw err;
    }
})
// 读取视频文件
// fs.readFile("XXX.np4",(err,data)=>{
//     // 2.1 判断
//     if(!err){
//     //    2.2 写入视频文件
//     fs.writeFile("XXX.np4",data,()=>{
//         if(!err){
//             console.log("写入成功")
//         }else{
//             throw err;
//         }
//     })
//     }else{
//         throw err;
//     }
// })