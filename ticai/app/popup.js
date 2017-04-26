app.controller("popupCtrl", ["$scope", "$http", function($scope, $http){
    $scope.popup = {
        showXieyi: false,
        showFengxian: false,
        showWangdian: false
    }
    $http.get('data/city/city.min.json').success(function(data){
        $scope.city_list = data;
    });
}]);

app.directive("fengXian", function(){
    return {
        templateUrl: 'components/feng-xian.html',
        controller: 'popupCtrl'
    }
}).directive("xieYi", function(){
    return {
        templateUrl: 'components/xie-yi.html',
        controller: 'popupCtrl'
    }
}).directive("wangDian", function(){
    return {
        templateUrl: 'components/wang-dian.html',
        controller: 'popupCtrl'
    }
});