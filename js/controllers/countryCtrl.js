angular.module('touristoApp')
      .controller('countryCtrl', function ($scope, countrySvc) {



        $scope.countries = countrySvc.countryArray;
        $scope.descriptions = countrySvc.descriptionArray
        //$scope is kind of like a global var/object

})
