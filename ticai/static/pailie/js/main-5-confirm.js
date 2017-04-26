
function popupFenxian(){
  $(".fenxian").removeClass("hide");
  $(".fenxian").addClass("popup");
  $("#btnFenxian").click(function(){
    $(".fenxian").removeClass("popup");
    $(".fenxian").addClass("hide");
  });
}
function popupXieyi(){
  $(".xieyi").removeClass("hide");
  $(".xieyi").addClass("popup");
  $("#btnXieyi").click(function(){
    $(".xieyi").removeClass("popup");
    $(".xieyi").addClass("hide");
  });
}

(function(){
	var PAI_5_INDEX_URL = '5_index.html';
  var PRICE = 2;
  var TEMP_PAILIE5_COOKIE_KEY = "temp_pailie5",
			SELECTION_PAILIE5_COOKIE_KEY = "selection_pailie5";

	$("#btnEmpty").click(function(){
		if( confirm("您确定要清空当前的投注内容？") ){
			$(".entry").html("");
			dropCookie();
      updateInfo();
		}

	});
	$("#btnRandom").click(function(){
    addRandomOne();
	});
	$("#btnSelect").click(function(){
		window.location.href = PAI_5_INDEX_URL;
	});
	$("#selOk").click(function(){
		if (getTotal()) {
      // alert('OK!');
      window.location.href="5_pay_ok.html";
		}else{
      alert("喔，您没有选一注号");
		}

	});
  $(".sel-times input").keyup(function(){
		updateInfo();
	});
	$("document").ready(function(){
    var temp_str = $.cookie(TEMP_PAILIE5_COOKIE_KEY);
    if (temp_str){
      temp = JSON.parse(temp_str);
      updateCookie(temp);
      // 用后即焚，防止污染
      $.cookie(TEMP_PAILIE5_COOKIE_KEY, '', {expires: -1});
    }else{

    }
    initItems();
	});
  
  $('.ajax-popup-link').magnificPopup({
    type: 'ajax',
    modal: true,
    callbacks: {
      ajaxContentAdded: function(){
        $("#btnClose").click(function(){
          var caidian = $('[type="radio"]:checked').siblings("label").find("span").html();
          $(".ajax-popup-link").html(caidian);
          $.magnificPopup.close();
        });
      },
    }
  })
  
  // 增加新选的号码到cookie
  var updateCookie = function(json_single){
    var _selection_str = $.cookie(SELECTION_PAILIE5_COOKIE_KEY);
    if (_selection_str) {
      var _selection = JSON.parse(_selection_str);
      _selection.numbers.push(json_single.numbers[0]);
      $.cookie(SELECTION_PAILIE5_COOKIE_KEY, JSON.stringify(_selection) );
    }else{
      $.cookie(SELECTION_PAILIE5_COOKIE_KEY, JSON.stringify(json_single) );
    }
  }
  var dropCookie = function(){
    $.cookie(SELECTION_PAILIE5_COOKIE_KEY, '', {expires: -1});
  }
  // 页面刷新时显示所有选号
  // 选号的来源为cookie
  var initItems = function(){
    var selection_str = $.cookie(SELECTION_PAILIE5_COOKIE_KEY);
    if (selection_str) {
      var _selection = JSON.parse(selection_str);
      var html = '';
      for(var i=_selection.numbers.length-1; i>=0; i--){
        html += '<div class="item"> <div class="media-left"><i class="icon icon-delete"></i></div> <div class="sel-content x16"> <p class="red-text bold">';
        html += formatBallText(_selection.numbers[i].num) + '</p> <p>';
        html += _selection.numbers[i].type + " ";
        html += _selection.numbers[i].amount + '注 ';
        html += _selection.numbers[i].amount*PRICE + '元</p> </div> </div>';
      }
      $(".entry").html(html);
      // other
      bindDelItem();
      updateInfo();
    }
	}
  // 机选一注
  var addRandomOne = function(){
    var amount =1;
    var len = 5;

    var num = [];
    for(var i=0; i<len; i++){
      num.push([Math.floor(Math.random()*10)]);
    }
    var json_single = {
      numbers: [{
        "num": num,
        "type": "单式",
        "amount": amount
      }]
    };
    updateCookie(json_single);
    var html = '<div class="item"> <div class="media-left"><i class="icon icon-delete"></i></div> <div class="sel-content x16"> <p class="red-text bold">';
    html += formatBallText(json_single.numbers[0].num) + '</p> <p>';
    html += json_single.numbers[0].type + ' ';
    html += json_single.numbers[0].amount + '注 ';
    html += json_single.numbers[0].amount*PRICE + '元</p> </div> </div>';
    $(".entry").prepend(html);
    bindDelItem();

    updateInfo();
  };
  // 选号显示的格式
  var formatBallText = function(arr2){
    var txt = '';
    for(var i=0; i<arr2.length;i++){
      var temp = '';
      for(var j=0; j<arr2[i].length;j++){
        temp = arr2[i].join('');
      }
      txt += temp + " ";
    }
    return txt.trim();
  }
  // 绑定删除单条号码
  var bindDelItem = function(){
    $(".icon-delete").click(function(){
      $(this).parents(".item").remove();
      var index = $(this).index();
      // Remove item from cookie
      var selection_str = $.cookie(SELECTION_PAILIE5_COOKIE_KEY);
      if (selection_str) {
        var _selection = JSON.parse(selection_str);
        _selection.numbers.splice(index, 1);
        $.cookie(SELECTION_PAILIE5_COOKIE_KEY, JSON.stringify(_selection));
      }
    });
  };
  // 注数、钱数、倍数实时显示
  var updateInfo = function(){
    var total = getTotal(),
        times = parseInt( $(".sel-times input").val() );
    $(".zhushu").html(total);
    $(".money").html( total*times*PRICE );
  }
  // 所有注数
  var getTotal = function(){
    var n = 0;
    _selection = JSON.parse( $.cookie(SELECTION_PAILIE5_COOKIE_KEY) );
    if(!_selection) return n;
    var numbers = _selection.numbers;
    for(var i=0; i<numbers.length; i++){
      n += parseInt(numbers[i].amount);
    }
    return n;
  }

})();
