<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!doctype html>
<html>
    <head>
        <meta http-equiv="content-Type" content='texyml' charest='utf-8'>
        <title>复杂页面实现</title>
        <meta name='keywords' content='关键词'>
        <meta name='description' content='描述'>
        <link rel='stylesheet' type='text/css' href='http://at.alicdn.com/t/font_701176_rt0hxvb8i42njyvi.css'>
        <style>
        
*{margin:0;padding:0;}
.box{
    display:flex;
}
.fasten{
    position: fixed;
    /* position:relative; */
    width:100px;
    height:100%;
    background-color:rgb(29 37 49);
}
.fasten .photo ul{
    padding-top:20px;
}
.fasten .photo ul li{
    margin:20px auto;
    list-style:none;
    width:60px;
    height:60px;
    border-radius:50%;
    border:1px solid rgb(45 56 72);
}
.fasten .photo ul li i{
    display:block;
    margin:10px 0 0 15px;
    font-size:32px;
    color:white;
}
.fasten .photo ul li:nth-child(1){
    background-color:rgb(41 157 245);
}
.fasten .photo ul li:nth-child(2){
    background-color:rgb(152 135 227);
}
.fasten .photo ul li:nth-child(3){
    background-color:rgb(239 78 50);
}
.fasten > ul{
    position:absolute;
    bottom:0;
    display:flex;
}
.fasten > ul li{
    /* margin:auto; */
    list-style:none;
    padding-left:10px;
    /* padding:20px; */
}
.fasten > ul li i{
    font-size:32px;
}
.menu{
    position:relative;
    width:300px;
    margin-left:100px;
    background-color:rgb(34 44 60);

}
.menu ul{
    margin:auto;
    width:270px;
    padding-bottom:50px;
    border-bottom:1px solid rgb(183 192 205);
}
.menu ul li{
    list-style:none;
    padding:15px 0 0 30px;
    color:rgb(183 192 205);
}
.menu ul li i{
    font-size:28px;
}
.menu .list1 li i{
    margin-left:160px;
}
.menu .list li:nth-child(1) i{
    margin-left:75px;
}
.menu .list li i{
    /* margin-left:0; */
    margin-right:15px;
}
.menu .list2{
    border-bottom:none;
}
.menu .list2 li i{
    margin-left:110px;
}
.menu .menu-t{
    position:absolute;
    bottom:0;
}
.menu .menu-t span{
    margin-left:25px;
}
.menu .menu-t img{
    margin-left:30px;
}
.content{
    display:flex;
    left:400px;
    top:0;
}
.content .nav{
    height:80px;
    width:100%;
}
.content .nav h1{
    margin-top:15px;
    margin-left:10px;
    color:rgb(194, 184, 184);
    font-weight:500;
}
.nav .regular{
    /* position:absolute; */
    position:fixed;
    display:flex;
    top:0;
    right:0;
    margin-top:15px;
}
.nav .regular ul li{
    list-style:none;
}
.nav .regular ul li h3{
    color:rgb(76, 245, 236);
}
.nav .regular i{
    display:block;
    margin-top:15px;
    padding-left:30px;
    color:rgb(182, 169, 169);
}
.people{
    margin:100px 0 0 -245px;
    width:350px;
}
.people .information > li{
    display:flex;
    list-style:none;
    border:1px solid rgb(209, 199, 199);
}
.people .information > li span{
    line-height:50px;
}
.people .information > li i{
    margin:12px 0 0 255px;
    font-size:32px;
}
.people .information > li .information1 li{
    margin-left:30px;
}
.people .information > li .information1 > li:nth-child(1){
    display:flex;
    margin-top:10px;
    height:30px;
    color:rgb(27, 240, 229);
}
.people .information > li .information1 li:nth-child(1) span{
    margin-left:130px;
    color:black;
}
.people .information > li .information1 li:nth-child(2){
    list-style:none;
    font-size:12px;
    color:rgb(180, 165, 165);
}
.people .information > li .information1 li:nth-child(3){
    list-style:none;
    margin:20px 0 0 -40px;
    font-size:14px;
}
.concrete{
    margin-top:100px;
}
.concrete .details{
    /* position:relative; */
}
.concrete .details li{
    list-style:none;
    border:1px solid rgb(209, 199, 199);
}
/* .concrete .details li i{
    border-radius:50%;
    width:1px;
    border-left:20px solid rgb(11, 236, 105);
} */
.concrete .details > li:nth-child(1) span{
    /* margin-left:30px; */
}
.concrete .details .details1{
    position:absolute;
    right:0;
    top:115px;
    /* position:fixed; */
}
.concrete .details li h4{
    /* display:flex; */
    line-height:50px;
}
.concrete .details .details1 span{
    padding-right:10px;
    padding-left:10px;
    font-size:0;
    color:rgb(170, 159, 159);
}
.concrete .details .details1 span i{
    padding:5px;
    font-size:20px;
    background-color:rgb(233, 215, 215);
    border:1px solid rgb(182, 172, 172);
}
.concrete .details .details1 span:nth-child(1){
    border-right:1px solid rgb(201, 188, 188);
}
.concrete .details .details1 span:nth-child(2){
    font-size:20px;
}
.concrete .details li:nth-child(3) .picture{
    margin:10px 10px 0 0 ;
}
.concrete .details li .text{
    margin-left:90px;
    margin-top:-40px;
    line-height:1.5;
}
.concrete .details li .text p{
    margin-bottom:20px;
}
.concrete .details li .text i{
    margin-left:-70px;
    font-size:30px;
    background-color:rgb(230, 217, 217);
    border:1px solid rgb(182, 172, 172);
}
.concrete .details li .text .last{
    padding:5px;
    padding-left:37px;
    margin-left:-30px;
    vertical-align: top;
    border:1px solid rgb(182, 172, 172);
    line-height:30px;
}
        </style>
    </head>
    <body>
        <div class="box">
            <div class="fasten">
                <div class="photo">
                    <ul>
                        <li><i class="iconfont icon-zhifeiji"></i></li>
                        <li><i class="iconfont icon-huojian"></i></li>
                        <li><i class="iconfont icon-iosgamecontrollerb"></i></li>
                        <li><i class="iconfont icon-plus"></i></li>
                    </ul>
                </div>
                <ul>
                    <li><i class="iconfont icon-yingyong"></i></li>
                    <li><i class="iconfont icon-shezhi"></i></li>
                </ul>
            </div>
            <div class="menu">
                <ul class="list1">
                    <li>MENU<i class="iconfont icon-shezhi"></i></li>
                    <li>Overview</li>
                    <li>Sales<i class="iconfont "></i></li>
                    <li>Your Staff</li>
                    <li>Analytics & Targeting</li>
                    <li>What's New</li>
                </ul>
                <ul class="list">
                    <li>YOUR PRODUCTS<i class="iconfont icon-shezhi"></i></li>
                    <li><i class="iconfont icon-shu"></i>Books</li>
                    <li><i class="iconfont icon-xiangji-copy"></i>Tutorials</li>
                    <li><i class="iconfont icon-stocks"></i>Stocks</li>
                    <li><i class="iconfont icon-gupiao"></i>Infographics</li>
                </ul>
                <ul class="list2">
                    <li>DASHBOARD<i class="iconfont icon-shezhi"></i></li>
                    <li>Messages</li>
                    <li>Connections</li>
                    <li>Integrations<i class="iconfont icon-gantanhao"></i></li>
                    <li>Account Settings</li>
                    <li>App Settings</li>
                </ul>
                <div class="menu-t">
                    <span>Monthly Goals</span>
                    <span>$580/$3200</span>
                    <img src="images/10.png" alt="">
                </div>
            </div>
            <div class="content">
                <div class="nav">
                    <h1>Message</h1>
                    <div class="regular">
                        <img src="images/11.png" alt="">
                        <ul>
                            <li><h3>Jordan.J</h3></li>
                            <li>Administrator</li>
                        </ul>
                        <i class="iconfont icon-arrow-bottom"></i>
                    </div>
                </div>
                <div class="people">
                    <ul class="information">
                        <li>
                            <span>Search</span>
                            <i class="iconfont icon-sousuo"></i>
                        </li>
                        <li>
                            <img src="images/1.png" alt="" width="60px" height="60px">
                            <ul class="information1">
                                    <li>
                                        <h4>Bessie Berry</h4>
                                        <span>3m</span>
                                    </li>
                                    <li> Twitter</li>
                                    <li>
                                        <p>I pay for the 4Mb/sec down, 512 Kb/sec up service from o2. In fact,
                                                it's relatively quick andstable.</p>
                                    </li>
                            </ul>
                        <li>
                            <img src="images/3.png" alt=""  width="60px" height="60px">
                            <ul class="information1 information2">
                                    <li>
                                        <h4>Bessie Berry</h4>
                                        <span>8m</span>
                                    </li>
                                    <li> Twitter</li>
                                    <li>
                                        <p>I pay for the 4Mb/sec down, 512 Kb/sec up service from o2. In fact,
                                                it's relatively quick andstable.</p>
                                    </li>
                                </ul>
                        </li>
                        <li>
                            <img src="images/4.png" alt="" width="60px" height="60px">
                            <ul class="information1 information2">
                                    <li>
                                        <h4>Bessie Berry</h4>
                                        <span>5m</span>
                                    </li>
                                    <li> Twitter</li>
                                    <li>
                                        <p>I pay for the 4Mb/sec down, 512 Kb/sec up service from o2. In fact,
                                                it's relatively quick andstable.</p>
                                    </li>
                                </ul>
                        </li>
                        <li>
                            <img src="images/12.png" alt="" width="60px" height="60px">
                            <ul class="information1 information2">
                                    <li>
                                        <h4>Bessie Berry</h4>
                                        <span>3m</span>
                                    </li>
                                    <li> Twitter</li>
                                    <li>
                                        <p>I pay for the 4Mb/sec down, 512 Kb/sec up service from o2. In fact,
                                                it's relatively quick andstable.</p>
                                    </li>
                                </ul>
                        </li>
                        <li>
                            <img src="images/5.png" alt="" width="60px" height="60px">
                            <ul class="information1 information2">
                                    <li>
                                        <h4>Bessie Berry</h4>
                                        <span>3m</span>
                                    </li>
                                    <li> Twitter</li>
                                    <li>
                                        <p>I pay for the 4Mb/sec down, 512 Kb/sec up service from o2. In fact,
                                                it's relatively quick andstable.</p>
                                    </li>
                                </ul>
                        </li>
                        <li>
                            <img src="images/6.png" alt="" width="60px" height="60px">
                            <ul class="information1 information2">
                                    <li>
                                        <h4>Bessie Berry</h4>
                                        <span>3m</span>
                                    </li>
                                    <li> Twitter</li>
                                    <li>
                                        <p>I pay for the 4Mb/sec down, 512 Kb/sec up service from o2. In fact,
                                                it's relatively quick andstable.</p>
                                    </li>
                                </ul>
                        </li>
                        <li>
                            <img src="images/7.png" alt="" width="60px" height="60px">
                            <ul class="information1 information2">
                                    <li>
                                        <h4>Bessie Berry</h4>
                                        <span>3m</span>
                                    </li>
                                    <li> Twitter</li>
                                    <li>
                                        <p>I pay for the 4Mb/sec down, 512 Kb/sec up service from o2. In fact,
                                                it's relatively quick andstable.</p>
                                    </li>
                                </ul>
                        </li>
                    </ul>
                </div>
                <div class="concrete">
                        <ul class="details">
                            <li>
                                <h4>Bessie Berry</h4>
                                <div class="details1">
                                <span>
                                    <i class="iconfont icon-jiahaoyou"></i>
                                    <i class="iconfont icon-shangchuan"></i>
                                    <i class="iconfont icon-shanchu"></i>
                                </span>
                                <span>1 of 28</span>
                                <span>
                                    <i class="iconfont icon-zuojiantou"></i>
                                    <i class="iconfont icon-jiantouarrow486"></i>
                                </span>
                                </div>
                            </li>
                            <li>
                                <img src="images/1.png" alt="" width="60px" height="60px">
                                <div class="text">
                                <span>Bessie Berry</span>
                                <span>8:31AM</span>
                                <p>I pay for the 4Mb/sec down, 512 Kb/sec up service from o2. In fact,
                                it's relatively quick andstable.I pay for the 4Mb/sec down, 512 Kb/sec up service from o2. In fact,
                                it's relatively quick andstable.</p>
                                </div>
                                <img src="images/2.png" alt="" width="60px" height="60px">
                                <div class="text">
                                <span>Bessie Berry</span>
                                <span>8:31AM</span>
                                <p>I pay for the 4Mb/sec down, 512 Kb/sec up service from o2. In fact,
                                it's relatively quick andstable.I pay for the 4Mb/sec down, 512 Kb/sec up service from o2. In fact,
                                it's relatively quick andstable. it's relatively quick andstable.I pay for the 4Mb/sec down, 512 Kb/sec up service from o2. In fact,
                                it's relatively quick andstable.</p>
                                </div>
                            </li>
                            <li>
                                <img src="images/1.png" alt="" width="60px" height="60px">
                                <div class="text">
                                <span>Bessie Berry</span>
                                <span>8:31AM</span>
                                <p>I pay for the 4Mb/sec down, 512 Kb/sec up service from o2. In fact,
                                 it's relatively quick andstable.I pay for the 4Mb/sec down, 512 Kb/sec up service from o2. In fact,
                                it's relatively quick andstable.</p>
                                </div>
                                <img src="images/2.png" alt="" width="60px" height="60px">
                                <div class="text">
                                <span>Bessie Berry</span>
                                <span>8:31AM</span>
                                <p>I pay for the 4Mb/sec down, 512 Kb/sec up service from o2. In fact,
                                it's relatively quick andstable.I pay for the 4Mb/sec down, 512 Kb/sec up service from o2. In fact,
                                it's relatively quick andstable.it's relatively quick andstable.I pay for the 4Mb/sec down, 512 Kb/sec up service from o2. In fact,
                                it's relatively quick andstable.</p>
                                <img src="images/8.png" alt="" class="picture">
                                <img src="images/9.png" alt="" class="picture">
                                </div>
                            </li>
                            <li>
                                <img src="images/1.png" alt="" width="60px" height="60px">
                                <div class="text">
                                <span>Bessie Berry</span>
                                <span>8:31AM</span>
                                <p>I pay for the 4Mb/sec down, 512 Kb/sec up service from o2. In fact,
                                it's relatively quick andstable.I pay for the 4Mb/sec down, 512 Kb/sec up service from o2. In fact,
                                it's relatively quick andstable.</p>
                                <span class="last"><i class="iconfont icon-plus"></i>I pay for the 4Mb/sec down, 512 Kb/sec up service from o2. In fact</span>
                                </div>
                            </li>
                        </ul>
                    </div>
            </div>
        </div>
    </body>
</html>