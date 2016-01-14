'use strict';

angular.module("showcase.directives")

.directive('highlight', function($interpolate, $window){
    return {
    restrict: 'EA',
    scope: true,
    compile: function (tElem, tAttrs) {
      var interpolateFn = $interpolate(tElem.html(), true);
      tElem.html(''); // stop automatic intepolation

      return function(scope, elem, attrs){
        scope.$watch(interpolateFn, function (value) {
          elem.html(hljs.highlight('js',value).value);
        });
      }
    }
  };
})

 .directive('paginationInfo', function() {
   return {
      restrict: 'E',
            scope: { pagina: '=', limite: '=', total: '=' },
            template: 'Exibindo registros {{pagina + (limite * pagina - 10) - (pagina - 1)}} -' +
     '{{(limite * pagina > total ? total : limite * pagina)}} de {{total}}'
       };
})

.directive('titulo', function() {
	  return {
		  	restrict : 'E',
		  	replace: true,
		  	link: function(scope, element, attr){
		  		var text = element[0].innerHTML;
		  		element.text("").append('<h3 class="titulo">' + text + '</h3>');
		    }
      };
})

.directive('subtitulo', function() {
	  return {
		  	restrict : 'E',
		  	replace: true,
		  	link: function(scope, element, attributes){
		  		var text = element[0].innerHTML;
		  		
		  		element.text("").append('<h4 class="subtitulo">' + text + '</h4>');
		    }
      };
})

.directive('sourceDescricao', function() {
	  return {
		  	restrict : 'E',
		  	replace: true,
		  	link: function(scope, element, attributes){
		  		var text = element[0].innerHTML;
		  		
		  		var classes = "";
				if(attributes.class != undefined){
				   var classes = attributes.class;
				}
		  		
		  		element.html("<h5 class='source " + classes + "'>" + text + "</h5>");
		  		
		  		element.children().unwrap();
		    }
      };
})

.directive('icon', function() {
	  return {
		  	restrict : 'E',
		  	replace: true,
		  	link: function(scope, element, attributes){
		  		
		  		var id = "";
				if(attributes.id != undefined){
					var id = attributes.id;
				}
				console.log(id);
				var classes = "";
				if(attributes.class != undefined){
				   var classes = attributes.class;
				}
				
			  	element.html('<span class="glyphicon glyphicon-' + id + ' ' + classes + '"></span>');
		  		element.children().unwrap();
		    }
      };
})

;
