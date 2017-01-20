package com.manager;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
public class DBLink {
	private Connection conn;
	private Statement stmt;
	private ResultSet rs = null;

	/**
	 * 静态代码块
	 */
	static {
		try {
			Class.forName("com.mysql.jdbc.Driver"); 
		} catch (Exception e) {
			e.printStackTrace();
		}

	}
	
	/**
	 * 获得Connection
	 */
	public Connection getConn() {
		try {
			/*conn = DriverManager.getConnection("jdbc:mysql://sqld.duapp.com:4050/uJdDLQwcGAzwanlKnJFd?characterEncoding=utf8", "830b15a684d146ee8b7c3d4487c6df9d", "e5fe17aea51b4a819d6c669d42c4c827");*/
			//conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/ziguanhui?characterEncoding=utf8", "root", "baipeng");
			conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/csggw?characterEncoding=utf8", "root", "");
		} catch (Exception e) {
			e.printStackTrace();
		}
		return conn;
	}
	
	/**
	 * 使用Statement操作查询
	 * @param sql
	 * @param columnName 列名
	 * @return 返回某列的值
	 * */
	public String query(String sql,String columnName) {
		String result="";
		try {
			stmt = getConn().createStatement();
			rs = stmt.executeQuery(sql);
			while (rs.next()) {
				result=rs.getString(columnName);
			}
			
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		} finally {
			colse();
		}
		return result;
	}

	/**
	 * 执行数据更新的方法
	 * @param sql String 的SQL语句
	 * @return Integer 类型的数据 表示受影响的行数
	 */
	
	
	
	public int update(String sql) {
		try {
			//stmt = getConn().createStatement();
			System.out.println(sql);
			PreparedStatement st3=getConn().prepareStatement(sql);
			//修改数据
						 return   st3.executeUpdate();
						   //stmt.executeUpdate(sql);
		} catch (Exception e) {
			e.printStackTrace();
			return -1;
		} finally {
			colse();
		}
	}
	public ResultSet Show(String s1,String s2,int num1,int num2){
		try {
			PreparedStatement st3=getConn().prepareStatement("select * from news where s1='"+s1+"'and s2='"+s2+"'   order by id desc limit "+num1+","+num2+"");
			rs = st3.executeQuery();
			return rs;
		} catch (SQLException e) {
			
			e.printStackTrace();
			return null;
		}
	}
	public ResultSet Show(String s1,String s2,int num){
		try {
			PreparedStatement st3=getConn().prepareStatement("select * from news where s1='"+s1+"'and s2='"+s2+"'   order by id desc limit 0,"+num+"");
			rs = st3.executeQuery();
			System.out.println(s1);
			System.out.println(s2);
			return rs;
		} catch (SQLException e) {
			// TODO 自动生成的 catch 块
			e.printStackTrace();
			return null;
		}
	}
	public ResultSet Show(String s1,String s2){
		try {
			PreparedStatement st3=getConn().prepareStatement("select * from news where s1='"+s1+"'and s2='"+s2+"' order by id desc");
			rs = st3.executeQuery();
			return rs;
		} catch (SQLException e) {
			// TODO 自动生成的 catch 块
			e.printStackTrace();
			return null;
		}
	}
	public ResultSet Show(String s1){
		try {
			PreparedStatement st3=getConn().prepareStatement("select * from news where s1='"+s1+"' order by id desc");
			rs = st3.executeQuery();
			return rs;
		} catch (SQLException e) {
			// TODO 自动生成的 catch 块
			e.printStackTrace();
			return null;
		}
	}
	public ResultSet Show(String s1,int num){
		try {
			PreparedStatement st3=getConn().prepareStatement("select * from news where s1='"+s1+"' order by id desc limit 0,"+num+"");
			rs = st3.executeQuery();
			return rs;
		} catch (SQLException e) {
			// TODO 自动生成的 catch 块
			e.printStackTrace();
			return null;
		}
	}
	public ResultSet show(String id){
		try {
			PreparedStatement st3=getConn().prepareStatement("select * from news where id='"+id+"' order by id desc");
			rs = st3.executeQuery();
			return rs;
		} catch (SQLException e) {
			// TODO 自动生成的 catch 块
			e.printStackTrace();
			return null;
		}
	}
	
	/*public ResultSet show(String biaoti){
		try {
			PreparedStatement st3=getConn().prepareStatement("select * from news where biaoti='"+biaoti+"' order by id desc");
			rs = st3.executeQuery();
			return rs;
		} catch (SQLException e) {
			// TODO 自动生成的 catch 块
			e.printStackTrace();
			return null;
		}
	}*/
	public ResultSet show(){
		try {
			PreparedStatement st3=getConn().prepareStatement("select * from news order by id desc");
			rs = st3.executeQuery();
			return rs;
		} catch (SQLException e) {
			// TODO 自动生成的 catch 块
			e.printStackTrace();
			return null;
		}
		
	}
	
	/**
	 * 数据库关闭操作
	 * */
	public void colse() {
		if (rs != null) {try {rs.close();} catch (SQLException e) {e.printStackTrace();}}
		if (stmt != null) {try {stmt.close();} catch (Exception e) {e.printStackTrace();}}
		if (conn != null) {try {conn.close();} catch (Exception e) {e.printStackTrace();}
		}
	}
}