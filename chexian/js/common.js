$(function(){
	$('.btn').click(function(){
		$(this).addClass('on');	
	})
	$('.add_tit ul li:last').click(function(){
		$('.add_tit span').stop().animate({'left':'50%'},500);
	})
	$('.add_tit ul li:first').click(function(){
		$('.add_tit span').stop().animate({'left':'-1px'},500);
	})
	$('.add_tit ul li').click(function(){
		var index=$(this).index();
		$('.add_tab .tab_div').eq(index).show().addClass('a-bouncein').siblings().hide().removeClass('a-bouncein');	
	})
})
$(function(){
	var wid1=$('.insure_tit ul li:first').width();
	var wid2=$('.insure_tit ul li:odd').width();
	var widA=wid1+wid2;
	$('.insure_tit ul li:last').click(function(){
		$('.insure_tit span').stop().animate({'left':widA},500);
	})
	$('.insure_tit ul li:first').click(function(){
		$('.insure_tit span').stop().animate({'left':'-1px'},500);
	})
	$('.insure_tit ul li:odd').click(function(){
		$('.insure_tit span').stop().animate({'left':wid1},500);
	})	
	$('.insure_tit ul li').click(function(){
		var index=$(this).index();
		$('.add_tab .tab_div').eq(index).show().addClass('a-bouncein').siblings().hide().removeClass('a-bouncein');	
	})
	//按钮开关
	$('.ins_r span').click(function(){
		if($(this).parents('.insure_list').hasClass('on')){
			$(this).parents('.insure_list').removeClass('on');
			$(this).parents('.insure_list').find('.insure_r').show();
		}else{
			$(this).parents('.insure_list').addClass('on');	
			$(this).parents('.insure_list').find('.insure_r').hide();
		}
	})
})	


//lotteryn活动详情
$(function(){
	$('.lotteryn_show li a').click(function(){
		$('.lotteryn_word p').toggle(400);
	})
})