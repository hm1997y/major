<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ page import = "java.sql.*" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'searchcheack.jsp' starting page</title>
    
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
	table{
	margin-top:100px;
border-collapse:collapse;
	}
	th,td{
	text-align:center;
	border:1px solid #ffb;
	cellpadding:0;
	color:#fbf;
	padding:5px;
	}
	h2{
	margin-top:50px;
	text-align:center;
	color:#fff;
	letter-spacing:20px;
	font-size:30px;
	font-weight:bold;
	}
	button{
	display:block;
	margin:40px auto;
	width:50px;
	height:50px;
	border-radius:50%;
	}
	a{
	text-decoration:none;
	color:black;
	}
	button:hover{
	transform:scale(1.2);
	}
	</style>

  </head>
  
  <body>
  <h2>书籍详细信息</h2>
    <%
		String name = request.getParameter("uname");
		String author = request.getParameter("auth");
	%>
			<table width="98%" border="0" text-align="center" cellpadding="0" cellspacing="1" background="#949494"">
					<tr background="#949494">
						<th>书籍ID</th>
						<th>书籍名字</th>
						<th>书籍价格</th>
						<th>书籍数量</th>
						<th>书籍作者</th>
					</tr>
					<%
						try{
							Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
							String url = "jdbc:sqlserver://localhost:1433;DatabaseName=studb";
							String user = "sa";
							String psw = "123456";
							Connection conn = DriverManager.getConnection(url,user,psw);
							String sql = "select *from dbo.tb_book where ";
							if(name!=null){
								sql += "name  like '%" +name+"%' ";
							}
							if(author!=null){
								sql += "and author  like '%" +author+"%'";
							}
							Statement stmt = conn.createStatement();
							ResultSet rs = stmt.executeQuery(sql);
							while(rs.next()){
								Integer id = rs.getInt("ID");
								String uname = rs.getString("name");
								String price = rs.getString("price");
								String count = rs.getString("bookCount");
								String auth = rs.getString("author");
								out.println("<tr><td>" + id + "</td><td>"
															  + uname + "</td><td>" + price + "</td><td>" + count + "</td><td>" + auth + "</td></tr>");
							}
							conn.close();
						}catch(ClassNotFoundException e){
							out.println("-----出错了!!!-----");
						}catch(SQLException e){
							out.println("-------出错了!!!!!!：SQLException e-------");
						}
					%>
			</table>
			<button><a href="xuxiang.jsp">返回</a></button>

  </body>
</html>
