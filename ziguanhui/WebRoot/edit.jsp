<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.text.SimpleDateFormat"%>
<%@ page import="java.util.Date"%>
<%@ page import="java.sql.*"%>
<%@ page import="com.manager.DBLink"%> 
<%
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+request.getContextPath()+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <title>编辑新闻</title>
	 <meta http-equiv="X-UA-Compatible" content="IE=edge,Chrome=1" />
	<link rel="stylesheet" href="js/kindeditor/themes/default/default.css" />
	<link rel="stylesheet" href="js/kindeditor/plugins/code/prettify.css" />
	<script charset="utf-8" src="js/kindeditor/kindeditor.js"></script>
	<script charset="utf-8" src="js/kindeditor/lang/zh_CN.js"></script>
	<link rel="Shortcut Icon" href="image/biaozhi.ico" />
	<%String id=(String)request.getAttribute("id"); %>
	
  <% DBLink dk=new DBLink();
  ResultSet rs=dk.show(id); 
  rs.next();%>
  	<script type="text/javascript">
  	    var editor;
		KindEditor.ready(function(K) {
			editor = K.create('textarea[name="content"]', {
				cssPath : '<%=basePath%>js/kindeditor/plugins/code/prettify.css',
				uploadJson : '<%=basePath%>UploadFileServlet',
				fileManagerJson : '<%=basePath%>js/kindeditor/jsp/file_manager_json.jsp',
				allowImageRemote : false,//为true则上传图片时显示“网络图片”功能，为false则上传图片时不显示“网络图片”功能。
				//items : ['source', '|','undo', 'redo','cut', 'copy', 'paste', 'plainpaste', 'wordpaste', 'about'],//根据自己的需求设定工具栏
				resizeType : 1,//2或1或0，2时可以拖动改变文本编辑域的宽度和高度，1时只能改变高度，0时不能拖动。
				allowFileManager : true,
				afterCreate : function() {
					var self = this;
					K.ctrl(document, 13, function() {//应对鼠标焦点在文本编辑域外时的快捷键（Ctrl + Enter）提交。
						self.sync();
						document.forms['example'].submit();
					});
					K.ctrl(self.edit.doc, 13, function() {//应对鼠标焦点在文本编辑域内部时的快捷键（Ctrl + Enter）提交。
						self.sync();
						document.forms['example'].submit();
					});
				}
			});
		});
		
		/* function checkForm(){
  	        var value =editor.html();//获取文本域的值。
  	        alert("输入内容："+value+"\n输入内容长度："+value.length);
  	        return true;
  	    } */
	</script>
	<script language="JavaScript">
<!--
function Dsy()
{
 this.Items = {};
}
Dsy.prototype.add = function(id,iArray)
{
 this.Items[id] = iArray;
}
Dsy.prototype.Exists = function(id)
{
 if(typeof(this.Items[id]) == "undefined") return false;
 return true;
}
function change(v){
 var str="0";
 for(i=0;i<v;i++){ str+=("_"+(document.getElementById(s[i]).selectedIndex-1));};
 var ss=document.getElementById(s[v]);
 with(ss){
  length = 0;
  options[0]=new Option(opt0[v],opt0[v]);
  if(v && document.getElementById(s[v-1]).selectedIndex>0 || !v)
  {
   if(dsy.Exists(str)){
    ar = dsy.Items[str];
    for(i=0;i<ar.length;i++)options[length]=new Option(ar[i],ar[i]);
    if(v)options[1].selected = true;
   }
  }
  if(++v<s.length){change(v);}
 }
}
var dsy = new Dsy();
dsy.add("0",["新闻类别"]);
dsy.add("0_0",["通知公告","文件下载"]);


/* dsy.add("0_1",["矿山安全检测产品","矿山充填开采机械","锚杆支护机具类"]);
dsy.add("0_2",["成功案例","售后服务"]);
dsy.add("0_3",["职位空缺","人才战略","教育培训"]); */
//-->
</script>
<script language = JavaScript>
<!--
var s=["s1","s2","s3"];
var opt0 = ["-<%=rs.getString("s1")%>-","-<%=rs.getString("s2")%>-"];
function setup()
{
 for(i=0;i<s.length-1;i++)
  document.getElementById(s[i]).onchange=new Function("change("+(i+1)+")");
 change(0);
}
//-->
</script>
	<%Date dt=new Date();
	    SimpleDateFormat matter1=new SimpleDateFormat("yyyy-MM-dd");
	    String time= matter1.format(dt); %>
  </head>
  
  <body topmargin="20px" onload="setup()"> 
  
    <center><font size="6" color="red"><b>编辑新闻</b></font></center><br>
  	<center>
  	<form name="example" method="post" action="<%=basePath%>updateServlet" onsubmit="return checkForm();">
  	新闻标题：<input type="text" name="biaoti" value='<%=rs.getString("biaoti") %>'>
  	
  	 
	   <textarea name="content" cols="100" rows="20" style="width:700px;height:400px;visibility:hidden;"><%=rs.getString("content") %></textarea>
	  
	 作者：<input type="text" name="zuozhe"value='<%=rs.getString("zuozhe")%>'><br>
	 时间：<%=time %><input type="hidden" name="time" value="<%=rs.getString("time")%>"><br>
	 所属类别<select id="s1" name="s1"><option><%=rs.getString("s1") %></option></select>
<select id="s2" name="s2"></select>
	 <input type="hidden" name="id" value="<%=rs.getString("id")%>">
	 <center style="margin-top:10px ;"><input type="submit" value="提交信息(Ctrl + Enter)" /><input type="reset" value="重新填写" style="margin-left:50px ;"/></center>
	</form></center>
	
  </body>
</html>