<template>
    <div>
            <!-- 快捷导航模块start -->
    <section class="shortcut">
        <div class="fl">
            <ul>
                <li>品优购欢迎您！&nbsp;</li>
                <li>
                    <a href="">请登录</a>&nbsp;
                    <!-- <a href="register.html" class="style_red">免费注册</a> -->
                    <router-link to="/register">免费注册</router-link>
                </li>
            </ul>
        </div>
        <div class="fr">
            <ul>
                <li>我的订单</li>
                <li></li>
                <li class="arrow-icon">我的品优购</li>
                <!-- <i class=''></i> -->
                <li></li>
                <li>品优购会员</li>
                <li></li>
                <li>企业采购</li>
                <li></li>
                <li class="arrow-icon">关注品优购</li>
                <li></li>
                <li class="arrow-icon">客户服务</li>
                <li></li>
                <li class="arrow-icon">网站导航</li>
            </ul>
        </div>
    </section>
    <!-- 快捷导航模块end -->
    <!-- header头部模块制作start -->
    <header class="header w">
        <!-- logo模块 -->
        <div class="logo">
            <h1>
                <a href="index.html" title="品优购商城">品优购商城</a>
            </h1>
        </div>
        <!-- search搜索模块 -->
        <div class="search">
            <input type="search" name="" id="" placeholder="语言开发">
            <button>搜索</button>
        </div>
        <!-- hotwords模块制作 -->
        <div class="hotwords">
            <a href="#" class="style_red">优惠购首发</a>
            <a href="#">亿元优惠</a>
            <a href="#">9.9元团购</a>
            <a href="#">美满99减30</a>
            <a href="#">办公用品</a>
            <a href="#">电脑</a>
            <a href="#">通信</a>
        </div>
        <!-- 购物车模块 -->
        <div class="shopcar">我的购物车
            <i class="count">8</i>
        </div>
    </header>
    <!-- header头部模块制作end -->
    <!-- nav模块制作 start-->
    <nav class="nav">
        <div class="w">
            <div class="dropdown">
                <div class="dt">全部商品分类</div>
                <div class="dd">
                    <ul>
                        <li><a href="#">家用电器</a></li>
                        <!-- <li><a href="list.html">手机</a>、<a href="#">数码</a>、<a href="#">通信</a></li> -->
                        <router-link to="/list"><li><a href="list.html">手机</a>、<a href="#">数码</a>、<a href="#">通信</a></li></router-link>
                        <li><a href="#">电脑</a>、<a href="#">办公</a></li>
                        <li><a href="#">家居</a>、<a href="#">家具</a>、<a href="#">家装</a>、<a href="#">厨具</a></li>
                        <li><a href="#">男装</a>、<a href="#">女装</a>、<a href="#">童装</a>、<a href="#">内衣</a></li>
                        <li><a href="#">个户化妆</a>、<a href="#">清洁用品</a>、<a href="#">宠物</a></li>
                        <li><a href="#">鞋靴</a>、<a href="#">箱包</a>、<a href="#">珠宝</a>、<a href="#">奢侈品</a></li>
                        <li><a href="#">运动户外</a>、<a href="#">钟表</a></li>
                        <li><a href="#">汽车</a>、<a href="#">汽车用品</a></li>
                        <li><a href="#">母婴</a>、<a href="#">玩具乐器</a></li>
                        <li><a href="#">医药保健</a></li>
                        <li><a href="#">图书</a>、<a href="#">音像</a>、<a href="#">电子书</a></li>
                        <li><a href="#">彩票</a>、<a href="#">旅行</a>、<a href="#">充值</a>、<a href="#">票务</a></li>
                        <li><a href="#">理财</a>、<a href="#">众筹</a>、<a href="#">白条</a>、<a href="#">保险</a></li>
                    </ul>
                </div>
            </div>
            <div class="navitems">
                <ul>
                    <li><a href="#">服装城</a></li>
                    <li><a href="#">服装城</a></li>
                    <li><a href="#">服装城</a></li>
                    <li><a href="#">服装城</a></li>
                    <li><a href="#">服装城</a></li>
                    <li><a href="#">服装城</a></li>
                    <li><a href="#">服装城</a></li>
                    <li><a href="#">服装城</a></li>
                </ul>
            </div>
        </div>
    </nav>
    <!-- nav模块制作 end-->

    <!-- 首页模块制作 main start -->
    <div class="w">
        <div class="main">
            <div class="focus">
                <ul>
                    <li>
                        <img src="../images/focus.jpg" alt="">
                    </li>
                </ul>
            </div>
            <div class="newsflash">
                <div class="news">
                    <div class="news-hd">
                        <h5>品优购快报</h5>
                        <a href="#" class="more">更多</a>
                    </div>
                    <div class="news-bd">
                        <ul>
                            <li><a href="#"><strong>[重磅]</strong>备战开学季 全民半价购数码 开学活动做不停</a></li>
                            <li><a href="#"><strong>[公告]</strong>品优稳占家电网购六成份额</a></li>
                            <li><a href="#"><strong>[特惠]</strong>百元中秋全品类礼券限量领</a></li>
                            <li><a href="#"><strong>[公告]</strong>上品优生鲜 享阳澄湖大闸蟹</a></li>
                            <li><a href="#"><strong>[特惠]</strong>每日享折扣品优品质游</a></li>
                        </ul>
                    </div>
                </div>
                <div class="lifeservice">
                    <ul>
                        <li>
                            <i></i>
                            <p>话费</p>
                        </li>
                        <li class="A">
                            <i></i>
                            <p>机票</p>
                            <div class="add"></div>
                        </li>
                        <li>
                            <i></i>
                            <p>电影票</p>
                        </li>
                        <li>
                            <i></i>
                            <p>彩票</p>
                        </li>
                        <li>
                            <i></i>
                            <p>加油卡</p>
                        </li>
                        <li>
                            <i></i>
                            <p>酒店</p>
                        </li>
                        <li>
                            <i></i>
                            <p>众筹</p>
                        </li>
                        <li>
                            <i></i>
                            <p>理财</p>
                        </li>
                        <li>
                            <i></i>
                            <p>礼品卡</p>
                        </li>
                        <li>
                            <i></i>
                            <p>话费</p>
                        </li>
                        <li>
                            <i></i>
                            <p>话费</p>
                        </li>
                        <li>
                            <i></i>
                            <p>话费</p>
                        </li>
                    </ul>
                </div>
                <div class="bargin">
                    <img src="../images/bargain.jpg" alt="">
                </div>
            </div>
        </div>
    </div>
    <!-- 首页模块制作 main end -->
    <!-- 推荐模块 start -->
    <div class="w recom">
        <div class="recom_hd">
            <img src="../images/clock.png" alt="">
        </div>
        <div class="recom_bd">
            <ul>
                <li><img src="../images/pic4.jpg" alt=""></li>
                <li><img src="../images/pic3.jpg" alt=""></li>
                <li><img src="../images/pic2.jpg" alt=""></li>
                <li><img src="../images/pic1.jpg" alt=""></li>
            </ul>
        </div>
    </div>
    <!-- 推荐模块 end -->

    <!-- 楼层区域制作 start -->
    <div class="floor">
        <!-- 1楼家用电器楼层 -->
        <div class="w jiadian">
            <div class="box_hd">
                <h3>家用电器</h3>
                <div class="tab_list">
                    <ul>
                        <li><a href="#" class="style_red">热门</a>|</li>
                        <li><a href="#">大家电</a>|</li>
                        <li><a href="#">生活电器</a>|</li>
                        <li><a href="#">厨房电器</a>|</li>
                        <li><a href="#">个户健康</a>|</li>
                        <li><a href="#">应季电器</a>|</li>
                        <li><a href="#">空气/净水</a>|</li>
                        <li><a href="#">新奇特</a>|</li>
                        <li><a href="#">高端电器</a></li>
                    </ul>
                </div>
            </div>
            <div class="box_bd">
                <div class="tab_content">
                    <div class="tab_list_item">
                        <div class="col_210">
                            <ul>
                                <li><a href="#">节能补贴</a></li>
                                <li><a href="#">节能补贴</a></li>
                                <li><a href="#">节能补贴</a></li>
                                <li><a href="#">节能补贴</a></li>
                                <li><a href="#">节能补贴</a></li>
                                <li><a href="#">节能补贴</a></li>
                            </ul>
                            <a href="#">
                                <img src="../images/floor-1-1.png" alt="">
                            </a>
                        </div>
                        <div class="col_329">
                            <a href="#">
                                <img src="../images/floor-1-b01.png" alt="">
                            </a>
                        </div>
                        <div class="col_221">
                            <a href="#" class="bb">
                                <img src="../images/floor-1-2.png" alt="">
                            </a>
                            <a href="#">
                                <img src="../images/floor-1-3.png" alt="">
                            </a>
                        </div>
                        <div class="col_221">
                            <a href="#">
                                <img src="../images/floor-1-4.png" alt="">
                            </a>
                        </div>
                        <div class="col_219">
                            <a href="#" class="bb">
                                <img src="../images/floor-1-5.png" alt="">
                            </a>
                            <a href="#">
                                <img src="../images/floor-1-6.png" alt="">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 二楼手机楼层 -->
        <div class="w shouji">
            <div class="box_hd">
                <h3>手机通讯</h3>
                <div class="tab_list">
                    <ul>
                        <li><a href="#" class="style_red">热门</a>|</li>
                        <li><a href="#">大家电</a>|</li>
                        <li><a href="#">生活电器</a>|</li>
                        <li><a href="#">厨房电器</a>|</li>
                        <li><a href="#">个户健康</a>|</li>
                        <li><a href="#">应季电器</a>|</li>
                        <li><a href="#">空气/净水</a>|</li>
                        <li><a href="#">新奇特</a>|</li>
                        <li><a href="#">高端电器</a></li>
                    </ul>
                </div>
            </div>
            <div class="box_bd">
                <div class="tab_content">
                    <div class="tab_list_item">
                        <div class="col_210">
                            <ul>
                                <li><a href="#">节能补贴</a></li>
                                <li><a href="#">节能补贴</a></li>
                                <li><a href="#">节能补贴</a></li>
                                <li><a href="#">节能补贴</a></li>
                                <li><a href="#">节能补贴</a></li>
                                <li><a href="#">节能补贴</a></li>
                            </ul>
                            <a href="#">
                                <img src="../images/floor-1-1.png" alt="">
                            </a>
                        </div>
                        <div class="col_329">
                            <a href="#">
                                <img src="../images/floor-1-b01.png" alt="">
                            </a>
                        </div>
                        <div class="col_221">
                            <a href="#" class="bb">
                                <img src="../images/floor-1-2.png" alt="">
                            </a>
                            <a href="#">
                                <img src="../images/floor-1-3.png" alt="">
                            </a>
                        </div>
                        <div class="col_221">
                            <a href="#">
                                <img src="../images/floor-1-4.png" alt="">
                            </a>
                        </div>
                        <div class="col_219">
                            <a href="#" class="bb">
                                <img src="../images/floor-1-5.png" alt="">
                            </a>
                            <a href="#">
                                <img src="../images/floor-1-6.png" alt="">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- 楼层区域制作 end -->

    <!-- 底部模块的制作 start -->
    <footer class="footer">
        <div class="w">
            <div class="mod_service">
                <ul>
                    <li>
                        <h5></h5>
                        <div class="service_txt">
                            <h4>正品保障</h4>
                            <p>正品保障，提供发票</p>
                        </div>
                    </li>
                    <li>
                        <h5></h5>
                        <div class="service_txt">
                            <h4>正品保障</h4>
                            <p>正品保障，提供发票</p>
                        </div>
                    </li>
                    <li>
                        <h5></h5>
                        <div class="service_txt">
                            <h4>正品保障</h4>
                            <p>正品保障，提供发票</p>
                        </div>
                    </li>
                    <li>
                        <h5></h5>
                        <div class="service_txt">
                            <h4>正品保障</h4>
                            <p>正品保障，提供发票</p>
                        </div>
                    </li>
                    
                </ul>
            </div>
            <div class="mod_help">
                <dl>
                    <dt>服务指南</dt>
                    <dd><a href="#">购物流程</a></dd>
                    <dd><a href="#">会员介绍</a></dd>
                    <dd><a href="#">生活旅行/团购</a></dd>
                    <dd><a href="#">常见问题</a></dd>
                    <dd><a href="#">大家电</a></dd>
                    <dd><a href="#">联系客服</a></dd>
                </dl>
                <dl>
                    <dt>服务指南</dt>
                    <dd><a href="#">购物流程</a></dd>
                    <dd><a href="#">会员介绍</a></dd>
                    <dd><a href="#">生活旅行/团购</a></dd>
                    <dd><a href="#">常见问题</a></dd>
                    <dd><a href="#">大家电</a></dd>
                    <dd><a href="#">联系客服</a></dd>
                </dl>
                <dl>
                    <dt>服务指南</dt>
                    <dd><a href="#">购物流程</a></dd>
                    <dd><a href="#">会员介绍</a></dd>
                    <dd><a href="#">生活旅行/团购</a></dd>
                    <dd><a href="#">常见问题</a></dd>
                    <dd><a href="#">大家电</a></dd>
                    <dd><a href="#">联系客服</a></dd>
                </dl>
                <dl>
                    <dt>服务指南</dt>
                    <dd><a href="#">购物流程</a></dd>
                    <dd><a href="#">会员介绍</a></dd>
                    <dd><a href="#">生活旅行/团购</a></dd>
                    <dd><a href="#">常见问题</a></dd>
                    <dd><a href="#">大家电</a></dd>
                    <dd><a href="#">联系客服</a></dd>
                </dl>
                <dl>
                    <dt>服务指南</dt>
                    <dd><a href="#">购物流程</a></dd>
                    <dd><a href="#">会员介绍</a></dd>
                    <dd><a href="#">生活旅行/团购</a></dd>
                    <dd><a href="#">常见问题</a></dd>
                    <dd><a href="#">大家电</a></dd>
                    <dd><a href="#">联系客服</a></dd>
                </dl>
                <dl>
                    <dt>帮助中心</dt>
                    <dd>
                        <img src="../images/wx_cz.jpg" alt="">
                        品优购客户端
                    </dd>
                </dl>
            </div>
            <div class="mod_copyright">
                <div class="links">
                    <a href="#">关于我们</a> | <a href="#">联系我们</a> | <a href="#">联系客服</a> | <a href="#">商家入驻</a> | <a href="#">营销中心</a> | <a href="#">手
                        机品优购</a> | <a href="#">友情链接</a> | <a href="#">销售联盟</a> | <a href="#">品优购社区</a> | <a href="#">品优购公益</a> |
                     <a href="#">English Site</a> | <a href="#">Contact U</a>
                </div>
                <div class="copyright">
                    地址：北京市昌平区建材城西路金燕龙办公楼一层 邮编：100096 电话：400-618-4000 传真：010-82935100 邮箱: zhanghj+itcast.cn<br>
京ICP备08001421号京公网安备110108007702
                </div>
            </div>
        </div>
    </footer>
    <!-- 底部模块的制作 end -->
    </div>
</template>
<script>
export default {
    name:'Index',
    // components:{

    // }
}
</script>
<style scoped>
    @font-face {
    font-family: 'iconfont';  /* Project id 2581339 */
    src: url('//at.alicdn.com/t/font_2581339_67js2mylq2h.woff2?t=1622431834183') format('woff2'),
         url('//at.alicdn.com/t/font_2581339_67js2mylq2h.woff?t=1622431834183') format('woff'),
         url('//at.alicdn.com/t/font_2581339_67js2mylq2h.ttf?t=1622431834183') format('truetype');
  }
.main {
    width: 980px;
    height: 455px;
    margin-left:220px;
    margin-top:10px;
}
.focus {
    float:left;
    width: 721px;
    height:455px;
    background-color: purple;
}
.newsflash {
    float:right;
    width: 250px;
    height: 455px;
    /* background-color: skyblue; */
}
.news {
    height: 165px;
    /* background-color: pink; */
    border:1px solid #e4e4e4;
}

.news-hd h5 {
    float:left;
    font-size:14px;
}
.news-hd .more {
    float:right;
}
.news-hd .more::after {
    content:'\e75c';
    font-family: 'iconfont'; 
    font-size:13px;
}
.news-bd {
    padding-top: 5px 15px 0;
}
.news-bd ul li {
    height: 24px;
    line-height: 24px;
    overflow:hidden;
    white-space:nowrap;
    text-overflow:ellipsis;
}

.news-hd {
    height: 33px;
    line-height: 33px;
    border-bottom:1px dotted #e4e4e4;
    padding:0 15px;
}
.lifeservice {
    overflow:hidden;
    height: 209px;
    /* background-color: purple; */
    border:1px solid #e4e4e4;
    border-top:0;
}
.lifeservice ul {
    width: 252px;
}
.lifeservice ul li {
    float:left;
    width: 63px;
    height: 71px;
    border-right:1px solid #e4e4e4;
    border-bottom:1px solid #e4e4e4;
    text-align:center;
    
}
.lifeservice ul li i {
    display:inline-block;
    width: 24px;
    height: 28px;
    background-color: pink;
    margin-top:12px;
    background: url(../images/icons.png) no-repeat -19px -15px;
}
.lifeservice ul .A {
    position:relative;
}
.lifeservice ul li .add {
    position:absolute;
    background:url(../images/icons.png) no-repeat -78px -158px;
    width: 23px;
    height: 23px;
    top:0;
    right:0;
}
.bargin {
    margin-top:5px;
}
/* 推荐模块 */
.recom {
    height: 163px;
    background-color: #ebebeb;
    margin-top:12px;

}
.recom_hd {
    float:left;
    height: 163px;
    width: 205px;
    background-color: #5c5251;
    text-align:center;
    padding-top:30px;
}
.recom_bd {
    float:left;
}
.recom_bd ul li {
    position:relative;
    float:left;
}
.recom_bd ul li img {
    width: 248px;
    height: 163px;
}
.recom_bd ul li:nth-child(-n+3)::after {
    content:'';
    position:absolute;
    right:0;
    top:10px;
    width: 1px;
    height: 145px;
    background-color: #ddd;
}
/* 家用电器模块 */
.box_hd {
    height: 30px;
    border-bottom:2px solid #c81623;
}
.box_hd h3 {
    float:left;
    font-size:18px;
    color:#c81623;
    font-weight:400;
}
.tab_list {
    float:right;
    line-height: 30px;
}
.tab_list ul li {
    float:left;
}
.tab_list ul li a {
    margin:0 15px;
}
.floor .w {
    margin-top: 30px;
}
.box_bd {
    height: 361px;
    /* height: 329px; */
    /* background-color: pink; */
}
.tab_list_item>div {
    float:left;
}
.col_210 {
    width: 210px;
    background-color: #f9f9f9;
    text-align:center;
}
.col_210 ul li {
    width: 85px;
    height: 34px;
    border-bottom:1px solid #ccc;
    float:left;
    text-align:center;
    line-height: 33px;
    margin-right:10px;
}
.col_210 ul {
    padding-left:12px;
}
.col_329 {
    width: 329px;
}
.col_221 {
    width: 221px;
    border-right:1px solid #ccc;
}
.col_219 {
    width: 219px;
}
.bb {
    /* 一般情况下，a如果包含有宽度的盒子，a需要转换为块级元素 */
    display:block;
    border-bottom:1px solid #ccc;
}
</style>