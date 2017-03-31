
KumApp.controller('ContainerCtrl', function ($scope, containerService) {

    var vm = this;

    containerService.getContData().then(function(res) {
        vm.cont = res.data;
    });

});