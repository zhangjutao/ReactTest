/**
 * 测试使用mongoose操作数据库
 */

const md5 = require('blueimp-md5')

//1.1 引入mongoose
const mongoose = require('mongoose');

//1.2 连接数据库
mongoose.connect('mongodb://localhost:27017/gzhipin_test');

//1.3 获取连接对象
const conn = mongoose.connection;

//1.4 绑定连接完成的监听(用来提示连接成功)
conn.on('connected', () => {
    console.log('数据库连接成功,恭喜');
})

//2 得到对应特定集合的Model
//2.1  定义Schema(描述文档结构)
const userSchema = mongoose.Schema({
    username : {type : String, required : true}, //用户名
    password : {type : String, required : true}, //密码
    type : {type : String, required : true},     //用户类型：dashen/laoban
    header : {type : String}                     //用户头像
})

//2.2 定义Model(与集合对应，可操作集合)
const UserModel = mongoose.model({'user', userSchema});  //集合名:users, 文档类型：userSchema

//3. CRUD 通过Model或其实例对集合数据进行CRUD操作
//3.1. 通过Model的实例的save()添加数据
testSave = () => {
    //创建UserModel的实例
    new UserModel({
        username:"Tom",
        password:"123",
        type:"dashen"
    });
}
//3.2. 通过Model的find()/findOne()查询多个或一个数据

//3.3. 通过Model的findByIdAndUpdate()更新某个数据

//3.4. 通过Model的remove()删除匹配的数据
