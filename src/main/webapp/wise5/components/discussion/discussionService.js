define(['nodeService'], function(nodeService) {
    
    var service = ['$http',
                   '$q',
                   'ConfigService',
                   'NodeService',
                   function($http,
                           $q,
                           ConfigService,
                           NodeService) {
        var serviceObject = Object.create(NodeService);
        
        serviceObject.config = null;
        
        serviceObject.callFunction = function(functionName, functionParams) {
            var result = null;
            
            if (functionName === 'wordCountCompare') {
                result = this.wordCountCompare(functionParams);
            }
            
            return result;
        };
        
        serviceObject.wordCountCompare = function(params) {
            var result = false;
            
            if (params != null) {
                var operator = params.operator;
                var count = params.count;
                var nodeVisits = params.nodeVisits;
                
                var latestNodeState = this.getLatestNodeState(nodeVisits);
                
                var wordCount = 0;
                
                if (latestNodeState != null) {
                    var response = latestNodeState.studentData;
                    
                    if (response != null) {
                        wordCount = this.getWordCount(response);
                        
                        if (operator === '<') {
                            if (wordCount < count) {
                                result = true;
                            }
                        } else if (operator === '>=') {
                            if (wordCount >= count) {
                                result = true;
                            }
                        }
                    }
                }
            }
            
            return result;
        };

        serviceObject.getWordCount = function(response) {
            var wordCount = 0;
            
            if (response != null) {
                var regex = /\s+/gi;
                wordCount = response.trim().replace(regex, ' ').split(' ').length;
            }
            
            return wordCount;
        };
        
        serviceObject.getStudentWorkAsHTML = function(nodeState) {
            var studentWorkAsHTML = null;
            
            if (nodeState != null) {
                var response = nodeState.studentData;
                
                if (response != null) {
                    studentWorkAsHTML = '<p>' + response + '</p>';
                }
            }
            
            return studentWorkAsHTML;
        };
        
        serviceObject.populateComponentState = function(componentStateFromOtherComponent, otherComponentType) {
            var componentState = null;
            
            if (componentStateFromOtherComponent != null && otherComponentType != null) {
                componentState = StudentDataService.createComponentState();
                
                if (otherComponentType === 'OpenResponse') {
                    componentState.studentData = componentStateFromOtherComponent.studentData;
                }
            }
            
            return componentState;
        };
        
        serviceObject.getClassmateResponses = function(runId, periodId, nodeId, componentId) {
            
            if (runId != null && periodId != null && nodeId != null && componentId != null) {
                return $q(angular.bind(this, function(resolve, reject) {
                    
                    var httpParams = {};
                    httpParams.method = 'GET';
                    httpParams.url = ConfigService.getConfigParam('studentDataURL');
                    
                    var params = {};
                    params.runId = runId;
                    params.periodId = periodId;
                    params.nodeId = nodeId;
                    params.componentId = componentId;
                    params.getComponentStates = true;
                    httpParams.params = params;
                    
                    $http(httpParams).then(angular.bind(this, function(result) {
                        var classmateData = result.data;
                        
                        //console.log(classmateData);
                        
                        resolve(classmateData);
                    }));
                }));
            }
        };
        
        return serviceObject;
    }];
    
    return service;
});