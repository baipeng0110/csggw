package com.manager;

import java.io.IOException;
import java.io.PrintWriter;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.manager.DBLink;

public class updateServlet extends HttpServlet {

	/**
	 * Constructor of the object.
	 */
	public updateServlet() {
		super();
	}

	/**
	 * Destruction of the servlet. <br>
	 */
	public void destroy() {
		super.destroy(); // Just puts "destroy" string in log
		// Put your code here
	}

	/**
	 * The doGet method of the servlet. <br>
	 *
	 * This method is called when a form has its tag value method equals to get.
	 * 
	 * @param request the request send by the client to the server
	 * @param response the response send by the server to the client
	 * @throws ServletException if an error occurred
	 * @throws IOException if an error occurred
	 */
	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		doPost(request,response);
	}

	/**
	 * The doPost method of the servlet. <br>
	 *
	 * This method is called when a form has its tag value method equals to post.
	 * 
	 * @param request the request send by the client to the server
	 * @param response the response send by the server to the client
	 * @throws ServletException if an error occurred
	 * @throws IOException if an error occurred
	 */
	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		request.setCharacterEncoding("UTF-8");
        response.setContentType("text/html;charset=utf-8");
		String content = request.getParameter("content").replace("'", "''");;
		
		String time = request.getParameter("time");
		String biaoti = request.getParameter("biaoti").replace("'", "''");
		String zuozhe = request.getParameter("zuozhe").replace("'", "''");
		String s1 = request.getParameter("s1").replace("-", "");
		String s2 = request.getParameter("s2").replace("-", "");
		String id = request.getParameter("id");
		Date dt=new Date();
	    SimpleDateFormat matter1=new SimpleDateFormat("yyyy-MM-dd");
	    String t= matter1.format(dt);
		this.log(biaoti);
		this.log(zuozhe);
		this.log(time);
		this.log(s1);
		this.log(s2);
		/*Date d=new Date();
		long id = d.getTime();*/
		
		content=content.replaceAll(">/kindEditor/upload/file/"+t+"/", ">");
		String sql = "update news set  biaoti='"+biaoti+"', content='"+content+"', s1='"+s1+"', s2='"+s2+"', zuozhe='"+zuozhe+"' where id='"+id+"'";
	
		DBLink db = new DBLink();
		db.update(sql);
		
		 PrintWriter pw=response.getWriter();
	    pw.write("<script language='javascript'>alert('上传成功');document.location.href='manager.jsp';</script>");
	    
	}

	/**
	 * Initialization of the servlet. <br>
	 *
	 * @throws ServletException if an error occurs
	 */
	public void init() throws ServletException {
		// Put your code here
	}

}
