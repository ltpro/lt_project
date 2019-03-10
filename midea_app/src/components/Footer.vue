<template>
  <footer>
        <div class="footer_inner">
            <div class="inner">
            <ul>
                <li>                   
                    <a href=""><h3>商城入驻</h3></a>  
                </li>
                <li>
                    <a href=""><h3>服务条款</h3></a>    
                </li>
                <li>
                    <a href=""><h3>隐私政策</h3></a>    
                </li>
                <li>
                    <a href=""><h3>联系我们</h3></a>
                </li>
                <li>
                    <a href=""><h3>服务中心</h3></a>
                </li>
                <li>
                    <a href=""><h3>帮助支持</h3></a>  
                </li>
            </ul>
            </div>
            <div class="midea_copy"> 
                Copyright © 1968-2019 广东美的网络科技有限公司 <a href="">粤ICP备17058257号</a>
                <a href=""><img src="../../public/img/footer/gongan.jpg" alt=""></a>
                <a href="">粤公网安备 44060602000546号</a>
            </div>
        </div>
    </footer>
</template>

<script>
  export default {
  }
</script>

<style scoped>
        footer{
            background:#fff;          
            clear:both;
            width:100%;
            position: relative;
            top:120px;
            height:200px;
        }
        footer>.footer_inner{
            width:1200px;
            margin:0 auto;
        }
        footer>.footer_inner>.inner{
            height:42px;
            list-style:none;  
            margin-bottom:25px;
            margin-top:25px;
            border-top: 1px solid #e0e0e0;
            border-bottom: 1px solid #e0e0e0;
        }
        footer>.footer_inner>.inner>ul{
            list-style:none;
            float:left;
            }
        footer>.footer_inner>.inner>ul>li{
            float:left;
            margin-left:120px;
        }
        footer>.footer_inner>.inner>ul>li>a{
            text-decoration:none;
            color:#333;
            
            
        }
        footer>.footer_inner>.inner>ul>li>a>h3{
            padding: 15px 0;
            font-size: 14px;
            line-height: 12px;
            font-weight:normal;
        }
        footer>.footer_inner>.inner>ul>li>a>h3:hover{color:red}
        footer>.footer_inner>.midea_copy{
            clear:both;
            text-align:center;
            height:50px;
            margin-top:20px;
            color:#999;
        }
        footer>.footer_inner>.midea_copy>a{
            text-decoration:none;
            color:#999;
        }
        footer>.footer_inner>.midea_copy>a:hover{color:red}
</style>