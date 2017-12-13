
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


