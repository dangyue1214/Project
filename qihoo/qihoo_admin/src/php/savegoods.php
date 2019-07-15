<?php
	//1.获取数据
	header("Content-type:text/html;charset=utf-8");
	$goodsid=$_REQUEST["goodsid"];
	$goodsclass=$_REQUEST["goodsclass"];
	$goodsname=$_REQUEST["goodsname"];
	$goodsprice1=$_REQUEST["goodsprice1"];
	$goodsprice2=$_REQUEST["goodsprice2"];
	$goodscount=$_REQUEST["goodscount"];
	$goodscountry=$_REQUEST["goodscountry"];
	//2.处理
	//① 搭桥
	$con = mysql_connect("localhost","root","root");
	if(!$con){
		die("连接失败:".mysql_error());
	}else{
	//② 选择数据库
		mysql_select_db("bgms",$con);
	//③ 执行SQL语句
		$sqlstr = "insert into goodsinfor(goodsid,goodsclass,goodsname,goodsprice1,goodsprice2,goodscount,goodscountry)values('".$goodsid."','".$goodsclass."','".$goodsname."',".$goodsprice1.",".$goodsprice2.",".$goodscount.",'".$goodscountry."')";
		//输入数据
		mysql_query($sqlstr,$con);
	}
	//④ 拆桥
	mysql_close($con);
	//echo "商品添加成功";
		header("location:../goodslist.html");
?>
