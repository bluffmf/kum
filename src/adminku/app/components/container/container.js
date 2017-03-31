AdminKuApp.controller('AdminContainerCtrl', function ($scope, $window, $http, $location, Notification, adminContService) {
    var vm = this;


    vm.reset = function(form) {
        adminContService.getContData().then(function(res) {
            vm.cont = res.data;
            form.$setPristine();
            form.$setUntouched();
        });
    };

    vm.save = function(form) {
        if (form.$invalid) {
            console.log("invalid");
            return false;
        }
        adminContService.saveContData(vm.cont).then(function(res) {
            vm.cont = res.data;
            Notification.success('Изменения сохранены');
        }).catch(function(err) {
            Notification.error(err.data);
            console.log('Error ', err.status, err.data);
        })
    }



});