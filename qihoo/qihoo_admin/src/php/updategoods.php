<?php
	header("Content-type:text/html;charset=utf-8");
	//1获取数据
	$goodsid=$_REQUEST["goodsid"];
	$goodsclass=$_REQUEST["goodsclass"];
	$goodsname=$_REQUEST["goodsname"];
	$goodsprice1=$_REQUEST["goodsprice1"];
	$goodsprice2=$_REQUEST["goodsprice2"];
	$goodscount=$_REQUEST["goodscount"];
	$goodscountry=$_REQUEST["goodscountry"];
	//2.处理
	//① 搭桥
	$con=mysql_connect("localhost","root","root");
	if(!$con){
		die("连接失败:".mysql_error());
	}else{
	//②选择数据库
	mysql_select_db("bgms",$con);
	//③执行SQL语句
	$sqlstr="update goodsinfor set goodsclass='".$goodsclass."',goodsname='".$goodsname."',goodsprice1=".$goodsprice1.",goodsprice2=".$goodsprice2.",goodscount=".$goodscount.",goodscountry='".$goodscountry."' where goodsid='".$goodsid."'";
	mysql_query($sqlstr,$con);
	}
	mysql_close($con);
	header("location:../goodslist.html");
?>