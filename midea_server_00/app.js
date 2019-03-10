//app.js
//1:加载模块 express pool.js
const express = require("express");
const pool = require("./pool");
//2:创建服务器端对象
var app = express();
//3:监听 3000
app.listen(3000);
//4:指定静态目录  public 
app.use(express.static("public"));
//5:加载跨域访问模块
const cors = require("cors");
//6:配置跨域访问模块 那个域名跨域访问允许
//  脚手架8080允许
//origin      允许跨域访问域名列表
//credentials 跨域访问保存session id
app.use(cors({
  origin:["http://127.0.0.1:8080",
  "http://localhost:8080"],
  credentials:true
}));
//6.1:下载 express-session 并且配置
const session = require("express-session");
app.use(session({
  secret:"128位随机字符", //安全字符串
  resave:false,          //每次请求是否都更新数据
  saveUninitialized:true, //初始化时保存数据
  cookie:{
    maxAge:1000 * 60 * 60 * 8
  }
}));

//7:加载第三方模块 body-parser
//body-parser 针对post请求处理请求参数
//如果配置成功 req.body..
const bodyParser = require("body-parser");
//8:配置对特殊 json是否是自动转换 不转换
app.use(bodyParser.urlencoded({extended:false}))

//功能1：首页商品信息
app.get("/index",(req,res)=>{
  var sql="select * from midea_index_product order by seq_recommended";
  pool.query(sql,[],(err,result)=>{
    if(err)throw err;
     res.send(result);
  })
})
//功能2：首页轮播图片
app.get("/carousel",(req,res)=>{
  var sql="select img from midea_index_carousel";
  pool.query(sql,[],(err,result)=>{
    if(err)throw err;
     res.send(result);
  })
})
//功能3：商品详情页1
app.get("/details1",(req,res)=>{
  var lid=req.query.lid;
  var progress=0;
  var obj={
    pics:[],
    product:[]
  }
  var sql="select * from midea_product_kt where lid=?";
  pool.query(sql,[lid],(err,result)=>{
    if(err) throw err;
    progress+=50;
    obj.product=result;
    if(progress==100){
      res.send(obj);
    }
  });
  var sql="select sm,md,lg from midea_product_pic where laptop_id=?"
  pool.query(sql,[lid],(err,result)=>{
    if(err) throw err;
    progress+=50;
    obj.pics=result;
    if(progress==100){
      res.send(obj);
    }
  })
})

//验证登陆用户名是否存在
app.get("/login",(req,res)=>{
  //参数
  var uname = req.query.uname;
  //sql
  var  sql = " SELECT uid FROM midea_user";
       sql+=" WHERE uname = ?";
  pool.query(sql,[uname],(err,result)=>{
     if(err)throw err;  
     if(result.length==0){
       res.send({code:-1,msg:"可以注册"});
     }else{
       //将用户登录凭证保存在服务器端 session对象中
       res.send({code:1,msg:"用户名已存在"});
     }
  });
 })