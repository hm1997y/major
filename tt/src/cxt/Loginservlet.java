package cxt;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager; //驱动程序管理器
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;


public class Loginservlet extends HttpServlet{
	public void doGet(HttpServletRequest request,HttpServletResponse response)
	throws ServletException,IOException{
		response.setContentType("text/html");
		String driverName="com.microsoft.sqlserver.jdbc.SQLServerDriver";  //加载驱动
		String url="jdbc:sqlserver://localhost:1433;DatabaseName=studb";      //端口和数据库名字
		String user="sa";             //登录数据库账号
		String pwd="123456";           //登录数据库密码
		String username=request.getParameter("uname");    //网页中输入的用户名
		String upwd=request.getParameter("pwd");          //网页中输入的密码
		try{
			Class.forName(driverName);   //加载连接到数据库的驱动到JVM（java虚拟机） 通过java.lang.Class类的静态方法forName(String className)实现
										//成功加载后，会将加载的驱动类注册给DriverManager类，如果加载失败会抛出ClassNotFoundException异常,就是没有找到驱动的类.
										//所以需要在加载数据库驱动类的时候捕捉可能抛出的异常.
			try{                                                //通过刚才加载好的驱动程序管理器类的方法getConnection来建立数据库连接
				Connection conn=DriverManager.getConnection(url,user,pwd);  //获得数据库的连接对象(数据库的路径,用户名，密码)
				String sql = "select * from usertab where username = '"+username+"' and upwd = '"+upwd+"'";
				Statement stat = conn.createStatement();
				//ps.setString(1,username);
				ResultSet rs=stat.executeQuery(sql);
				//String mima="";
				if(rs.next()){
					request.getRequestDispatcher("xuxiang.jsp").forward(request, response);
				}
				else
					request.getRequestDispatcher("erro.jsp").forward(request, response);
			}catch(SQLException e){
				e.printStackTrace();
			}
		}catch(ClassNotFoundException e){       //第一个try函数,加载数据库驱动时抛出异常,
			System.out.println("加载数据库驱动时抛出异常,内容如下:");
			e.printStackTrace();
		}
	}
	public void doPost(HttpServletRequest request,HttpServletResponse response)
	throws ServletException,IOException{
		this.doGet(request, response);
	}
}
