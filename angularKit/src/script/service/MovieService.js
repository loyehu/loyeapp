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