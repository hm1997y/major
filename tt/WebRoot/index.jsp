<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'denglu.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<style>
	*{
	margin:0;
	padding:0;
	list-style:none;
	}
	
	.login{
	position:absolute;
	top:50%;
	left:50%;
	margin-left:-115px;
	margin-top:-130px;
	}
	.nav{
	position:absolute;
	top:20px;
	left:50%;
	margin-left:-210px;
	}
	.nav span{
	font-size:30px;
	margin-right:200px;
	}
	button{
	width:80px;
	height:30px;
	border-radius:15px;
	margin-right:30px;
	}
	button a{
	text-decoration:none;
	color:#000;
	font-weight:bold;
	}
	button:hover{
	transform:scale(1.3);
	}
	.login form p{
	padding:5px;
	}
	
	</style>
	
  </head>
  
  <body>
  <div class="sky">
	<div class="clouds_one"></div>
	<div class="clouds_two"></div>
	<div class="clouds_three"></div>
 </div>
 <div class="nav">
 <span>四川大学锦江学院图书馆欢迎您！</span>
<button><a href="#">用户登录</a></button>
<button><a href="zuce.html">用户注册</a></button>
 </div>
 
   <div id="box">
        <div class="conter">
            <div class="login">
            <form action="Loginservlet" method="post">
                <p>账号：<input type="text" name="uname" placeholder="请输入账户名"></p>
                <p>密码：<input type="password" name="pwd" placeholder="请输入密码"></p>
                <p>类型：
                    <select name="characters" id="">
                        <option value="管理员">管理员</option>
                        <option value="学生">学生</option>
                        <option value="辅导员">辅导员</option>
                    </select>
                </p>
                <input type="submit" value="登陆" style="text-align:center;margin:5px;">
            </form>
            </div>
        </div>
    </div>
  </body>
</html>