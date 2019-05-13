<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'xuxiang.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
	<style>
	*{
	margin:0;
	padding:0;
	}
	html,body,.wrapper{
	width:100%;
    height:100%;
	}
	.wrapper{
    
    background: linear-gradient(45deg,#6fc7b5 0%,#13bdce, 20%,#fff 40%, #fcf 60%, #ffa 80%, #ffb 100%);
    background-size: 400%;
    /* 左下角 */
    background-position:0% 100%;
    position:relative;
    animation:gradient 7.5s ease-in-out infinite;
}
@keyframes gradient{
    0% {
        background-position: 0% 100%;
    }
    50% {
        background-position: 100% 0%;
    }
    100% {
        background-position: 0% 100%;        
    }
}
.container {
    margin: 0 auto;
    width: 50%;
}
.menu, .menu ul {
    list-style: none;
    padding: 0;
    margin: 0;
}
.menu {
    height: 58px;
}

.menu li {
	 background: linear-gradient(#292929, #252525);
	border-bottom: 2px solid #181818;
    border-top: 2px solid #303030;
    min-width: 160px;
}
.menu > li {
    display: block;
    float: left;
    position: relative;
}
.menu > li:first-child {
    border-radius: 5px 0 0;
}
.menu a {
    border-left: 3px solid rgba(0, 0, 0, 0);
    color: #808080;
    display: block;
    font-family: 'Lucida Console';
    font-size: 18px;
    line-height: 54px;
    padding: 0 25px;
    text-decoration: none;
    text-transform: uppercase;
}
.menu li:hover{
	background-color: #1c1c1c;
	border-bottom: 2px solid #222222;
    border-top: 2px solid #1B1B1B;

}
.menu li:hover > a {
    border-radius: 5px 0 0 0;
    border-left: 3px solid #C4302B;
    color: #C4302B;
}
.submenu {
    left: 0;
    max-height: 0;
    position: absolute;
    top: 100%;
    z-index: 0;
    }
    .submenu li {
    opacity: 0;
    }
    .menu .submenu li:hover a {
    border-left: 3px solid #454545;
    border-radius: 0;
    color: #ffffff;
    cursor:pointer;
}
.menu > li:hover .submenu, .menu > li:focus .submenu {
    max-height: 2000px;
    z-index: 10;
}
.menu > li:hover .submenu li, .menu > li:focus .submenu li {
    opacity: 1;
    }
   
#banner{
	margin-top:200px;
    position: relative;
    width:100%;
    height:300px;
    overflow: hidden;

}
#banner .item-list{
    position: absolute;
    left:0;
    top:0;
    width:500%;
    height:300px;
    animation: go 20s linear infinite alternate running;
}
#banner .item-list .item{
  
    float:left;
    width:20%;
    height:300px;
}
.btn-list{
    position: absolute;
    bottom:20px;
    left:50%;
    margin-left:-75px;
    z-index: 3;
    width:150px;
    height:30px;
}
.btn-list .btn{
    float:left;
    margin:10px;
    width:10px;
    height:10px;
    border-radius: 50%;
    background-color:#fff;
    cursor: pointer;
}
@keyframes go{
    0%{
        left:0;
    }
    20%{
        left:-100%;
    }
    40%{
        left:-200%;
    }
    60%{
        left:-300%;
    }
    80%{
        left:-300%;
    }
    100%{
        left:-300%;
    }
}
   
    
	</style>

  </head>
  
  <body>
   <div class="wrapper">
   <div class="container">
   <ul class="menu">
   <li><a href="#">功能菜单</a></li>
   <li><a href="index.jsp">首页</a></li>
   <li>
   <a>书籍管理</a>
   <ul class="submenu">
    <li><a href="add.jsp">书籍增加</a></li>
   <li><a href="SCFindServlet">书籍删除</a></li>
   <li><a href="XiugaiServlet">书籍修改</a></li>
   <li><a href="FYFindServlet">书籍查看</a></li>
   <li><a href="search.jsp">书籍搜索</a></li>
   </ul>
   </li>
   <li>
   <a>书籍信息</a>
   <ul class="submenu">
   <li><a href="zuozhe.jsp">书籍作者</a></li>
   <li><a>书籍简介</a></li>
   <li><a>书籍分类</a></li>
   <li><a>书籍详情</a></li>
   </ul>
   </li>
   </ul>
   </div>
   <div id="banner">
       <div class="item-list">
           <div class="item" style="background:url(image/01.jpg) center;"></div>
           <div class="item" style="background:url(image/7.jpg) center;"></div>
           <div class="item" style="background:url(image/5.jpg) center;"></div>
           <div class="item" style="background:url(image/13.jpg) center;"></div>
           <div class="item" style="background:url(image/4.jpg) center;"></div>
       </div>
       <div class="btn-list">
           <div class="btn"></div>
           <div class="btn"></div>
           <div class="btn"></div>
           <div class="btn"></div>
           <div class="btn"></div>
       </div>
    </div>
   
</div>
  </body>
</html>
