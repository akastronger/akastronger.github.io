
app.controller('gameFilterCtrl', function($scope, $http){
    var vm = $scope.vm = {};
    vm.selection = $scope.all.game_filter;

    $http.get("data/game/gameFilter.json").success(function(data){
        vm.types = data.types; 
    });
    vm.selectAll = function(){
        vm.selection = [];
        angular.forEach(vm.types, function(elem, index){
            vm.selection.push(elem.type.name);
        });
        console.log(vm.selection);
    }
    vm.isInSelection = function(txt){
        var result = false;
        if(vm.selection.indexOf(txt)>-1) result =  true;
        return result;
    }
    vm.check = function(txt){
        var index = vm.selection.indexOf(txt);
        if(index>-1){
            vm.selection.splice(index, 1);
        }else{
            vm.selection.push(txt);
        }
        console.log(vm.selection);
    }
    vm.selectReverse = function(){
        var temp = vm.selection;
        var len = temp.length;
        angular.forEach(vm.types, function(obj, index){
            if(temp.indexOf(obj.type.name) == -1){
                temp.push(obj.type.name);
            }
        });
        temp.splice(0, len);
        vm.selection = temp;
    }
    vm.selectSpec = function(){
        var temp = [];
        angular.forEach(vm.types, function(obj, index){
            if(obj.type.isWuda){
                temp.push(obj.type.name);
            }
        });
        vm.selection = temp;
    }
    vm.doFilter = function(){
        console.log('vm.selection', vm.selection);
        $scope.all.game_filter = vm.selection;
    }
});

app.directive('gameFilter', function() {
    return {
        templateUrl: 'components/jczq/game-filter.html'
    };
});