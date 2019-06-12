var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//注册一个路由:用户注册
router.post('/register',(req, res) => {
  //1.获取请求参数
  const {username, password} = req.body;
  //2.处理
  if(username === 'admin'){
    //注册失败返回相应
    res.send({code:1,msg:'此用户已存在'})
  }else{
    //注册成功返回相应
    res.send({code:0, data:{id:"abc123", username, password}});
  }
  //res.send()
})

module.exports = router;
