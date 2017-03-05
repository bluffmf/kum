KumApp.controller('FooterCtrl', function ($scope, $window, $http, footerService) {
    var vm = this;


    footerService.getFooterData().then(function(res) {
        vm.footer = res.data;


        vm.footer.items = vm.footer.items.map(element => {
            if (element.icon === 'phone') {
                element.numb = element.name;
                element.phone = 'Телефон';
                element.flag = true;
                element.name = element.phone;
            }
            return element;
        });
    });



    vm.toContact = function(item) {
        if (item.icon === 'phone') {
            item.name = (item.flag) ? item.numb : item.phone;
            item.flag = !item.flag;
        } else {
            $window.open(item.path_url, '_blank');
        }
    };

});






// vm.go = function() {
//     $http({
//         method: 'GET',
//         url: '/footer',
//         dataType: 'json'
//     }).then(
//         function(data) {
//             console.log(data);
//         },
//         function(data) {
//             console.log(data.status)
//         }
//     )
// };
// <button ng-click="vm.go()">Get data</button>