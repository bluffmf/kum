AdminKuApp.controller('AdminFooterCtrl', function ($scope, $window, $http, $location, Notification, adminFooterService) {
    var vm = this;


    vm.reset = function(form) {
        adminFooterService.getFooterData().then(function(res) {
            vm.foot = res.data;
            // console.log(vm.foot);
            form.$setPristine();
            form.$setUntouched();
        });
    };

    vm.save = function(form) {
        if (form.$invalid) {
            console.log("invalid");
            return false;
        }

        adminFooterService.saveFooterData(vm.foot).then(function(res) {
            vm.foot = res.data;
            Notification.success('Изменения сохранены');
        }).catch(function(err) {
            Notification.error(err.data);
            console.log('Error ', err.status, err.data);
        })
    }



});