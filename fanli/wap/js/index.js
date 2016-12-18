
$(document).ready(function(){
	/****************首页**********************/
	//弹出提示页
	$("#index .top-search").click(function(){
		$("#index .topTip-main").show();
	})
	
	/*****轮播********/
	
	
	
	//设置图片宽度
	var bannerWidth=$("#index .banner").width();
	$("#index .bannerImg a").width(bannerWidth);
	//图片总数
	var bannerNum=$("#index .bannerImg a").length;
	//最大偏移量
	var bannerMaxLeft=-((bannerNum-1)*bannerWidth);
//	console.log(bannerMaxLeft);
	
	//默认选择第一个图标
	$("#index .banner-icon span").eq(0).css("background","#fff");
	//定义一个变量同步下标
	var indexCount=0;
	var timerIndex=setInterval(donghuaIndex,3000);
	
	//重置图片宽度及其他影响的数据
	function indexBanner(){
		//图片宽度
		bannerWidth=$("#index .banner").width();
		//最大偏移量
		bannerMaxLeft=-((bannerNum-1)*bannerWidth);
	}
	indexBanner();
	
	//窗口大小改变
	$(window).resize(function(){
		indexBanner();
	})
	
	
	
	
	//自动轮播
	function donghuaIndex(){
		if(!$("#index .bannerImg").is(":animated"))
		{
			var bannerleftTold=$("#index .bannerImg")[0].offsetLeft;
//			console.log(bannerleftTold);
			
			//判断是到达最后一张
			if(bannerleftTold==bannerMaxLeft)
			{
				//第一张放到最后一张
				$("#index .bannerImg a").eq(0).appendTo($("#index .bannerImg"));
				//修改偏移
				var bannerleftnew=bannerleftTold+bannerWidth;
				$("#index .bannerImg").css("left",bannerleftnew+"px");
			}
			
			$("#index .bannerImg").animate({left:"-="+bannerWidth+"px"});
			indexCount++;
			indexCount=indexCount>=bannerNum?0:indexCount;
			$("#index .banner-icon span").eq(indexCount).css("background","#fff").siblings().css("background","transparent") ;
		}
	}
	
	//左滑动
	$("#index .bannerImg").on("swipeleft",function(){
		if(!$("#index .bannerImg").is(":animated"))
		{
			var bannerleftTold=$("#index .bannerImg")[0].offsetLeft;
//			console.log(bannerleftTold);
			
			//判断是到达最后一张
			if(bannerleftTold==bannerMaxLeft)
			{
				//第一张放到最后一张
				$("#index .bannerImg a").eq(0).appendTo($("#index .bannerImg"));
				//修改偏移
				var bannerleftnew=bannerleftTold+bannerWidth;
				$("#index .bannerImg").css("left",bannerleftnew+"px");
			}
			
			$("#index .bannerImg").animate({left:"-="+bannerWidth+"px"});
			indexCount++;
			indexCount=indexCount>=bannerNum?0:indexCount;
			$("#index .banner-icon span").eq(indexCount).css("background","#fff").siblings().css("background","transparent") ;
		}
	})
	
	//右滑动
	$("#index .bannerImg").on("swiperight",function(){
		if(!$("#index .bannerImg").is(":animated"))
		{
			var bannerleftTold=$("#index .bannerImg")[0].offsetLeft;
//			console.log(bannerleftTold);
			
			//判断是第一张
			if(bannerleftTold==0)
			{
				//最后一张放到第一张
				$("#index .bannerImg a").last().prependTo($("#index .bannerImg"));
				//修改偏移
				var bannerleftnew=bannerleftTold-bannerWidth;
				$("#index .bannerImg").css("left",bannerleftnew+"px");
			}
			
			$("#index .bannerImg").animate({left:"+="+bannerWidth+"px"});
			indexCount--;
			indexCount=indexCount<0?bannerNum-1:indexCount;
			$("#index .banner-icon span").eq(indexCount).css("background","#fff").siblings().css("background","transparent") ;
		}
	})
	
	
	/*******值得购买********/
	//距离顶部的位置
	var zdmgHeight=$("#index .zhidemai")[0].offsetTop;
//	console.log("zdmgHeight:"+zdmgHeight)
	//头部的高度
	var topHeight=$("#index .top").height();
//	console.log("topHeight:"+topHeight)
	
	$(window).scroll(function(){
		if($(window).scrollTop()>=zdmgHeight)
		{
			$("#index .zhidemai-title").css({"position":"fixed","top":topHeight,"z-index":"666"});
		}
		else
		{
			$("#index .zhidemai-title").css({"position":"relative","top":"0px"});
		}
		if($(window).scrollTop()>10)
		{
			$("#index .top").css("background","rgba(255, 52, 81, 0.85098)");
		}
		else
		{
			$("#index .top").css("background","rgba(0,0,0,0.8)");
		}
		
		
	})
	
	
	
	
	
})