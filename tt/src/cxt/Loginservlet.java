package cxt;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager; //�������������
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
		String driverName="com.microsoft.sqlserver.jdbc.SQLServerDriver";  //��������
		String url="jdbc:sqlserver://localhost:1433;DatabaseName=studb";      //�˿ں����ݿ�����
		String user="sa";             //��¼���ݿ��˺�
		String pwd="123456";           //��¼���ݿ�����
		String username=request.getParameter("uname");    //��ҳ��������û���
		String upwd=request.getParameter("pwd");          //��ҳ�����������
		try{
			Class.forName(driverName);   //�������ӵ����ݿ��������JVM��java������� ͨ��java.lang.Class��ľ�̬����forName(String className)ʵ��
										//�ɹ����غ󣬻Ὣ���ص�������ע���DriverManager�࣬�������ʧ�ܻ��׳�ClassNotFoundException�쳣,����û���ҵ���������.
										//������Ҫ�ڼ������ݿ��������ʱ��׽�����׳����쳣.
			try{                                                //ͨ���ղż��غõ����������������ķ���getConnection���������ݿ�����
				Connection conn=DriverManager.getConnection(url,user,pwd);  //������ݿ�����Ӷ���(���ݿ��·��,�û���������)
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
		}catch(ClassNotFoundException e){       //��һ��try����,�������ݿ�����ʱ�׳��쳣,
			System.out.println("�������ݿ�����ʱ�׳��쳣,��������:");
			e.printStackTrace();
		}
	}
	public void doPost(HttpServletRequest request,HttpServletResponse response)
	throws ServletException,IOException{
		this.doGet(request, response);
	}
}
