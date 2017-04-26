app = angular.module('tcAnalysisApp', []);

app.controller('mainCtrl', ['$scope', function($scope){
    $scope.activeCMD = {
        "shuju": true,
        "baijia": false,
        "yapan": false
    }
    $scope.tabSwitch = function(tab){
        switch (tab) {
            case 'shuju':
                $scope.activeCMD.shuju = true;
                $scope.activeCMD.baijia = false;
                $scope.activeCMD.yapan = false;
                break;
            case 'baijia':
                $scope.activeCMD.shuju = false;
                $scope.activeCMD.baijia = true;
                $scope.activeCMD.yapan = false;
                break;
            case 'yapan':
                $scope.activeCMD.shuju = false;
                $scope.activeCMD.baijia = false;
                $scope.activeCMD.yapan = true;
                break; 
            default:
                break;
        }
    }
}]);

app.directive('shuJuFengXi', function(){
    return {
        templateUrl: 'components/jczq/shu-ju-feng-xi.html'
    } 
}).directive('baiJiaPeiOu', function(){
    return {
        templateUrl: 'components/jczq/bai-jia-pei-ou.html'
    } 
}).directive('yaPanDuiBi', function(){
    return {
        templateUrl: 'components/jczq/ya-pan-dui-bi.html'
    } 
});