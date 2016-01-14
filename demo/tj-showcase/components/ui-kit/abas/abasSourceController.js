angular.module('showcase.controllers').controller('abasSourceController', ['$http', function($http) {
    
    var controller = this;
    
    this.onClickGetHtml = function(){
       $http.get('components/ui-kit/abas/abas-example.html')
        .success(function(data){
            controller.source = data;
        });
    };

    this.onClickGetHtml();
}]);