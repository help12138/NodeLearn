// 导入http模块
const http = require('http')
// 创建web服务器实例
const server = http.createServer()
// 为服务器实例绑定request事件， 监听客户端的请求
// req是请求对象,包含了客户端相关的数据和属性
server.on('request', (req, res)=>{
  console.log('有人访问服务器')

})