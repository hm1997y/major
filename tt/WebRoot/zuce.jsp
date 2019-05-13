<%@ page language="java" import="java.util.*" pageEncoding="ISO-8859-1"%>
<%@ page import = "java.sql.*" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<%
		String username2 = request.getParameter("user2");
		String password2 = request.getParameter("psd2");
		String repassword = request.getParameter("repsd");
		Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
		String url = "jdbc:sqlserver://localhost:1433;DatabaseName=studb";
		String usern = "sa";
		String psdd = "123456";
		Connection conn = DriverManager.getConnection(url,usern,psdd);
		String sql = "select * from usertab where username = '"+username2+"'";
		Statement stat = conn.createStatement();
		ResultSet rs = stat.executeQuery(sql);
		if(rs.next()){
			out.println("<script>alert('该用户已被注册,请重新输入!');window.location.href='zuce.html';</script>");
		}else{
			PreparedStatement ps = conn.prepareStatement("insert into usertab(username,upwd) values (?,?)");
			ps.setString(1, username2);
			ps.setString(2,password2);
			int n = ps.executeUpdate();
			if(n>0){
				response.sendRedirect("index.jsp");
			}
			conn.close();
			ps.close();
		}
		%>
