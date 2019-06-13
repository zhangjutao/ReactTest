var express = require('express');
var router = express.Router();

const {UserModel} = require('../db/models');
const md5 = require('blueimp-md5');
const filter = {password:0, _v:0}; //查询时过滤掉指定的属性
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//注册一个路由:用户注册
// router.post('/register',(req, res) => {
//   //1.获取请求参数
//   const {username, password} = req.body;
//   //2.处理
//   if(username === 'admin'){
//     //注册失败返回相应
//     res.send({code:1,msg:'此用户已存在'})
//   }else{
//     //注册成功返回相应
//     res.send({code:0, data:{id:"abc123", username, password}});
//   }
//   //res.send()
// })

//注册路由
router.post('/register', (req, res) => {
  //读取请求参数
  const {username, password, type} = req.body;
  //处理：判断用户是否已经存在
  UserModel.findOne({username}, (error, user) => {
    //如果user有值，则已经存在
    if(user){
      //返回提示错误的信息
      res.send({code:1, msg:'此用户已存在'});
    }else{
      const userModel = new UserModel({username, password:md5(password), type});
      userModel.save((error, user) => {
        //生成一个cookie(userid: user._id),并交给浏览器保存
        res.cookie('userid', user._id, {maxAge: 1000*60*60*24*7}); //持久化cookie, 浏览器会保存在本地文件

        //返回包含user的json数据
        const data = {username, type, id:user_id}; //响应数据中不要携带password
        res.send({code:0, data});
      })
    }
  })
})


//登录路由
router.post('/login', (req, res) => {
  const {username, password} = req.body;
  //根据用户名和密码查询数据库
  UserModel.findOne({username, password:md5(password)}, filter, (error, user) => {
    if(user){
      //登录成功
      //生成一个cookie(userid: user._id),并交给浏览器保存
      res.cookie('userid', user._id, { maxAge: 1000 * 60 * 60 * 24 * 7 }); //持久化cookie, 浏览器会保存在本地文件
      res.sned({code:0, data:user});
    }else{
      //登录失败
      res.sned({code:1, msg:'用户名或密码错误！'});
    }
  })
})


module.exports = router;
