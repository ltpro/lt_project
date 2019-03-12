<template>
<div>
  <div id="header">
        <div class="inner">
            <a class="midea_logo" href="//www.midea.cn/?mtag=40005.1.10" title="美的"><img src="../../public/img/header/midea_logo.png" alt=""></a>
            <ul class="nav">
                <li class="item">
                    <router-link to="/">首页</router-link>
                </li>
                <li class="item">
                    <a href="javascript:;">商家入驻</a>
                </li>
                <li class="item">
                    <a href="javascript:;">企业采购</a>
                </li>
                <li class="item">
                    <a href="javascript:;">全屋家电套购</a>
                </li>
                <li class="item">
                    <a href="javascript:;">会员福利社</a>
                </li>
            </ul>
        </div>
        <div class="search_wrap">
            <form action="">
                <input type="search" name="keyword" placeholder="请搜索商品">
                <a href="javascript:;">
                    <i class="search_i"></i>
                </a>
            </form>
        </div>
        <div  class="myphone">
            <div class="login_in" data-head="dropdown">
                <a href="javascript:;" alt="手机扫码登录">
                    <i class="icon_phone"></i>
                </a>
            </div>
            <div class="wx_wrap head_m">
                <img src="../../public/img/header/header_qr_app.png" alt="">
            </div>
        </div>
        <div class="mycart"> 
            <div class="login_in" data-head="dropdown">
                <router-link to="/shopcart" alt="购物车"  target="_blank">
                    <i class="icon_cart"></i>
                    <span class="cart_count">1</span>
                </router-link>
            </div>
             <div class="cart_wrap head_m">
                <span>立即</span><router-link to="/login">登录</router-link><span>,查看购物车商品</span>
            </div>     
        </div>
        <div  class="login">   
            <div class="login_in" data-head="dropdown">
                <router-link to="/login">
                    <i class="icon_login"></i><span class="login_text">登录</span>
                </router-link>
            </div>
            <div class="login_wra head_m">
                <div class="row_login">
                    <a href="javascript:;" target="blank">
                        <i class="icon_a"></i>
                        <span>我的订单</span>
                    </a>
                </div>
                <div class="row_login">
                    <a href="javascript:;" target="blank">
                        <i class="icon_b"></i>
                        <span>我的优惠券</span>
                    </a>
                </div>
                <div class="row_login">
                    <a href="javascript:;" target="blank">
                        <i class="icon_c"></i>
                        <span>会员福利社</span>
                    </a>
                </div>
                <div class="row_login">
                    <a href="javascript:;" target="blank">
                        <i class="icon_d"></i>
                        <span>我的权益</span>
                    </a>
                </div>
                <div class="row_login">
                    <a href="javascript:;" target="blank">
                        <i class="icon_e"></i>
                        <span>我的美的</span>
                    </a>
                </div>
                <div class="row_login">
                    <a href="javascript:;" target="blank">
                    <i class="icon_f"></i>
                        <span>账户设置</span>
                    </a>
                </div>
            </div>
        </div>   
    </div>
    <div class="operation_wrap">
        【通知消息】
    </div>      
</div>    
</template>

<script>
  export default {
      data(){
          return {
            isLogin1:true
          }
      },
      methods: {
          e_enter(bool){
            this.isLogin1=bool;
          },
          e_leave(bool){
            this.isLogin1=bool;
          }
      },
      created() {
          
      },
      mounted(){
        $(".head_m").hide();
        $("[data-head=dropdown]").each(function(i,elem){
            var $elem=$(elem);
            $elem.parent().mouseover(function(){
                $elem.next().show();
            })
            .mouseout(function(){
                $elem.next().hide();
            })
        })
        
      }
  }
</script>

<style scoped>
        #header{
            height:44px;
            margin:0 auto;
            position:relative;
            background:#0092d8;
        }
        .midea_logo{
            float:left;
            width: 120px;
            height: 44px;      
        }
        .nav{
            list-style:none;
            margin-left:150px;
        }
        .nav li.item{
            float:left;
            line-height:44px;
        }
        .nav .item a{
            display:block;
            text-decoration:none;
            padding:0 30px;
            font-family:\5FAE\8F6F\96C5\9ED1;
            height: 44px;
            line-height: 44px;
            color: #a3c3e6;
            font-size: 12px;
        }
        #header>.inner>.nav>.item>a:hover{color:#fff;}
        #header>.search_wrap{
            width:250px;
            height:44px;
            clear:left;
            position: absolute;
            top:0;
            right:218px;
            background:white;
        }
        #header>.search_wrap>form>input{
            width:100%;
            height:44px;
            line-height: 44px;
            padding: 0 10px 0 35px;
            border: 0 none;
            border-bottom: 1px solid #e0e0e0;
            border-radius: 0;
        }
        #header>.search_wrap>form>a>i.search_i{
            background:url(../../public/img/header/search.png) no-repeat 0px 0px;
            position:absolute;
            top:6px;
            right:219px;
            width:25px;
            height:25px;
            display:block;
        } 
        #header .myphone,.mycart,.login{
            position:absolute;
            height:44px;
        }
        #header .myphone{
            width:65px;
            right:153px;
        }
        #header .mycart{
            width:65px;
            right:89px;
        }
        #header .login{
            width:86px;
            right:0px;
        }
        #header .myphone:hover,#header .mycart:hover,#header .login:hover{
            background:#006fa3;
        }
        .inform{
            width:100%;
            height:16px;
            font-size: 12px;
            background: rgb(0, 59, 102);
            line-height: 16px;
            color: rgb(255, 255, 255);
            text-align: center;
            padding: 4px;
        }
        #header>div>a{text-decoration:none}
        .login_in i{
            position:absolute;
            width:20px;
            height:20px;
            display:block;
        }
        .login_in .cart_count{
            position:absolute;
            top:13px;
            right:12px;
            color: #fff;
            font-size:14px;
        }
        #header .myphone a>i.icon_phone{  
            background:url(../../public/img/header/index_sprite.png) no-repeat -118px -213px;
        }
        #header .mycart a>i.icon_cart{  
            background:url(../../public/img/header/index_sprite.png) no-repeat -146px -213px;
        }
        #header .login a>i.icon_login{  
            background:url(../../public/img/header/index_sprite.png) no-repeat -37px -213px;
        }
        #header .myphone a>.icon_phone{
            top:10px;
            right:24px;
        }
        #header .mycart a>.icon_cart{
            top:10px;
            right:24px;
        }
        #header .login a>.icon_login{
            top:10px;
            right:58px;
        }
        .login_text{
            position:absolute;
            top:14px;
            right:20px;
            color:#fff;
        }
        .operation_wrap{
            overflow: hidden;
            display: block;
            font-size: 12px;
            background: rgb(0, 59, 102);
            line-height: 16px;
            color: rgb(255, 255, 255);
            text-align: center;
            padding: 4px;
        }
        /*头部隐藏元素的样式*/
        .wx_wrap{
            background: #fff;
            position: absolute;
            z-index:30;
            border-top: 0 none;
            top:44px;
            left:auto;
            right:-60px;
        }
        .cart_wrap{
            background: #fff;
            border:1px solid #e0e0e0;
            position: absolute;
            z-index:30;
            border-top: 0 none;
            top: 44px;
            left: auto;
            right:-89px;
            width:300px;
            height:70px;
            line-height:70px;
            font-size:16px;
        }
        .cart_wrap a{
            color: #269bdb;
        }
        .login_wra{
            top: 44px;
            left: auto;
            right: 0;
            width: 291px;
            background: #fff;
            position: absolute;
            margin-left: 302px;
            z-index:30;
            border: 1px solid #d6d6d6;
            border-top: 0 none;
            text-align:left;
        }
        .login_wra .row_login{
            height: 48px;
            line-height: 48px;
            border-bottom: 1px solid #eeeeee;
            position: relative;
        }
        .row_login:hover{
            background:#e3e3e3;
        }
        .row_login i{
            display:inline-block;
            width: 12px;
            height: 12px;
            margin: 0 10px 0 20px;
            position: relative;
            top: 2px;
        }
        .row_login .icon_a{
            background:url(../../public/img/header/atom_sprite.png) no-repeat -284px -44px;
        }
        .row_login .icon_b{
            background:url(../../public/img/header/atom_sprite.png) no-repeat -244px -84px;
        }
        .row_login .icon_c{
            background:url(../../public/img/header/atom_sprite.png) no-repeat -284px -23px;
        }
        .row_login .icon_d{
            background:url(../../public/img/header/atom_sprite.png) no-repeat -208px -85px;
        }
        .row_login .icon_e{
            background:url(../../public/img/header/atom_sprite.png) no-repeat -64px -24px;
        }
        .row_login .icon_f{
            background:url(../../public/img/header/atom_sprite.png) no-repeat -224px -84px;
        }
</style>