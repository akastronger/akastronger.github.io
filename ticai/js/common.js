/*资讯列表*/
  $(function(){
   $(".news ul li.item").click(function(){
      var index = $(this).index() / 2;
      $(this).addClass("active").siblings().removeClass("active");
      $(".tab").eq(index).show().siblings().hide();
    });
  });

/*点击回到顶部*/
  $(function(){
  $(".fix").click(function() {
      $("html,body").animate({scrollTop:0}, 300);
  }); 
 })
  /*找回密码*/
$(document).ready(function(){
  $('.r_p ul li').click(function(){
    var A = $(this).index();
    $(this).addClass('on').siblings().removeClass('on');
    $('.r_y').eq(A).show().siblings().hide();
  })
})
/*超级大乐透走势图*/
  $(function(){

    $('.span1').click(function(){
      var index = $(this).index()/2;
      $(this).addClass('on').siblings('span').removeClass('on');
      $('.zone').eq(index).show().siblings().hide();
    });

  });
  /*后区分类走势图详情*/
  $(function(){
    $('.area1 span').click(function(){
      var index = $(this).index()/2;
      $(this).addClass('on').siblings('span').removeClass('on');
      $('.back').eq(index).show().siblings().hide();
    });

  });
  /*期数详情*/
  $(function(){
    $('.area span').click(function(){
      $(this).addClass('on').siblings('span').removeClass('on');

    });

  });
/*验证码*/
$(document).ready(function(){
  var wait=60;
  function time(x){
    if(wait==0){
    x.removeAttribute("disabled");   
    x.value="免费获取验证码";
    wait = 60; 
    }else{
      x.setAttribute("disabled", true);  
        x.value="重新发送(" + wait + ")";  
        wait--;  
        setTimeout(function() {  
          time(x)  
        },  
        1000); 
    }
  }
  document.getElementById("btn1").onclick=function(){time(this)};
  console(document.getElementById("btn1"))
  document.getElementById("btn2").onclick=function(){time(this)};
});

  /*场次选择*/
  $(function(){
    $(".rn span").toggle(function(){
      $(this).css("background-color","#EE7E0F");
    },function(){
      $(this).css("background-color","#FFFFFF");
    });
  });
 