
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


adminServices.service('adminContService', function($http, $templateCache, $q) {
    return {
        getContData: function() {
            var deferred = $q.defer();
            $http({
                method: "POST",
                url: "/container",
                dataType: "json"
            }).then(
                res => deferred.resolve(res),
                err => deferred.reject(err)
            );
            return deferred.promise;
        },
        saveContData: function(head) {
            var deferred = $q.defer();
            $http({
                method: "PUT",
                url: "/container",
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


adminServices.service('adminFooterService', function($http, $templateCache, $q) {
    return {
        getFooterData: function() {
            var deferred = $q.defer();
            $http({
                method: "POST",
                url: "/footer",
                dataType: "json"
            }).then(
                res => deferred.resolve(res),
                err => deferred.reject(err)
            );
            return deferred.promise;
        },
        saveFooterData: function(foot) {
            var deferred = $q.defer();
            $http({
                method: "PUT",
                url: "/footer",
                dataType: "json",
                data: foot
            }).then(
                res => deferred.resolve(res),
                err => deferred.reject(err)
            );
            return deferred.promise;
        }
    }
});