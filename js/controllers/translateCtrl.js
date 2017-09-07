angular.module('touristoApp')
  .controller('translateCtrl', function ($scope, translateSvc) {
    console.log('hey');

    $scope.translate = function(text, language) {
      console.log(text);
      translateSvc.getTranslation(text, language).then(function (response) {
        console.log(response)
        $scope.translations = response.text;
      });
    }

  })
