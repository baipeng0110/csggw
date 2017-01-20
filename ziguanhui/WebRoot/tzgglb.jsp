<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
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
    
    <title>通知公告</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	 <meta http-equiv="X-UA-Compatible" content="IE=edge,Chrome=1" />
	 <link rel="Shortcut Icon" href="image/biaozhi.ico" />
	<link rel="stylesheet" href="css/lb.css" />
<script src="zzzs/b.js" charset="utf-8"></script>
<!-- <script src="zzzs/v.htm" charset="utf-8"></script> -->
<!-- <script language="javascript" type="text/javascript" src="zzzs/fla.js"></script>
<script src="zzzs/bw.js" charset="UTF-8" type="text/javascript"></script>
<link href="zzzs/bw.css" type="text/css" rel="stylesheet"> -->
 <link href="css/daohangstyle.css" type="text/css" rel="stylesheet" />
  </head>
  
  <body>
  <p style="text-align:center">
	<img src="image/head.jpg" >
</p>

<!--nav-->
<div id="nav">
    <a href="http://qzdt.cumt.edu.cn/csggw/">网站首页</a>
    <a href="ggwjj.jsp">关工委简介</a>
    <a href="tzgglb.jsp">通知公告</a>
    <a href="wjxzlb.jsp">文件下载</a>
    <a href="hddtlb.jsp">新闻动态</a>
    <a href="ly.jsp">在线留言</a>
    <a href="tx.jsp">通信地址</a>
</div>
<div class="zhong" style="position:center;">
	
	 
	    <div class="right"> 
	    <table id="tbSeatList"  class="inputtable" height="12" border="0" cellpadding="0" cellspacing="0" style="height: 133px; width: 630px; ">
  <thead>
  <tr>
                    <th>标题</th>
                    
                    <th>时间</th>
                   
                    
                </tr>
  </thead>
  <tbody id="bodyPaging">
  <tr>
  
  <% DBLink dk=new DBLink();
  ResultSet rs=dk.Show("新闻类别","通知公告",8); %>
  <%if(rs.next()){ %>
  
  <td><a href="utzgg?id=<%=rs.getString("id") %>"><%=rs.getString("biaoti") %></a></td> 
  
    <td><%=rs.getString("time")%></td>
    
    </tr>
  <%}else{ %>
  当前没有任何记录
  <%} %>
  
  <%while(rs.next()){ %>
  <tr>
  <td><a href="utzgg?id=<%=rs.getString("id") %>"><%=rs.getString("biaoti") %></a></td> <td>  <%=rs.getString("time")%></td>
  </tr> <%} %>
  
  </tbody>
  </table>
	<div style="float:right;">
            <table border="0" cellpadding="0" cellspacing="0">
                <tr>
                    <td>
                        <a href="javascript:void(0)" onclick="prePage();" style="color: Black;">上一页</a>
                    </td>
                    <td>

                        &nbsp;&nbsp;<span id="pageindex" style="font-weight: bold;"></span>&nbsp;&nbsp;
                    </td>
                    <td>
                        <a href="javascript:void(0)" onclick="nextPage();" style="color: Black;">下一页</a>
                    </td>
                </tr>
            </table>
            
            

		</div>    

</div>





<div class="foot" >

   <center>
    <select class="w41_openLink" onchange="w41_openLink(this)" style="width:200px;">
<option selected="" value="">-----友情链接-----</option>
<option value="http://www.cumt.edu.cn/">中国矿业大学首页</option>
<option value="http://ltx.cumt.edu.cn/site/ggw/">中国矿业大学关工委</option>
<option value="http://xgc.cumt.edu.cn/">中国矿业大学学工处</option>
<option value="http://jwchu.cumt.edu.cn/DWWZ/DWWZQianTai/JWB/Index.aspx">中国矿业大学教务部</option>
<option value="http://cs.cumt.edu.cn">中国矿业大学计算机学院</option>


</select>&nbsp&nbsp
	    		&copy
	    		版权所有：中国矿业大学计算机学院  &nbsp &nbsp&nbsp&nbsp
	    		<a href="mlogin.jsp">管理登录</a><br>
	    		地址：江苏省徐州市大学路1号中国矿业大学南湖校区 &nbsp &nbsp&nbsp&nbsp     邮编：221116  &nbsp &nbsp&nbsp&nbsp    联系电话：0516-83591711  
	 </center>


   </div>


			
 <script type="text/javascript" src="js/page.js"></script>  
    <script type="text/javascript" language="javascript">  
        var page;  
      
        window.onload = function () {  
            if (document.getElementById('tbSeatList')) {  
                page = new PagingClass(15, 'tbSeatList', 'bodyPaging');  
                document.getElementById('pageindex').innerHTML = page.pageIndex + 1 + ' / ' + page.pageCount;  
            }  
        };  
      
        function nextPage() {  
            page.nextPage();  
            document.getElementById('pageindex').innerHTML = page.pageIndex + 1 + ' / ' + page.pageCount;  
        }  
      
        function prePage() {  
            page.prePage();  
            document.getElementById('pageindex').innerHTML = page.pageIndex + 1 + ' / ' + page.pageCount;  
        }  
    </script>
    	





</body>
</html>

  


  

	




			
		
		
	






  

