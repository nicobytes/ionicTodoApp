angular.module('starter.controllers', [])

//Controlador de las tareas del dia de hoy
.controller('TodayCtrl', [
  '$scope',
  function($scope) {
    console.log("Tab tareas de la fecha");
  }
])
.controller('AllCtrl', [
  '$scope',
  function($scope) {
    console.log("Tab Todas las tareas");
  }
])
.controller('DoneCtrl', [
  '$scope',
  function($scope) {
    console.log("Tab tareas hechas");
  }
])

