KumApp.controller('AdminCtrl', function ($scope, $window, $http) {
    var vm = this;

    // ng-model="vm.adm.login"
    // ng-model="vm.adm.pass"


    vm.reset = function(form) {
        vm.adm = {};
        vm.adm.login = "";
        vm.adm.pass = "";
        form.$setPristine();
        form.$setUntouched();
    };


    vm.go = function(form) {

        if (form.$invalid) {
            console.log("invalid");
        } else {
            console.log("send request");
            console.log(vm.adm);
        }



        // $http({
        //     method: 'GET',
        //     url: '/footer',
        //     dataType: 'json'
        // }).then(
        //     function(data) {
        //         console.log(data);
        //     },
        //     function(data) {
        //         console.log(data.status)
        //     }
        // )
    };

});