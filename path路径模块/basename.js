const path = require("path")

const fpath = '/a/b/c/d/index.html'
// 获取路径得最后一部分,
// 第一个参数为文件的路径,第二个为文件的扩展名
const baseName = path.basename(fpath)
console.log(baseName)  // index.html

const baseName2 = path.basename(fpath, '.html')
console.log(baseName2)  // index
