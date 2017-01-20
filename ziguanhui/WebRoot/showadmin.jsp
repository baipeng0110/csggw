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
<style type="text/css">
	.inputtable code{color:#FE0000;}
.inputtable{margin:0 auto;/* width:90%; */}
.inputtable th,.inputtable td{border:1px solid #B3DBFF;/* padding:5px; */}
.inputtable th{text-align:center;font-weight:normal;background:#EEF8FF;}
.inputtable span{color:#999;}

</style>
  </head>
  
  <body>
  
  
  
  <div>
  

    
  


  <div style="position:relative;">
   <img src="image/beijing2.jpg" width="1360" height="630" />
   <div style="position:absolute; left:50px; top:100px; border:#000 solid 1px;font-color:red;">

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
   
   <div style="position:absolute; left:320px; top:100px; border:#000 solid 1px; width:980px; height:500px;" >
   
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
    

 
  
  
  
  
  
  <table id="tbSeatList"  class="inputtable" height="12" border="0" cellpadding="0" cellspacing="0" style="height: 133px; width: 900px; ">
  <thead>
  <tr style="height:30px;">
                    <th>标题</th>
                    <th>作者</th>
                    <th>时间</th>
                    <th>操作</th>
                    
                </tr>
  </thead>
  <tbody id="bodyPaging">
  <tr style="height:30px;">
  
  <% DBLink dk=new DBLink();
  ResultSet rs=dk.show(); %>
  <%if(rs.next()){ %>
  
<td><a href="mnews?id=<%=rs.getString("id") %>"><%=rs.getString("biaoti") %></a></td>
  
   <td><%=rs.getString("zuozhe")%></td> 
    <td><%=rs.getString("time")%></td>
    <td><a href="SNadmin?id=<%=rs.getString("id") %>">编辑        </a>
    
    
    <SCRIPT LANGUAGE=javascript>
function p_del() {
var msg = "您确定要删除吗？";
if (confirm(msg)==true){
return true;
}else{
return false;
}
}
</SCRIPT>



    <a href="deleteServlet?id=<%=rs.getString("id") %>"  onclick="javascript:return p_del()">删除</a> </td>
    </tr>
  <%}else{ %>
  当前没有任何记录
  <%} %>
  
  <%while(rs.next()){ %>
  <tr style="height:30px;">
  <td><a href="mnews?id=<%=rs.getString("id") %>"><%=rs.getString("biaoti") %></a></td> <td> <%=rs.getString("zuozhe")%></td><td>  <%=rs.getString("time")%></td><td><a href="SNadmin?id=<%=rs.getString("id") %>">编辑        </a><a href="deleteServlet?id=<%=rs.getString("id") %>">删除</a></td>
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
   
</div>
  
  
 
    
  </body>
</html>
