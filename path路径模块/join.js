const path = require('path')

// path.join()可以把多个路径片段拼接为一个完整得路径字符串
const pathStr = path.join('/a', '/b/c', '../', '/d', 'e')
console.log(pathStr)  // \a\b\d\e

const pathStr2 = path.join(__dirname, '/file/1.txt')
console.log(pathStr2)  // E:\NodeLearn\path路径模块\file\1.txt