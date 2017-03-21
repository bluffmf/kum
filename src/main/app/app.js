
var KumApp = angular.module('KumApp', ['ngMaterial', 'ui-notification', 'registerServices'])
    .config(function(NotificationProvider) {
        NotificationProvider.setOptions({
            delay: 10000,
            startTop: 20,
            startRight: 10,
            verticalSpacing: 20,
            horizontalSpacing: 20,
            positionX: 'right',
            positionY: 'bottom'
        });
    });
    // .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    //     $routeProvider.
    //     when('/', {
    //         templateUrl: 'partials/index',
    //         controller: IndexCtrl
    //     }).
    //     when('/admin/:secret', {
    //         templateUrl: 'partials/addPost',
    //         controller: AddPostCtrl
    //     }).
    //     otherwise({
    //         redirectTo: '/'
    //     });
    //     $locationProvider.html5Mode(true);
    // }]);
    // .config(function($mdIconProvider) {
    //     $mdIconProvider.defaultIconSet('./svg/avatars.svg', 128);
    // });

