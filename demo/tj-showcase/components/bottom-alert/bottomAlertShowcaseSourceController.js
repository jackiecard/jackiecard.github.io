angular.module('showcase.controllers').controller('bottomAlertShowcaseSourceController', ['$http', function($http) {
    
    var controller = this;
    
    this.onClickGetJs = function(){
       $http.get('components/bottom-alert/bottomAlertShowcaseController.js')
        .success(function(data){
            controller.source = data;
        });
    };
    
    this.onClickGetHtml = function(){
       $http.get('components/bottom-alert/bottom-alert-example.html')
        .success(function(data){
            controller.source = data;
        });
    };
    
    this.onClickGetJs();
}]);