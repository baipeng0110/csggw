<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ page import="java.sql.*"%>
<%@ page import="com.manager.DBLink"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html lang="en">
 <head>
  <meta charset="UTF-8">
  <meta name="Generator" content="EditPlus®">
  <meta name="Author" content="">
  <meta name="Keywords" content="">
  <meta name="Description" content="">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,Chrome=1" />
  <link rel="Shortcut Icon" href="image/biaozhi.ico" />
 <title>中国矿业大学计算机学院关心下一代工作委员会</title>
 
 <link href="bootstrap/bootstrap-3.3.4-dist/css/bootstrap.min.css" rel="stylesheet">
<script src="bootstrap/bootstrap-3.3.4-dist/js/jquery-2.1.3.min.js"></script>
<script src="bootstrap/bootstrap-3.3.4-dist/js/bootstrap.min.js"></script>
<script src="js/Scoller.js"></script>
 <link rel="stylesheet" href="css/main.css" />
 <link href="css/daohangstyle.css" type="text/css" rel="stylesheet" />

 
 
 
 
 </head>
 <body style="margin: 0 auto;">
 	<p style="text-align:center">
	<img src="image/head.jpg"  onclick="javascript:void(0);"/>
</p>


<!--nav开始-->
<div id="nav">
    <a href="http://qzdt.cumt.edu.cn/csggw/">网站首页</a>
    <a href="ggwjj.jsp">关工委简介</a>
    <a href="tzgglb.jsp">通知公告</a>
    <a href="wjxzlb.jsp">文件下载</a>
    <a href="hddtlb.jsp">新闻动态</a>
    <a href="ly.jsp">在线留言</a>
    <a href="tx.jsp">通信地址</a>
</div>
<!--nav结束-->
<!--banner开始  -->
<div class="zhong" style="position:center;">
<div id="myCarousel" class="carousel slide">
	<!-- 轮播（Carousel）指标 -->
	<ol class="carousel-indicators">
		<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
		<li data-target="#myCarousel" data-slide-to="1"></li>
		<li data-target="#myCarousel" data-slide-to="2"></li>
	</ol>   
	<!-- 轮播（Carousel）项目 -->
	<div class="carousel-inner">
		<div class="item active">
			<img src="image/10.png" alt="First slide">
		</div>
		<div class="item">
			<img src="image/11.png" alt="Second slide">
		</div>
		<div class="item">
			<img src="image/12.png" alt="Third slide">
		</div>
	</div>
	<!-- 轮播（Carousel）导航 -->
	
</div> 
</div>
<!--banner结束-->



<!--下面三个新闻版块   -->
	<div class="zhong" style="position:center;height:300px;">	
	 
	  <div class="left" > 	  
	 <font size="4"><b> 通知公告</b></font>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
	  <a href="tzgglb.jsp" class="more">more</a><br><br>
	<% DBLink dk2=new DBLink();
 	 ResultSet rs2=dk2.Show("新闻类别","通知公告",10); 
 	 %>
 	 <ul>
  	<%while(rs2.next()){
  	String str2=rs2.getString("content"); %>
  	<li>
 	<% if(rs2.getString("biaoti").length()>10) {%>
	<span style="width:120px"><a  href="utzgg?id=<%=rs2.getString("id") %>">
	<%=rs2.getString("biaoti").substring(0, 10)+"..."	 %>
	</a>
	</span>
	<span style="width:80px;float:right;"><%=rs2.getString("time") %></span><br>
 	<%}
 	else{ %>
 	<span style="width:120px">
 	<a href="utzgg?id=<%=rs2.getString("id") %>">
	<%=rs2.getString("biaoti") %>
	</a>
	</span>
	<span style="width:80px;float:right;"><%=rs2.getString("time") %></span><br>
	<%} %> 
	</li>
	<%} %> 
	</ul>
				
	
	</div>
	
	 
				

				
			
			
				
	  <div class="middle">
	  <font size="4"> <b>  新闻动态</b></font>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
	  &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
	  &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
	  <a href="hddtlb.jsp" class="more">more</a><br><br>
<% DBLink dk4=new DBLink();
 
  ResultSet rs4=dk4.Show("新闻类别","新闻动态",10); 
  %>
   <ul>
  <%while(rs4.next()){
  String str4=rs4.getString("content"); %>
  	<li>
   <% if(rs4.getString("biaoti").length()>15) {%>
<span style="width:140px"><a href="uhddt?id=<%=rs4.getString("id") %>">
<%=rs4.getString("biaoti").substring(0, 15)+"..."	 %>
</a>
</span>
<span style="width:80px;float:right;"><%=rs4.getString("time") %></span><br>
 <%}
 else{ %>	
 <span style="width:230px">
 <a href="uhddt?id=<%=rs4.getString("id") %>">
<%=rs4.getString("biaoti") %>
</a>
</span>
<span style="width:80px;float:right;"><%=rs4.getString("time") %></span><br>
<%} %> 
	</li><%} %> 
    </ul>
	  </div>

<div class="right" >
<font size="4"><b> 文件下载</b></font>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
	  <a href="wjxzlb.jsp" class="more">more</a><br><br>
<% DBLink dk3=new DBLink();
 
  ResultSet rs3=dk3.Show("新闻类别","文件下载",10); 
  %>
  <ul>
  <%while(rs3.next()){
  String str2=rs3.getString("content"); %>
  <li>
 <% if(rs3.getString("biaoti").length()>10) {%>
<span style="width:140px"><a href="uxjxz?id=<%=rs3.getString("id") %>">
<%=rs3.getString("biaoti").substring(0, 10)+"..."	 %>
</a>
</span>
<span style="width:80px;float:right;"><%=rs3.getString("time") %></span><br>
 <%}
 else{ %>
<span style="width:140px"> <a href="uwjxz?id=<%=rs3.getString("id") %>">
<%=rs3.getString("biaoti") %>
</a>
</span>
<span style="width:80px;float:right;"><%=rs3.getString("time") %></span><br>
<%} %> 
	</li><%} %> 
    
    
				</ul>
	  
	  </div>
	 
	  
	    
	   </div>
	   
	   
	 <!--下面三个新闻版块结束  -->  
	
        <script language="javascript">
 
      function w41_openLink(obj) { 
          var v = obj.value; 
          if (v != "") { 
              window.open(v); 
              obj.blur(); 
          } 
          obj.selectedIndex = 0; 
      } 
</script>
	 
	 


   <div class="foot">

   <center>
 
	 
	 <select class="w41_openLink" onchange="w41_openLink(this)" style="width:200px;">
<option selected="" value="">-----友情链接-----</option>
<option value="http://www.cumt.edu.cn/">中国矿业大学首页</option>
<option value="http://ltx.cumt.edu.cn/site/ggw/">中国矿业大学关工委</option>
<option value="http://xgc.cumt.edu.cn/">中国矿业大学学工处</option>
<option value="http://jwchu.cumt.edu.cn/DWWZ/DWWZQianTai/JWB/Index.aspx">中国矿业大学教务部</option>
<option value="http://cs.cumt.edu.cn">中国矿业大学计算机学院</option>


</select>&nbsp&nbsp
	    		&copy版权所有：中国矿业大学大学生计算机学院  &nbsp &nbsp&nbsp&nbsp
	    		<a href="mlogin.jsp">管理登录</a><br>
	    		地址：江苏省徐州市大学路1号中国矿业大学南湖校区 &nbsp &nbsp&nbsp&nbsp     邮编：221116    
	 </center>


   </div> 


 </body>
</html>
