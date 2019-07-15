<?php
	header("Content-type:text/html;charset=utf-8");
	// 一、-------获取所有数据---------数据已从浏览器端保存到数据库，直接在数据库里获取数据
	// 二、-------查询    查询前端所发送过来的参数
	$goodsname=$_REQUEST["goodsname"];
	//1.处理
	//①搭桥
	$con = mysql_connect("localhost","root","root");
	if(!$con){
		die("连接失败:".mysql_error());
	}else{
	//②选择数据库
		mysql_select_db("bgms",$con);
	//③ 执行SQL语句
		//当前端需要获取所有数据时
		$sqlstr = "select*from goodsinfor";
		//当前端需要获取部分商品名称的数据时
		if($goodsname!=null){
			$sqlstr = "select*from goodsinfor where goodsname like '%".$goodsname."%'";
		}
		$result = mysql_query($sqlstr,$con);
	}
	//④ 拆桥
	mysql_close($con);
	//响应
	$str="[";
	//① 获取到第一行内容
	$row =mysql_fetch_array($result);
	while($row){
		$str=$str.'{"goodsid":"'.$row[0].'","goodsclass":"'.$row[1].'","goodsname":"'.$row[2].'","goodsprice1":'.$row[3].',"goodsprice2":'.$row[4].',"goodscount":'.$row[5].',"goodscountry":"'.$row[6].'"}';
		$row = mysql_fetch_array($result);
		if($row){
			$str=$str.",";
		}
	}
	$str=$str."]";
	echo $str;
?>
		

	
