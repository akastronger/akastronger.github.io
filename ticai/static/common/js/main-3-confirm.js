// 风险、协议弹窗
function popupFenxian(){
  $(".fenxian").removeClass("hide").addClass("popup");
  $("#btnFenxian").click(function(){
    $(".fenxian").removeClass("popup").addClass("hide");
  });
}
function popupXieyi(){
  $(".xieyi").removeClass("hide").addClass("popup");
  $("#btnXieyi").click(function(){
    $(".xieyi").removeClass("popup").addClass("hide");
  });
}

(function(){
	var PRICE = 2;
  var PAI_3_INDEX_URL = '3_index.html',
	   PAI_3_PAY_URL = '3_pay.html';
  var TC_SELECTION_COOKIE_KEY = 'tc_selection',
      TC_TEMP_COOKIE_KEY = "temp_selection_single";


	$("#btnSelect").click(function(){
		window.location.href = PAI_3_INDEX_URL;
	});
	$("#btnRandom").click(function(){
    addRandomOne("zhi");
	});
  $("#btnEmpty").click(function(){
    if( confirm("您确定要清空当前的投注内容？") ){
      $(".entry").html("");
      dropCookie();
      // and
      updateInfo();
    }
  });
	$("#selOk").click(function(){
    // alert(getTotal());
		if (getTotal()) {
      // alert('OK!');
      window.location.href = PAI_3_PAY_URL;
		}else{
      alert("喔，您没有选一注号");
		}

	});
	$(".sel-times input").keyup(function(){
		updateInfo();
	});
	$("document").ready(function(){
    var temp_str = $.cookie(TC_TEMP_COOKIE_KEY);
    if (temp_str){
      temp = JSON.parse(temp_str);
      updateCookie(temp);
      // 用后即焚，防止污染
      $.cookie(TC_TEMP_COOKIE_KEY, '', {expires: -1});
    }else{
      // return; // 如果不是从index页面进入，显示示例格式，好看些
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
  });


  // 增加新选的号码到cookie
  var updateCookie = function(json_single){
    var _selection_str = $.cookie(TC_SELECTION_COOKIE_KEY);
    if (_selection_str) {
      var _selection = JSON.parse(_selection_str);
      _selection.numbers.push(json_single.numbers[0]);
      $.cookie(TC_SELECTION_COOKIE_KEY, JSON.stringify(_selection) );
    }else{
      $.cookie(TC_SELECTION_COOKIE_KEY, JSON.stringify(json_single) );
    }
  }
  var dropCookie = function(){
    $.cookie(TC_SELECTION_COOKIE_KEY, '', {expires: -1});
  }
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
  var formatTypeText = function(str){
    var s = "直选";
    if( str==".tab-1" || str=="zhi" ){
      s = "直选";
    }else if( str==".tab-2" || str=="zu3" ){
      s = "组三";
    }else{
      s = "组六";
    }
    return s;
  }
  // 页面刷新时显示所有选号
  // 选号的来源为cookie
  var initItems = function(){
    var selection_str = $.cookie(TC_SELECTION_COOKIE_KEY);
    if (selection_str) {
      var _selection = JSON.parse(selection_str);
      var html = '';
      for(var i=_selection.numbers.length-1; i>=0; i--){
        html += '<div class="item"> <div class="media-left"><i class="icon icon-delete"></i></div> <div class="sel-content font14"> <p class="red-text bold">';
        html += formatBallText(_selection.numbers[i].num) + '</p> <p>';
        html += formatTypeText(_selection.numbers[i].type) + '复式 ';
        html += _selection.numbers[i].amount + '注 ';
        html += _selection.numbers[i].amount*PRICE + '元</p> </div> </div>';
      }
      $(".entry").html(html);
      // other
      bindDelItem();
      updateInfo();
    }
	}
  // 绑定删除单条号码
  var bindDelItem = function(){
		$(".icon-delete").click(function(){
		  $(this).parents(".item").remove();
      var index = $(this).index();
      // Remove item from cookie
      var selection_str = $.cookie(TC_SELECTION_COOKIE_KEY);
      if (selection_str) {
        var _selection = JSON.parse(selection_str);
        _selection.numbers.splice(index, 1);
        $.cookie(TC_SELECTION_COOKIE_KEY, JSON.stringify(_selection));
      }
		});
	};
  // 机选一注
  var addRandomOne = function(type){
    // zhi zu3 zu6
    type = type || 'zhi';
    var amount =1;
    var len = 3;
    if (type=="zu3") {
      amount = 2;
      len = 2;
    }
    var num = [];
    for(var i=0; i<len; i++){
      num.push([Math.floor(Math.random()*10)]);
    }
    var json_single = {
      numbers: [{
        "num": num,
        "type": type,
        "amount": amount
      }]
    };
    updateCookie(json_single);
    var html = '<div class="item"> <div class="media-left"><i class="icon icon-delete"></i></div> <div class="sel-content font14"> <p class="red-text bold">';
    html += formatBallText(json_single.numbers[0].num) + '</p> <p>';
    html += formatTypeText(json_single.numbers[0].type) + '复式 ';
    html += json_single.numbers[0].amount + '注 ';
    html += json_single.numbers[0].amount*PRICE + '元</p> </div> </div>';
    $(".entry").prepend(html);
    bindDelItem();

    updateInfo();
  };
  // 所有注数
  var getTotal = function(){
    var n = 0;
    _selection = JSON.parse( $.cookie(TC_SELECTION_COOKIE_KEY) );
    if(!_selection) return n;
    var numbers = _selection.numbers;
    for(var i=0; i<numbers.length; i++){
      n += parseInt(numbers[i].amount);
    }
    return n;
  }
  // 注数、钱数、倍数实时显示
  var updateInfo = function(){
    var total = getTotal(),
        times = parseInt( $(".sel-times input").val() );
    $(".zhushu").html(total);
    $(".money").html( total*times*PRICE );
  }

})();
