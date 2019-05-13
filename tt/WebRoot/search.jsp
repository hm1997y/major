<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'search.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
	<style>
	body{
	width:100%;
	height:100%;
	background:url(images/beijin.png) center;
	}
	h2{
	margin-top:50px;
	text-align:center;
	color:#fff;
	letter-spacing:20px;
	font-size:30px;
	font-weight:bold;
	}
	form{
	width:300px;
	margin:200px auto;
	color:#fff;
	}
	</style>

  </head>
  
  <body>
  <h2>书籍搜索查找</h2>
    <form action="searchcheack.jsp" method="post">
		<p>书籍名字：<input type="text" name = "uname"></p>
		<p>书籍作者：<input type="text" name = "auth"></p>
		<input type="submit" value = "查找" name = "btn"><br><br>
	</form>

  </body>
</html>
