<template>
    <div class="login_page">
        <div class="login_wrap">
            <a href="javascript:;" class="bg_img">
                <img src="../../public/img/login/81eecc43e29f.webp" alt="">
            </a>
            <div class="login_inner">
                <div class="login">
                    <div class="login_way">
                        <p>使用合作号登陆</p>
                        <a href="javascript:;">
                            <i class="icon_qq"></i>
                        </a>
                        <a href="javascript:;">
                            <i class="icon_wx"></i>
                        </a>
                    </div>
                    <div class="login_type">
                        <div class="login_form">
                            <form>
                                <div class="login_form_tit" @click="app()">账号密码登陆</div>
                                <div class="login_form_row">
                                    <input type="text" name="uname" placeholder="用户名" v-model="uname" @blur="username()" minlength="6" maxlength="13">
                                    <span class="yanzheng">{{yz_uname}}</span>
                                </div>
                                <div class="login_form_row">
                                    <input type="password" placeholder="密码" v-model="upwd" @blur="password()" @keyup.13="login()">
                                    <span class="yanzheng">{{yz_upwd}}</span>
                                </div>
                                <div class="login_form_row">
                                    <a href="" class="login_btn" @click.prevent="login()" >登陆</a>
                                </div>
                                <div class="login_links">
                                    <a href="javascript:;" class="a1" @click.prevent="addcart()">短信验证登陆</a>
                                    <i>|</i>
                                    <router-link to="/register" class="a2">注册</router-link>
                                    <a href="javascript:;" class="a3">找回密码</a>
                                </div>
                                <div class="mod_layer" v-show="isLogin">
                                    <div class="mod_layer_aa">
                                      <i class="login_icon1"></i>
                                      <p>登陆成功</p>
                                    </div>
                                    <div class="mod_layer_bb">
                                      <router-link to="/" class="hid">去主页</router-link>
                                      <a href="" class="hid" @click.prevent="register1()">留在本页</a>
                                    </div>
                                </div>   
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data:function(){
        return {
            uname:"",
            upwd:"",
            yz_uname:"",
            yz_upwd:"",
            isLogin:false
        }
    },
    methods:{
        addcart(){
    this.axios.get("http://localhost:3000/add").then((result)=>{
      if(result.data.code==-1){
        alert("请登录")
      }else{
        alert("欢迎光临")
      }
    })
  },
        app(){
            this.axios.get("http://localhost:3000/yanzheng").then(result=>{
                if(result.data.code==-1){
                    alert("请登录")
                }else{
                    alert("欢迎来到本网页")
                }
            })
        },
       username(){
          if(!this.uname){this.yz_uname="用户名不能为空"}
          else{this.yz_uname=""}
       },
       password(){
           if(!this.upwd){this.yz_upwd="密码不能为空"}
           else(this.yz_upwd="")
       },
       login(){
           if(!this.uname){
               this.yz_uname="用户名不能为空"
               return;
            }
            if(!this.upwd){
                this.yz_upwd="密码不能为空"
                return;
            }
            var postData = this.qs.stringify({
                    uname:this.uname,
                    upwd:this.upwd
            });
            //3.发送ajax请求
            var url="http://127.0.0.1:3000/";
            url+="login";
            this.axios.post(url,postData).then(result=>{
                if(result.data.code==1){
                    //发送ajax请求获取购物车数量
                    //立即更新 updateCount()
                    this.isLogin=true
                }else{
                    alert(result.data.msg)
                }
        })
       },
       register1(){
            this.isLogin=false;
            this.uname="";
            this.upwd="";
        }
    }
}
</script>
<style>
   .login_page{
        background:#fff;
   }
   .login_wrap{
        width: 1190px;
        margin: 0 auto;
        position: relative;
        height: 700px;
   }
   .login_wrap .bg_img{
        position: absolute;
        right: 520px;
        top: 66px;
        width: 560px;
        height: 485px;
        line-height: 485px;
   }
   .login_wrap img{
        margin: auto;
        vertical-align: middle;
        max-height: 485px;
   }
   .login_inner{
       position:relative;
        top: 0;
        right: 0;
        float: right;
        width: 300px;
        padding: 29px 38px 38px;
        margin: 66px 100px 0px 0px;
        background-color: #fff;
        border: 1px solid #d6d6d6;
        box-shadow: 0 0 4px 0 #d6d6d6;
        border-radius: 2px;
        min-height: 412px;
   }
   .login{
       position: absolute;
   }
   .login_way{
       padding-bottom:20px;
       text-align:left;
   }
   .login_way p{
       margin-bottom: 15px;
       font-size: 20px;
   }
   .login_way a{
       display:inline-block;
       width:48px;
       height:48px;
       margin-right:25px;
   }
   .login_way .icon_qq,.icon_wx{
       display: inline-block;
       width:49px;
       height: 48px;
       
   }
   .icon_qq{
       background:url(../../public/img/login/login.png) no-repeat 0px 0px;
   }
   .icon_wx{
       background:url(../../public/img/login/login.png) no-repeat -57px 0px;
   }
   .login_type{
        border-top: #eeeeee solid 1px;
        text-align:left;
   }
   .login_form_tit {
        margin-top: 20px;
        margin-bottom: 15px;
        font-size: 20px;
    }
    .login_form_row {
        position: relative;
        clear: both;
        margin: 10px 0 10px 0;
    }
    .login_form_row input {
        display: block;
        width: 288px;
        height: 38px;
        line-height: 38px;
        padding-left: 10px;
        border: 1px solid #c8c8c8;
        border-radius: 2px;
        background: transparent;
    }
    .login_btn {
        display: block;
        width: 300px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        background-color: #0092d8;
        color: #fff;
        margin: 20px 0 17px 0;
        border-radius: 2px;
        transition: all .2s ease-in-out;
    }
    .login_links{
        position: relative;
    }
    .login_links a{
        color:#999;
        font-size:14px;
        margin-right:14px;
    }
    .login_links .a2{
        margin-left:13px;
    }
    .login_links .a3{
        margin-left:87px;
    }
    .login_links i{
        position: absolute;
        right:200px;
        top:1px;
        margin-right:9px;
    }
    .register{
        text-align:left;
        position: absolute;
    }
    .select{
        height:40px;
    }
    .select>input{
        display:block;
        float: left;
        width:18px;
        height:18px;
        margin-top:2px;
        margin-right:5px;
    }
    .select label{
        line-height: 20px;
    }
    .mod_layer{
        position: fixed;
        width:360px;
        height:200px;
        top: 50%;
        left: 50%;
        z-index:1000;
        background: #fff;
        border-radius: 2px;
        margin-top: -100px;
        margin-left: -180px;
  }
  .mod_layer_aa{
        padding: 60px 50px;
        text-align: center;
        font-size: 14px;
        position: relative;
    }
    .mod_layer_bb{
      border-top: 1px solid #e6e6e6;
    }
    .mod_layer_bb .hid{
        padding: 17px 0;
        font-size: 12px;
        color: #08c;
        text-align: center;
        float: left;
        display: block;
        width: 50%;
        min-width: 30%;
        cursor: pointer;
    }
    .mod_layer_aa .login_icon1{
        position: absolute;
        display:inline-block;
        width:48px;
        height:48px;
        left: 50px;
        top: 50%;
        margin-top: -25px;
        background:url(../../public/img/xtb/layer_ico.png) no-repeat 0px 0px;
    }
    .mod_layer_aa p{
        padding-left: 70px;
        text-align: left;
        font-size:18px;
    }
</style>

