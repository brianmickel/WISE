define([
        'angular',
        'bootstrap',
        'd3',
        'directives',
        'jquery',
        'jqueryUI',
        'angularAnimate',
        'angularDragDrop',
        'angularFileUpload',
        'angularSortable',
        'angularTextAngular',
        'angularUIRouter',
        'angularWebSocket',
        'annotationService',
        'configService',
        'currentNodeService',
        'cRaterService',
        'multipleChoiceService',
        'nodeService',
        'openResponseService',
        'portfolioService',
        'projectService',
        'questionnaireService',
        'sessionService',
        'studentAssetService',
        'studentDataService',
        'studentStatusService',
        'studentWebSocketService'
        ], function(
                angular,
                bootstrap,
                d3,
                directives,
                $,
                jqueryUI,
                angularAnimate,
                angularDragDrop,
                angularFileUpload,
                angularSortable,
                angularTextAngular,
                angularUIRouter,
                angularWebSocket,
                annotationService,
                configService,
                currentNodeService,
                cRaterService,
                multipleChoiceService,
                nodeService,
                openResponseService,
                portfolioService,
                projectService,
                questionnaireService,
                sessionService,
                studentAssetService,
                studentDataService,
                studentStatusService,
                studentWebSocketService
                ) {

    var app = angular.module('app', [
                                     'angularFileUpload',
                                     'directives',
                                     'ui.router',
                                     'ui.sortable',
                                     'ngAnimate',
                                     'ngDragDrop',
                                     'ngWebSocket',
                                     'textAngular'
                                     ]);
    
    // core services
    app.factory('AnnotationService', annotationService);
    app.factory('ConfigService', configService);
    app.factory('CurrentNodeService', currentNodeService);
    app.factory('CRaterService', cRaterService);
    app.factory('NodeService', nodeService);
    app.factory('PortfolioService', portfolioService);
    app.factory('ProjectService', projectService);
    app.factory('SessionService', sessionService);
    app.factory('StudentAssetService', studentAssetService);
    app.factory('StudentDataService', studentDataService);
    app.factory('StudentStatusService', studentStatusService);
    app.factory('StudentWebSocketService', studentWebSocketService);
    
    // node services
    app.factory('OpenResponseService', openResponseService);
    app.factory('MultipleChoiceService', multipleChoiceService);
    app.factory('QuestionnaireService', questionnaireService);

    
    app.filter('sanitizeHTML', ['$sce', function($sce) {
        return function(htmlCode) {
            return $sce.trustAsHtml(htmlCode);
        };
    }]);
    
    app.init = function() {
        angular.bootstrap(document, ['app']);
    };
    
    app.loadController = function(controllerName) {
        return ['$q', function($q) {
            var deferred = $q.defer();
            require([controllerName], function() {
                deferred.resolve();
            });
            return deferred.promise;
        }];
    };
    
    app.config(['$urlRouterProvider', '$stateProvider', '$controllerProvider', 
                function($urlRouterProvider, $stateProvider, $controllerProvider) {
        
        $urlRouterProvider.otherwise('/vle/');
        
        app.$controllerProvider = $controllerProvider;
        
        $stateProvider
            .state('root', {
                url: '',
                abstract: true,
                templateUrl: 'wise5/vle/vle.html',
                resolve: {
                    vleController: app.loadController('vleController'),
                    portfolioController: app.loadController('portfolioController'),
                    config: function(ConfigService) {
                        var configUrl = window.configUrl;
                        
                        return ConfigService.retrieveConfig(configUrl);
                    },
                    project: function(ProjectService, config) {
                        return ProjectService.retrieveProject();
                    },
                    sessionTimers: function(SessionService, config) {
                        return SessionService.initializeSession();
                    },
                    studentData: function(StudentDataService, config, project) {
                        return StudentDataService.retrieveStudentData();
                    },
                    annotations: function(AnnotationService, config) {
                        return AnnotationService.retrieveAnnotationsForStudent();
                    },
                    webSocket: function(StudentWebSocketService, config) {
                        return StudentWebSocketService.initialize();
                    }
                }
            })
            .state('root.vle', {
                url: '/vle/:nodeId',
                views: {
                    'navigationView': {
                        templateUrl: 'wise5/vle/navigation/navigation.html',
                        resolve: {
                            navigationController: app.loadController('navigationController')
                        }
                    },
                    'nodeView': {
                        templateUrl: 'wise5/vle/node/node.html',
                        resolve: {
                            nodeController: app.loadController('nodeController'),
                            openResponseController: app.loadController('openResponseController'),
                            multipleChoiceController: app.loadController('multipleChoiceController'),
                            htmlController: app.loadController('htmlController'),
                            planningController: app.loadController('planningController'),
                            questionnaireController: app.loadController('questionnaireController')
                        }
                    }
                }
            });
            
    }]);
    
    return app;
});