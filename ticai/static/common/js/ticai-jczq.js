'use strict';

var app = angular.module("jczqApp", ["ngRoute"]);

app.controller("gameCtrl", function($scope, $http, $location){
    $http.get('data/game.json').success(function(data){
        $scope.data = data.data;
    });
    $scope.all = {};
    $scope.all.amount = 0;
    $scope.all.selection = {};
    $scope.selection_clean = [];

    $scope.selOk = function(){
        var temp = [];
        angular.forEach($scope.all.selection, function(value, key){
            if (value.items.length>0) {
                temp.push(value);
            }
        });
        $scope.selection_clean = temp;
        console.log('$scope.selection_clean', $scope.selection_clean);
    }
    $scope.doEmpty = function(){
        $location.url('/clear');
    }
});

app.controller("allWanfaCtrl", function($scope, $http){
    $http.get("data/shengpingfu.json").success(function(data){
        $scope.shengpingfu = data.shengpingfu;
    });
    $http.get("data/bifen.json").success(function(data){
        $scope.bifen = data.bifen;
    });
    $http.get("data/zongjingqiu.json").success(function(data){
        $scope.zongjingqiu = data.zongjingqiu;
    });
    $http.get("data/banquanchang.json").success(function(data){
        $scope.banquanchang = data.banquanchang;
    });

    $scope.len_items = 0;
    var game_dict = {};

    $scope.isInSelection = function(item){
        var inSelection = false;
        if(game_dict['items'] != undefined){
            if( game_dict.items.indexOf(item)>-1 ){
                return true;
            }
        }
        return inSelection;
    }
    $scope.itemClick = function(game_index, game, item, flag){
        if (!flag) {
            console.log(item);
            if (game_dict['game_index'] != undefined) {
                game_dict.items.push(item);
            } else {
                game_dict = {
                    "game_index": game_index,
                    "game": game,
                    "items": [item]
                }
            }
            $scope.all.amount++;
        }else{
            var index = game_dict.items.indexOf(item);
            game_dict.items.splice(index, 1);
            $scope.all.amount--;            
        }
        $scope.all.selection[game_index] = game_dict;
        console.log('$scope.all.selection', $scope.all.selection);
        $scope.len_items = game_dict.items.length;
        return !flag;
    }

});

app.directive('allWanfa', function() {
    return {
        templateUrl: 'views/all-wanfa.html',
        controller: 'allWanfaCtrl'
    };
});

app.config(["$routeProvider", function($routeProvider){
    $routeProvider.when('/', {
        templateUrl: 'views/jczq_view_index.html'
    }).when('/confirm', {
        templateUrl: 'views/jczq_view_confirm.html'
    })
    .otherwise('/');
}]);
