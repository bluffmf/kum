AdminKuApp.controller('AdminCtrl', function ($scope, $window, $http, $location, adminFooterService) {
    var vm = this;

    vm.home = 'Pyatichatki'

    vm.go = function(form) {
        if (form.$invalid) {
            console.log("invalid");
            return false;
        }

        adminFooterService.changeFooter(vm.adm).then(function(res) {
            console.log(res.data);
            window.location.replace($location.absUrl() + res.data);

        }).catch(function(err) {
            alert(err.data);
            console.log('Error ', err.status, err.data);
        });
    };

});