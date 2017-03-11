KumApp.controller('AdminCtrl', function ($scope, $window, $http, adminService) {
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
            console.log("invalid");
            return false;
        }

        adminService.signIn(vm.adm).then(function(res) {
            console.log(res.data);
        }).catch(function(err) {
            console.log(err);
        });



    };

});