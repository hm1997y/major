package cxt;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import cxt.bookBean;


public class BookDao
{
	public Connection getConnection()
	{
		Connection conn=null;
		try
		{
			Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
	        String url="jdbc:sqlserver://localhost:1433;DatebaseName=studb";
	        String username="sa";         //数据库用户名
	        String password="123456";     //数据库密码
	        conn=DriverManager.getConnection(url,username,password);
		}
		catch(ClassNotFoundException e)
		{
			e.printStackTrace();
		}
		catch(SQLException e)
		{
			e.printStackTrace();
		}
		return conn;
	}
	public List<bookBean> find(int page) 
	{
		ArrayList<bookBean> list=new ArrayList<bookBean>();
		Connection conn=getConnection();
		int y=bookBean.pagesize*(page-1);
		int x=bookBean.pagesize;
		String sql="select top "+x+"* from tb_book where id not in(select top "+y+" " +
				"id from tb_book order by id) order by id";
		try{
			PreparedStatement ps=conn.prepareStatement(sql);
			ResultSet rs=ps.executeQuery();
			while(rs.next())
			{
				bookBean b=new bookBean();
				b.setId(rs.getInt("id"));
				b.setName(rs.getString("name"));
				b.setBookCount(rs.getInt("bookCount"));
				b.setPrice(rs.getDouble("price"));
				b.setAuthor(rs.getString("author"));
				list.add(b);
			}
			rs.close();
			ps.close();
			conn.close();
		}
		catch(SQLException e)
		{
			e.printStackTrace();
		}
		return list;
	}
	public int findCount() 
	{
		int count=0;
		Connection conn=getConnection();
		String sql="select count(*) from tb_book";
		try
		{
			Statement stmt=conn.createStatement();
			ResultSet rs=stmt.executeQuery(sql);
			if(rs.next())
			{
				count=rs.getInt(1);
			}
			rs.close();
			conn.close();
		}
		catch(SQLException e)
		{
			e.printStackTrace();
		}
		return count;
	}
}
