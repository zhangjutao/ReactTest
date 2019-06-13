/**
 * 测试使用mongoose操作数据库
 */

const md5 = require('blueimp-md5'); //MD5加密的函数

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
const UserModel = mongoose.model('user', userSchema);  //集合名:users, 文档类型：userSchema

//3. CRUD 通过Model或其实例对集合数据进行CRUD操作
//3.1. 通过Model的实例的save()添加数据
testSave = () => {
  //创建UserModel的实例
  const userModel = new UserModel({
    username: "Tom",
    password: md5("123"),
    type: "dashen"
  });
  //调用save()保存
  userModel.save((error, user) => {
     console.log('save()', error, user);
  });
}

testSave();
//3.2. 通过Model的find()/findOne()查询多个或一个数据
testFind = () => {
  //查询多个：得到的是包含所有匹配文档对象的数组，如果没有匹配的就是[]
  UserModel.find({_id:'xxxxx'}, (error, users) => {
    console.log('find()', error, users);
  })

  //查询一个：得到是匹配的文档对象，如果没有匹配的就是null
  UserModel.findOne({_id:'xxxx'}, (error, user) => {
    console.log('findOne()', error, user);
  })
}
testFind();
//3.3. 通过Model的findByIdAndUpdate()更新某个数据
testUpdate = () => {
  UserModel.findByIdAndUpdate({_id:'xxx'}, {username:'Jack'}, (error, oldUser) => {
    console.log('findByIdAndUpdate()', error, oldUser);
  })
}
testUpdate();
//3.4. 通过Model的remove()删除匹配的数据
testDelete = () => {
  UserModel.remove({_id:''}, (error, doc) => {
    console.log('remove()', error, doc); //{n:1/0, ok:1} n代表删除的数量， ok为1代表操作成功
  })
}
testDelete();