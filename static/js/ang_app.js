var app = angular.module("heartcore",[]);


app.controller("heart_ctrl",function($scope,$http){
  var characters = null;
  var cast = null;

  $http({method:"GET",url:"/static/js/characters.json"}).then(function success(res) {
      console.log("RESPONSE" + res.data)
      $scope.characters = res.data;
  });
/*
  $http({method:"GET",url:"/static/js/cast.json"}).then(function success(res) {
      $scope.cast = res.data;
  });
*/

});
