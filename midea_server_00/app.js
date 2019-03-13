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
//功能3：商品详情页2
app.get("/details2",(req,res)=>{
  var lid=req.query.lid;
  var progress=0;
  var obj={
    pics:[],
    product:[]
  }
  var sql="select * from midea_product_chushiji where lid=?";
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
//功能3：商品详情页3
app.get("/details3",(req,res)=>{
  var lid=req.query.lid;
  var progress=0;
  var obj={
    pics:[],
    product:[]
  }
  var sql="select * from midea_product_dylg where lid=?";
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
//功能3：商品详情页4
app.get("/details4",(req,res)=>{
  var lid=req.query.lid;
  var progress=0;
  var obj={
    pics:[],
    product:[]
  }
  var sql="select * from midea_product_cmy where lid=?";
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
//功能3：商品详情页5
app.get("/details5",(req,res)=>{
  var lid=req.query.lid;
  var progress=0;
  var obj={
    pics:[],
    product:[]
  }
  var sql="select * from midea_product_jsj where lid=?";
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
//功能四验证登陆用户名是否存在
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
       res.send({code:1,msg:"用户名已存在"});

     }
  });
 })

 //功能五：用户注册
 app.post('/register',(req,res)=>{
  var uname=req.body.uname;
  var upwd=req.body.upwd;
  if(!uname){
    res.send({code:401,msg:'请检查用户名和密码，用户名和密码不能为空'});
	//阻止继续往后执行
    return;
  }
  if(!upwd){
    res.send({code:402,msg:'请检查用户名和密码，用户名和密码不能为空'});
	  return;
  }
  //执行SQL语句，将注册的数据插入到xz_user数据表中，成功响应 {code:200,msg:'register suc'}
  pool.query('INSERT INTO midea_user values (null,?,?,null,null,null,null,null)',[uname,upwd],(err,result)=>{
    if(err) throw err;
	//是否添加成功
	if(result.affectedRows>0){
	  res.send({code:200,msg:'register suc'});
	}else{
    res.send({code:-1,msg:"注册失败"});
  }
  });
});
//功能六：用户登陆
app.post("/login",(req,res)=>{
  //参数
  var uname = req.body.uname;
  var upwd = req.body.upwd;
  //sql
  var  sql = " SELECT uid FROM midea_user";
       sql+=" WHERE uname = ? AND upwd = ?";
  pool.query(sql,[uname,upwd],(err,result)=>{
     if(err)throw err;  
     if(result.length==0){
       res.send({code:-1,msg:"用户名或密码有误"});
     }else{
       //将用户登录凭证保存在服务器端 session对象中
       //console.log(result[0].uid)
       var id = result[0].uid;//获取当前用户id
       req.session.uid = id; //保存session
       console.log(id);
       res.send({code:1,msg:"登录成功"});
     }
  });
 })

 app.get("/add",(req,res)=>{
  //0:判断用户是否登录
  if(!req.session.uid){
    res.send({code:-1,msg:"请登录"})
    return;
  }else{
    res.send("你好")
  }
})
 //功能七：将商品添加购物车
 app.get("/addcart",(req,res)=>{
  //0:判断用户是否登录
  if(!req.session.uid){
    res.send({code:-1,msg:"请登录"})
    return;
  }
  //1:参数 pid count uid price
  var lid = parseInt(req.query.lid);
  var title=req.query.title;
  var color=req.query.color;
  var count=req.query.count;
  var img=req.query.img;
  var uid = req.session.uid;
  var price = parseInt(req.query.price);
  var sql =" SELECT id FROM midea_shoppingcart_item";
      sql+=" WHERE user_id = ? AND product_id = ?";
  pool.query(sql,[uid,lid],(err,result)=>{
    if(err)throw err; 
    if(result.length==0){
      console.log(1)
     var sql = ` INSERT INTO midea_shoppingcart_item`;
     sql+=` VALUES(null,null,${lid},${count},${price},${color},${title},${img})`;
    }else{
      var sql = ` UPDATE midea_shoppingcart_item`;
      sql+=` SET count=count+${count} WHERE lid=${lid}`;
      sql+=` AND uid = ${uid}`;
    }
    pool.query(sql,(err,result)=>{
      if(err)throw err;
      if(result.affectedRows > 0){
        res.send({code:1,msg:"添加成功"});
      }else{
        res.send({code:-1,msg:"添加失败"});
      }
    })
  })
});