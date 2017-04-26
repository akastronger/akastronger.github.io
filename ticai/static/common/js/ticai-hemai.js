app = angular.module("hemaiApp", []);

app.controller("popupCtrl", ["$location", "$scope", function($location, $scope){
    $scope.popup = {
        showXieyi: false,
        showFengxian: false,
        showWangdian: false
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