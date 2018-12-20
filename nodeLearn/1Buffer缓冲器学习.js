
/**
 * // let str = "www.baidu.com"
let str1 = "你好"
let buffer = Buffer.from(str1)

console.log(str1.length)      // 2
// 中文字符的长度和英文字符的长度不一致
console.log(buffer.length);   //输出 6


// 将字符串转换成十位的输出
// console.log(buffer.toString());
 * 
 *  */



let buffer2 = Buffer.alloc(20);
buffer2[0] = 10;
buffer2[1] = 12;
buffer2[19] = 33;
console.log(buffer2);
// 和数组类似
// Buffer  是node自带的不需要引入
buffer2.forEach(item => {
    console.log(item);
});