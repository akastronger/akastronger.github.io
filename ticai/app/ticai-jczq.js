'use strict';

var app = angular.module("jczqApp", ["ngRoute", "ngSanitize"]);

app.controller("gameCtrl", function($scope, $http, $location){
    $scope.all = {};
    $scope.all.battle_number = 0;
    $scope.all.amount = 0;
    $scope.all.selection = {};
    $scope.all.game_filter = [];
    $scope.all.deadline = '';
    $scope.selection_clean = [];

    // datetime_arr - string in array
    // datetime - example: '201608081016'
    // return - string: '2016-08-08 10:16'
    function calcDeadline(datetime_arr){
        var arr = datetime_arr.sort();
        var a0 = arr[0];
        var deadline = [a0.substring(0, 4), a0.substring(4, 6), a0.substring(6, 8)].join('-');
        deadline += ' ' + [a0.substring(8, 10), a0.substring(10, 12)].join(':');

        return deadline;
    }
    $scope.selOk = function(){
        var temp = [],
            datetime_arr = [];
        angular.forEach($scope.all.selection, function(value, key){
            if (value.items.length>0) {
                temp.push(value);

                // deadline, datetime_arr
                var datetime = value.game.date + value.game.deadline.replace(':', '');
                datetime_arr.push(datetime);
            }
        });
        $scope.selection_clean = temp.sort().reverse();
        console.log('$scope.selection_clean', $scope.selection_clean);
        // deadline
        $scope.all.deadline = calcDeadline(datetime_arr);
    }
    $scope.doEmpty = function(){
        $location.url('/clear');
    }
    $scope.isInGameFilter = function(txt){
        var index = $scope.all.game_filter.indexOf(txt);
        if(index>-1){
            return true;
        }else{
            return false;
        }
    }
    function initGameFilter(){
        $http.get('data/game.json').success(function(data){
            $scope.data = data.data;
            
            angular.forEach($scope.data, function(obj, index){
                angular.forEach(obj.games, function(elem, j){
                    $scope.all.game_filter.push(elem.type);
                });                
            });
        });
    }
    initGameFilter();

    // @gameItemsArr - array
    // gameItem - obj {type: "客胜", point: "7.55", sbname: "胜平负"}
    // return - string
    $scope.formatResult = function(gameItemsArr){
        var con1 = [],
            con2 = [];
        var html = '';
        angular.forEach(gameItemsArr, function(value, index){
            var i = con1.indexOf(value.sbname);
            if(i>-1){
                con2[i].push(value.type);
            }else{
                con1.push(value.sbname);
                con2.push([value.type]);
            }
        });
        angular.forEach(con1, function(sbname, index){
            html += ['<span>[', ']</span>'].join(sbname);
            angular.forEach(con2[index], function(type, j){
                html += ['<span class="red-text pdL5">', '</span>'].join(type);;  
            });
            html += '<br>';
        });
        return html;
    }
});

app.directive('checkable', function() {
    return {
        link: function(scope, element, attrs){
            element.on('click', function(){
                element.toggleClass('bg-reverse');
            });
        }
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
