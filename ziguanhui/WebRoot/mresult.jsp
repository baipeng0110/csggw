<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ page import="java.sql.*"%>
<%@ page import="com.manager.DBLink"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>后台管理系统</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<link rel="Shortcut Icon" href="image/biaozhi.ico" />
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	 <meta http-equiv="X-UA-Compatible" content="IE=edge,Chrome=1" />
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->

  </head>
  
  <body >
  <div>
  

    
  


  <div style="position:relative; ">
    <img src="image/beijing2.jpg" style="margin:0; position:fixed;

    width:100%;

    height:100%;"/> -->
   <div style="position:absolute; left:50px; top:100px; border:#000 solid 1px;">

<a href=" scxw.jsp"><input name="submit" type="submit" value="上传新闻" size=""  style="width: 134px; "/></a><br>
<a href=" showadmin.jsp"><input name="submit" type="submit" value="管理新闻" size=""  style="width: 134px; "/></a>

   </div>
   
   
   <div style="position:absolute; left:650px; top:20px; border:#000 solid 1px;">

   <%if(!((String)request.getSession().getAttribute("user")).equals("csggw")) { %>
  <script language="javascript">
  window.alert("请您登陆后再进行操作");
  document.location.href="mlogin.jsp";
  </script>
  
  <%}
  else{ %>
  	欢迎您，<%=(String)request.getSession().getAttribute("name") %> 
  <a href="loginout">退出</a>
  <% }%>
   
 
   </div>
   
   <div style="position:absolute; left:50px; top:200px; border:#000 solid 1px;">
版权所有：中国矿业大学计算机学院<br>
地址：中国矿业大学南湖校区

 
   </div>
   
   <div style="position:absolute; left:320px; top:100px; border:#000 solid 1px;" style="height: auto; width: 900px; ">
   <center>
<%--  <% DBLink dk=new DBLink();
  ResultSet rs=dk.show(); %>
   <%=rs.getString("biaoti") %>
   
   
   <% DBLink dk1=new DBLink();
  ResultSet rs1=dk1.show("rs"); %> --%>
  <%String id=(String)request.getAttribute("id"); %>
  <% DBLink dk=new DBLink();
  ResultSet rs=dk.show(id); 
  rs.next();
  String str=rs.getString("content");%>
  <%-- <%if(str.indexOf("img src=\"")!=-1){ %>
  <img src="<%=str.substring(str.indexOf("img src=\"")+9,str.indexOf("\" alt")) %>"><%} %> --%>
<%=rs.getString("biaoti") %><br>
<%=rs.getString("zuozhe") %> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
<%=rs.getString("time") %><br>
</center>
<%=rs.getString("content") %>
<%-- <%=request.getAttribute("time") %> --%>

   </div>
</div>
  </body>
</html>
