package cxt;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class UpdateServlet extends HttpServlet {
	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		int id = Integer.valueOf(request.getParameter("id"));
		int bookCount = Integer.valueOf(request.getParameter("bookCount"));
		try
		{
	         Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
	         String url="jdbc:sqlserver://localhost:1433;DatebaseName=studb";
	         String username="sa";         //数据库用户名
	         String password="123456";     //数据库密码
	         Connection conn=DriverManager.getConnection(url,username,password);
	         String sql = "update tb_book set bookCount = ? where id = ?";//更新sql语句
	         //获取prepareStatement
	         PreparedStatement ps = conn.prepareStatement(sql);
	         ps.setInt(1,bookCount);
	         ps.setInt(2,id);
	         ps.executeUpdate();
	         ps.close();
	         conn.close();
	}catch(Exception e){
		e.printStackTrace();
	}
		response.sendRedirect("XiugaiServlet");
	}
		

	
	

}
