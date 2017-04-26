app.controller("allWanfaCtrl", function($scope, $http){
    $http.get("data/game/shengpingfu.json").success(function(data){
        $scope.shengpingfu = data.shengpingfu;
    });
    $http.get("data/game/bifen.json").success(function(data){
        $scope.bifen = data.bifen;
    });
    $http.get("data/game/zongjingqiu.json").success(function(data){
        $scope.zongjingqiu = data.zongjingqiu;
    });
    $http.get("data/game/banquanchang.json").success(function(data){
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
        $scope.all.battle_number = calcBattleNumber($scope.all.selection);
        $scope.len_items = game_dict.items.length;
        return !flag;
    }
    var calcBattleNumber = function(obj){
        var num = 0;
        angular.forEach(obj, function(value, key){
        if(value.items.length){
            num++;
        }
        })
        return num;
    }
    
});

app.directive('allWanfa', function() {
    return {
        templateUrl: 'components/jczq/all-wan-fa.html',
        controller: 'allWanfaCtrl'
    };
});