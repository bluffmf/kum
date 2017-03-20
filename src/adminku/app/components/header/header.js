AdminKuApp.controller('AdminHeaderCtrl', function ($scope, $window, $http, $location, Notification, adminHeaderService) {
    var vm = this;


    vm.reset = function(form) {
        adminHeaderService.getHeaderData().then(function(res) {
            vm.head = res.data;
            form.$setPristine();
            form.$setUntouched();
        });
    };

    vm.save = function(form) {
        if (form.$invalid) {
            console.log("invalid");
            return false;
        }
        adminHeaderService.saveHeaderData(vm.head).then(function(res) {
            vm.head = res.data;
            Notification.success('Изменения сохранены');
        }).catch(function(err) {
            Notification.error(err.data);
            console.log('Error ', err.status, err.data);
        })
    }



});