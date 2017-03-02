KumApp.controller('FooterCtrl', function ($scope, $window, $http) {
    var vm = this;


    vm.policy = 'Privacy Policy';
    vm.copyright = '© 2017 NgKu';
    vm.items = [
        { name: '(095)-55-555-55', icon: 'phone', path_url: 'https://vk.com/bluffmf', icon_url: 'photo/svg/phone.svg' },
        { name: 'Вконтакте', icon: 'vk', path_url: 'https://vk.com/bluffmf', icon_url: 'photo/svg/vk.svg' },
        { name: 'Google+', icon: 'google_plus', path_url: 'https://plus.google.com/collection/syU9a', icon_url: 'photo/svg/google_plus.svg' }
    ];




    vm.items = vm.items.map(element => {
        if (element.icon === 'phone') {
            element.numb = element.name;
            element.phone = 'Телефон';
            element.flag = true;
            element.name = element.phone;
        }
        return element;
    });


    vm.toContact = function(item) {
        if (item.icon === 'phone') {
            item.name = (item.flag) ? item.numb : item.phone;
            item.flag = !item.flag;
        } else {
            $window.open(item.path_url, '_blank');
        }
    };

    vm.go = function() {
        $http({
            method: 'GET',
            url: '/footerURL',
            dataType: 'json'
        }).then(
            function(data) {
                console.log(data);
            },
            function(data, status) {
                console.log(status)
            }
        )
    };

});