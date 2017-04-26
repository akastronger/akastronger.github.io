// 风险、协议弹窗
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

  $(".item .icon-times").click(function(){
    $(this).parents(".item").remove();
  });

  $("#btnRandom").click(function(){
    var numberArr = [];
    var front_len = 5,
        back_len = 2;
    var snippet = "";
    
    for(var i=0; i<front_len; i++){
      var front_num = genFrontNumber();
      snippet += ['<span class="ball-sm">', '</span> '].join(front_num);
      numberArr.push(front_num);
    }
    for(var i=0; i<back_len; i++){
      var back_num = genBackNumber();
      snippet += ['<span class="ball-sm blue">', '</span> '].join(back_num);
      numberArr.push(back_num);
    }

    var html = ['<div class="item"> <div class="" style="display:inline-block"> <div class="font14"><span>大乐透</span><span class="mgL10">第15134期</span></div> <div class="">', 
          '</div> </div> <i class="icon icon-times fr"></i> </div>'].join(snippet);
    $(".entry").prepend(html);

    console.log(numberArr);
    $(".item .icon-times").click(function(){
      $(this).parents(".item").remove();
    });
  });
  
  $("#btnEmpty").click(function(){
    $(".entry").html('');
  });
  function genFrontNumber(){
    var front_num = Math.floor(Math.random()*4) + '' + Math.floor(Math.random()*10);
    var num = parseInt(front_num);
    while(num>35 || num==0){
      front_num = Math.floor(Math.random()*4) + '' + Math.floor(Math.random()*10);
      num = parseInt(front_num);
    }
    return front_num; //string, 01, 05
  }
  function genBackNumber(){
    var back_num = Math.floor(Math.random()*2) + '' + Math.floor(Math.random()*10);
    var num = parseInt(back_num);
    while(num > 12 || num==0){
      back_num = Math.floor(Math.random()*2) + '' + Math.floor(Math.random()*10);
      num = parseInt(back_num);
    }
    return back_num;
  }
      
})();
