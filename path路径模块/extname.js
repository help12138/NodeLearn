const path = require("path")

const fpath = '/a/b/c/d/index.html'

// 用来获取文件的扩展名
const fext = path.extname(fpath)
console.log(fext) // .html