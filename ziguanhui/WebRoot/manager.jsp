<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
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
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	 <meta http-equiv="X-UA-Compatible" content="IE=edge,Chrome=1" />
	 <link rel="Shortcut Icon" href="image/biaozhi.ico" />
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->

  </head>
  
  <body>
  <div>
  

    
  


  <div style="position:relative;">
   <img src="image/beijing2.jpg" width="1360" height="630" />
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
   
   <div style="position:absolute; left:320px; top:100px; border:#000 solid 1px;">

<table>
<tr>
<td>
程序所用服务器：tomcat
</td>
</tr>
<tr>
<td>
程序访问链接：
</td>
</tr>
<tr>
<td>
程序所用语言:jsp
</td>
</tr>
<tr>
<td>
程序所用数据库:mysql
</td>
</tr>
<tr>
<td>
图片存储路径：
</td>
</tr>
<tr>
<td>
附件存储路径:
</td>
</tr>

</table>

<br>
<table>
<tr>
官方名称:中国矿业大学计算机学院关工委
</tr><br>
<tr>
技术支持:计易空间
</tr>
</table>
   </div>
</div>
  </body>
</html>
