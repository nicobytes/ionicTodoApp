angular.module('starter.controllers', [])

//Controlador de las tareas del dia de hoy
.controller('TodayCtrl', [
  '$scope', '$ionicModal', 'todoService',
  function($scope, $ionicModal, todoService) {

    $scope.todo = {};
    $scope.todos = todoService.getAll();
    $scope.is_new = true;

    $ionicModal.fromTemplateUrl('templates/todo-modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });

    $scope.newTodo = function(){
      $scope.is_new = true;
      $scope.openModal();
    }

    $scope.editTodo = function(todo){
      $scope.is_new = false;
      $scope.todo = todo;
      $scope.todo.date = new Date($scope.todo.date)
      $scope.openModal();
    }

    $scope.addTodo = function(){
      todoService.create($scope.todo);
      $scope.closeModal();
    }

    $scope.deleteTodo = function(){
      todoService.delete($scope.todo);
      $scope.closeModal();
    }

    $scope.updateTodo = function(){
      todoService.update($scope.todo);
      $scope.closeModal();
    }

    $scope.saveTodo = function(){
      if($scope.is_new){
        $scope.addTodo();
      }else{
        $scope.updateTodo();
      }
    }

    $scope.openModal = function() {
      $scope.modal.show();
    };

    $scope.closeModal = function() {
      $scope.modal.hide();
      $scope.todo = {};
    };
  }
])
.controller('AllCtrl', [
  '$scope','$ionicModal', 'todoService',
  function($scope, $ionicModal, todoService) {

    $scope.todo = {};
    $scope.dates = todoService.getGroupDate();
    $scope.is_new = true;

    $ionicModal.fromTemplateUrl('templates/todo-modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });

    $scope.newTodo = function(){
      $scope.is_new = true;
      $scope.openModal();
    }

    $scope.editTodo = function(todo){
      $scope.is_new = false;
      $scope.todo = todo;
      $scope.openModal();
    }

    $scope.addTodo = function(){
      todoService.create($scope.todo);
      $scope.dates = todoService.getGroupDate();
      $scope.closeModal();
    }

    $scope.deleteTodo = function(){
      todoService.delete($scope.todo);
      $scope.dates = todoService.getGroupDate();
      $scope.closeModal();
    }

    $scope.updateTodo = function(){
      $scope.closeModal();
    }

    $scope.saveTodo = function(){
      if($scope.is_new){
        $scope.addTodo();
      }else{
        $scope.updateTodo();
      }
    }

    $scope.openModal = function() {
      $scope.modal.show();
    };

    $scope.closeModal = function() {
      $scope.modal.hide();
      $scope.todo = {};
    };
  }
])
.controller('DoneCtrl', [
  '$scope', 'todoService',
  function($scope, todoService) {
    $scope.dates = todoService.getGroupDate();
  }
])

