angular.module('starter.controllers', [])

//Controlador de las tareas del dia de hoy
.controller('TodayCtrl', [
  '$scope', '$ionicModal',
  function($scope, $ionicModal) {
    //El objeto
    $scope.todo = {};
    //La lista
    $scope.todos = getTodos();
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

    $scope.editTodo = function(model){
      $scope.is_new = false;
      var index = $scope.todos.indexOf(model);
      $scope.todo = $scope.todos[index];
      $scope.openModal();
    }

    $scope.addTodo = function(){
      $scope.todos.push({
        name: $scope.todo.name,
        text: $scope.todo.text,
        date: $scope.todo.date,
        done: $scope.todo.done || false
      });
      $scope.closeModal();
    }

    $scope.deleteTodo = function(){
      var index = $scope.todos.indexOf($scope.todo);
      $scope.todos.splice(index, 1);
      $scope.closeModal();
    }

    $scope.saveTodo = function(){
      if($scope.is_new){
        $scope.addTodo();
      }else{
        $scope.closeModal();
      }
    }

    function getTodos(){
      return [
        {
          name: 'Hacer las compras',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis nesciunt repellendus deserunt pariatur quidem ab nobis, obcaecati ratione eos cumque et unde quam doloribus consectetur reprehenderit! Tenetur maxime voluptates molestiae?',
          date: new Date(),
          done: true
        },
        {
          name: 'Leer una novela',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis nesciunt repellendus deserunt pariatur quidem ab nobis, obcaecati ratione eos cumque et unde quam doloribus consectetur reprehenderit! Tenetur maxime voluptates molestiae?',
          date: new Date(),
          done: false
        },
        {
          name: 'Comprar comida',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis nesciunt repellendus deserunt pariatur quidem ab nobis, obcaecati ratione eos cumque et unde quam doloribus consectetur reprehenderit! Tenetur maxime voluptates molestiae?',
          date: new Date(),
          done: true
        },
        {
          name: 'Ir a meetup',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis nesciunt repellendus deserunt pariatur quidem ab nobis, obcaecati ratione eos cumque et unde quam doloribus consectetur reprehenderit! Tenetur maxime voluptates molestiae?',
          date: new Date(),
          done: true
        },
        {
          name: 'Sacar a la mascota',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis nesciunt repellendus deserunt pariatur quidem ab nobis, obcaecati ratione eos cumque et unde quam doloribus consectetur reprehenderit! Tenetur maxime voluptates molestiae?',
          date: new Date(),
          done: false
        },
      ];
    }
  }
])
.controller('AllCtrl', [
  '$scope', '$ionicModal',
  function($scope, $ionicModal) {
    //El objeto
    $scope.todo = {};
    //La lista
    $scope.todos = getTodos();
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

    $scope.editTodo = function(model){
      $scope.is_new = false;
      var index = $scope.todos.indexOf(model);
      $scope.todo = $scope.todos[index];
      $scope.openModal();
    }

    $scope.addTodo = function(){
      $scope.todos.push({
        name: $scope.todo.name,
        text: $scope.todo.text,
        date: $scope.todo.date,
        done: $scope.todo.done || false
      });
      $scope.closeModal();
    }

    $scope.deleteTodo = function(){
      var index = $scope.todos.indexOf($scope.todo);
      $scope.todos.splice(index, 1);
      $scope.closeModal();
    }

    $scope.saveTodo = function(){
      if($scope.is_new){
        $scope.addTodo();
      }else{
        $scope.closeModal();
      }
    }

    function getTodos(){
      return [
        {
          name: 'Comprar comida',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis nesciunt repellendus deserunt pariatur quidem ab nobis, obcaecati ratione eos cumque et unde quam doloribus consectetur reprehenderit! Tenetur maxime voluptates molestiae?',
          date: new Date(),
          done: true
        },
        {
          name: 'Ir a meetup',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis nesciunt repellendus deserunt pariatur quidem ab nobis, obcaecati ratione eos cumque et unde quam doloribus consectetur reprehenderit! Tenetur maxime voluptates molestiae?',
          date: new Date(),
          done: true
        },
        {
          name: 'Sacar a la mascota',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis nesciunt repellendus deserunt pariatur quidem ab nobis, obcaecati ratione eos cumque et unde quam doloribus consectetur reprehenderit! Tenetur maxime voluptates molestiae?',
          date: new Date(),
          done: false
        },
      ];
    }
  }
])
.controller('DoneCtrl', [
  '$scope', '$ionicModal',
  function($scope, $ionicModal) {
    //El objeto
    $scope.todo = {};
    //La lista
    $scope.todos = getTodos();
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

    $scope.editTodo = function(model){
      $scope.is_new = false;
      var index = $scope.todos.indexOf(model);
      $scope.todo = $scope.todos[index];
      $scope.openModal();
    }

    $scope.addTodo = function(){
      $scope.todos.push({
        name: $scope.todo.name,
        text: $scope.todo.text,
        date: $scope.todo.date,
        done: $scope.todo.done || false
      });
      $scope.closeModal();
    }

    $scope.deleteTodo = function(){
      var index = $scope.todos.indexOf($scope.todo);
      $scope.todos.splice(index, 1);
      $scope.closeModal();
    }

    $scope.saveTodo = function(){
      if($scope.is_new){
        $scope.addTodo();
      }else{
        $scope.closeModal();
      }
    }

    function getTodos(){
      return [
        {
          name: 'Comprar comida',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis nesciunt repellendus deserunt pariatur quidem ab nobis, obcaecati ratione eos cumque et unde quam doloribus consectetur reprehenderit! Tenetur maxime voluptates molestiae?',
          date: new Date(),
          done: true
        },
        {
          name: 'Ir a meetup',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis nesciunt repellendus deserunt pariatur quidem ab nobis, obcaecati ratione eos cumque et unde quam doloribus consectetur reprehenderit! Tenetur maxime voluptates molestiae?',
          date: new Date(),
          done: true
        },
        {
          name: 'Sacar a la mascota',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis nesciunt repellendus deserunt pariatur quidem ab nobis, obcaecati ratione eos cumque et unde quam doloribus consectetur reprehenderit! Tenetur maxime voluptates molestiae?',
          date: new Date(),
          done: false
        },
      ];
    }
  }
])

