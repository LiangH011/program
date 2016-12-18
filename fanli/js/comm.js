
/**********************公共***************/
/**********轮播********/
var caroImg;
var caroIco;
var timerCaro;
var caroCount=0;

/******友情链接*******/
var timerLink;
var linkWidth
var linkSpeed;
var linkMax;
var linkNum;
var commLink;
var linkLeft;

/*************首页***************/
/******新闻*******/
var timerNews;
var countNews=0;
var newsNum;

/******记录*********/
var timerReco1;
var timerReco2;

/******************爆料大师**************/
/*******京东轮播**********/
var timerBaoliao;
var jdNum;
//图标数量
var jdIco;
var jdcount=0;

/*****************购物助手***************/
var timerZS;
var zsCount=0;
var zsImg;

/***************论坛**************************/
var timerBBS;
var bbsImg;
var bbsCount=0;
var bbsIcon;



//DOM加载完成
$(function(){

	/*****************公共--回到顶部按钮***********/
	$(window).scroll(function(){
		if($(window).scrollTop()>100)
		{
			$("#comm-gotop").show();
		}
		else
		{
			$("#comm-gotop").hide();
		}
	})
	
	$("#comm-gotop").click(function(){
		if($("html").scrollTop())
		{
			$("html").animate({scrollTop:0},1000);
			return false;
		}
		$("body").animate({scrollTop:0},1000);
		return false;
	})
	
	/**********************公共轮播********************/
	//第一张图显示，其余隐藏
	$("#comm-carousel ul li:first").fadeIn().siblings().fadeOut();
	//第一个小图标默认选中
	$("#comm-carousel .carou-icon span:first").css("background","#FF3333").siblings().css("background","#FFFFFF");
	//获取有几张图片
	caroImg=$("#comm-carousel ul li").length;
	console.log("caroImg:"+caroImg);
	timerCaro=setInterval("commCarousel()",3000);
	
	//图标点击切换图片
	$("#comm-carousel .carou-icon span").click(function(){
		//清除定时器
		clearInterval(timerCaro);
		//获取小图标下标
		caroIco=$(this).index();
		//获取图标索引
		caroCount=caroIco;
	 	console.log("caroIco:"+caroIco);
	 	//点击图标对应的图片切换
	 	$("#comm-carousel ul li").eq(caroCount).fadeIn().siblings().fadeOut();
	 	//图标颜色改变
	 	$(this).css("background","#FF3333").siblings().css("background","#FFFFFF");
	 	timerCaro=setInterval("commCarousel()",3000);
	})
	
	//点击关闭轮播
	$("#comm-carousel .close").click(function(){
		$("#comm-carousel").css("display","none");
	})
	
	
	
	
	/*******************公共--友情链接*******************/
	setInterval(commLink,3000);
	function commLink(){
		linkWidth=$("#comm-link ul li").width();
		$("#comm-link ul").animate({left:"-="+linkWidth+"px"},function(){
			$("#comm-link ul li:eq(0)").appendTo("#comm-link ul");
			$("#comm-link ul").css({"left":0});
		});
	}
	
	
	/********************** 首页-- 产品分类导航切换******************/
	//左边
	$(".nav-change .nav-content").eq(0).css("display","block").siblings().css("display","none");
	$(".nav-header li").eq(0).addClass("navleftLi");
	$(".nav-header li").click(function(){
		var num=$(this).index();
		console.log(num);
		$(".nav-change .navContent"+num+"").css("display","block").siblings().css("display","none");
		$(this).addClass("navleftLi").siblings().removeClass("navleftLi");
	})
	
	//右边-新闻
	$("#index .news-conten .newsInfo a").eq(0).css("display","block");
	$("#index .news-header li a").eq(0) .addClass("newsStyle").parent().siblings().children().removeClass("newsStyle");
	timerNews=setInterval("donghuaNews()",3000);
	
	$("#index .news-header li a").mouseover(function(){
		clearInterval(timerNews);
		newsNum=$(this).parent().index();
		console.log(newsNum);
		countNews=newsNum;
		$("#index .news-conten .newsInfo"+newsNum+"").css("display","block").siblings().css("display","none");
		$(this).addClass("newsStyle").parent().siblings().children().removeClass("newsStyle");
	})
	$("#index .news-header li a").mouseout(function(){
		timerNews=setInterval("donghuaNews()",3000);
	})
	
	
	$("#index .newsInfo li").mouseover(function(){
		clearInterval(timerNews);
	})
	$("#index .newsInfo li").mouseout(function(){
		timerNews=setInterval("donghuaNews()",3000);
	})
	
	
	//产品分类--切换产品页1F
	$("#index  .pro1 .pro-content ul").eq(0).css("display","block").siblings().css("display","none");
	$("#index  .pro1 .protitle-right li").eq(0).css("background","#22BD8B");
	$("#index  .pro1 .protitle-right li").eq(0).css({"background":"#22BD8B","color":"#fff"});
	$("#index  .pro1 .protitle-right li").click(function(){
		var num=$(this).index();
		$("#index  .pro1 .pro-content ul").eq(num).css("display","block").siblings().css("display","none");
		$(this).css({"background":"#22BD8B","color":"#fff"}).siblings("li").css({"background":"#fff","color":"#22BD8B"});
	})
	
	
	//产品分类--切换产品页3F
	$("#index  .pro3 .pro-content ul").eq(0).css("display","block").siblings().css("display","none");
	$("#index  .pro3 .protitle-right li").eq(0).css("background","#19c3e2");
	$("#index  .pro3 .protitle-right li").eq(0).css({"background":"#19c3e2","color":"#fff"});
	$("#index  .pro3 .protitle-right li").click(function(){
		var num=$(this).index();
		$(".pro3 .pro-content ul").eq(num).css("display","block").siblings().css("display","none");
		$(this).css({"background":"#19c3e2","color":"#fff"}).siblings("li").css({"background":"#fff","color":"#19c3e2"});
	})
	
	//产品分类--切换产品页4F
	$("#index .pro4 .pro-content ul").eq(0).css("display","block").siblings().css("display","none");
	$("#index .pro4 .protitle-right li").eq(0).css("background","#ff5225");
	$("#index .pro4 .protitle-right li").eq(0).css({"background":"#ff5225","color":"#fff"});
	$("#index .pro4 .protitle-right li").click(function(){
		var num=$(this).index();
		$("#index .pro4 .pro-content ul").eq(num).css("display","block").siblings().css("display","none");
		$(this).css({"background":"#ff5225","color":"#fff"}).siblings("li").css({"background":"#fff","color":"#ff5225"});
	})
	
	//记录-左
	timerReco1=setInterval("recordOne()",2000);
	$("#index .tixian li").mouseover(function(){
		clearInterval(timerReco1);
	})
	$("#index .tixian li").mouseout(function(){
		timerReco1=setInterval("recordOne()",2000);
	})
	
	//记录-右
	timerReco2=setInterval("recordTwo()",2000);
	$("#index .duihuan li").mouseover(function(){
		clearInterval(timerReco2);
	})
	$("#index .duihuan li").mouseout(function(){
		timerReco2=setInterval("recordTwo()",2000);
	})
	
	
	/******************************爆料平台*************************************/
	/*********右边--列表边框**********/
	$("#baoliao .flzd-mall li:odd").css("border-left","1px solid #eee");
	/*******爆料--轮播*****/
	//设置图片宽度
	var blWidth=$("#baoliao .blBanner").width();
	$("#baoliao .blBanner ul li").width(blWidth);
	
	
	/*********京东轮播***********/
	timerBaoliao=setInterval("baoliao()",3000);
	//第一张图显示，其余隐藏
	$("#baoliao .jdImg .jdAdv:first").fadeIn().siblings().fadeOut();
	//第一个小图标默认选中
	$("#baoliao .jd-icon span").eq(0).css("background","#c91521").siblings().css("background","#ddd");
	//获取有几张图片
	jdNum=$("#baoliao .jdImg .jdAdv").length;
	console.log("jdNum:"+jdNum);
	
	//图标点击切换图片
	$("#baoliao .jd-icon span").click(function(){
		//清除定时器
		clearInterval(timerBaoliao);
		
		//获取小图标下标
		jdIco=$(this).index();
		//获取图标索引
		jdcount=jdIco;
	 	console.log("IcoNum:"+jdIco);
	 	//点击图标对应的图片切换
	 	$("#baoliao .jdImg .jdAdv").eq(jdcount).fadeIn().siblings().fadeOut();
	 	//图标颜色改变
	 	$(this).css("background","#c91521").siblings().css("background","#ddd");
	 	
	})
	
	$("#baoliao .jdImg").mouseover(function(){
		clearInterval(timerBaoliao);
	})
	
	$("#baoliao .jdImg").mouseout(function(){
		timerBaoliao=setInterval("baoliao()",3000);
	})
	
	/*****爆料大师推荐*****/
	
	
	$("#baoliao .bldsList").mouseover(function(e){
		var blsWidth=$("#baoliao .bottLeft").width();
		var blsHeight=$("#baoliao .bottLeft").height();
		var blsleft=e.clientX;
		var blsTop=e.clientY;
		console.log("blsleft:"+blsleft+",blswidth:"+blsWidth/2);
		if(blsleft<blsWidth/2)
		{
			console .log(1);
			$("#baoliao .blsInfo").addClass("blsInfo1");
			$("#baoliao .blsInfo .blsBig").css("float","left");
			$("#baoliao .blsInfo .blsMess").css("float","right");
		}
		else{
			console .log(2);
			$("#baoliao .blsInfo").addClass("blsInfo2").removeClass("blsInfo1");
			$("#baoliao .blsInfo .blsBig").css("float","right");
			$("#baoliao .blsInfo .blsMess").css("float","left");
		}
		if(blsTop<=height/2)
		{
			console .log(1);
			$("#baoliao .blsInfo").addClass("blsInfo3");
		}
		else{
			console .log(2);
			$("#baoliao .blsInfo").addClass("blsInfo4").removeClass("blsInfo3");
		}
		
	})
	
	
	
	
	/************************购物助手******************************/
	/*****轮播******/
	$("#zhushou .zsImg img").eq(0).fadeIn().siblings().fadeOut();
	timerZS=setInterval("zhushou()",3000);
	zsImg=$("#zhushou .zsImg img").length;
	
	$("#zhushou .zsImg").mouseover(function(){
		clearInterval(timerZS);
	})
	$("#zhushou .zsImg").mouseout(function(){
		timerZS=setInterval("zhushou()",3000);
	})
	
	$("#zhushou .zs-ico .left").click(function(){
		clearInterval(timerZS);
		if(zsCount>=zsImg-1){
			zsCount=0;
			$("#zhushou .zsImg img").eq(zsCount).fadeIn().siblings().fadeOut();
		}
		else
		{
			zsCount++;
			$("#zhushou .zsImg img").eq(zsCount).fadeIn().siblings().fadeOut();
			
		}
	})
	
	
	$("#zhushou .zs-ico .right").click(function(){
		clearInterval(timerZS);
		if(zsCount==0){
			zsCount=zsImg-1;
			$("#zhushou .zsImg img").eq(zsCount).fadeIn().siblings().fadeOut();
		}
		else
		{
			zsCount--;
			$("#zhushou .zsImg img").eq(zsCount).fadeIn().siblings().fadeOut();
			
		}
	})
	
	
	
	/****************会员中心******************************/
	/****左边导航栏****/
	$("#user .leftNav").click(function(){
		if($(this).children(".leftnav-list").is(":visible"))
		{
			$(this).children(".leftnav-list").slideUp();
			$(this).children(".left-title").children(".list-ico").css("background-position","0px -258px");
		}
		else
		{
			$(this).children(".leftnav-list").slideDown();
			$(this).children(".left-title").children(".list-ico").css("background-position","0px -234px");
		}
		
	})
	
	/*********右边签到************/
	$("#user .staticRight .qd-btn").click(function(){
		$("#user .staticRight .qd-content").hide();
		$("#user .staticRight .qd-list").show();
	})
	
	
	/**************************论坛轮播**************************/
	$("#bbs-banner .bannerImg li").width($("#bbs-banner").width());
	/****轮播*****/
	$("#bbs-banner .bbs-icon span").eq(0).css("background","rgba(255,126,0,0.5)").siblings().css("background","rgba(0,0,0,0.3)");
	$("#bbs-banner .bannerImg li").eq(0).fadeIn().siblings().fadeOut();
	
	timerBBS=setInterval("forum()",3000);
	bbsImg=$("#bbs-banner .bannerImg li").length;
	
	$("#bbs-banner").mouseover(function(){
		clearInterval(timerBBS);
	})
	
	$("#bbs-banner").mouseout(function(){
		timerBBS=setInterval("forum()",3000);
	})
	
	$("#bbs-banner .bbs-icon span").click(function(){
		clearInterval(timerBBS);
		bbsIcon=$(this).index();
		bbsCount=bbsIcon;
		$("#bbs-banner .bannerImg li").eq(bbsIcon).fadeIn().siblings().fadeOut();
		$(this).css("background","rgba(255,126,0,0.5)").siblings().css("background","rgba(0,0,0,0.3)");
	})
	
	$("#bbs-banner .bbs-arrow .arrowLeft").click(function(){
		clearInterval(timerBBS);
		if(bbsCount<=0)
		{
			bbsCount=bbsImg-1;
			$("#bbs-banner .bbs-icon span").eq(bbsCount).css("background","rgba(255,126,0,0.5)").siblings().css("background","rgba(0,0,0,0.3)");
			$("#bbs-banner .bannerImg li").eq(bbsCount).fadeIn().siblings().fadeOut();
		}
		else
		{
			bbsCount--;
			$("#bbs-banner .bbs-icon span").eq(bbsCount).css("background","rgba(255,126,0,0.5)").siblings().css("background","rgba(0,0,0,0.3)");
			$("#bbs-banner .bannerImg li").eq(bbsCount).fadeIn().siblings().fadeOut();
		}
	})
	
	
	$("#bbs-banner .bbs-arrow .arrowRight").click(function(){
		clearInterval(timerBBS);
		if(bbsCount>=bbsImg-1)
		{
			bbsCount=0;
			$("#bbs-banner .bbs-icon span").eq(bbsCount).css("background","rgba(255,126,0,0.5)").siblings().css("background","rgba(0,0,0,0.3)");
			$("#bbs-banner .bannerImg li").eq(bbsCount).fadeIn().siblings().fadeOut();
		}
		else{
			bbsCount++;
			$("#bbs-banner .bbs-icon span").eq(bbsCount).css("background","rgba(255,126,0,0.5)").siblings().css("background","rgba(0,0,0,0.3)");
			$("#bbs-banner .bannerImg li").eq(bbsCount).fadeIn().siblings().fadeOut();
		}
	})
	
	/************************关于我们*************************/
	var height=$("#aboutUs .main").height();
	$("#aboutUs .main-left").height(height);
	
	
	/**********************优惠券******************************/
	$("#quan .quan-more .more-btn1").click(function(){
		$("#quan .navmenu1").show();
		$(this).hide().siblings().show();
	})
	$("#quan .quan-more .more-btn2").click(function(){
		$("#quan .navmenu1").hide();
		$(this).hide().siblings().show();
	})
	
	
	
	
	
		
	/***********************注册******************************************/
	var stateRegi1=false;
	var stateRegi2=false;
	var stateRegi3=false;
	var stateRegi4=false;
	var stateRegi5=false;
	var stateRegi6=false;
	
	var RegName=/^[0-9a-zA-Z\u4e00-\u9fa5_]{3,15}$/;
	var RegPwd=/^[0-9a-zA-Z]{6,20}$/;
	var pwdValue;
	var RegQQ=/^[1-9]{1}[0-9]{3,13}$/;
	var RegEmail= /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	var yzm=1211;
	
	$("#regi-form input").focus(function(){
		$(this).parent() .css("border-color","#ff5742");
	})
	.blur(function(){
		$(this).parent() .css("border-color","#ccc");
		
	})
	
	//用户名
	$("#regi-form .userName").focus(function(){
		$(this).siblings(".regi-icon").css("background-position-y","-26px");
	})
	.blur(function(){
		$(this).siblings(".regi-icon").css("background-position-y","0px");
		var nameVlue=$(this).val();
		console.log(nameVlue);
		if(!RegName.test(nameVlue))
		{
			$(this).siblings(".erroTip").show();
		}
		else
		{
			stateRegi1=true;
			$(this).siblings(".erroTip").hide();
		}
	})	
	
	//密码
	$("#regi-form .userPwd").focus(function(){
		$(this).siblings(".regi-icon").css("background-position-y","-71px");
	})
	.blur(function(){
		$(this).siblings(".regi-icon").css("background-position-y","-49px");
		pwdVlue=$(this).val();
		console.log(pwdVlue);
		if(!RegPwd.test(pwdVlue))
		{
			$(this).siblings(".erroTip").show();
		}
		else
		{
			stateRegi2=true;
			$(this).siblings(".erroTip").hide();
		}
	})	
		
	//确认密码
	$("#regi-form .rePwd").focus(function(){
		$(this).siblings(".regi-icon").css("background-position-y","-71px");
	})
	.blur(function(){
		$(this).siblings(".regi-icon").css("background-position-y","-49px");
		var repwdVlue=$(this).val();
		console.log(repwdVlue);
		if(repwdVlue!=pwdVlue)
		{
			$(this).siblings(".erroTip").show();
		}
		else
		{
			stateRegi3=true;
			$(this).siblings(".erroTip").hide();
		}
	})	
		
	//QQ号码
	$("#regi-form .qqNum").focus(function(){
		$(this).siblings(".regi-icon").css("background-position-y","-115px");
	})
	.blur(function(){
		$(this).siblings(".regi-icon").css("background-position-y","-93px");
		var qqValue=$(this).val();
		console.log(qqValue);
		if(!RegQQ.test(qqValue))
		{
			$(this).siblings(".erroTip").show();
		}
		else
		{
			stateRegi4=true;
			$(this).siblings(".erroTip").hide();
		}
	})	
		
	//邮箱RegEmail
	$("#regi-form .mail").focus(function(){
		$(this).siblings(".regi-icon").css("background-position-y","-160px");
	})
	.blur(function(){
		$(this).siblings(".regi-icon").css("background-position-y","-138px");
		var emailValue=$(this).val();
		console.log(emailValue);
		if(!RegEmail.test(emailValue))
		{
			$(this).siblings(".erroTip").show();
		}
		else
		{
			stateRegi5=true;
			$(this).siblings(".erroTip").hide();
		}
	})	
		
	//验证码
	$("#regi-form .yzmInput").focus(function(){
		$(this).siblings(".regi-icon").css("background-position-y","-203px");
	})
	.blur(function(){
		$(this).siblings(".regi-icon").css("background-position-y","-181px");
		var yzmValue=$(this).val();
		if(yzmValue!=yzm)
		{
			$(this).siblings(".erroTip").show();
		}
		else
		{
			stateRegi6=true;
			$(this).siblings(".erroTip").hide();
		}
	})	
		
	$("#regi-form .register-btn").click(function(){
		if(stateRegi1 && stateRegi2 && stateRegi3 && stateRegi4 && stateRegi5 && stateRegi6)
		{
		  $("#regi-form").submit();	
		}
		else
		{
			$("#regi-form .regi-name .erroTip").show();
			return false;
		}
	})
	
	/**************************************登陆***************************************************/
	var stateLogin1=false;
	var stateLogin2=false;
	
	var RegLoginName=/^[0-9a-zA-Z\u4e00-\u9fa5_]{3,15}$/;
	var RegLoginPwd=/^[0-9a-zA-Z]{6,20}$/;
	var RegLoginEmail= /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	
	$("#loginForm input").focus(function(){
		$(this).parent() .css("border-color","#ff5742");
	})
	.blur(function(){
		$(this).parent() .css("border-color","#ccc");
		
	})
	
	//用户名
	$("#loginForm .userName").focus(function(){
		$(this).siblings("i").css("background-position-y","-26px");
	})
	.blur(function(){
		$(this).siblings("i").css("background-position-y","0px");
		var nameVlue=$(this).val();
		console.log(nameVlue);
		if(RegLoginName.test(nameVlue) || RegLoginEmail.test(nameVlue))
		{
			stateLogin1=true;
			$(this).siblings(".nameTip").hide();
			
		}
		else
		{
			$(this).siblings(".nameTip").show();
		}
	})	
	
	//密码
	$("#loginForm .userPwd").focus(function(){
		$(this).siblings("i").css("background-position-y","-71px");
	})
	.blur(function(){
		$(this).siblings("i").css("background-position-y","-49px");
		var pwdLoginVlue=$(this).val();
		console.log(pwdLoginVlue);
		if(!RegLoginPwd.test(pwdLoginVlue))
		{
			$(this).siblings(".pwdTip").show();
		}
		else
		{
			stateLogin2=true;
			$(this).siblings(".pwdTip").hide();
		}
	})	
	
	$("#loginForm .login-sub").click(function(){
		if(stateLogin1 && stateLogin2)
		{
		  $("#loginForm").submit();	
		}
		else
		{
			$("#loginForm  .nameTip").show();
			return false;
		}
	})
	
	
	
	
	
})



/******************公共--轮播*****************/
//轮播
	function commCarousel(){
		if(caroCount>=caroImg-1)
		{
			caroCount=0;
			$("#comm-carousel ul li").eq(caroCount).fadeIn().siblings().fadeOut();
			$("#comm-carousel .carou-icon span").eq(caroCount).css("background","#FF3333").siblings().css("background","#fff");
		}
		else
		{
			caroCount++;
			$("#comm-carousel ul li").eq(caroCount).fadeIn().siblings().fadeOut();
			$("#comm-carousel .carou-icon span").eq(caroCount).css("background","#FF3333").siblings().css("background","#fff");
		}
	}




/******************首页--新闻*****************/
function donghuaNews(){
	if(countNews>$(".news-header li").length-1)
	{
			
		countNews=0;
		$(".news-header li a").eq(countNews).addClass("newsStyle").parent().siblings().children().removeClass("newsStyle");
		$(".news-conten .newsInfo"+countNews+"").css("display","block").siblings().css("display","none");
	}
		
	else
	{
		countNews++;
		$(".news-header li a").eq(countNews).addClass("newsStyle").parent().siblings().children().removeClass("newsStyle");
		$(".news-conten .newsInfo"+countNews+"").css("display","block").siblings().css("display","none");
	}
}
	

/*********************首页-记录左*******************************/	
function recordOne(){
	var liheight=$("#index .tixian ul li").height();
	$("#index .record-content:eq(0)>ul").animate({"top":"-="+liheight+"px"},function(){
		$("#index .tixian ul li:eq(0)").appendTo("#index .tixian ul");
		$("#index .tixian ul").css({"top":0});
	})
}


/*********************首页-记录右*******************************/	
function recordTwo(){
	var liheight=$("#index .duihuan ul li").height();
	$("#index .duihuan ul").animate({top:"-="+liheight+"px"}).animate({top:"+=10px"},"400").animate({top:"-=10px"},"fast",function(){
		$("#index .duihuan ul li").eq(0).appendTo($("#index .duihuan ul"));
		$("#index .duihuan ul").css("top","0px");
		
	});

}

/********************************爆料平台************************************/
function baoliao(){
	if(jdcount>=jdNum-1)
	{
		jdcount=0;
		$("#baoliao .jdImg .jdAdv").eq(jdcount).fadeIn().siblings().fadeOut();
		$("#baoliao .jd-icon span").eq(0).css("background","#FF3333").siblings().css("background","#ddd");
	}
	else
	{
		jdcount++;
		$("#baoliao .jdImg .jdAdv").eq(jdcount).fadeIn().siblings().fadeOut();
		$("#baoliao .jd-icon span").eq(jdcount).css("background","#FF3333").siblings().css("background","#ddd");
	}
}


/*********************************购物助手**********************************/
function zhushou(){
	if(zsCount>=zsImg-1){
		zsCount=0;
		$("#zhushou .zsImg img").eq(zsCount).fadeIn().siblings().fadeOut();
	}
	else
	{
		zsCount++;
		$("#zhushou .zsImg img").eq(zsCount).fadeIn().siblings().fadeOut();
		
	}
}


/********************返利网论坛--轮播***********************/
function forum(){
	if(bbsCount>=bbsImg-1)
	{
		bbsCount=0;
		$("#bbs-banner .bbs-icon span").eq(bbsCount).css("background","rgba(255,126,0,0.5)").siblings().css("background","rgba(0,0,0,0.3)");
		$("#bbs-banner .bannerImg li").eq(bbsCount).fadeIn().siblings().fadeOut();
	}
	else{
		bbsCount++;
		$("#bbs-banner .bbs-icon span").eq(bbsCount).css("background","rgba(255,126,0,0.5)").siblings().css("background","rgba(0,0,0,0.3)");
		$("#bbs-banner .bannerImg li").eq(bbsCount).fadeIn().siblings().fadeOut();
	}
}
