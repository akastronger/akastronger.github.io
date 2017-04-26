(function(){
	var PRICE = 2; // each pay.
	var PAI_5_COMFIRM_URL = '5_confirm.html';
	var WANFA_5_URL = '5-wanfa.html';
	var TEMP_PAILIE5_COOKIE_KEY = "temp_pailie5";

	$(".ball").click(function(){
		$(this).toggleClass("on");
		setMoney(getAmount(), PRICE);
	});
	$("#btnClear").click(function(){
		$(".ball-area .on").removeClass("on");
		setMoney(0, PRICE);
	});
	$("#selOk").click(function(){
		if (getAmount() == 0) {
			// alert("您没有选号，每位至少选择一个号！");
			doRandomSelect();
		}else{
			var temp = (JSON.stringify(getSelection()));
			$.cookie(TEMP_PAILIE5_COOKIE_KEY, temp);
			window.location.href = PAI_5_COMFIRM_URL;
		}
	});
	$(".btn-random").click(function(){
		doRandomSelect();
	});
	$(".icon-ask").click(function(){
		window.open(WANFA_5_URL);
	});

	var getSelection = function(){
		var selection = {
			numbers: [{
				"num": [],
				"type": '',
				"amount": 0
			}]
		};
		var numbers0 = selection.numbers[0];
		numbers0.num = getSelected();
		numbers0.amount = getAmount();
		numbers0.type = "单式";
		if (numbers0.amount>1) {
			numbers0.type = "复式";
		}
		return selection;
	}

	var getSelected = function(){
	  var ballArr = [];
	  var $entry = $(".wrapper .pai-list");
	  for (var i = 0; i < $entry.length; i++) {
	  	var singleArr = [];
	  	var $ball = $entry.eq(i).find(".ball");
	  	for(var j =0; j<$ball.length; j++){
	  		if ($ball.eq(j).hasClass("on")) singleArr.push( parseInt($ball.eq(j).text()) );
	  	}
	  	ballArr.push(singleArr);
	  }
	  return ballArr;
	}

	// 计算注数
	var getAmount = function(){
		var amount = 1;

		var arr = getSelected();
		for(var i=0; i<arr.length; i++){
			amount = amount * arr[i].length;
		}

		return amount;
	}

	var doRandomSelect = function(){
	  	$(".ball-area .on").removeClass("on");

			var $entry = $(".pai-list");
			for (var i = 0; i < $entry.length; i++) {
				var rand = Math.floor(Math.random()*10);
				$entry.eq(i).find(".ball:contains('"+rand+"')").addClass("on");

		}
	  	setMoney(1, PRICE);
	}

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
