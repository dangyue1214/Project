<?php
	header("Content-type:text/html;charset=utf-8");
	//接受数据
	$goodsid=$_REQUEST["goodsid"];
	//处理
	//① 搭桥
	$con = mysql_connect("localhost","root","root");
	if(!$con){
		die("连接失败:".mysql_error());
	}else{
		mysql_select_db("bgms",$con);
		$sqlstr="delete from goodsinfor where goodsid=".$goodsid;
		mysql_query($sqlstr,$con);
	}
	mysql_close($con);
	header("location:../goodslist.html");
?>
