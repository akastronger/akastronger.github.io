var app = angular.module("jclqApp", ["ngRoute"]);

app.controller("gameCtrl", function($scope, $http){
    $http.get('data/game.json').success(function(data){
        $scope.data = data.data;
    });
    $scope.modal_hidden = true;
    $scope.showModal = function(player1, player2){
        $scope.player1 = player1;
        $scope.player2 = player2;
        $scope.modal_hidden = false;
    }
    $scope.closeModal = function(){
        $scope.modal_hidden = true;
    }
})

app.directive('toggleClass', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.bind('click', function() {
                element.toggleClass(attrs.toggleClass);
            });
        }
    };
});

app.config(["$routeProvider", function($routeProvider){
    $routeProvider.when('/all-wanfa', {
        templateUrl: 'popup/all-wanfa.html'
    })
}]);