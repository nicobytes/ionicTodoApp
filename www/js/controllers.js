angular.module('starter.controllers', [])

//Controlador de las tareas del dia de hoy
.controller('TodayCtrl', [
  '$scope', '$ionicModal','todoStorage',
  function($scope, $ionicModal, todoStorage) {
    //El objeto
    $scope.todo = {};
    $scope.todo.date = new Date();
    //La lista
    $scope.todos = todoStorage.query();
    //para editar o crear
    $scope.is_new = true;

    $ionicModal.fromTemplateUrl('templates/todo-modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });

    $scope.openModal = function() {
      $scope.modal.show();
    };

    $scope.closeModal = function() {
      $scope.modal.hide();
      $scope.todo = {};
      $scope.is_new = true;
    };

    $scope.newTodo = function(){
      $scope.openModal();
    }

    $scope.editTodo = function(todo){
      $scope.is_new = false;
      $scope.todo = todo;
      $scope.todo.date = new Date($scope.todo.date);
      $scope.openModal();
    }

    $scope.addTodo = function(){
      $scope.todos = todoStorage.addTodo($scope.todo);
      $scope.closeModal();
    }

    $scope.deleteTodo = function(){
      $scope.todos = todoStorage.deleteTodo($scope.todo);
      $scope.closeModal();
    }

    $scope.updateTodo = function(){
      todoStorage.save($scope.todos);
      $scope.closeModal();
    }

    $scope.saveTodo = function(){
      if($scope.is_new){
        $scope.addTodo();
      }else{
        $scope.updateTodo();
      }
    }
  }
])
.controller('AllCtrl', [
  '$scope', '$ionicModal','todoStorage',
  function($scope, $ionicModal, todoStorage) {
    //El objeto
    $scope.todo = {};
    $scope.todo.date = new Date();
    //La lista
    $scope.todos = todoStorage.query();
    //para editar o crear
    $scope.is_new = true;

    $ionicModal.fromTemplateUrl('templates/todo-modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });

    $scope.openModal = function() {
      $scope.modal.show();
    };

    $scope.closeModal = function() {
      $scope.modal.hide();
      $scope.todo = {};
      $scope.is_new = true;
    };

    $scope.newTodo = function(){
      $scope.openModal();
    }

    $scope.editTodo = function(todo){
      $scope.is_new = false;
      $scope.todo = todo;
      $scope.todo.date = new Date($scope.todo.date);
      $scope.openModal();
    }

    $scope.addTodo = function(){
      $scope.todos = todoStorage.addTodo($scope.todo);
      $scope.closeModal();
    }

    $scope.deleteTodo = function(){
      $scope.todos = todoStorage.deleteTodo($scope.todo);
      $scope.closeModal();
    }

    $scope.updateTodo = function(){
      todoStorage.save($scope.todos);
      $scope.closeModal();
    }

    $scope.saveTodo = function(){
      if($scope.is_new){
        $scope.addTodo();
      }else{
        $scope.updateTodo();
      }
    }
  }
])
.controller('DoneCtrl', [
  '$scope', '$ionicModal','todoStorage',
  function($scope, $ionicModal, todoStorage) {
    //El objeto
    $scope.todo = {};
    //La lista
    $scope.todos = todoStorage.query();
    //para editar o crear
    $scope.is_new = true;

    $ionicModal.fromTemplateUrl('templates/todo-modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });

    $scope.openModal = function() {
      $scope.modal.show();
    };

    $scope.closeModal = function() {
      $scope.modal.hide();
      $scope.todo = {};
      $scope.is_new = true;
    };

    $scope.newTodo = function(){
      $scope.openModal();
    }

    $scope.editTodo = function(todo){
      $scope.is_new = false;
      $scope.todo = todo;
      $scope.todo.date = new Date($scope.todo.date);
      $scope.openModal();
    }

    $scope.addTodo = function(){
      $scope.todos = todoStorage.addTodo($scope.todo);
      $scope.closeModal();
    }

    $scope.deleteTodo = function(){
      $scope.todos = todoStorage.deleteTodo($scope.todo);
      $scope.closeModal();
    }

    $scope.updateTodo = function(){
      todoStorage.save($scope.todos);
      $scope.closeModal();
    }

    $scope.saveTodo = function(){
      if($scope.is_new){
        $scope.addTodo();
      }else{
        $scope.updateTodo();
      }
    }
  }
])

