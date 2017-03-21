KumApp.controller('AdminCtrl', function ($scope, $window, $http, $location, Notification, adminService) {
    var vm = this;


    vm.reset = function(form) {
        vm.adm = {};
        vm.adm.login = '';
        vm.adm.password = '';
        form.$setPristine();
        form.$setUntouched();
    };


    vm.go = function(form) {

        if (form.$invalid) {
            Notification.error('Форма невалидна');
            return false;
        }

        adminService.signIn(vm.adm).then(function(res) {
            console.log(res.data);
            window.location.replace($location.absUrl() + res.data);

        }).catch(function(err) {
            Notification.error('Неверный логин или пароль');
            console.log('Error ', err.status, err.data);
        });



    };

});