angular.module('touristoApp').service('translateSvc', function($http){


  this.getTranslation = function (text, language) {
    return $http.get('https://translate.yandex.net/api/v1.5/tr.json/translate'+
      '?key=trnsl.1.1.20170529T152354Z.7be2fff7590b4355.b84cf3a8c0ccce417a577916a4af0b30b142dc44' +
      '&text=' + text +
      '&lang=' + language).then(function (response) {
        return response.data;
    })
  }



})


//buttons that change a variable on scope to the right language code (ng-click="language = ru")(ng-click="language=dn");

//button with ng-click that runs getTranslation(filterTranslations)
