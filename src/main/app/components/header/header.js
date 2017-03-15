KumApp.controller('HeaderCtrl', function($scope, $mdSidenav, headerService) {
    var vm = this;


    headerService.getHeaderData().then(function(res) {
        vm.head = res.data;
    });


    vm.toAdmin = function() {
        $mdSidenav('left').toggle();
    };


});
