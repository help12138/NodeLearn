// 导入http模块
const http = require('http')
// 创建web服务器实例
const server = http.createServer()
// 为服务器实例绑定request事件， 监听客户端的请求
server.on('request', (req, res)=>{
  console.log('有人访问服务器')

})
// 启动服务器  80端口可以被省略
server.listen(80, ()=>{
  console.log('server running at http://127.0.0.1:80')
})