<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<meta name="format-detection" content="telephone=no" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" /> 
<title>个人中心</title>
<?php include('include/title.php')?>
<script type="text/javascript" src="js/jquery.cityselect.js"></script>
<script type="text/javascript">
$(function(){
	$("#city_4").citySelect({
    	prov:"湖南", 
    	city:"长沙",
		dist:"岳麓区",
		nodata:"none"
	}); 
});
</script>
</head>
<body>
    <div class="main">
    	<div class="data">
        	<div class="data-bg"></div>
        	<div class="data_top texC">
            	<h2 class="cfff font15 pT20">小丸子</h2>
                <div class="radius50 data_head mT20 a-shake mA"><img src="img/head.png"/></div>
            </div>
            <div class="home_list wd90 mA mT30">
            	<div class="item radius20 a-flipinX clearfix mB20">
                    <label class="font14 cfff fl wd20 texR">会员姓名</label>
                    <div class="fr wd70">
                        <input type="text" class="item_text fl mL font14 borN cfff" placeholder="请输入会员姓名"/>
                    </div>
                </div>
                <div class="item radius20 mB20 a-flipinX clearfix">
                    <label class="font14 cfff fl wd20 texR" style="padding-left:10px;">联系地址</label>
                    <div class="fr wd70" style="width:73%;">
                    	<div id="city_4">
                            <select class="prov bgfff borN sel_btn radius20 font14 fl"></select> 
                            <select class="city bgfff borN sel_btn radius20 font14 fl"></select>
                            <select class="dist bgfff borN sel_btn radius20 font14 fl"></select>
			            </div>
                    </div>
                </div>
                <div class="item radius20 a-flipinX clearfix mB20">
                    <label class="font14 cfff fl wd20 texR">详细地址</label>
                    <div class="fr wd70">
                        <input type="text" class="item_text fl mL font14 borN cfff" placeholder="请输入详细地址"/>
                    </div>
                </div>
                <div class="item radius20 a-flipinX clearfix">
                    <label class="font14 cfff fl wd20 texR">手机号码</label>
                    <div class="fr wd70">
                        <input type="tel" class="item_text fl mL font14 borN cfff" placeholder="请输入手机号码"/>
                    </div>
                </div>
            </div>
            <div class="texC mB10"><input type="submit" class="btn home_btn mA cfff texC font15 mT30 a-bouncein borN" value="保存" /></div>
        </div>
    </div>
</body>
<script type="text/javascript" src="js/common.js"></script>
</html>