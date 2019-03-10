<template>
    <div class="cart_wrap">
        <div class="cart_top">
            <div class="cart_top_inner">
                <h3>购物车</h3>
            </div>  
        </div>
        <div class="cart_body">
            <div class="cart_detail">
                <ul class="cart_title_wrap">
                    <li class="cart_a">
                        <input type="checkbox" name="" value="">
                        <span>全选</span>
                    </li>
                    <li class="cart_b">商品信息</li>
                    <li class="cart_c">规格</li>
                    <li class="cart_d">单价(元)</li>
                    <li class="cart_e">数量</li>
                    <li class="cart_f">小计(元)</li>
                    <li class="cart_g">操作</li>
                </ul>
                <div class="cart_list">
                    <div class="cart_item">
                        <div class="item_title">
                            <i class="icon_shop"></i>
                            <span>美的官网商城</span>
                        </div>
                        <div class="item_detail">
                            <div class="check_a">
                                <input type="checkbox" name="" value="">
                            </div>
                            <div class="detail_a">
                                <img src="../../public/img/details/1s1_78eeae9d72720a97A25859_120_120.webp" alt="">
                            </div>
                            <div class="detail_b">
                                <a href=""> 空调 变频大1.5匹 一级能效 智能冷暖 KFR-35GW/WXDA1@         
                                </a>
                            </div>
                            <div class="detail_c">
                                <p>白色</p>
                                <p>大1.5匹</p>
                            </div>
                            <div class="detail_d">
                                <h3>3299.00</h3>
                            </div>
                            <div class="detail_e">
                                <span class="cart_num">3</span>
                                <span class="d_sum">8997.00</span>
                            </div>
                            <div class="detail_f">
                                <h3>删除</h3>
                            </div>
                        </div>  
                    </div>    
                </div>
                <div class="cart_bottom_wrap">
                    <div class="cart_bottom">
                        <div class="cart_right">
                            <a href="" class="balance1 cart_d">去结算</a>
                            <h2 class="sum1 cart_d">合计：</h2>  
                        </div>
                    </div>
                </div>
            </div>          
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {}
    }
}
</script>
<style scoped>
    .cart_wrap{
        position: relative;
        padding-bottom: 70px;
    }
    .cart_top{
        overflow:hidden;
        background-color: #fff;
        border-bottom: 1px solid #e9e9e9;
        margin-bottom: 20px;
    }
    .cart_top_inner{
        width: 1200px;
        margin: 0 auto;  
    }
    .cart_top h3{
        float: left;
        font-size: 32px;
        line-height: 80px;
        color: #333;
        font-weight: normal;
    }
    .cart_body {
        width: 1200px;
        margin: 0 auto;
    }
    .cart_detail{
        width:1200px;
    }
    .cart_title_wrap{
        border: 1px solid #e9e9e9;
        background-color: #fafafa;
        height: 40px;
        line-height:40px;
        color: #aaa;
    }
    .cart_title_wrap li{
        float:left;
    }
    .cart_a{
        width: 114px;
        padding: 0 10px 0 20px;
        color: #333;
    }
    .cart_b{
        width:315px;
    }
    .cart_c,.cart_d,.cart_e,.cart_f{
        width:160px;
    }
    .cart_g{
        width:99px;
    }
    .cart_a>input{
        width:16px;
        height:16px;
        display:inline-block;
        margin-right:5px;
        position: relative;
        top:3px;
    }
    .cart_item {
        border: 1px solid #ccc;
        margin-top: 20px;
        text-align:left;
    }
    .cart_list .item_title {
        background-color: #fafafa;
        height: 40px;
        line-height: 40px;
        padding-left: 20px;
    }
    .item_title i{
        display:inline-block;
        width:18px;
        height:18px;
        background:url(../../public/img/xtb/cart_sprite.png) no-repeat -18px -72px;
        margin-right:10px;
        margin-top:4px;
        position: relative;
        top:4px;
    }
    .item_detail{
        position: relative;
        background-color: #fff;
        border-top: 1px solid #ccc;
        color: #333;
        font-size: 12px;
        line-height: 18px;
        overflow: hidden;
        background-color: #fffceb;
    }
    .item_detail>div{
        float: left;
    }
    .check_a input{
        width:16px;
        height:16px;
        margin-right:10px;
        position:relative;
        top:22px;
        left:80px;
    }
    .detail_a{
        width:90px;
        padding: 20px 0;
        margin-left:130px;
    }
    .detail_a img{
        width: 78px;
        height: 78px;
        border: 1px solid #eee;
    }
    .detail_b{
        width: 225px;
        padding-right: 90px;
        padding-left: 0;
        height: 16px;
        overflow: hidden;
        padding: 20px 0;
        margin-left:10px;
    }
    .detail_b a{color:#333;}
    .detail_c,.detail_d,.detail_e{
        padding: 20px 0;
        width:160px;    
    }
    .detail_c{
         margin-left:39px;    
    }
    .detail_e{
        width:220px;
    }
    .detail_e .cart_num{
        display:inline-block;
        margin-left:14px;
    }
    .detail_e .d_sum{
        display:inline-block;
        margin-left:135px;
        color: #f60;
        font-size:14px;
        font-weight:bold;
    }
    .detail_f{
        width:60px;
        padding: 20px 0; 
        margin-left:64px;
    }
    .cart_bottom_wrap {
        width: 100%;
        margin: 0 auto;
    }
    .cart_bottom {
        width: 100%;
        max-width: 1188px;
        height: 60px;
        margin-top: 10px;
        padding-left: 10px;
        background-color: #fafafa;
        border: 1px solid #e9e9e9;
        position: relative;
    }
    .cart_right{
        float:right;
    }
    .cart_right a{
        display:block;
        font-size:18px;
        width:160px;
        height:60px;
        background-color: #f60;
        color:#fff;
        font-weight:bold;
        line-height:60px;
    }
    .cart_right h2{
        line-height:60px;
        margin-right:30px;
    }
    .cart_d{
        float:right;
    }
</style>

