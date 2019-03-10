<template>
    <div class="detail_wrap">
      <div class="crumb_wrap">
        <div class="crumb">
          <a href="#">首页</a>
          <a href="#">空调</a>
          <a href="javascript:void(0)">KFR-35GW/WXDA1@</a>
        </div>
      </div>
      <div class="product_wrap">
        <div class="product_left">
          <div>
          <img :src="pics[i].md" alt="" class="showcase_inner">
          <div class="mask" :style="maskStyle" v-show="show"></div>
          <div class="showcase" @mouseover="toggle(true)" @mouseout="toggle(false)" @mousemove="dong($event)">
          </div>
          <div class="zoom_pic"  v-show="show" :style="{'background-image':`url(${pics[i].lg})`,'background-position':bgPosition}"></div>  
          </div>
          <ul class="thumbnails">
            <li :key="index" v-for="(p,index) of pics" :style="{'bor' :index===i}" ><a href=""><img :src="p.sm" alt="" @mouseover="change(index)"></a></li>
          </ul>
          <div class="share_collect">
            <div class="share_kits">
              <span>分享到</span>
              <div class="share_wrap">
                <a href="#" class="bds_qq icon"></a>
                <a href="#" class="bds_weixin icon"></a>
              </div>
            </div>
            <div class="collect_wrap">
              <i class="icon_1 icon"></i>
              <span class="collect_text1">收藏</span>
              <i class="icon_2 icon"></i>
              <span class="collect_text2">对比</span>
            </div>
          </div>
        </div>
        <div class="product_right">
          <h1>空调 变频大1.5匹 一级能效 智能冷暖 KFR-35GW/WXDA1@</h1>
          <h5><span>急速保价</span>1级能效，美居+京东直连，微信控制（可AIRKISS配网），蓝色时尚装饰块，大导风板，上下左右自动摆风</h5>
          <div class="floor_price">
            <div class="price_wrap">
              <p><span>¥</span>3299.00</p>
            </div>
          </div>
          <div class="floor_comment">
            <div class="comment1">
              <span class="icon1">优惠</span>
              <span class="icon2">送积分</span>
              <span class="icon3">最高送329积分</span>
            </div>
            <div class="comment2">
              <h3 class="icon1">领劵</h3>
              <div>
                <i class="c_icon1"></i>
                <span class="icon2">满减100</span>
                <span class="icon3">领取</span>
                <i class="c_icon2"></i>
              </div>
            </div>
            <div class="comment3">
              <h3>领劵</h3>
              <div class="com_list">
                <span>服务非常满意(409)</span>
                <span>很满意(223)</span>
                <span>服务非常满(160)</span>
              </div>
            </div>
          </div>
          <div class="sku">
            <div class="sku_wrap1">
              <h3>颜色</h3>
              <div class="wrap">
                <span>
                  <img src="../../public/img/xtb/xt_78eeae9d72720a97A25859_120_120.webp" alt="白色">
                  <span>白色</span>
                </span>
              </div>
            </div>
            <div class="sku_wrap2">
              <h3>规格</h3>
              <div>
                <span>大1.5匹</span>
              </div>
            </div>
            <div class="sku_wrap3">
              <h3>数量</h3>
              <div class="num_wrap">
                <button>-</button>
                <input type="tel" id="num" value="1" pattern="[0-9]">
                <button>+</button>
                <div>
                  <span>库存</span>
                </div>
              </div>
            </div>
            <div class="sku_wrap4">
              <h3>配送</h3>
              <div class="address_wrap">
                <select name="address" id="address_list">
                  <option value="">北京</option>
                  <option value="">西安</option>
                  <option value="">上海</option>
                  <option value="">广州</option>
                </select>
              </div>
              <span>有货</span>
            </div>
            <div class="sku_wrap5">
              <h3>花呗分期</h3>
              <div class="fenqi_wrap">
                <div class="fenqi_title">该商品支持分期支付</div>
                <div class="fenqi_content">
                  <div class="fenqi_item">
                    <p>¥1124.96*3期</p>
                    <p>（含手续费）</p>
                  </div>
                  <div class="fenqi_item">
                    <p>¥574.58*6期</p>
                    <p>（含手续费）</p>
                  </div>
                  <div class="fenqi_item">
                    <p>¥295.54*12期</p>
                    <p>（含手续费）</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="sku_wrap6">
              <h3>供应商</h3>
              <span>美的官网商城</span>
            </div>
          </div>
          <div class="floor_btn">
            <a href="#" class="btn1">加入购物车</a>
            <a href="#" class="btn2">立即购买</a>
          </div>
          <div class="floor_service">
            <div class="inner">
              <span class="icon"></span>
              <span class="icon1">美的唯一官方商城</span>
            </div>
            <div class="inner">
              <span class="icon"></span>
              <span class="icon1">全国联保</span>
            </div>
            <div class="inner">
              <span class="icon"></span>
              <span class="icon1">全场包邮</span>
            </div>
          </div>
        </div>      
      </div>
      <div class="recommend_wrap">
        <div class="recommend_nav">
          <div class="nav_item">为你推荐</div>
        </div>
        <div class="recommend_list">
          <div class="recommend_item">
            <a href="#" class="pro_href">
              <img src="../../public/img/details/1w1_50856dcba7c0022aA3099_280_280.jpg" alt="" class="pro_img">
              <span class="pro_name" title="空调 大1.5匹 定频冷暖 阿里云智能 KFR-35GW/WCBD3@">空调 大1.5匹 定频冷暖 阿里云智能 KFR-35GW/WCBD3@</span>
              <span class="pro_price">¥2299.00</span>
              <div class="sku_tag">热卖</div>
            </a>
          </div>
          <div class="recommend_item">
            <a href="" class="pro_href">
              <img src="../../public/img/details/1w2_f2a39ec6e718993bA25622_280_280.jpg" alt="" class="pro_img">
              <span class="pro_name" title="变频大1匹 一级能效 智能冷暖挂机 KFR-26GW/WXDA1@">变频大1匹 一级能效 智能冷暖挂机 KFR-26GW/WXDA1@</span>
              <span class="pro_price">¥2999.00</span>
            </a>
          </div>
         
          <div class="recommend_item">
            <a href="" class="pro_href">
              <img src="../../public/img/details/1w3_dfaca082cc258ac6A8409_280_280.jpg" alt="" class="pro_img">
              <span class="pro_name" title="空调 变频大1.5匹 智能冷暖 KFR-35GW/WDAA3@">空调 变频大1.5匹 智能冷暖 KFR-35GW/WDAA3@</span>
              <span class="pro_price">¥2599.00</span>
              <div class="sku_tag">热卖</div>
            </a>
          </div>
          <div class="recommend_item">
            <a href="" class="pro_href">
              <img src="../../public/img/details/1w4_22b83abd690ad024A18349_280_280.jpg" alt="" class="pro_img">
              <span class="pro_name" title="空调 变频大1匹 智能冷暖挂机 KFR-26GW/WDAA3@">空调 变频大1匹 智能冷暖挂机 KFR-26GW/WDAA3@</span>
              <span class="pro_price">¥2299.00</span>
              <div class="sku_tag">热卖</div>
            </a>
          </div>
           <div class="recommend_item">
            <a href="" class="pro_href">
              <img src="../../public/img/details/1w5_79d047488eb5260cA22711_280_280.jpg" alt="" class="pro_img">
              <span class="pro_name" title="【速脆2.0】煎烤机 速脆技术 双面悬浮加热 智能分区菜单 深盘设计 MC-WJCN30H">【速脆2.0】煎烤机 速脆技术 双面悬浮加热 智能分区菜单 深盘设计 MC-WJCN30H</span>
              <span class="pro_price">¥259.00</span>
            </a>
          </div>
        </div>
      </div>
      <div class="tabs_nav">
        <div class="tabs_nav_inner"> 
          <div class="tabs_nav_wrap">
            <div class="tabs_left scrollclick" id="scrollclick1">
              <img src="../../public/img/xtb/xt_78eeae9d72720a97A25859_120_120.webp" alt="">
              <div class="tabs_product">
                <div class="tabs_product_name">空调 变频大1.5匹 一级能效 智能冷暖 KFR-35GW/WXDA1@</div>
                <div class="tabs_product_price">¥ 3299.00</div>
              </div>
            </div>
            <div class="tabs_right scrollclick" id="scrollclick2">
              <a href="">立即购买</a>
            </div>
            <ul class="tabs_list">
              <li data-set="can" data-target="#tab1" class="active1">产品介绍</li>
              <li data-set="can" data-target="#tab2">
                评价<span>(579)</span>
              </li>
              <li data-set="can" data-target="#tab3">规格参数</li>
              <li data-set="can" data-target="#tab4">服务支持</li>
              <li data-set="can" data-target="#tab5">相关问题</li>
            </ul>
          </div>
          <div class="nav_inner"></div>
        </div>
      </div>
      <div class="tabs_content_wrap" id="section_tab">
        <div class="tabs_content adx" id="tab1">
          <div class="tabs_style">
            <img src="../../public/img/details/1d1_2ac8fde8cdc065d1A5616_790_.webp" alt="">
            <img src="../../public/img/details/1d2_d676a463fe108f55A30625_790_.webp" alt="">
            <img src="../../public/img/details/1d3_a21070db83dc15e3A14342_790_.webp" alt="">
          </div>
        </div>
        <div class="pingjia adx" id="tab2">
          <p>用户评价</p>
          <div>该商品未上线暂无评价</div>
        </div>
        <div class="tabs_sup adx" id="tab4">
          <div class="service_sec">
            <h3>美的官网服务与支持</h3>
            <img src="../../public/img/details/PC_30_01.webp" alt="">
          </div>
        </div>
        <div class="shouhou adx" id="tab5">
          <p>具体信息请联系售后</p>
        </div>
        <div class="product_spec adx" id="tab3">
          <div class="spec_wrap">
            <div class="spec_title">基本类型</div>
            <table class="spec_table">
              <tbody>
                <tr>
                  <td>品牌</td>
                  <td></td>
                </tr>
                <tr>
                  <td>颜色</td>
                  <td></td>
                </tr>
                <tr>
                  <td>上市日期</td>
                  <td>2016-05-01</td>
                </tr>
                <tr>
                  <td>产品型号</td>
                  <td></td>
                </tr>
                <tr>
                  <td>电源电压（V）</td>
                  <td></td>
                </tr>
                <tr>
                  <td>额定功率（W）</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="spec_wrap">
            <div class="spec_title">详细信息</div>
              <table class="spec_table">
                <tbody>
                  <tr>
                    <td>电源线长</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>集尘容积(L)</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>进风过滤</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>出风过滤</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>包胶滚轮</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>沉满指示</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>调速方式</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>操作方式</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>吸尘器类型</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>吸尘器功能</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>储尘类型</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>是否有线</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>暗音[db(A)]</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="spec_wrap">
            <div class="spec_title">包装信息</div>
            <table class="spec_table">
              <tbody>
                <tr>
                  <td>产品尺寸(mm)</td>
                  <td></td>
                </tr>
                <tr>
                  <td>产品净重(kg)</td>
                  <td></td>
                </tr>
                <tr>
                  <td>包装尺寸(mm)</td>
                  <td></td>
                </tr>
                <tr>
                  <td>包装重量(kg)</td>
                  <td></td>
                </tr>
                <tr>
                  <td>包装清单</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
          </div>
        </div>      
      <div id="detail_floating">
        <div class="item">
          <a href="">
            <i class="icon1"></i>
          </a>
        </div>
        <div class="item">
          <a href="">
            <i class="icon2"></i>
          </a>
        </div>
        <div class="item">
          <a href="">
            <i class="icon3"></i>
          </a>
        </div>
        <div class="item">
          <a href="">
            <i class="icon4"></i>
          </a>
        </div>
      </div>
    </div>    
</template>

<script>
export default {
  data(){
    return {
      pics:[
        {sm:require("../../public/img/details/1s1_78eeae9d72720a97A25859_120_120.webp"),md:require("../../public/img/details/1m1_78eeae9d72720a97A25859_530_530.webp"),lg:require("../../public/img/details/1l1_78eeae9d72720a97A25859.webp")},
        {sm:require("../../public/img/details/1s2_2ff9d9fcbff9d4fcA8430_120_120.webp"),md:require("../../public/img/details/1m2_2ff9d9fcbff9d4fcA8430_530_530.webp"),lg:require("../../public/img/details/1l2_2ff9d9fcbff9d4fcA8430.webp")},
        {sm:require("../../public/img/details/1s3_613deda569af56b8A25623_120_120.webp"),md:require("../../public/img/details/1m3_613deda569af56b8A25623_530_530.webp"),lg:require("../../public/img/details/1l3_613deda569af56b8A25623.webp")},
        {sm:require("../../public/img/details/1s4_e666eec19098dfdeA29769_120_120.webp"),md:require("../../public/img/details/1m4_e666eec19098dfdeA29769_530_530.webp"),lg:require("../../public/img/details/1l4_e666eec19098dfdeA29769.webp")},
        {sm:require("../../public/img/details/1s5_b6c97fb764c02f2aA25956_120_120.webp"),md:require("../../public/img/details/1m5_b6c97fb764c02f2aA25956_530_530.webp"),lg:require("../../public/img/details/1l5_b6c97fb764c02f2aA25956.webp")}
      ],
      specs:[],
      ulWidth:0,//小图片列表的宽
      moved:0,//已经左移的li的个数
      i:0,//默认显示第几张图片
      show:false,//控制mask和lgDiv的显示和隐藏
      maskStyle:{
        top:0,
        left:0
      },
      bor:{border:"2px solid #f60"}
    }
  },
  computed:{
    bgPosition(){
      return `-${parseFloat(this.maskStyle.left)*12/5}px -${parseFloat(this.maskStyle.top)*12/5}px`
    },
    ulMarginLeft(){
      return this.moved*-62+"px"
    }
  },
  created(){
    //this.loadDetails();
  },
  methods:{
    dong(e){
      var top=e.offsetY-209/2;
      var left=e.offsetX-209/2;
      if(top<0) top=0;
      else if(top>291) top=291;
      if(left<0) left=0;
      else if(left>291) left=291;
      this.maskStyle.top=top+"px";
      this.maskStyle.left=left+"px";
    },
    toggle(bool){
      this.show=bool;
    },
    change(index){
      this.i=index;
    },
    loadDetails(){
      this.axios.get(
        "http://localhost:3000/details",{
          params:{
            lid:this.$route.params.lid
          }
        }
      ).then(res=>{
        console.log(res.data);
        this.product=res.data.product;
        this.pics=res.data.pics;
        this.ulWidth=this.pics.length*62+"px";
        this.moved=0;
        this.i=0;
        this.show=false;
        this.specs=res.data.specs;
      })
    }
  },
  watch:{
    /*"$route":function(){
      this.loadDetails();
    }*/
  },
  mounted(){
    $("#section_tab>div").hide();
    $("#tab1").show();
    $("[data-set=can]").each(function(i,item){
      var $elem=$(this);
      $elem.click(function(){
        var $id=$elem.attr("data-target");
        console.log($id);
        var $div=$($id);
        console.log($div);
        $div.css("display","block").siblings().css("display","none")
      })
    })
    //查找data-set属性为tab的所有元素
    /*var items=document.querySelectorAll(
     "[data-set=can]");
    //2. 绑定事件
    for(var item of items){//遍历每个标签
      //为当前tab绑定单击事件
      item.onclick=function(){
      var item=this;
      //3. 查找要修改的元素
      //4. 修改元素
      //查找id为container下的所有div
      var divs=document.querySelectorAll("#section_tab>div");
      for(var div of divs){//遍历每个div
      //清除当前div的display属性
      div.style.display="none";
      }
    //获得当前tab对应的div的id
    var id=item.getAttribute("data-target")
         //tab.dataset.target;
    //再找到当前tab对应的div
    var div=document.querySelector(id);
    div.style.display="block";//设置其display:block
    }
  }*/
  //点击详情、服务的列表背景颜色事件
  $("[data-set=can]").click(function(){
    $(this).addClass("active1").siblings().removeClass("active1")
  })
  //鼠标滚动事件
  var $top=$(".scrollclick");
  window.onscroll=function(){
    var scrollTop=document.body.scrollTop
    ||document.documentElement.scrollTop;
    if(scrollTop>=1200){
      $top.css("display","block")
    }else{
      $top.css("display","none")
    }
  }
  }
}
</script>

<style scoped>
  .crumb_wrap {
    border-bottom: 1px solid #eee;
  } 
  .crumb {
    width: 1190px;
    margin: 11px auto 10px auto;
    height: 20px;
  }
  .crumb a{
    display:block;
    height: 20px;
    line-height: 20px;
    color: #666;
    float:left;
    margin-left:15px;
  }
  .crumb a:last-child{
    cursor: default;
  }
  .crumb a:hover{
    color:#0092d8;
  }
  .product_wrap {
    clear:both;
    margin: 40px auto 60px auto;
    width: 1190px;
    overflow: hidden;
  }
  .product_wrap .product_left {
    float: left;
    margin-left: 85px;
    position: relative;
  }
   .showcase_inner {
    height: 500px;
    width: 500px;
  }
  .mask{
    width:209px;
    height:209px;
    position: absolute;
    background-color: #0080dc;
    opacity: .2;
  }
   .showcase {
    position: absolute;
    width: 500px;
    height: 500px;
    top:0;
  }
   .zoom_pic {
    position:absolute;
    left: 595px;
    top:0;
    height: 500px;
    width: 500px;
    z-index:10;
    background-color: #fff;
  }
  .product_wrap .thumbnails {
    clear: right;
    list-style:none;
    overflow: hidden;
    margin-top: 30px;
    padding-left: 50px;
  }
  .product_wrap .thumbnails li {
    box-sizing:border-box;
    border: 1px solid #d6d6d6;
    background-color: #fff;
    cursor: pointer;
    width:64px;
    height:64px;
    position: relative;
    float: left;
    opacity: 0.4;
    margin: 1px 10px 1px 1px;
  }
  /*.product_wrap .thumbnails img:hover{
    border: 2px solid #f60;
  }*/
  .active2{
    border: 2px solid #f60;
  }
  .product_wrap .thumbnails li img {
    width: 60px;
    height: 60px;
  }
  .product_wrap .share_collect {
    clear: right;
    overflow: hidden;
    padding-left: 50px;
    margin-top: 20px;
    height: 18px;
  }
  .share_collect .share_kits,.share_collect .collect_wrap {
    float: left;
    clear: right;
    overflow: hidden;
    margin-left:20px;
    border-left:1px solid #e6e6e6;
  }
  .share_kits>span{
    display: block;
    float: left;
    font-size: 12px;
    height: 18px;
    line-height: 18px;
    color: #333;
  }
  .share_collect .share_wrap{
    display:inline-block;
    
  }
  .share_collect .share_wrap .icon{
    display:inline-block;
    margin:0 0 0 10px;
    width: 18px;
    height: 18px; 
  }
  .share_collect .share_wrap .bds_qq{
    background:url(../../public/img/xtb/detail_sprite.png) no-repeat -20px -66px;
  }
  .share_collect .share_wrap .bds_weixin{
    background:url(../../public/img/xtb/detail_sprite.png) no-repeat -36px -66px;
    width:22px;
  }
  .share_collect .icon{
    display:block;
    float:left;
    margin-left:20px;
    width:18px;
    height:18px;
  }
  .share_collect .icon_1{
    background:url(../../public/img/xtb/detail_sprite.png) no-repeat -38px -89px;
  }
  .share_collect .icon_2{
    background:url(../../public/img/xtb/detail_sprite.png) no-repeat -99px -124px;
  }
  .share_collect  .collect_wrap>span{
    margin-left:13px;
    float:left;
    padding-top:3px;
  }
  .product_wrap .product_right {
    width: 510px;
    float: left;
    margin-left:95px;    
  }
  .product_wrap .product_right h1 {
    margin-top: -3px;
    margin-bottom: 10px;
    color: #333;
    font-size: 22px;
    line-height: 28px;
    max-height: 54px;
    font-weight:normal;
    text-align:left;
    word-wrap: break-word;
    word-break: break-all;
  }
  .product_right h5 {
    color: #f60;
    font-size: 12px;
    line-height: 18px;
    margin-top: -3px;
    margin-bottom: 8px;
    position: relative;
    font-weight:normal;
    text-align:left;   
  }
.product_right h5>span{
    color: #0092d8;
    font-size: 10px;
    border: 1px #0092d8 solid;
    padding: 0 2px;
    border-radius: 2px;
  }
  .floor_price{
    background-color: #f2f2f2;
    padding: 15px 20px;
  }
  .floor_price p{
    text-align:left;
    color:#f60;
    font-size:32px;
  }
  .floor_price p>span{
    color:#333;
    font-size:20px;
    margin-right:2px;
  }
  .floor_comment .comment1{
    padding: 20px 0 17px;
    border-bottom: 1px dashed #eee;
    position: relative;
  }
  .floor_comment .comment1{
    font-size:12px;
    text-align:left; 
  }
  .floor_comment .comment1>span{
    display:inline-block;
  }
  .floor_comment .comment1>.icon1{
    width:54px;
    color:#999;
    line-height: 18px;
  }
  .floor_comment .comment1>.icon2{
    width:54px;
    color:#fff;
    background-color: #f60;
    line-height: 18px;
    text-align:center;
  }
  .floor_comment .comment1>.icon3{
    color:#333;
    margin-left:10px;
    line-height: 18px;
  }
  .floor_comment .comment2{
    padding-top:10px;
    border-bottom:1px dashed #eee;
    font-size:12px;
    text-align:left;
    float: left;
  }
  .comment2>div{
    float: left;
  }
  .comment2 h3{
    float: left;
    width: 54px;
    font-size: 12px;
    line-height: 20px;
    color: #999;
    font-weight: normal;
  }
  .floor_comment .comment2 span{
    display:block;
    float: left;
    font-size:12px;
    line-height:20px;
    margin-bottom:10px;
  }
  .floor_comment .comment2 i{
    display:block;
    float: left;
    width:6px;
    height:20px;
    line-height: 20px;
  }
  .floor_comment .comment2 .icon1{
    width:54px;
    color:#999;
  }
  .floor_comment .comment2 .icon2{
    background-color: #ff784c;
    height:20px;
    color:#fff;
    padding:0 10px;
    width:74px;
    text-align:center;
  }
  .floor_comment .comment2 .icon3{
    background-color: #ff784c;
    height:20px;
    color:#fff;
    padding:0 10px;
    width:44px;
    color:#fff;
    margin-left:1px;
    text-align:center;
  }
  .floor_comment .comment2 .c_icon1{
    background:url(../../public/img/xtb/detail_sprite.png) no-repeat -48px 0px;
  }
  .floor_comment .comment2 .c_icon2{
    background:url(../../public/img/xtb/detail_sprite.png) no-repeat -60px 0px;
  }
  .floor_comment .comment3{
    clear:left;
    padding-top:10px;
    border-bottom:1px solid #eee;
    overflow: hidden;
    text-align:left;
  }
  .comment3>h3{
    float: left;
    width: 54px;
    font-size: 12px;
    line-height: 30px;
    color: #999;
    font-weight: normal;
    line-height: 24px;
  }
  .comment3 span{
    display: block;
    float: left;
    height: 24px;
    line-height: 24px;
    padding: 0 10px;
    margin: 0 15px 10px 0;
    color: #000;
    border: 1px solid #90ebae;
    border-radius: 2px;
    overflow: hidden;
  }
  .product_right .sku:after {
    content: "";
    display: block;
    clear: both;
  }
  .product_right .sku{
    padding-bottom:30px;
    text-align: left;
  }
  .sku .sku_wrap1{
    margin-top:15px;
  }
  .sku .sku_wrap1>h3,.sku_wrap2>h3,.sku_wrap3>h3,.sku_wrap4>h3,.sku_wrap5>h3,.sku_wrap6>h3{
    float: left;
    width: 54px;
    font-size: 12px;
    line-height:40px;
    color: #999;
    font-weight: normal;
  }
  .sku .sku_wrap1 .wrap>span{
    border: 2px solid #f60;
    display: block;
    float:left;
    margin-left:0px;
    background: #fff;
    margin-bottom: 15px;
  }
  .sku_wrap1 img{
    height:36px;
    width:36px;
    vertical-align:top;
  }
  .sku_wrap1 span{
    display: inline-block;
    font-size: 12px;
    line-height: 36px;
    margin: 0 10px;
  }
  .sku_wrap2,.sku_wrap3,.sku_wrap4,.sku_wrap5,.sku_wrap6{
    clear:left;
    margin-top:15px;
  }
  .sku_wrap2>div{
    overflow: hidden;
  }
  .sku_wrap2 div>span{
    display:block;
    padding:0 7px;
    height:26px;
    line-height:26px;
    border:2px solid #f60;
    margin-bottom:15px;
    float: left;
  }
  .sku_wrap3{
    margin-top:0;
  }
  .sku_wrap3 .num_wrap{
    overflow: hidden;
    float: left;
  }
  .sku_wrap3 .num_wrap>button{
    float: left;
    width:28px;
    height:28px;
    line-height:28px;
  }
  .sku_wrap3 .num_wrap>input{
    float: left;
    width: 40px;
    height: 24px;
    line-height: 28px;
    text-align:center;
  }
  .sku_wrap3 .num_wrap>div{
    float: left;
    line-height:28px;
    margin-left:5px;
  }
  .sku_wrap4 .address_wrap{
    overflow: hidden;
    float: left;
    height: 28px;
    line-height: 26px;
    z-index: 20;
  }
  .sku_wrap4 .address_wrap>select{
    height: 28px;
    line-height: 26px;
    border: 1px solid #D6D6D6;
    padding: 0 10px 0 10px;
  }
  .sku_wrap4 span{
    line-height:28px;
    margin-left:5px;
  }
  .sku_wrap5 .fenqi_wrap{
    float: left;
    max-width: 456px;
  }
  .fenqi_wrap .fenqi_title{
    float: left;
    color: #f60;
    line-height: 30px;
    font-weight: bold;
  }
  .sku_wrap5 .fenqi_content{
    clear: both;
  }
  .sku_wrap5 .fenqi_content .fenqi_item{
    overflow: hidden;
    float: left;
    text-align: center;
    border: 1px solid #d6d6d6;
    font-weight: bold;
    margin-right: 2px;
    padding: 10px 15px;
  }
  .sku_wrap6 span{
    display: inline-block;
    height: 30px;
    line-height: 39px;
    color: #000;
  }
  .floor_btn{
    margin-bottom:10px;
    text-align:left;
  }
  .floor_btn .btn1{
    background-color: #0092d8;
    margin-right: 10px;
  }
  .floor_btn .btn2{
    background-color: #f60;
  }
  .floor_btn .btn1,.floor_btn .btn2{
    display: inline-block;
    font-size: 14px;
    height: 40px;
    line-height: 40px;
    width: 205px;
    text-align: center;
    color: #fff;
    border-radius: 2px;
  }
  .floor_service{
    text-align:left;
  }
  .floor_service .inner{
    float: left;
    margin-right: 15px;
  }
  .inner .icon{
    display: inline-block;
    height: 18px;
    width: 18px;
    background:url(../../public/img/xtb/detail_sprite.png) no-repeat 0 -66px;
  }
  .inner .icon1{
    display: inline-block;
    padding-left: 5px;
    font-size: 12px;
    height: 18px;
    line-height: 18px;
    position: relative;
    top: -4px;
  }
  .recommend_wrap{
    clear: both;
    width: 1190px;
    min-height: 315px;
    margin: 30px auto 60px auto;
    border: 1px solid #e6e6e6;
  }
  .recommend_wrap .recommend_nav{
    height: 56px;
    border-bottom: 1px solid #e6e6e6;
    padding: 0 10px;
    text-align:left;
  }
  .recommend_wrap .recommend_nav>.nav_item{
    color: #333;
    padding: 20px 0;
    border-bottom: none;
    font-size:16px;
    margin:0 auto;
  }
  .recommend_list{
    display:block;
    clear:left;
    padding:0 55px;
  }
   .recommend_item{
    float:left;
    margin:30px 35px;
    position: relative;
  }
  .pro_href{
    display: block;
    overflow: hidden;
  }
  .pro_img{
    width: 146px;
    height: 146px;
    margin-bottom: 10px;
  }
  .pro_name{
    color: #333;
    margin-bottom: 12px;
    width: 146px;
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .pro_price{
    display: block;
    text-align: center;
    overflow: hidden;
    word-wrap: break-word;
    word-break: break-all;
    text-overflow: ellipsis;
    font-size: 12px;
    height: 12px;
    line-height: 12px;
    color: #f60;
    width: 146px;
  }
  .sku_tag{
    background-color: #ff6600;
    position: absolute;
    top: 0;
    right:0;
    color: #fff;
    font-size: 12px;
    height: 19px;
    line-height: 18px;
    padding: 0 10px;
  }
  .tabs_nav{
    clear: both;
    border-top: 1px solid #e0e0e0;
    border-bottom: 1px solid #e0e0e0;
    margin-bottom: 40px;
    width: 100%;
    height: 70px;
  }
  .tabs_nav_inner{
    width: 100%;
    margin: 0 auto;
    min-width: 1190px;
  }
  .nav_inner{
    width:100%;
    height:30px;
    border-bottom: 1px solid #e0e0e0;
  }
  .tabs_left{
    display:block;
    float: left;
    font-size: 12px;
    margin-left:170px;
  }
  .tabs_left img{
    width: 55px;
    height: 55px;
    margin-top: 8px;
  }
  .tabs_product{
    display: inline-block;
    padding-left:10px;
  }
  .tabs_product_name{
    color: #000;
    margin-top: 20px;
    height: 12px;
    line-height: 13px;
    width: 130px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-wrap: break-word;
    word-break: break-all;
  }
  .tabs_product_price{
    color: #ff3300;
    margin-top: 8px;
  }
  .tabs_right{
    float:right;
    display:block;
    margin-right:170px;
  }
  .tabs_right a{
    display:block;
    height: 70px;
    font-size:20px;
    line-height: 40px;
    box-sizing: border-box;
    background-color: #f60;
    border: 1px solid #f60;
    color: #fff;
    padding: 11px 66px;
  }
  .tabs_list{
    text-align: center;
    width: 600px;
    height: 70px;
    margin-left:406px;
  }
  .tabs_list li{
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    padding-top: 22px;
    padding-bottom: 24px;
    margin-left:54px;
  }
  .active1{
    color: #0093d5;
    border-bottom: 2px solid #0093d5;
  }
  .tabs_content_wrap {
    margin-bottom: 30px;
  }
  .tabs_content{
    width: 1280px;
    margin: 0 auto 60px auto;
  }
  .tabs_style{
    width: 790px;
    margin: 0 auto 40px auto;
  }
  .pingjia{
    margin:0 auto;
  }
  .pingjia>p{
    font-size:20px;
    margin-top:25px;
  }
  .pingjia>div{
    margin-top:25px;
    font-size:25px;
    color:red;
  }
  .spec_wrap{
    padding: 50px 290px;
    border-bottom: 1px dotted #d6d6d6;
  }
   .spec_title {
    display:block;
    width: 230px;
    font-size: 18px;
    color: #333;
    margin-left:50px;
    margin-bottom:5px;
  }
  .spec_table{
    display: inline-block;
    border-collapse: collapse;
    border-spacing: 0;
    text-align:left;
    margin-left:-300px;
  }
  .spec_table td{
    width: 190px;
    color: #333;
    font-size: 14px;
    padding-top: 0;
    padding-bottom: 10px;
  }
  .tabs_sup{
    width:1190px;
    margin:0 auto 60px auto;
  }
  .tabs_sup .service_sec{
    margin:0 0 60px 0;
  }
  .service_sec>h3{
    font-size: 18px;
    color: #333;
    margin-bottom: 10px;
  }
  .shouhou{
    margin:50 auto;
    font-size:25px;
    color:red;
  }
  #detail_floating {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 99;
    width: 62px;
  }
  #detail_floating .item {
    cursor: pointer;
    background: #000;
    opacity: 0.75;
    border-bottom: 1px solid #5a5959;
  }
  #detail_floating .item a {
    padding: 12px;
    display: block;
  }
  #detail_floating .item i{
    display:inline-block;
    height: 38px;
    width: 38px;
  }
  #detail_floating .icon1{
    background:url(../../public/img/xtb/detail_servic_2.png) no-repeat 0px 0px;
  }
  #detail_floating .icon2{
    background:url(../../public/img/xtb/detail_servic_2.png) no-repeat -38px 0px;
  }
  #detail_floating .icon3{
    background:url(../../public/img/xtb/detail_servic_2.png) no-repeat -76px 0px;
  }
  #detail_floating .icon4{
    background:url(../../public/img/xtb/detail_servic_2.png) no-repeat -113px 0px;
  }
</style>