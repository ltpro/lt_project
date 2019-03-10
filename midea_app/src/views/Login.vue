<template>
    <div class="login_page">
        <div class="login_wrap">
            <a href="" class="bg_img">
                <img src="../../public/img/login/81eecc43e29f.webp" alt="">
            </a>
            <div class="login_inner">
                <div class="login" v-show="isLogin==false">
                    <div class="login_way">
                        <p>使用合作号登陆</p>
                        <a href="">
                            <i class="icon_qq"></i>
                        </a>
                        <a href="">
                            <i class="icon_wx"></i>
                        </a>
                    </div>
                    <div class="login_type">
                        <div class="login_form">
                            <form action="">
                                <div class="login_form_tit">账号密码登陆</div>
                                <div class="login_form_row">
                                    <input type="text" name="uname" placeholder="用户名">
                                </div>
                                <div class="login_form_row">
                                    <input type="password" placeholder="密码">
                                </div>
                                <div class="login_form_row">
                                    <a href="" class="login_btn">登陆</a>
                                </div>
                                <div class="login_links">
                                    <a href="" class="a1">短信验证登陆</a>
                                    <i>|</i>
                                    <a href="" class="a2" @click.prevent=register()>注册</a>
                                    <a href="" class="a3">找回密码</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="register" v-show="isLogin==true">
                    <div>
                        <form action="">
                            <div class="login_form_tit">欢迎注册</div>
                            <div class="login_form_row">
                                <input type="text" placeholder="用户名为数字或字母长度小于13位" name="uname" v-model="name1" maxlength="13" @blur="myBlur()">
                                <span>{{text}}</span>
                            </div>
                            <div class="login_form_row">
                                <input type="password" placeholder="密码" name="upwd" @blur="myupwd()">
                            </div>
                            <div class="login_form_row">
                                <input type="password" placeholder="确认密码" name="upwd" @blur="myupwd1()">
                            </div>
                            <div class="login_form_row">
                                <div>
                                    <span>密码长度必须在8位以上，含大小写字母、数字、符号至少两种</span>
                                </div>
                            </div>
                            <div class="login_form_row">
                                <div class="select">
                                    <input type="checkbox" name="register_protocol" id="register_protocol">
                                    <label for="register_protocol">
                                        <span>同意
                                            <a href="">《美的官方商城用户注册协议》</a>
                                        </span>
                                    </label>
                                </div>
                            </div>
                            <div class="login_form_row">
                                <a href="" class="login_btn" @click.prevent=login()>注册</a>
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
            isLogin:false,
            text:"",
            name1:""
        }
    },
    methods:{
        register(){
            this.isLogin=true;
        },
        login(){
            this.isLogin=false;
        },
        myBlur(){
            var a=/^[a-z]+$/;//小写字母组成
            if (!this.name1) this.text='用户名不能为空';
            else if(!a.test(this.name1)){
                            this.text="由小写字母组成"
            }else{
                var u=this.name1;
                var url = "http://localhost:3000/";
                url+="login?uname="+u;
                this.axios.get(url).then(result=>{
          if(result.data.code==1){
            //发送发送ajax请求获取购物车商品数量
            //立即更新 updateCount();
            this.text="用户名已存在"
          }else{
            this.text="可以注册"
          }
                })
            }
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
    
</style>

