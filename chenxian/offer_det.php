<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<meta name="format-detection" content="telephone=no" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" /> 
<title>报价详情</title>
<?php include('include/title.php')?>
</head>
<body>
    <div class="main">
    	<div class="offer_det">
    		<div class="texC"><span class="font15 cfff offerd_tit radius20 bgb85 mA mT20 mB20">平安车险</span></div>
            <ul class="offerd_list wd90 mA">
            	<?php for($i=0;$i<6;$i++) {?>
            	<li class="clearfix borB texC">
                	<div class="fl wd50 cfff font14">车损险</div>
                    <div class="fl wd50 cfff font14">2000元</div>
                </li>
                <?php }?>
            </ul>
            <div class="clearfix wd90 pL5 pR5 mA texC pT10 pB10 offerd_bg">
            	<div class="fl wd50 cfff font14">总金额</div>
                <div class="fl wd50 cfff font14">16,000元</div>
            </div>
            <div class="texC">
                <a href="tel:18768112081" class="btn home_btn mA cfff texC font15 mT30 a-bouncein mR10 offerd_btn">拨号咨询</a>
                <a href="##" class="btn home_btn mA cfff texC font15 mT30 a-bouncein">提交订单</a>
            </div>
        </div>
    </div>
</body>
<script type="text/javascript" src="js/common.js"></script>
</html>