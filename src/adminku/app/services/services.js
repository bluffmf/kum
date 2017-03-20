
var adminServices = angular.module('adminServices', []);


adminServices.service('adminHeaderService', function($http, $templateCache, $q) {
    return {
        getHeaderData: function() {
            var deferred = $q.defer();
            $http({
                method: "POST",
                url: "/header",
                dataType: "json"
            }).then(
                res => deferred.resolve(res),
                err => deferred.reject(err)
            );
            return deferred.promise;
        },
        saveHeaderData: function(head) {
            var deferred = $q.defer();
            $http({
                method: "PUT",
                url: "/header",
                dataType: "json",
                data: head
            }).then(
                res => deferred.resolve(res),
                err => deferred.reject(err)
            );
            return deferred.promise;
        }
    }
});