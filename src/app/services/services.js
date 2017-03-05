
var registerServices = angular.module('registerServices', []);


registerServices.service('footerService', function($http, $templateCache, $q) {
    return {
        getFooterData: function() {
            var deferred = $q.defer();
            $http({
                method: "GET",
                url: "/footer",
                dataType: "json"
            }).then(
                function(res) {
                    deferred.resolve(res);
                },
                function(res) {
                    deferred.resolve(res.status);
                }
            );
            return deferred.promise;
        }
    }
});

registerServices.service('headerService', function($http, $templateCache, $q) {
    return {
        getHeaderData: function() {
            var deferred = $q.defer();
            $http({
                method: "GET",
                url: "/header",
                dataType: "json"
            }).then(
                function(res) {
                    deferred.resolve(res);
                },
                function(res) {
                    deferred.resolve(res.status);
                }
            );
            return deferred.promise;
        }
    }
});