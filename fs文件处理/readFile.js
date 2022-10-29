// 先由require引入 fs 函数，利用fs函数得readFile函数来读取文件

const fs = require('fs')
// 第一个为文件位置，第二个是编码格式， 第三个是处理函数
fs.readFile('./1.txt', 'utf8', (err, dataStr)=>{
  console.log(err)
  console.log('-------')
  console.log(dataStr)

})