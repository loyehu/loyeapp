
var app = angular.module('loyeapp',[
    'ngRoute',
    'controllers',
    'services'
]);

// 注入子模块
angular.module('controllers',[]);
angular.module('services',[]);

app.config(['$routeProvider','$locationProvider',
    function ($routeProvider,$locationProvider){
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
            templateUrl: '/view/goodsList.html',
            controller: 'GoodsController'
        })
        .when('/movielist',{
            templateUrl: '/view/movieList.html',
            controller: 'MovieController'
        })
        //改成h5 的history 模式
        // 默认是hash 模式
       $locationProvider.html5Mode(true);
       
        // 需要在localhost下面运行


}])
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
    GoodsService.fetchGoodsList().then(function(data){
        console.log(data);
        $scope.goodsList = data.data.data;
    });

}]);
angular.module('controllers').controller('MovieController',[
    '$scope',
    '$route',
    '$routeParams',
    'MovieService',
    function(
        $scope,
        $route,
        $routeParams,
        MovieService
    ){
        MovieService.fetchMovieList().then(function(data){
            console.log(data);
            $scope.movieList = data.data.subjects;
        })
    }
])

angular.module('loyeapp').directive('headNav',[function(){
    return {
        templateUrl: '/view/common/head.html',
        restrict: 'A'
    }
}])

angular.module("loyeapp")
    .factory("GoodsService",["$http",function($http){
    return {
        fetchGoodsList: function(){
            return $http.get('https://easy-mock.com/mock/59664d4d58618039284c7710/example/goods/list').then(function(data){
                return data;
            })
        }
    }
}])



angular.module('loyeapp')
    .factory("MovieService",['$http',function($http){
        return {
            fetchMovieList: function(){
                return $http.get('https://easy-mock.com/mock/59664d4d58618039284c7710/example/movie').then(function(data){
                    return data;
                })
            }
        }
    }])