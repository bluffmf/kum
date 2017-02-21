KumApp.controller('FooterCtrl', function ($scope) {
    var vm = this;

    vm.toContact = function() {
        alert("Go");
    };

    vm.items = [
        { name: 'Телефон',      icon: 'phone',          icon_url: 'photo/svg/phone.svg' },
        { name: 'Вконтакте',    icon: 'vk',             icon_url: 'photo/svg/vk.svg' },
        { name: 'Google+',      icon: 'google_plus',    icon_url: 'photo/svg/google_plus.svg' }
    ];

});