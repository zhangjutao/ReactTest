/*
  包含n个操作数据库集合数据的Model集合
*/
//1. 连接数据库
// 1.1. 引入mongoose
const mongoose = require('mongoose')
// 1.2. 连接指定数据库(URL只有数据库是变化的)
mongoose.connect('mongodb://localhost:27017/gzhipin')
// 1.3. 获取连接对象
const conn = mongoose.connection
// 1.4. 绑定连接完成的监听(用来提示连接成功)
conn.on('connected', () => {
  console.log('db connect success!')
})

/*2. 定义出对应特定集合的Model并向外暴露*/
// 2.1. 字义Schema(描述文档结构)
const userSchema = mongoose.Schema({
  username: {type: String, required: true}, // 用户名
  password: {type: String, required: true}, // 密码
  type: {type: String, required: true}, // 用户类型: dashen/laoban
  header: {type: String}, // 头像名称
  post: {type: String}, // 职位
  info: {type: String}, // 个人或职位简介
  company: {type: String}, // 公司名称
  salary: {type: String} // 月薪
})
// 2.2. 定义Model(与集合对应, 可以操作集合)
const UserModel = mongoose.model('user', userSchema) // 集合为: users
// 2.3. 向外暴露Model
exports.UserModel = UserModel
// module.exports = xxx  一次性暴露
// exports.xxx = value   分别暴露
// exports.yyy = value



//定义chats集合的文档结构
const chatSchema = mongoose.Schema({
  from:{type:String, required:true},  //发送消息的用户ID
  to:{type:String, required:true},    //接收消息的用户ID
  chat_id:{type:String, required:true}, //from和to组成的字符串
  content:{type:String, required:true}, //内容
  read:{type:Boolean, required:true},   //标识是否已读
  create_time:{type:Number},            //创建时间
})

//定义能操作chats集合数据的Model
const ChatModel = mongoose.model('chat',chatSchema);

//向外暴露Model
exports.ChatModel = ChatModel