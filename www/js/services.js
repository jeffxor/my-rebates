angular.module('starter.services', [])

.service('rebateService', ['$http', '$q', function  ($http, $q) {
 
// Return public API.
    return({
      getRebates: function  (vin) {
            return $http.get("https://api.edmunds.com/api/vehicle/v2/vins/"+vin+"?fmt=json&api_key=nmvh26pr29ev4px9n33u9bv2")
                .then(function (result) {
                    return $http.get("https://api.edmunds.com/api/vehicle/v2/"+result.data.make.name+"/"+result.data.model.name+"/2015/styles?fmt=json&api_key=nmvh26pr29ev4px9n33u9bv2")
                })
                .then(function (styles) {
                    return $http.get("https://api.edmunds.com/v1/api/incentive/incentiverepository/findincentivesbystyleid?styleid="+styles.data.styles[0].id+"&fmt=json&api_key=nmvh26pr29ev4px9n33u9bv2")
                })
                .then(function (incentives) {
                    return incentives.data;
                });
      }
    });
}]);