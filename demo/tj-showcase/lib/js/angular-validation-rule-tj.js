(function() {
    angular.module('validation.rule', ['validation'])
        .config(['$validationProvider',
            function($validationProvider) {
                var expression = {
                    required: function(value) {
                        return !!value;
                    },
                    url: /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/,
                    email: /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,
                    number: /^\d+$/,
                    cpf: function(value, scope, element, attrs, param) {
                        return CPF.isValid(value);
                    },
                    cnpj: function(value, scope, element, attrs, param) {
                        return CNPJ.isValid(value);
                    },
                    telefone: /^(\(0?\d{2}\)\s?|0?\d{2}[\s.-]?)\d{4,5}[\s.-]?\d{4}$/,
                    cep: /^[0-9]{5}\-?[0-9]{3}$/,
                    minlength: function(value, scope, element, attrs, param) {
                        return value.length >= param;
                    },
                    maxlength: function(value, scope, element, attrs, param) {
                        return value.length <= param;
                    }
                };
                
                var alertSign = "<span class='glyphicon glyphicon-exclamation-sign'></span> ";
                var validatedSign = "<span class='glyphicon glyphicon-ok'></span> ";
                
                var defaultMsg = {
                    required: {
                        error: alertSign + 'Campo obrigatório!',
                        success: validatedSign + 'Campo válido'
                    },
                    url: {
                        error: alertSign + 'Por favor, digite uma URL válida!',
                        success: validatedSign + 'Campo válido'
                    },
                    email: {
                        error: alertSign + 'Por favor, digite um Email válido!',
                        success: validatedSign + 'Campo válido'
                    },
                    number: {
                        error: alertSign + 'Por favor, digite um número válido!',
                        success: validatedSign + 'Campo válido'
                    },
                    cpf: {
                        error: alertSign + 'Por favor, digite um CPF válido!',
                        success: validatedSign + 'CPF válido!'
                    },
                    cnpj: {
                        error: alertSign + 'Por favor, digite um CNPJ válido!',
                        success: validatedSign + 'CNPJ válido!'
                    },
                    telefone: {
                        error: alertSign + 'Por favor, digite um número de Telefone válido!',
                        success: validatedSign + 'Número de telefone válido!'
                    },
                    cep: {
                        error: alertSign + 'Por favor, digite um CEP válido!',
                        success: validatedSign + 'CEP válido!'
                    },
                    minlength: {
                        error: alertSign + 'Número insuficiente de caracteres!',
                        success: validatedSign + 'Campo válido!'
                    },
                    maxlength: {
                        error: alertSign + 'Número de caracteres excedido!',
                        success: validatedSign + 'Campo válido!'
                    }
                };

                $validationProvider.setExpression(expression).setDefaultMsg(defaultMsg);
                angular.extend($validationProvider, {
                    validCallback: function (element){
                        $(element).removeClass('validation-input-error');
                    },
                    invalidCallback: function (element) {
                        $(element).addClass('validation-input-error');
                    }
                });
            }
        ]);

}).call(this);
