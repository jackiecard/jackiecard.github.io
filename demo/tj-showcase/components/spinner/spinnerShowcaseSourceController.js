angular.module('showcase.controllers').controller('spinnerShowcaseSourceController', ['$http', function($http) {
    
    var controller = this;
    
    this.onClickGetJs = function(){
       $http.get('components/spinner/spinnerShowcaseController.js')
        .success(function(data){
            controller.source = data;
        });
    };
    
    this.onClickGetHtml = function(){
       $http.get('components/spinner/spinner-example.html')
        .success(function(data){
            controller.source = data;
        });
    };
    
    this.onClickGetJs();
}]);