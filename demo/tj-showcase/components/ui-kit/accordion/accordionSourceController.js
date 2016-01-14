angular.module('showcase.controllers').controller('accordionSourceController', ['$http', function($http) {
    
    var controller = this;
    
    this.onClickGetHtml = function(){
       $http.get('components/ui-kit/accordion/accordion-example.html')
        .success(function(data){
            controller.source = data;
        });
    };

    this.onClickGetHtml();
}]);