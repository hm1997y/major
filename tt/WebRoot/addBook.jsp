<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.sql.*" %>
<%request.setCharacterEncoding("UTF-8"); %>
<jsp:useBean id="book" class="cxt.bookBean"></jsp:useBean>
<jsp:setProperty property="*" name="book"/>
<%
    try
    {
         Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
         String url="jdbc:sqlserver://localhost:1433;DatebaseName=studb";
         String username="sa";         //数据库用户名
         String password="123456";     //数据库密码
         Connection conn=DriverManager.getConnection(url,username,password);
         String sql="insert into tb_book(name,price,bookCount,author) values(?,?,?,?)";
         PreparedStatement ps=conn.prepareStatement(sql);
         ps.setString(1,book.getName());
         ps.setDouble(2,book.getPrice());
         ps.setInt(3,book.getBookCount());
         ps.setString(4,book.getAuthor());
         int row=ps.executeUpdate();
         if(row>0)
         {
              out.print("成功添加了"+row+"条数据！");
         }
         ps.close();
         conn.close();
    }
    catch(Exception e)
    {
    out.print("图书信息添加失败！");
    e.printStackTrace();
    }
 %>
 
 <br><button style="margin-top:10px;"><a href="add.jsp" style="text-decoration:none;
	color:black;">返回</a></button>
 <br><button style="margin-top:10px;"><a href="FindServlet" style="text-decoration:none;
	color:black;">查看图书列表</a></button>
