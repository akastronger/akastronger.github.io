<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<meta name="format-detection" content="telephone=no" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" /> 
<title>投保方案</title>
<?php include('include/title.php')?>
</head>
<body>
    <div class="main">
    	<div class="add">
        	<div class="wd90 mA radius20 mT20 mB20 insure_tit">
            	<ul class="clearfix">
                	<li class="fl texC cfff font14">基本版</li>
                    <li class="fl texC cfff font14" style="width:34%;">全面版</li>
                    <li class="fl texC cfff font14">自定义</li>
                </ul>
                <span class="radius20"></span>
            </div>
            <div class="add_tab insure">
            	<!--基本版 start-->
            	<div class="tab_div hand_fill wd90 mA">
                	<div class="clearfix insure_list on">
                        <div class="fl wd80 item radius20 mB20 a-flipinX clearfix">
                            <label class="font14 cfff fl wd20 texL">车损险</label>
                            <div class="fr wd40 insure_r">
                                <input type="text" class="item_text fl mL font14 borN c8ab" value="" readonly="readonly"/>
                            </div>
                        </div>
                        <div class="ins_r fr texR">
                        	<span></span>
                        </div>
                    </div>
                    <div class="clearfix insure_list">
                        <div class="fl wd80 item radius20 mB20 a-flipinX clearfix">
                            <label class="font14 cfff fl wd20 texL">三者险</label>
                            <div class="fr wd40 insure_r">
                                <select class="add_sel fl mL font14 borN c8ab">
                                    <option>50万</option>
                                    <option>50万</option>
                                    <option>60万</option>
                                </select>
                            </div>
                        </div>
                        <div class="ins_r fr texR">
                        	<span></span>
                        </div>
                    </div>
                    <div class="clearfix insure_list">
                        <div class="fl wd80 item radius20 mB20 a-flipinX clearfix">
                            <label class="font14 cfff fl wd20 texL">车上人员（司机）</label>
                            <div class="fr wd40 insure_r">
                                <select class="add_sel fl mL font14 borN c8ab">
                                    <option>1万</option>
                                    <option>2万</option>
                                    <option>3万</option>
                                </select>
                            </div>
                        </div>
                        <div class="ins_r fr texR">
                        	<span></span>
                        </div>
                    </div>
                    <div class="texC mB10"><a class="btn home_btn mA cfff texC font15 a-bouncein borN" href="offer_det.php">立即报价</a></div>
                </div>
                <!--基本版 end-->
                <!--全面版 start-->
            	<div class="tab_div hand_fill wd90 mA hide">
                	<div class="clearfix insure_list">
                        <div class="fl wd80 item radius20 mB20 a-flipinX clearfix">
                            <label class="font14 cfff fl wd20 texL">车损险</label>
                            <div class="fr wd40 insure_r">
                                <input type="text" class="item_text fl mL font14 borN c8ab" value=""/>
                            </div>
                        </div>
                        <div class="ins_r fr texR">
                        	<span></span>
                        </div>
                    </div>
                    <div class="clearfix insure_list">
                        <div class="fl wd80 item radius20 mB20 a-flipinX clearfix">
                            <label class="font14 cfff fl wd20 texL">三者险</label>
                            <div class="fr wd40 insure_r">
                                <select class="add_sel fl mL font14 borN c8ab">
                                    <option>50万</option>
                                    <option>50万</option>
                                    <option>60万</option>
                                </select>
                            </div>
                        </div>
                        <div class="ins_r fr texR">
                        	<span></span>
                        </div>
                    </div>
                    <div class="clearfix insure_list on">
                        <div class="fl wd80 item radius20 mB20 a-flipinX clearfix">
                            <label class="font14 cfff fl wd20 texL">盗抢险</label>
                            <div class="fr wd40 insure_r" style="display:none;">
                                <select class="add_sel fl mL font14 borN c8ab">
                                    <option>50万</option>
                                    <option>50万</option>
                                    <option>60万</option>
                                </select>
                            </div>
                        </div>
                        <div class="ins_r fr texR">
                        	<span></span>
                        </div>
                    </div>
                    <div class="clearfix insure_list on">
                        <div class="fl wd80 item radius20 mB20 a-flipinX clearfix">
                            <label class="font14 cfff fl wd20 texL">自然险</label>
                            <div class="fr wd40 insure_r" style="display:none;">
                                <select class="add_sel fl mL font14 borN c8ab">
                                    <option>50万</option>
                                    <option>50万</option>
                                    <option>60万</option>
                                </select>
                            </div>
                        </div>
                        <div class="ins_r fr texR">
                        	<span></span>
                        </div>
                    </div>
                    <div class="clearfix insure_list on">
                        <div class="fl wd80 item radius20 mB20 a-flipinX clearfix">
                            <label class="font14 cfff fl wd20 texL">玻璃险</label>
                            <div class="fr wd40 insure_r" style="display:none;">
                                <select class="add_sel fl mL font14 borN c8ab">
                                    <option>50万</option>
                                    <option>50万</option>
                                    <option>60万</option>
                                </select>
                            </div>
                        </div>
                        <div class="ins_r fr texR">
                        	<span></span>
                        </div>
                    </div>
                    <div class="clearfix insure_list on">
                        <div class="fl wd80 item radius20 mB20 a-flipinX clearfix">
                            <label class="font14 cfff fl wd20 texL">涉水险</label>
                            <div class="fr wd40 insure_r" style="display:none;">
                                <select class="add_sel fl mL font14 borN c8ab">
                                    <option>50万</option>
                                    <option>50万</option>
                                    <option>60万</option>
                                </select>
                            </div>
                        </div>
                        <div class="ins_r fr texR">
                        	<span></span>
                        </div>
                    </div>
                    <div class="clearfix insure_list">
                        <div class="fl wd80 item radius20 mB20 a-flipinX clearfix">
                            <label class="font14 cfff fl wd20 texL">车上人员（司机）</label>
                            <div class="fr wd40 insure_r">
                                <select class="add_sel fl mL font14 borN c8ab">
                                    <option>1万</option>
                                    <option>2万</option>
                                    <option>3万</option>
                                </select>
                            </div>
                        </div>
                        <div class="ins_r fr texR">
                        	<span></span>
                        </div>
                    </div>
                    <div class="clearfix insure_list">
                        <div class="fl wd80 item radius20 mB20 a-flipinX clearfix">
                            <label class="font14 cfff fl wd20 texL">车上人员（乘客）</label>
                            <div class="fr wd40 insure_r">
                                <select class="add_sel fl mL font14 borN c8ab">
                                    <option>2万/座</option>
                                    <option>5万/座</option>
                                    <option>5万/座</option>
                                </select>
                            </div>
                        </div>
                        <div class="ins_r fr texR">
                        	<span></span>
                        </div>
                    </div>
                    <div class="texC mB10"><a class="btn home_btn mA cfff texC font15 a-bouncein borN" href="offer_det.php">立即报价</a></div>
                </div>
                <!--全面版 end-->
                <!--自定义 start-->
            	<div class="tab_div hand_fill wd90 mA hide">
                	<div class="clearfix insure_list on">
                        <div class="fl wd80 item radius20 mB20 a-flipinX clearfix">
                            <label class="font14 cfff fl wd20 texL">车损险</label>
                            <div class="fr wd40 insure_r">
                                <input type="text" class="item_text fl mL font14 borN c8ab" value=""  readonly="readonly"/>
                            </div>
                        </div>
                        <!--<div class="ins_r fr texR">
                        	<span></span>
                        </div>-->
                    </div>
                    <div class="clearfix insure_list">
                        <div class="fl wd80 item radius20 mB20 a-flipinX clearfix">
                            <label class="font14 cfff fl wd20 texL">三者险</label>
                            <div class="fr wd40 insure_r">
                                <select class="add_sel fl mL font14 borN c8ab">
                                    <option>50万</option>
                                    <option>50万</option>
                                    <option>60万</option>
                                </select>
                            </div>
                        </div>
                        <div class="ins_r fr texR">
                        	<span></span>
                        </div>
                    </div>
                    <div class="clearfix insure_list on">
                        <div class="fl wd80 item radius20 mB20 a-flipinX clearfix">
                            <label class="font14 cfff fl wd20 texL">盗抢险</label>
                            <div class="fr wd40 insure_r" style="display:none;">
                                <select class="add_sel fl mL font14 borN c8ab">
                                    <option>50万</option>
                                    <option>50万</option>
                                    <option>60万</option>
                                </select>
                            </div>
                        </div>
                        <div class="ins_r fr texR">
                        	<span></span>
                        </div>
                    </div>
                    <div class="clearfix insure_list on">
                        <div class="fl wd80 item radius20 mB20 a-flipinX clearfix">
                            <label class="font14 cfff fl wd20 texL">自然险</label>
                            <div class="fr wd40 insure_r" style="display:none;">
                                <select class="add_sel fl mL font14 borN c8ab">
                                    <option>50万</option>
                                    <option>50万</option>
                                    <option>60万</option>
                                </select>
                            </div>
                        </div>
                        <div class="ins_r fr texR">
                        	<span></span>
                        </div>
                    </div>
                    <div class="clearfix insure_list on">
                        <div class="fl wd80 item radius20 mB20 a-flipinX clearfix">
                            <label class="font14 cfff fl wd20 texL">玻璃险</label>
                            <div class="fr wd40 insure_r" style="display:none;">
                                <select class="add_sel fl mL font14 borN c8ab">
                                    <option>50万</option>
                                    <option>50万</option>
                                    <option>60万</option>
                                </select>
                            </div>
                        </div>
                        <div class="ins_r fr texR">
                        	<span></span>
                        </div>
                    </div>
                    <div class="clearfix insure_list on">
                        <div class="fl wd80 item radius20 mB20 a-flipinX clearfix">
                            <label class="font14 cfff fl wd20 texL">涉水险</label>
                            <div class="fr wd40 insure_r" style="display:none;">
                                <select class="add_sel fl mL font14 borN c8ab">
                                    <option>50万</option>
                                    <option>50万</option>
                                    <option>60万</option>
                                </select>
                            </div>
                        </div>
                        <div class="ins_r fr texR">
                        	<span></span>
                        </div>
                    </div>
                    <div class="clearfix insure_list">
                        <div class="fl wd80 item radius20 mB20 a-flipinX clearfix">
                            <label class="font14 cfff fl wd20 texL">车上人员（司机）</label>
                            <div class="fr wd40 insure_r">
                                <select class="add_sel fl mL font14 borN c8ab">
                                    <option>1万</option>
                                    <option>2万</option>
                                    <option>3万</option>
                                </select>
                            </div>
                        </div>
                        <div class="ins_r fr texR">
                        	<span></span>
                        </div>
                    </div>
                    <div class="clearfix insure_list">
                        <div class="fl wd80 item radius20 mB20 a-flipinX clearfix">
                            <label class="font14 cfff fl wd20 texL">车上人员（乘客）</label>
                            <div class="fr wd40 insure_r">
                                <select class="add_sel fl mL font14 borN c8ab">
                                    <option>2万/座</option>
                                    <option>5万/座</option>
                                    <option>5万/座</option>
                                </select>
                            </div>
                        </div>
                        <div class="ins_r fr texR">
                        	<span></span>
                        </div>
                    </div>
                    <div class="texC mB10"><a class="btn home_btn mA cfff texC font15 a-bouncein borN" href="offer_det.php">立即报价</a></div>
                </div>
                <!--自定义 end-->
            </div>
        </div>
    </div>
</body>
<script type="text/javascript" src="js/common.js"></script>
</html>