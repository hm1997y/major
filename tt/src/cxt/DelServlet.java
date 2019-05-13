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

public class DelServlet extends HttpServlet {

	public DelServlet() {
		super();
	}
	public void destroy() {
		super.destroy();
	}
	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException 
	{
	}
	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException 
    {
		try
		{
			 Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
	         String url="jdbc:sqlserver://localhost:1433;DatebaseName=studb";
	         String username="sa";         //数据库用户名
	         String password="123456";     //数据库密码
	         Connection conn=DriverManager.getConnection(url,username,password);
	         String sql="DELETE FROM tb_book WHERE id=?";
	         PreparedStatement ps=conn.prepareStatement(sql);
	         String ID[]=request.getParameterValues("delid");
	         if(ID.length>0)
	         {
	        	 for(int i=0;i<ID.length;i++)
	        	 {
	        		 ps.setInt(1,Integer.parseInt(ID[i]));
	        		 ps.addBatch();
	        	 }
	         }
	         ps.executeBatch();
	         ps.close();
	         conn.close();
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		response.sendRedirect("SCFindServlet");
	}

	public void init() throws ServletException {
	}

}
