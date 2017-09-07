angular.module('touristoApp', ['ui.router'])
.config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/home') //default

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: './views/home.html'
    })

    .state('translate', {
      url: '/translate',
      templateUrl: './views/translate.html',
      controller: 'translateCtrl'
    })

    .state('country', {
      url: '/country',
      templateUrl: './views/country.html',
      controller: 'countryCtrl'
    })

    /*.state('plan', {
    url: '/plan',
    templateUrl: 'plant.html'
  })*/

});
