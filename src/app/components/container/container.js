
KumApp.controller('ContainerCtrl', function ($scope) {

    var vm = this;

    vm.firm = {
        name: "Apple"
    };



    var imagePath = 'img/list/60.jpeg';
    vm.messages = [
        {
            face : imagePath,
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands"
        },
        {
            face : imagePath,
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands"
        }
    ];

});