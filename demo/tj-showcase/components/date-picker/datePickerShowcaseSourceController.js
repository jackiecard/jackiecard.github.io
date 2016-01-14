angular.module('showcase.controllers').controller('datePickerShowcaseSourceController', ['$http', function($http) {
    
    var controller = this;
    
    this.onClickGetJs = function(){
       $http.get('components/date-picker/datePickerShowcaseController.js')
        .success(function(data){
            controller.source = data;
        });
    };
    
    this.onClickGetHtml = function(){
       $http.get('components/date-picker/date-picker-example.html')
        .success(function(data){
            controller.source = data;
        });
    };
    
    this.onClickGetJs();
}]);