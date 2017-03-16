
var adminServices = angular.module('adminServices', []);


adminServices.service('adminFooterService', function($http, $templateCache, $q) {
    return {
        changeFooter: function() {
            var deferred = $q.defer();
            $http({
                method: "POST",
                url: "/adminfooter",
                dataType: "json"
            }).then(
                function(res) {
                    deferred.resolve(res);
                },
                function(err) {
                    deferred.reject(err);
                }
            );
            return deferred.promise;
        }
    }
});