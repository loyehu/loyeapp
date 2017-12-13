
var app = angular.module('loyeapp',[
    'ngRoute',
    'controllers',
    'services'
]);

// 注入子模块
angular.module('controllers',[]);
angular.module('services',[]);

app.config(function ($routeProvider){
    $routeProvider.when('/',{
        template: '<h1>今天好冷哦！{{msg}}</h1>',
        controller: function($scope){
            $scope.msg = "是捏，就是好冷~";
        }
    })
    .when('/loye',{
        template: '<h1>This is loye {{infor}}</h1>',
        controller: function($scope){
            $scope.infor = "我是落叶~"
        }
    })
    .when('/goodslist',{
        templateUrl: './src/view/goodsList.html',
        controller: 'GoodsController'
    })


    // 需要在localhost下面运行


})
angular.module('controllers').controller('GoodsController',[
    '$scope',
    '$route',
    '$routeParams',
    'GoodsService',
    function(
        $scope,
        $route,
        $routeParams,
        GoodsService
    ){
    $scope.goodList = GoodsService.fetchGoodsList();

}]);

angular.module("loyeapp")
    .factory("GoodsService",["$http",function($http){
    return {
        fetchGoodsList: function(){
            $http.get('https://easy-mock.com/mock/59664d4d58618039284c7710/example/goods/list').then(function(data){
                return data;
            })
        }
    }
}])


