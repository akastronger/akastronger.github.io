(function(){
	var PRICE = 2; // each pay.
	var PAI_3_COMFIRM_URL = '3_confirm.html';
	var WANFA_3_URL = '3-wanfa.html';

	$("document").ready(function(){
		$(".tab_top li").click(function(){
			$(this).addClass("on").siblings().removeClass("on");
			var index=$(this).index();
			// Mark Wang
			$(".tab_body .tab_li").eq(index).fadeIn().siblings().css('display','none');
			var pageClass = getPageClass();
			setMoney(getAmount(pageClass), PRICE);
		});
	});

	$(".ball").click(function(){
		$(this).toggleClass("on");
		var pageClass = getPageClass();
		setMoney(getAmount(pageClass), PRICE);

	});
	$("#btnClear").click(function(){
		$(getPageClass()).find(".ball-area .on").removeClass("on");
		setMoney(0, PRICE);
	});
	$("#selOk").click(function(){
		var pageClass = getPageClass();
		if (getAmount(pageClass) == 0) {
			// alert("您没有选号，每位至少选择一个号！");
			doRandomSelect(getPageClass());
		}else{
			var temp = (JSON.stringify(getSelection()));
			$.cookie("temp_selection_single", temp);
			window.location.href = PAI_3_COMFIRM_URL;

			return; //debug;
		}
	});
	$(".btn-random").click(function(){
		doRandomSelect(getPageClass());
	});
	$(".icon-ask").click(function(){
		window.open(WANFA_3_URL);
	});

	var getSelection = function(){
		var selection = {
			numbers: [{
				"num": [],
				"type": '',
				"amount": 0
			}]
		};
		var pageClass = getPageClass();
		selection.numbers[0].num = getSelected(pageClass);
		selection.numbers[0].type = pageClass;
		selection.numbers[0].amount = getAmount(pageClass);
		return selection;
	}

	// Random select
	var doRandomSelect = function(pageClass){
	  	$(pageClass).find(".ball-area .on").removeClass("on");// empty all first.

	  	var amount = 1;
		if(pageClass == '.tab-1'){
			var $entry = $(getPageClass()).find(".pai-list");
			for (var i = 0; i < $entry.length; i++) {
				var rand = Math.floor(Math.random()*10);
				$($entry[i]).find(".ball:contains('"+rand+"')").addClass("on");
			}
			amount = 1;
		}else if('.tab-2' == pageClass){
			var num = 2;
			var randArr = genRandomInt(num, true);

			var $entry = $(getPageClass()).find(".pai-list");
			for(var i=0; i<randArr.length; i++){
				$entry.find(".ball:contains('"+randArr[i]+"')").addClass("on");
			}
			amount = 2;
		}else{ // .tab-3
			var num = 3;
			var randArr = genRandomInt(num, true);

			var $entry = $(getPageClass()).find(".pai-list");
			for(var i=0; i<randArr.length; i++){
				$entry.find(".ball:contains('"+randArr[i]+"')").addClass("on");
			}
			amount = 1;
		}
	  	setMoney(amount, PRICE);
	};

	// Generate some random integer. 0 to 9.
	var genRandomInt = function(num, not_same){
		not_same = not_same||false;
		var randArr = [];
		if(not_same){ // they are differ to each other.
			var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
			for (var i = 0; i < num; i++) {
				var rand = Math.floor(Math.random()*(10-num));
				randArr.push(arr.splice(rand, 1)[0]);
			}

		}else{
			for (var i = 0; i < num; i++) {
				randArr.push( Math.floor(Math.random()*10) );
			}
		}
		return randArr;
	};

	var factorial = function(n){
		if (n<=1) return 1;
		var result = n;
		for(var i=n; i>1;i--){
			result = result * (i-1);
		}
		return result;
	};

	// Get the active tab
	var getPageClass = function(){
		var pageClass = '.tab-1';
		switch($(".tab_top.tab_three li.on").index()){
			case 0:
				pageClass = '.tab-1';
				break;
			case 1:
				pageClass = '.tab-2';
				break;
			case 2:
				pageClass = '.tab-3';
				break;
			default:
				pageClass = '.tab-1';
		};
		// pageClass = '.tab-' + ($(".tab_top.tab_three li.on").index() + 1);
		return pageClass;
	};

	// Get selected balls
	var getSelected = function(pageClass){
	  var ballArr = [];
	  var $entry = $(pageClass).find(".pai-list");
	  for (var i = 0; i < $entry.length; i++) {
	  	var singleArr = [];
	  	var $ball = $($entry[i]).find(".ball");
	  	for(var j =0; j<$ball.length; j++){
	  		if ($($ball[j]).hasClass("on")) singleArr.push( parseInt($($ball[j]).html()) );
	  	}
	  	ballArr.push(singleArr);
	  }
	  return ballArr;
	};

	// 计算注数
	var getAmount = function(pageClass){
		var amount = 1;
		if (pageClass == '.tab-1') {
			var arr = getSelected(pageClass);
			for(var i=0; i<arr.length; i++){
				amount = amount * arr[i].length;
			}
		}else if('.tab-2' == pageClass){
			var index = 0;
			var arr = getSelected(pageClass)[index];
			var len = arr.length;
			amount = len*(len-1);
		}else{
			var index = 0;
			var arr = getSelected(pageClass)[index];
			var len = arr.length;
			console.log(len);
			amount = Math.floor( factorial(len)/(factorial(len-3) * factorial(3)) );
		}
		return amount;
	};

	// Set html after click
	var setMoney = function(amount, price){
		// 设On在先
		$(".zhushu").html(amount);
		$(".money").html(amount*price);
	}

	// Count down, get time left
	var getHMSLeft = function(h, m, s){
	  h = h||20;
	  m = m||0;
	  s = s||0;
	  var today = new Date();
	  var date = new Date(today.getFullYear(), today.getMonth(), today.getDate(), h, m, s);
	  date.setTime(date-today);
	  var left = [0, 0, 0];
	  left[0] = date.getUTCHours();
	  left[1] = date.getUTCMinutes();
	  left[2] = date.getUTCSeconds();
	  return left;
	}
	// Set html of timer.
	var setTimeLeft = function(){
	  var left = getHMSLeft(20, 0, 0);
	  var s = left[0]+"时"+left[1]+"分"+left[2]+"秒";
	  $(".timer").html(s);
	}
	setInterval(setTimeLeft, 1000);


})();
