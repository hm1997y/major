<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.util.*" %>
<%@ page import="cxt.bookBean" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'book _list.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
	<style>
	div{
	text-align:center;
	width:100%;
	height:400px;
	background:url(image/01.jpg) center/cover;
	margin-bottom:50px;
	}
	h2{
	line-height:300px;
	letter-spacing:20px;
	font-weight:bold;
	font-size:30px;
	}
	button{
	width:50px;
	height:50px;
	border-radius:50%;
	}
	button:hover{
	transform:scale(1.2);
	}
	footer{
	width:200px;
	margin-left:1100px;
	}
	button{
	margin-top:10px;
	}
	a{
	text-decoration:none;
	color:black;
	}
	</style>
	<script type="text/javascript">
      function CheckAll(elementsA,elementsB)
      {
          for(i=0;i<elementsA.length;i++)
          {
              elementsA[i].checked=true;
          }
          if(elementB.checked==false)
          {
              for(j=0;j<elementsA.length;j++)
              {
                  elementsA[j].checked=false;
              }
          }
      }
      //判断用户是否选择了要删除的记录，如果是，则提示“是否删除”；否则踢提示“请选择要删除的记录”
      function checkdel(delid,formname)
      {
          var flag=false;
          for(i=0;i<delid.length;i++)
          {
              if(delid[i].checked)
              {
                  flag=true;
                  break;
              }
          }
          if(!flag)
          {
              alert("请选择要删除的记录！");
              return false;
          } 
          else
          {  
              if(confirm("确定要删除吗？"))
              {
                  formname.submit();
              }
          }
      }
    </script>
	
  </head>
  
  <body>
  <div width="98%" align="center"><h2>所有图书信息</h2></div>
   <form action="DelServlet" method="post" name="frm">

    <table width="98%" border="0" align="center" cellpadding="0" cellspacing="1" bgcolor="#666666">
      <tr>
          <th bgcolor="#FFFFFF">ID</th>
          <th bgcolor="#FFFFFF">图书名称</th>
          <th bgcolor="#FFFFFF">价格</th>
          <th bgcolor="#FFFFFF">数量</th>
          <th bgcolor="#FFFFFF">作者</th>
          <th bgcolor="#FFFFFF">删除</th>
      </tr>
      <%
      //获取图书馆信息集合
      List<bookBean> list=(List<bookBean>) request.getAttribute("list");

      //判断集合是否有效
      if(list==null || list.size()<1){
          out.print("<tr><td bgcolor='#FFFFFF' colspan='5'>没有任何图书信息！</td></tr>");
      } else{
          //遍历图书集合中的数据
          for(bookBean book:list) {
       %>
       <tr align="center">
          <td bgcolor="#FFFFFF"><%=book.getId() %></td>
          <td bgcolor="#FFFFFF"><%=book.getName() %></td>
          <td bgcolor="#FFFFFF"><%=book.getPrice() %></td>
          <td bgcolor="#FFFFFF"><%=book.getBookCount() %></td>
          <td bgcolor="#FFFFFF"><%=book.getAuthor() %></td>
          <td bgcolor="#FFFFFF"><input name="delid" type="checkbox" class="noborder" value="<%=book.getId() %>"></td>
          
       </tr>
       <%
             }
         }
        %>
    </table>
    <footer>
        <input name="checkbox" type="checkbox"  class="noborder" onClick="CheckAll(frm.delid,frm.checkbox)">
        <button>全选/反选</button>  <button><a style="color:red;cursor:pointer;" onClick="checkdel(frm.delid,frm)">删除</a></button>
        <div id="ch" style="display:none">
          <input name="delid" type="checkbox" class="noborder" value="0">
        </div> 
        <button><a href="xuxiang.jsp">返回</a></button>
     </footer>
    
    </form>
  </body>
</html>
