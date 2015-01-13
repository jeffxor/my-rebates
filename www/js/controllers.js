angular.module('starter.controllers', [])

//JHLRD77874C026456

.controller('RebatesCtrl', function($scope, rebateService) {

  $scope.vehicle = {vin: ''};
  $scope.rebates = [];

  $scope.scan = function(){
    cordova.plugins.barcodeScanner.scan(
      function (result) {
        $scope.vin = result.text;
      }, 
      function (error) {
          alert("Scanning failed: " + error);
      });
  };
  $scope.find = function(){
    rebateService.getRebates($scope.vehicle.vin).then(function (data) {
        $scope.rebates = data;
    });
  };

  $scope.clear = function(){
    $scope.vehicle.vin = "";
    $scope.rebates = [];
  };

});