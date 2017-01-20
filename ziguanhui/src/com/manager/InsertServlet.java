package com.manager;

import java.awt.Window;
import java.io.IOException;
import java.io.PrintWriter;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.UUID;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.manager.DBLink;

public class InsertServlet extends HttpServlet {
	private static final long serialVersionUID = 5694330320556646088L;
	public void destroy() {super.destroy();}

	public void doGet(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {
		doPost(request, response);
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
        response.setContentType("text/html;charset=utf-8");
		String content = request.getParameter("content").replace("'", "''");
		
		String time = request.getParameter("time");
		String biaoti = request.getParameter("biaoti").replace("'", "''");
		String zuozhe = request.getParameter("zuozhe").replace("'", "''");
		String s1 = request.getParameter("s1");
		String s2 = request.getParameter("s2");
		Date dt=new Date();
	    SimpleDateFormat matter1=new SimpleDateFormat("yyyyMMdd");
	    String t= matter1.format(dt);
		this.log(biaoti);
		this.log(zuozhe);
		this.log(time);
		this.log(s1);
		/*this.log(s2);*/
		Date d=new Date();
		long id = d.getTime();
		content=content.replace("<img src","<img style=\"width:auto;height:auto;\" src");
		/*content=content.replace("<a href=\"/home/bae/upload/file/", "<a href=\"downfile?filepath=/home/bae/upload/file/");*/
		content=content.replace(">/ziguanhui/upload/file/"+t+"/", ">");
		String sql = "insert into news (id, biaoti,content,time,s1,s2,zuozhe) values ('"+id+"','"+biaoti+"','"+content+"','"+time+"','"+s1+"','"+s2+"','"+zuozhe+"')";
		DBLink db = new DBLink();
		int tr = db.update(sql);
		if(tr==-1){
			request.getRequestDispatcher("scxw.jsp").forward(request, response);
		}
		
		 PrintWriter pw=response.getWriter();
		 pw.write("<script language='javascript'>alert('上传成功');document.location.href='manager.jsp';</script>");
	   /*  request.getRequestDispatcher("admin.jsp").forward(request, response);*/
		/*request.setAttribute("content", db.query("select content from testTable where uuid='"+uuid+"'", "content"));
		request.getRequestDispatcher("result.jsp").forward(request, response);*/
	}
	public void init() throws ServletException {}
}