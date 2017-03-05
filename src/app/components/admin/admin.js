KumApp.controller('AdminCtrl', function ($scope, $window, $http) {
    var vm = this;

    vm.reset = function() {
        vm.ku.$setPristine();
        vm.adm.login = "";
    };


    vm.go = function() {

        if (vm.ku.$valid) {
            console.log("go server");
        } else {
            console.log("no");
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