<template>
    <div class="login_page">
        <div class="login_wrap">
            <a href="javascript:;" class="bg_img">
                <img src="../../public/img/login/81eecc43e29f.webp" alt="">
            </a>
            <div class="login_inner">
                <div class="register">
                    <div>
                        <form>
                            <div class="login_form_tit">欢迎注册</div>
                            <div class="login_form_row">
                                <input type="text" placeholder="用户名为数字或字母长度6-13位" name="uname" v-model="uname" minlength="6" maxlength="13" @blur="myname()">
                                <span class="yanzheng">{{yz_name}}</span>
                            </div>
                            <div class="login_form_row">
                                <input type="password" placeholder="密码" name="upwd" @blur="myupwd()" v-model="upwd">
                                <span class="yanzheng">{{yz_pwd}}</span>
                            </div>
                            <div class="login_form_row">
                                <input type="password" placeholder="确认密码" name="upwd1" @blur="myupwd1()" v-model="upwd1">
                                <span class="yanzheng">{{yz_pwd1}}</span>
                            </div>
                            <div class="login_form_row">
                                <div>
                                    <span>密码长度必须在8位以上，含大小写字母、数字、符号至少两种</span>
                                </div>
                            </div>
                            <div class="login_form_row">
                                <div class="select">
                                    <input type="checkbox" name="register_protocol" class="choose" v-model="agree">
                                    <label for="register_protocol">
                                        <span>同意
                                            <a href="javascript:;">《美的官方商城用户注册协议》</a><span class="yanzheng">同意才能注册</span>
                                        </span>
                                    </label>
                                </div>
                            </div>
                            <div class="login_form_row">
                                <input type="button" value="注册" class="login_btn" @click="register()" :disabled="!agree">
                            </div>
                            <div class="mod_layer" v-show="isRegister">
                                    <div class="mod_layer_aa">
                                      <i class="login_icon1"></i>
                                      <p>注册成功</p>
                                    </div>
                                    <div class="mod_layer_bb">
                                      <router-link to="/login" class="hid">去登陆</router-link>
                                      <a href="" class="hid" @click.prevent="register1()">留在本页</a>
                                    </div>
                            </div>    
                        </form>
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
            
            yz_name:"",
            yz_pwd:"",
            yz_pwd1:"",
            agree:false,
            uname:"",
            upwd:"",
            upwd1:"",
            isRegister:false,
        }
    },
    methods:{
        register(){
               var postData = this.qs.stringify({
                    uname:this.uname,
                    upwd:this.upwd
            });
        var url = "http://localhost:3000/";
            url+="register";
        this.axios.post(url,postData).then(result=>{
          if(result.data.code==200){
              this.isRegister=true   
          }else{
              alert(result.data.msg)
          }
        });
    }, 
        myname(){
            var a=/^[a-z]|[0-9]$/;//数字和字母组成
            if (!this.uname) this.yz_name='用户名不能为空';
            else if(!a.test(this.uname)){
                            this.yz_name="由数字或字母组成"
            }else{
                var u=this.uname;
                var url = "http://localhost:3000/";
                url+="login?uname="+u;
                this.axios.get(url).then(result=>{
          if(result.data.code==1){
            //发送发送ajax请求获取购物车商品数量
            //立即更新 updateCount();
            this.yz_name="用户名已存在,不能使用"
          }else{
            this.yz_name=""
                    }
                })
            }   
        },
        myupwd(){
            var upwd=this.upwd.trim();
            if(!this.upwd) this.yz_pwd="密码不能为空"
            else if(this.upwd.length<8||upwd.length>16){
                this.yz_pwd="密码长度为8-16位"
            }else{
            var count=0;
             if(/[0-9]/.test(upwd)){
                count++;
            }
            if(/[A-Za-z]/.test(upwd))
            {
                count++;
            }
            if(count==2)
            {
                this.yz_pwd="";
            }else{
                this.yz_pwd="密码不符合要求至少包含两种字符";
            }
            }
        }, 
        myupwd1(){
            if(this.upwd!=this.upwd1){
                this.yz_pwd1="两次密码不一致，请检查！"
            }else{
                this.yz_pwd1=""
            }
        },
        register1(){
            this.isRegister=false;
            this.uname="";
            this.upwd="";
            this.upwd1="";
            this.agree=false;
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
    input.login_btn {
        display: block;
        width: 300px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        background-color: #0092d8;
        color: #fff;
        font-size:18px;
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
    .yanzheng{
        font-size:14px;
        color:red;
    }
</style>

