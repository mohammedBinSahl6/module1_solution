(function(){

    angular.module('LunchCheck',[])

    .controller('adding',LunchCheckController)

    LunchCheckController.$inject =['$scope'];

    function LunchCheckController($scope){
        $scope.foods = "";
        $scope.givemessage = function(foods){
            foods = $scope.foods
            
            var xfood=foods.split(",")
            var foodsl = xfood.length
            if (foodsl<=3 && foodsl!=0){return "Enjoy!"}
            else if(foodsl>3){return "Too much !"}
            else {return 'empty, put some data'}
        }
        }
    








})()