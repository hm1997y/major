package cxt;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;
import java.sql.SQLException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


public class FYFindServlet extends HttpServlet
{
	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException
	{
		int currPage=1;
		if(request.getParameter("page")!=null)
		{
			currPage=Integer.parseInt(request.getParameter("page"));
		}
		BookDao dao=new BookDao();
		List<bookBean> list = dao.find(currPage);
		request.setAttribute("list", list);
		int pages;
		int count=dao.findCount();
		if(count%bookBean.pagesize==0)
		{
			pages=count/bookBean.pagesize;
		}
		else
		{
			pages=count/bookBean.pagesize+1;
		}
		StringBuffer sb=new StringBuffer();
		for(int i=1;i<=pages;i++)
		{
			if(i==currPage)
			{
				sb.append("["+i+"]");
			}
			else
			{
				sb.append("<a href='FYFindServlet?page="+i+"'>"+i+"</a>");
			}
			sb.append(" ");
		}
		request.setAttribute("bar",sb.toString());
		request.getRequestDispatcher("List.jsp").forward(request, response);
	}
}
