
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
        templateUrl: 'view/goodsList.html',
        controller: 'GoodsController'
    })


    // 需要在localhost下面运行


})