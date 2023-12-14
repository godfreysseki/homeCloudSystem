angular.module('yourApp').service('ApiService', ['$http', function($http) {
    var apiUrl = 'https://your-azure-app-service-url/api'; // Replace with your Azure App Service URL

    this.turnOnLights = function() {
        return $http.post(apiUrl + '/lights/on');
    };

    this.turnOffLights = function() {
        return $http.post(apiUrl + '/lights/off');
    };
}]);
