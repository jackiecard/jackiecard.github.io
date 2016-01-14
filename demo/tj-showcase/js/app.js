'use strict';

angular.module('showcase.controllers', []);
angular.module('showcase.services', []);
angular.module('showcase.directives', []);

var app = angular.module('showcase', ['tjsc.fw3',
                                      'showcase.services','showcase.controllers', 'showcase.directives']);

app.config(function($routeProvider) {
	$routeProvider
    	.when('/', {templateUrl: 'partials/welcome.html', controller: 'welcomeController'})
        .when('/alert', {templateUrl: 'components/alert/alert.html', controller: 'alertShowcaseController', controllerAs: 'controller'})
        .when('/bottom-alert', {templateUrl: 'components/bottom-alert/bottom-alert.html', controller: 'bottomAlertShowcaseController', controllerAs: 'controller'})
        .when('/chosen', {templateUrl: 'components/chosen/chosen.html', controller: 'chosenShowcaseController', controllerAs: 'controller'})
        .when('/date-picker', {templateUrl: 'components/date-picker/date-picker.html', controller: 'datePickerShowcaseController', controllerAs: 'controller'})
        .when('/spinner', {templateUrl: 'components/spinner/spinner.html', controller: 'spinnerShowcaseController', controllerAs: 'controller'})
        .when('/combo', {templateUrl: 'partials/welcome.html', controller: 'comboShowcaseController', controllerAs: 'controller'})
    
        .when('/rich-text', {templateUrl: 'components/rich-text/rich-text.html', controller: 'richTextShowcaseController', controllerAs: 'controller'})
    
        .when('/ui-kit/tipografia', {templateUrl: 'components/ui-kit/tipografia.html'})
        .when('/ui-kit/botoes', {templateUrl: 'components/ui-kit/botoes.html'})
        .when('/ui-kit/icones', {templateUrl: 'components/ui-kit/icones.html'})
        .when('/ui-kit/formularios', {templateUrl: 'components/ui-kit/form/formularios.html'})
        .when('/ui-kit/tabelas', {templateUrl: 'components/ui-kit/table/tabelas.html'})
        .when('/ui-kit/abas', {templateUrl: 'components/ui-kit/abas/abas.html'})
        .when('/ui-kit/tags', {templateUrl: 'components/ui-kit/tags.html'})
        .when('/ui-kit/grid', {templateUrl: 'components/ui-kit/grid.html'})
        .when('/ui-kit/collapse', {templateUrl: 'components/ui-kit/collapse.html'})
        .when('/ui-kit/accordion', {templateUrl: 'components/ui-kit/accordion/accordion.html'})
        .when('/ui-kit/cores', {templateUrl: 'components/ui-kit/cores.html'})
        .when('/ui-kit/theme', {templateUrl: 'components/ui-kit/theme.html'})
        
        .when('/pessoa', {templateUrl: 'components/pessoa.html', controller: 'pessoaController', controllerAs: 'controller'})
        .when('/componentes', {templateUrl: 'partials/componentes.html'})
    
		.otherwise({redirectTo: $routeProvider})
        ;
	
});

app.run(function($rootScope, $route, $http, $routeParams, $templateCache){
	
});