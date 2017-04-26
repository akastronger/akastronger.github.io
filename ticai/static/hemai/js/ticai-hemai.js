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
        templateUrl: 'components/ngpopup/feng-xian.html'
    }
}).directive("xieyiPopup", function(){
    return {
        templateUrl: 'components/ngpopup/xie-yi.html'
    }
}).directive("wangdianPopup", function(){
    return {
        templateUrl: 'components/ngpopup/wang-dian.html',
        controller: 'cityCtrl'
    }
});