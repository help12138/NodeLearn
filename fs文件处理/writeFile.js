const fs = require('fs')

// fs.writeFile 第一个参数为写入得路径,第二参数为写入的容,第三个为回调函数
const writeContent = '这是用变量写入的内容'
// 注,如果此处出现路径拼接错误问题,可将 ./或者../得相对路径修改为绝对路径
// 或者使用  __dirname
fs.writeFile(__dirname+'/2.txt', writeContent, (err)=>{
  if(err){
    return console.log('文件写入失败', err.message)
  }
  console.log(__dirname,'当前文件所处得目录')
  console.log('文件写入成功')
})