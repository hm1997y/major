package cxt;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.sun.xml.internal.bind.v2.schemagen.xmlschema.List;

public class SCFindServlet extends HttpServlet {

	public SCFindServlet() {
		super();
	}

	public void destroy() {
		super.destroy();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException 
	{
		try
		{
	         Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
	         String url="jdbc:sqlserver://localhost:1433;DatebaseName=studb";
	         String username="sa";         //数据库用户名
	         String password="123456";     //数据库密码
	         Connection conn=DriverManager.getConnection(url,username,password);
	         Statement stmt=conn.createStatement();
	         String sql="select * from tb_book";
	         ResultSet rs=stmt.executeQuery(sql);
	         ArrayList<bookBean> list=new ArrayList<bookBean>();
	         while(rs.next())
	         {
	        	 bookBean book=new bookBean();
	        	 book.setId(rs.getInt("id"));
	        	 book.setName(rs.getString("name"));
	        	 book.setPrice(rs.getDouble("price"));
	        	 book.setBookCount(rs.getInt("BookCount"));
	        	 book.setAuthor(rs.getString("author"));
	        	 list.add(book);
	        	 
	         }
	         request.setAttribute("list",list);
	         rs.close();
	         stmt.close();
	         conn.close();
		}
		catch (ClassNotFoundException e)
		{
			e.printStackTrace();
		}
		catch (SQLException e)
		{
			e.printStackTrace();
		}
		//请求转发到bookList.jsp
		request.getRequestDispatcher("SCBookList.jsp").forward(request,response);
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		response.setContentType("text/html");
		PrintWriter out = response.getWriter();
		out.println("<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\">");
		out.println("<HTML>");
		out.println("  <HEAD><TITLE>A Servlet</TITLE></HEAD>");
		out.println("  <BODY>");
		out.print("    This is ");
		out.print(this.getClass());
		out.println(", using the POST method");
		out.println("  </BODY>");
		out.println("</HTML>");
		out.flush();
		out.close();
	}


	public void init() throws ServletException {
	}

}
