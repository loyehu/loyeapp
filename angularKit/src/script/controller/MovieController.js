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