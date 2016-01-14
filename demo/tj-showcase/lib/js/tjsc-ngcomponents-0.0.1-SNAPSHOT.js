//modulo que carrega as dependencias dos templates e todos os componentes

angular.module('tjsc.util',[]);

angular.module('tjsc.widgets.bottomAlert',[]);
angular.module('tjsc.widgets.cabecalho',[]);
angular.module('tjsc.widgets.chosen',[]);
angular.module('tjsc.widgets.datepicker',[]);
angular.module('tjsc.widgets.dialog',[]);
angular.module('tjsc.widgets.dropdown',[]);
angular.module('tjsc.widgets.inputs',[]);
angular.module('tjsc.widgets.loadingBar',[]);  
angular.module('tjsc.widgets.loadingBarInterceptor',[]);  

angular.module("template/cabecalho.html", []);

//modulo que carrega as dependencias dos templates
angular.module("tjsc.widgets.templates", 
				["template/cabecalho.html"]);

angular.module("tjsc.components", 
				[
				 "tjsc.util",
				 "tjsc.widgets.templates", 
				 
				 "tjsc.widgets.bottomAlert",
				 "tjsc.widgets.chosen",
				 "tjsc.widgets.cabecalho",
				 "tjsc.widgets.datepicker",
				 "tjsc.widgets.dialog",
				 
				 "tjsc.widgets.dropdown",
				 "tjsc.widgets.inputs",
				 
				 "tjsc.widgets.loadingBar",
				 "tjsc.widgets.loadingBarInterceptor"
				 
				 ]
);

angular.module('tjsc.fw3',[
                           	"tjsc.components", 
                           	
                           	//angular
                           	"ngRoute", 
                           	"ngSanitize", 
                           	"ngAnimate",
                           
                           	//angular-ui-bootstrap
                           	"ui.bootstrap",
                           	
                           	//angular-validation
                           	"validation",
                           	"validation.rule",
                           
                           	//angular-strap
                           	"mgcrea.ngStrap.tooltip",
                           	"mgcrea.ngStrap.helpers.dateParser",
                           	"mgcrea.ngStrap.datepicker",
                           	"mgcrea.ngStrap.timepicker",
                           	
                           	//ui-utils
                           	"ui.mask"
                           	
                           ]);


angular.module("tjsc.util")

.directive( 'irPara', function ( $location ) {
  return function ( scope, element, attrs ) {
    var path;

    attrs.$observe( 'irPara', function (val) {
      path = val;
    });

    element.bind( 'click', function () {
      scope.$apply( function () {
        $location.path( path );
      });
    });
  };
});
'use strict';

var services = angular.module('tjsc.widgets.bottomAlert');

services.factory('bottomAlert', [
 function () {
     var show;
     return toastr.options = {
         closeButton: !0,
         positionClass: "toast-bottom-right",
         timeOut: "3000"
     }, show = function (message, type) {
         return toastr[type](message)
     }, {
         info: function (message) {
             show(message, "info")
         },
         warning: function (message) {
             show(message, "warning")
         },
         success: function (message) {
             show(message, "success")
         },
         error: function (message) {
             show(message, "error")
             }
         }
     }
 ]);


angular.module("tjsc.widgets.chosen")

.directive('chosen',function(){
    return {
        restrict:'A',
        require: 'ngModel',
        scope: {
            chosenAdd: '=',
            chosenAddView: '=',
            chosenAddFunction: '&',
            chosenAddArgs: '&',
            maxSelect: '=',
        },
        link: function(scope, element, attrs) {
            scope.list = attrs['chosen'];

            scope.element = element;

            scope.$watchCollection('[list, element.context.length]', function(){
                element.trigger('liszt:updated');
                element.trigger('chosen:updated');
            });

            
            var options = {};
            if(!angular.isUndefined(scope.maxSelect)){
            	options = {
                    max_selected_options: scope.maxSelect,
                    search_contains: true,
                    no_results_text: 'Sem resultados para',
                    placeholder_text_single: 'Selecione uma opção',
                    placeholder_text_multiple: 'Selecione as opções',
                    add_show: scope.chosenAdd,
                    add_button: '<button class="chosen-add-button pure-button botao-verde"></button>',
                    add_function: scope.chosenAddFunction,
                    add_args: scope.chosenAddArgs,
            	};
            }else{
            	options = {
                    search_contains: true,
                    no_results_text: 'Sem resultados para',
                    placeholder_text_single: 'Selecione uma opção',
                    placeholder_text_multiple: 'Selecione as opções',
                    add_show: scope.chosenAdd,
                    add_button: '<button class="chosen-add-button pure-button botao-verde"></button>',
                    add_function: scope.chosenAddFunction,
                    add_args: scope.chosenAddArgs,
            	};
            };
            
            scope.element.chosen(options);
            scope.element.data('chosen').allow_single_deselect = true;
            
        }
    }
});


angular.module("tjsc.widgets.datepicker")

.directive('tjDatepicker', function ($parse) {
    return function (scope, element, attrs, controller) {
        var ngModel = $parse(attrs.ngModel);
        $(function(){
        	element.attr('type', 'text');
            element.datepicker({
                inline: true,
                showOtherMonths: true,
                selectOtherMonths: true,
                showOn: "focus",
                buttonImage: "//template.tjsc.jus.br/fw3/0.0.1/img/calendar2.png",
                buttonImageOnly: false,
                showAnim: "slideDown",
                dateFormat: 'dd/mm/yy',
                onSelect:function (dateText, inst) {
                    scope.$apply(function(scope){
                        // Change binded variable
                        ngModel.assign(scope, dateText);
                    });
               }
            });
        });
    }
})


;

angular.module("tjsc.widgets.dropdown")

.directive('dropdown', ['$http', 'dialog', function($http, dialog) {
    return {
        template: function(element, attrs) { 
            if ( attrs.tipo == 'comarca' ){
                return '<select chosen ng-model="ngModel" ng-options="c.nmcomarca for c in lista"></select>';
            } 
            if ( attrs.tipo == 'pais' ){
                return '<select chosen ng-model="ngModel" ng-options="p.nmpais for p in lista"></select>';
            } 
            if ( attrs.tipo == 'uf' ){
                return '<select chosen ng-model="ngModel" ng-options="e.cdestado as e.nmestado for e in lista"></select>';
            }
            if ( attrs.tipo == 'municipios' ){
                return '<select chosen ng-model="ngModel" ng-options="m.cdmunicipio as m.nmmunicipio for m in lista"></select>';
            }
            return '<select chosen ng-model="ngModel" ng-options="c for c in lista"></select>';
        },
        restrict: 'E',
        require: 'ngModel',
        scope: {
            tipo: '=',
            ngModel: '=',
            filtro: '=filtro'
        },
        link:function(scope,elem,attrs){   
            
            var getData = function(){
                // Comarca
                if ( attrs.tipo == 'comarca' ){
                    $http.get('http://jboss-dev:8080/tjsc-core/rest/comarca')
                        .success(function(data, status, headers, config) {
                        scope.lista = data;
                    });
                }

                // Pais
                if ( attrs.tipo == 'pais' ){
                    $http.get('http://jboss-dev:8080/tjsc-core/rest/pais')
                         .success(function(data, status, headers, config) {
                         scope.lista = data;
                    });
                }

                // UF
                if ( attrs.tipo == 'uf' ){
                    if(scope.filtro != null){
                        $http.get('http://jboss-dev:8080/tjsc-core/rest/uf/' + scope.filtro)
                            .success(function(data, status, headers, config) {
                            scope.lista = data;
                        });
                    }
                    else{
                        scope.lista = [];
                    }
                    
                }

                // Municípios
                if ( attrs.tipo == 'municipios' ){
                    if(scope.filtro && scope.filtro != ""){
                        $http.get('http://jboss-dev:8080/tjsc-core/rest/municipio/' + scope.filtro)
                            .success(function(data, status, headers, config) {
                            scope.lista = data;
                        });
                    }
                    else{
                        scope.lista = [];
                    }
                }
            }
            
            scope.$watch('filtro', function (value) {
                getData();
            });
                         
            getData();
        }
    };
}]);

angular.module("tjsc.widgets.inputs")

.directive('cpf', function () {
	return {
	    restrict: 'A',
	    replace: true,
	    transclude: true,
        require: 'ngModel',
	    template: function ($element, $attr) {
	      return '<input ng-transclude validator="cpf" ui-mask="999.999.999-99" />';
	    }
	  };
})

.directive('telefone', function () {
	return {
	    restrict: 'A',
	    replace: true,
	    transclude: true,
	    template: function ($element, $attr) {
	      return '<input ng-transclude validator="telefone" ui-mask="(99)9999-9999" />';
	    }
	  };
})

.directive('cnpj', function () {
	return {
	    restrict: 'A',
	    replace: true,
	    transclude: true,
	    template: function ($element, $attr) {
	      return '<input ng-transclude validator="cnpj" ui-mask="99.999.999/9999-99" />';
	    }
	  };
})

.directive('cep', function () {
	return {
	    restrict: 'A',
	    replace: true,
	    transclude: true,
	    template: function ($element, $attr) {
	      return '<input ng-transclude validator="cep" ui-mask="99999-999" />';
	    }
	  };
})

.directive('emailTjsc', function () {
	return {
	    restrict: 'A',
	    replace: true,
	    transclude: true,
	    template: function ($element, $attr) {
	      return '<input ng-transclude validator="email" placeholder="@"/>';
	    }
	  };
})

.directive('numeroProcesso', function () {
	return {
	    restrict: 'A',
	    replace: true,
	    transclude: true,
	    template: function ($element, $attr) {
	      return '<input ng-transclude ui-mask="9999999-99.9999.999.9999"/>';
	    }
	  };
});

/*
 * angular-loading-bar
 *
 * intercepts XHR requests and creates a loading bar.
 * Based on the excellent nprogress work by rstacruz (more info in readme)
 *
 * (c) 2013 Wes Cruver
 * License: MIT
 */


(function() {

'use strict';

// Alias the loading bar for various backwards compatibilities since the project has matured:
//angular.module('tjsc-loading-bar', ['tjsc.widgets.loadingBarInterceptor']);

/**
 * loadingBarInterceptor service
 *
 * Registers itself as an Angular interceptor and listens for XHR requests.
 */
angular.module('tjsc.widgets.loadingBarInterceptor', ['tjsc.widgets.loadingBar'])
  .config(['$httpProvider', function ($httpProvider) {

    var interceptor = ['$q', '$cacheFactory', '$timeout', '$rootScope', '$log', 'cfpLoadingBar', function ($q, $cacheFactory, $timeout, $rootScope, $log, cfpLoadingBar) {

      /**
       * The total number of requests made
       */
      var reqsTotal = 0;

      /**
       * The number of requests completed (either successfully or not)
       */
      var reqsCompleted = 0;

      /**
       * The amount of time spent fetching before showing the loading bar
       */
      var latencyThreshold = cfpLoadingBar.latencyThreshold;

      /**
       * $timeout handle for latencyThreshold
       */
      var startTimeout;


      /**
       * calls cfpLoadingBar.complete() which removes the
       * loading bar from the DOM.
       */
      function setComplete() {
        $timeout.cancel(startTimeout);
        cfpLoadingBar.complete();
        reqsCompleted = 0;
        reqsTotal = 0;
      }

      /**
       * Determine if the response has already been cached
       * @param  {Object}  config the config option from the request
       * @return {Boolean} retrns true if cached, otherwise false
       */
      function isCached(config) {
        var cache;
        var defaultCache = $cacheFactory.get('$http');
        var defaults = $httpProvider.defaults;

        // Choose the proper cache source. Borrowed from angular: $http service
        if ((config.cache || defaults.cache) && config.cache !== false &&
          (config.method === 'GET' || config.method === 'JSONP')) {
            cache = angular.isObject(config.cache) ? config.cache
              : angular.isObject(defaults.cache) ? defaults.cache
              : defaultCache;
        }

        var cached = cache !== undefined ?
          cache.get(config.url) !== undefined : false;

        if (config.cached !== undefined && cached !== config.cached) {
          return config.cached;
        }
        config.cached = cached;
        return cached;
      }


      return {
        'request': function(config) {
          // Check to make sure this request hasn't already been cached and that
          // the requester didn't explicitly ask us to ignore this request:
          if (!config.ignoreLoadingBar && !isCached(config)) {
            $rootScope.$broadcast('cfpLoadingBar:loading', {url: config.url});
            if (reqsTotal === 0) {
              startTimeout = $timeout(function() {
                cfpLoadingBar.start();
              }, latencyThreshold);
            }
            reqsTotal++;
            cfpLoadingBar.set(reqsCompleted / reqsTotal);
          }
          return config;
        },

        'response': function(response) {
          if (!response || !response.config) {
            $log.error('Broken interceptor detected: Config object not supplied in response:\n https://github.com/chieffancypants/angular-loading-bar/pull/50');
            return response;
          }

          if (!response.config.ignoreLoadingBar && !isCached(response.config)) {
            reqsCompleted++;
            $rootScope.$broadcast('cfpLoadingBar:loaded', {url: response.config.url, result: response});
            if (reqsCompleted >= reqsTotal) {
              setComplete();
            } else {
              cfpLoadingBar.set(reqsCompleted / reqsTotal);
            }
          }
          return response;
        },

        'responseError': function(rejection) {
          if (!rejection || !rejection.config) {
            $log.error('Broken interceptor detected: Config object not supplied in rejection:\n https://github.com/chieffancypants/angular-loading-bar/pull/50');
            return $q.reject(rejection);
          }

          if (!rejection.config.ignoreLoadingBar && !isCached(rejection.config)) {
            reqsCompleted++;
            $rootScope.$broadcast('cfpLoadingBar:loaded', {url: rejection.config.url, result: rejection});
            if (reqsCompleted >= reqsTotal) {
              setComplete();
            } else {
              cfpLoadingBar.set(reqsCompleted / reqsTotal);
            }
          }
          return $q.reject(rejection);
        }
      };
    }];

    $httpProvider.interceptors.push(interceptor);
  }]);


/**
 * Loading Bar
 *
 * This service handles adding and removing the actual element in the DOM.
 * Generally, best practices for DOM manipulation is to take place in a
 * directive, but because the element itself is injected in the DOM only upon
 * XHR requests, and it's likely needed on every view, the best option is to
 * use a service.
 */
angular.module('tjsc.widgets.loadingBar', [])
  .provider('cfpLoadingBar', function() {

    this.includeSpinner = true;
    this.includeBar = true;
    this.latencyThreshold = 100;
    this.startSize = 0.02;
    this.parentSelector = 'body';
    this.spinnerTemplate = '<div id="loading-bar-spinner"><div class="spinner-icon"></div></div>';
    this.loadingBarTemplate = '<div id="loading-bar"><div class="bar"><div class="peg"></div></div></div>';

    this.$get = ['$injector', '$document', '$timeout', '$rootScope', function ($injector, $document, $timeout, $rootScope) {
      var $animate;
      var $parentSelector = this.parentSelector,
        loadingBarContainer = angular.element(this.loadingBarTemplate),
        loadingBar = loadingBarContainer.find('div').eq(0),
        spinner = angular.element(this.spinnerTemplate);

      var incTimeout,
        completeTimeout,
        started = false,
        status = 0;

      var includeSpinner = this.includeSpinner;
      var includeBar = this.includeBar;
      var startSize = this.startSize;

      /**
       * Inserts the loading bar element into the dom, and sets it to 2%
       */
      function _start() {
        if (!$animate) {
          $animate = $injector.get('$animate');
        }

        var $parent = $document.find($parentSelector).eq(0);
        $timeout.cancel(completeTimeout);

        // do not continually broadcast the started event:
        if (started) {
          return;
        }

        $rootScope.$broadcast('cfpLoadingBar:started');
        started = true;

        if (includeBar) {
          $animate.enter(loadingBarContainer, $parent, angular.element($parent[0].lastChild));
        }

        if (includeSpinner) {
          $animate.enter(spinner, $parent, angular.element($parent[0].lastChild));
        }

        _set(startSize);
      }

      /**
       * Set the loading bar's width to a certain percent.
       *
       * @param n any value between 0 and 1
       */
      function _set(n) {
        if (!started) {
          return;
        }
        var pct = (n * 100) + '%';
        loadingBar.css('width', pct);
        status = n;

        // increment loadingbar to give the illusion that there is always
        // progress but make sure to cancel the previous timeouts so we don't
        // have multiple incs running at the same time.
        $timeout.cancel(incTimeout);
        incTimeout = $timeout(function() {
          _inc();
        }, 250);
      }

      /**
       * Increments the loading bar by a random amount
       * but slows down as it progresses
       */
      function _inc() {
        if (_status() >= 1) {
          return;
        }

        var rnd = 0;

        // TODO: do this mathmatically instead of through conditions

        var stat = _status();
        if (stat >= 0 && stat < 0.25) {
          // Start out between 3 - 6% increments
          rnd = (Math.random() * (5 - 3 + 1) + 3) / 100;
        } else if (stat >= 0.25 && stat < 0.65) {
          // increment between 0 - 3%
          rnd = (Math.random() * 3) / 100;
        } else if (stat >= 0.65 && stat < 0.9) {
          // increment between 0 - 2%
          rnd = (Math.random() * 2) / 100;
        } else if (stat >= 0.9 && stat < 0.99) {
          // finally, increment it .5 %
          rnd = 0.005;
        } else {
          // after 99%, don't increment:
          rnd = 0;
        }

        var pct = _status() + rnd;
        _set(pct);
      }

      function _status() {
        return status;
      }

      function _completeAnimation() {
        status = 0;
        started = false;
      }

      function _complete() {
        if (!$animate) {
          $animate = $injector.get('$animate');
        }

        $rootScope.$broadcast('cfpLoadingBar:completed');
        _set(1);

        $timeout.cancel(completeTimeout);

        // Attempt to aggregate any start/complete calls within 500ms:
        completeTimeout = $timeout(function() {
          var promise = $animate.leave(loadingBarContainer, _completeAnimation);
          if (promise && promise.then) {
            promise.then(_completeAnimation);
          }
          $animate.leave(spinner);
        }, 500);
      }

      return {
        start            : _start,
        set              : _set,
        status           : _status,
        inc              : _inc,
        complete         : _complete,
        includeSpinner   : this.includeSpinner,
        latencyThreshold : this.latencyThreshold,
        parentSelector   : this.parentSelector,
        startSize        : this.startSize
      };


    }];     //
  });       //
})();       //
