angular.module('touristoApp')
  .service('countrySvc', function ($http) {


let countryArray = [];


this.getCountries = function () {
  return $http.get('https://restcountries.eu/rest/v2/all')
}

this.getCountries().then(function(response){


  for(let i = 0; i<response.data.length;i++){

     countryArray.push(response.data[i]);


  }

})

this.countryArray = countryArray;


})
