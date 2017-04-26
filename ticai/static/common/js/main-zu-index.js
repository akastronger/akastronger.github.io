(function(){
	var ZU_WANFA_URL = 'zu-wanfa.html';
	$("document").ready(function(){
		$(".tab_top li").click(function(){
			$(this).addClass("on").siblings().removeClass("on");
			var index=$(this).index();
			// Mark Wang
			$(".tab_body .tab_li").eq(index).fadeIn().siblings().css('display','none');
		});
		$(".dropup").toggle(function(){
			$(".sumary .wrapper").hide(); 
			$(this).toggleClass('icon-up icon-down');
		}, function(){
			$(".sumary .wrapper").show();
			$(this).toggleClass('icon-up icon-down');
		});
		$(".icon-ask").click(function(){
			window.open(ZU_WANFA_URL);
		});
	});
	$(".table-game td").click(function(){
		$(this).toggleClass("bg-reverse");
		guideSelect(getBattles());
	});
	$("#btnClear").click(function(){
		$(".table-game td").removeClass('bg-reverse');
	});
	$(".btn-random").click(function(){
		alert("经过思考之后，伯乐表示这个问题很深奥..");
		doRandomSelect();
	});
	$("#selOk").click(function(){
		if (getBattles()>1) {
			alert(getSelected());
		}else{
			alert("您没有选.\n既然如此，我让伯乐帮您选.");
			doRandomSelect();
		}
	});

	var getSelected = function(){
		var arr = [];
		$(".table-game td").each(function(i, td){
			if($(td).hasClass("bg-reverse")){
				var table = $(td).parents("table")[0];
				arr.push(table);
			}
		});
		return arr;
	};
	var getBattles = function(){
		var num = 0;
		$(".item").each(function(i, item){
			if( $(item).find("td").hasClass("bg-reverse") ){
				num++;
			}
		});
		return num;
	};
	var guideSelect = function(num){
		var tip = '';
		switch(num){
			case 0:
				tip = '请至少选择两场比赛';
				break;
			case 1:
				tip = '已选1场，还差1场';
				break;
			default:
				tip = '已选'+ num +'场';
				break;
		}
		$("#guideText").html(tip);
	};
	var doRandomSelect = function(){
		//empty all first
		$(".table-game td").removeClass('bg-reverse');

		var len = $(".item").length;
		var a = Math.floor( Math.random()*len );
		var b = a;
		while(b==a){
			b = Math.floor( Math.random()*len );
		}
		var c1 = Math.floor( Math.random()*3 ),
			c2 = Math.floor( Math.random()*3 );
		$(".item").eq(a).find("td").eq(c1).addClass("bg-reverse");
		$(".item").eq(b).find("td").eq(c2).addClass("bg-reverse");
		guideSelect(2);
	};


})();