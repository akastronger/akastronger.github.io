app = angular.module("dltApp", ["ngRoute"]);
app.controller("tcSelectCtrl", ["$location", "$scope", function($location, $scope){
    $scope.front = {numbers: []},
    $scope.back = {numbers: []};
    $scope.selection = {"front_number": [], "back_number": [], "amount": 0};
    $scope.selection_arr = [];
    $scope.amount = 0;
    $scope.totalAmount = 0;
    $scope.popup = {
        showXieyi: false,
        showFengxian: false,
        showWangdian: false
    }

    $scope.dantuo = {
        "selection": {
            "front_dan": [],
            "front_tuo": [],
            "back_dan": [],
            "back_tuo": [],
            "amount": 0
        }
    }
    for(var i=0; i<35; i++){
        if(i<9){
            $scope.front.numbers.push('0'+(i+1));
        }else{
            $scope.front.numbers.push(''+(i+1));
        }
    }
    for(var i=0; i<12; i++){
        if(i<9){
            $scope.back.numbers.push('0'+(i+1));
        }else{
            $scope.back.numbers.push(''+(i+1));
        }
    }
    
	var factorial = function(n){
		if (n<=1) return 1;
		var result = n;
		for(var i=n; i>1;i--){
			result = result * (i-1);
		}
		return result;
	};
    function calcAmount(){
        var flen = $scope.selection.front_number.length,
            blen = $scope.selection.back_number.length;
        if (flen<5 || blen<2) {
            $scope.amount = 0;            
        }else if (flen>4 && blen>1) {
            var f = Math.round(factorial(flen)/(factorial(flen-5) * factorial(5)));
            var b = Math.round(factorial(blen)/(factorial(blen-2) * factorial(2)));
            $scope.amount = f * b;
        }
    }
    // Number click
    $scope.addToSelection = function(pos, num){
        if(pos.substr(0, 1) == 'f'){
            var index = $scope.selection.front_number.indexOf(num);
            if(index>-1){
                $scope.selection.front_number.splice(index, 1);
            }else $scope.selection.front_number.push(num);
        }else if(pos.substr(0, 1) == 'b'){
            var index = $scope.selection.back_number.indexOf(num);
            if(index>-1){
                $scope.selection.back_number.splice(index, 1);
            }else{
                $scope.selection.back_number.push(num);
            }
        }

        calcAmount();
    }
    $scope.isInSelection = function(pos, num){
        if(pos.substr(0, 1) == 'f'){
            var index = $scope.selection.front_number.indexOf(num);
            if(index > -1) return true;
            else return false;
        }else if(pos.substr(0, 1) == 'b'){
            var index = $scope.selection.back_number.indexOf(num);
            if(index > -1) return true;
            else return false;            
        }
    }
    $scope.emptySelection = function(){
        $scope.selection = {"front_number": [], "back_number": []};
        $scope.amount = 0;
    }
    // Not in use
    function reCalcTotalAmount(){
        $scope.totalAmount = 0;
        angular.forEach($scope.selection_arr, function(selection){
            $scope.totalAmount += selection.amount;
        })
    }
    $scope.selectOk = function(){
        if ($scope.amount == 0) {
            $scope.emptySelection;
            $scope.addRandomOne();
            return;
        }else{
            // 
            $scope.selection.amount = $scope.amount;
            if ($scope.amount>300000) {
                alert('您好，单个方案最大金额为￥600,000.00元！');
                return;
            }

            $scope.totalAmount += $scope.amount;
            $scope.selection_arr.push({"selection": $scope.selection, "is_putong": true});
            
            $location.url('/dlt_confirm');
        }
    }

    function rand(min, max){
        var num = min + Math.round(Math.random() * (max-min));
        numstr = '' + num;
        if(numstr.length<2) numstr = '0'+numstr;
        return numstr; //string
    }
    $scope.addRandomOne = function(){
        var flen = 5, blen = 2;
        var front_numbers = [],
            back_numbers = [];
        $scope.emptySelection();
        // gen front random numbers
        for(var i=0; i<flen; i++){
            var num = rand(1, 35);
            while(front_numbers.indexOf(num) > -1){
                var num = rand(1, 35);
            }            
            front_numbers.push(num);
        }
        for(var i=0; i<blen; i++){
            var num = rand(1, 12);
            while (back_numbers.indexOf(num) > -1) {
                var num = rand(1, 12);
            }
            back_numbers.push(num);
        }
        console.log(front_numbers, back_numbers);
        $scope.selection.front_number = $scope.selection.front_number.concat(front_numbers);
        $scope.selection.back_number = $scope.selection.back_number.concat(back_numbers);
        $scope.amount++;
    }
    $scope.removeItemOne = function(item){
        var index = $scope.selection_arr.indexOf(item);
        if (index > -1) { 
            $scope.selection_arr.splice(index, 1);
            // important
            $scope.totalAmount -= item.selection.amount;
        }
    }
    $scope.emptySelectionArr = function(){
        if(confirm("确定要全部清空？")){
            $scope.selection_arr = [];
            $scope.totalAmount = 0;
        }
    }

    // DanTuo
    $scope.addToDantuo = function(pos, dan_or_tuo, num){
        var dantuo_selection = $scope.dantuo.selection;
        if (pos.substr(0, 1) == 'f') {
            if (dan_or_tuo.substr(0, 1) == 'd') {
                // 如果tuo区有，tuo区必须丢掉
                var index = dantuo_selection.front_tuo.indexOf(num);
                if(index>-1){
                    dantuo_selection.front_tuo.splice(index, 1);
                }
                var index = dantuo_selection.front_dan.indexOf(num);
                if (index>-1) {
                    dantuo_selection.front_dan.splice(index, 1);
                }else{
                    // 胆码-前区最多选4个
                    if(dantuo_selection.front_dan.length>=4) return;
                    dantuo_selection.front_dan.push(num);
                }
            }else if(dan_or_tuo.substr(0, 1) == 't'){
                var index = dantuo_selection.front_dan.indexOf(num);
                if(index>-1){
                    dantuo_selection.front_dan.splice(index, 1);
                }
                var index = dantuo_selection.front_tuo.indexOf(num);
                if(index>-1){
                    dantuo_selection.front_tuo.splice(index, 1);
                }else{
                    dantuo_selection.front_tuo.push(num);
                }
            }
        }else if(pos.substr(0, 1) == 'b'){
            if(dan_or_tuo.substr(0, 1) == 'd'){
                var index = dantuo_selection.back_tuo.indexOf(num);
                if(index>-1){
                    dantuo_selection.back_tuo.splice(index, 1);
                }
                // add or delete
                var index = dantuo_selection.back_dan.indexOf(num);
                if(index>-1){
                    dantuo_selection.back_dan.splice(index, 1);
                }else{
                    // 胆码-后区最多选1个
                    if(dantuo_selection.back_dan.length>=1) return;
                    dantuo_selection.back_dan.push(num);
                }
            }else if(dan_or_tuo.substr(0, 1) == 't'){
                var index = dantuo_selection.back_dan.indexOf(num);
                if(index>-1){
                    dantuo_selection.back_dan.splice(index, 1);
                }
                var index = dantuo_selection.back_tuo.indexOf(num);
                if(index>-1){
                    dantuo_selection.back_tuo.splice(index, 1);
                }else{
                    dantuo_selection.back_tuo.push(num);
                }
            }
        }
        $scope.dantuo.selection.amount = $scope.calcDantuoAmount();
    }
    $scope.isInDantuo = function(pos, dan_or_tuo, num){
        var selection = $scope.dantuo.selection;
        if (pos.substr(0, 1) == 'f') {
            if (dan_or_tuo.substr(0, 1) == 'd') {
                if (selection.front_dan.indexOf(num)>-1) {
                    return true;
                }
            }else if(dan_or_tuo.substr(0, 1) == 't'){
                if (selection.front_tuo.indexOf(num)>-1) {
                    return true;
                }
            }
        }else if(pos.substr(0, 1) == 'b'){
            if (dan_or_tuo.substr(0, 1) == 'd') {
                if(selection.back_dan.indexOf(num)>-1){
                    return true;
                }
            }else if(dan_or_tuo.substr(0, 1) == 't'){
                if(selection.back_tuo.indexOf(num)>-1){
                    return true;
                }
            }
        }

        return false;
    }
    $scope.calcDantuoAmount = function(){
        var amount = 1;
        var front_dan = $scope.dantuo.selection.front_dan.length,
            front_tuo = $scope.dantuo.selection.front_tuo.length,
            back_dan = $scope.dantuo.selection.back_dan.length,
            back_tuo = $scope.dantuo.selection.back_tuo.length;
        if(front_dan<1 || front_tuo<2 || back_tuo<2) return 0;
        if((front_dan+front_tuo)<6) return 0; //<6? correct!

        var m = 5 - front_dan;
        amount = Math.round( factorial(front_tuo)/(factorial(front_tuo-m) * factorial(m)) );
        var n = 2 - back_dan;
        amount = amount * Math.round( factorial(back_tuo)/(factorial(back_tuo-n) * factorial(n)) );
        return amount;
    }
    $scope.goDantuoConfirm = function(){
        if($scope.dantuo.selection.amount<1) return;
        console.log('$scope.selection_arr', $scope.selection_arr);
        console.log('fffff', $scope.selection_arr.indexOf({"selection": $scope.dantuo, "is_putong": false}));

        $scope.totalAmount += $scope.dantuo.selection.amount;
        $scope.selection_arr.push({"selection": $scope.dantuo, "is_putong": false})
        $location.url('/dlt_confirm');
    }
    $scope.removeDantuoItemOne = function(item){
        var index = $scope.selection_arr.indexOf(item);
        if (index > -1) { 
            $scope.selection_arr.splice(index, 1);
            // important
            $scope.totalAmount -= item.selection.selection.amount;
        }
    }
    $scope.emptyDantuo = function(){
        $scope.dantuo = {
            "selection": {
                "front_dan": [],
                "front_tuo": [],
                "back_dan": [],
                "back_tuo": [],
                "amount": 0
            }
        }
    }
}]);

app.controller("cityCtrl", ["$scope", "$http", function($scope, $http){
    $http.get('data/city/city.min.json').success(function(data){
        $scope.city_list = data;
    });
}]);

app.directive("fengxianPopup", function(){
    return {
        templateUrl: 'popup/fengxian.html'
    }
}).directive("xieyiPopup", function(){
    return {
        templateUrl: 'popup/xieyi.html'
    }
}).directive("wangdianPopup", function(){
    return {
        templateUrl: 'popup/wangdian_ajax.html',
        controller: 'cityCtrl'
    }
});

app.directive("tcPutongNumberPool", function(){
    return {
        templateUrl: 'components/dlt/tc-putong-number-pool.html'
    }
}).directive("tcDantuoNumberPool", function(){
    return {
        templateUrl: 'components/dlt/tc-dantuo-number-pool.html'
    }
});

app.config(["$routeProvider", function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'popup/dlt_view_index.html'
    })
    .when('/dlt_confirm', {
        templateUrl: 'popup/dlt_view_confirm.html'
    })
    .otherwise('/');
}]);