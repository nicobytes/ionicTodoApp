angular.module('starter.controllers', [])

//Controlador de las tareas del dia de hoy
.controller('TodayCtrl', [
  '$scope', '$ionicModal',
  function($scope, $ionicModal) {

    $scope.todo = {};
    $scope.todos = getTodos();
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
      $scope.todos.push($scope.todo);
      $scope.closeModal();
    }

    $scope.deleteTodo = function(){
      var index = $scope.todos.indexOf($scope.todo);
      $scope.todos.splice(index,1);
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

    function getTodos(){
      return [
        {
          id: 1,
          title: 'Hacer las compras',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis nesciunt repellendus deserunt pariatur quidem ab nobis, obcaecati ratione eos cumque et unde quam doloribus consectetur reprehenderit! Tenetur maxime voluptates molestiae?',
          date: new Date(),
          done: true
        },
        {
          id: 2,
          title: 'Leer una novela',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis nesciunt repellendus deserunt pariatur quidem ab nobis, obcaecati ratione eos cumque et unde quam doloribus consectetur reprehenderit! Tenetur maxime voluptates molestiae?',
          date: new Date(),
          done: false
        },
        {
          id: 3,
          title: 'Comprar comida',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis nesciunt repellendus deserunt pariatur quidem ab nobis, obcaecati ratione eos cumque et unde quam doloribus consectetur reprehenderit! Tenetur maxime voluptates molestiae?',
          date: new Date(),
          done: true
        },
        {
          id: 4,
          title: 'Ir a meetup',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis nesciunt repellendus deserunt pariatur quidem ab nobis, obcaecati ratione eos cumque et unde quam doloribus consectetur reprehenderit! Tenetur maxime voluptates molestiae?',
          date: new Date(),
          done: true
        },
        {
          id: 5,
          title: 'Sacar a la mascota',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis nesciunt repellendus deserunt pariatur quidem ab nobis, obcaecati ratione eos cumque et unde quam doloribus consectetur reprehenderit! Tenetur maxime voluptates molestiae?',
          date: new Date(),
          done: false
        },
      ];
    }
  }
])
.controller('AllCtrl', [
  '$scope',
  function($scope) {

    $scope.dates = getDates();

    function getDates(){
      return [
        {
          date: new Date(2015,3,12),
          todos: [
            {
              id: 1,
              title: 'Hacer las compras',
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis nesciunt repellendus deserunt pariatur quidem ab nobis, obcaecati ratione eos cumque et unde quam doloribus consectetur reprehenderit! Tenetur maxime voluptates molestiae?',
              date: new Date(2015, 3, 12, 10, 23),
              done: true
            },
            {
              id: 2,
              title: 'Leer una novela',
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis nesciunt repellendus deserunt pariatur quidem ab nobis, obcaecati ratione eos cumque et unde quam doloribus consectetur reprehenderit! Tenetur maxime voluptates molestiae?',
              date: new Date(2015, 3, 12, 23),
              done: false
            },
          ]
        },
        {
          date: new Date(2015, 2, 12),
          todos: [
            {
              id: 3,
              title: 'Comprar comida',
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis nesciunt repellendus deserunt pariatur quidem ab nobis, obcaecati ratione eos cumque et unde quam doloribus consectetur reprehenderit! Tenetur maxime voluptates molestiae?',
              date: new Date(2015, 2, 12, 1),
              done: true
            },
            {
              id: 4,
              title: 'Ir a meetup',
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis nesciunt repellendus deserunt pariatur quidem ab nobis, obcaecati ratione eos cumque et unde quam doloribus consectetur reprehenderit! Tenetur maxime voluptates molestiae?',
              date: new Date(2015, 2, 12, 4),
              done: true
            },
          ]
        },
        {
          date: new Date(2015, 4, 12),
          todos: [
            {
              id: 5,
              title: 'Sacar a la mascota',
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis nesciunt repellendus deserunt pariatur quidem ab nobis, obcaecati ratione eos cumque et unde quam doloribus consectetur reprehenderit! Tenetur maxime voluptates molestiae?',
              date: new Date(2015, 4, 12, 3),
              done: false
            },
          ]
        },
      ];
    }
  }
])
.controller('DoneCtrl', [
  '$scope',
  function($scope) {
    $scope.dates = getDates();
    
    function getDates(){
      return [
        {
          date: new Date(2015,3,12),
          todos: [
            {
              id: 1,
              title: 'Hacer las compras',
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis nesciunt repellendus deserunt pariatur quidem ab nobis, obcaecati ratione eos cumque et unde quam doloribus consectetur reprehenderit! Tenetur maxime voluptates molestiae?',
              date: new Date(2015, 3, 12, 10, 23),
              done: true
            },
            {
              id: 2,
              title: 'Leer una novela',
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis nesciunt repellendus deserunt pariatur quidem ab nobis, obcaecati ratione eos cumque et unde quam doloribus consectetur reprehenderit! Tenetur maxime voluptates molestiae?',
              date: new Date(2015, 3, 12, 23),
              done: false
            },
          ]
        },
        {
          date: new Date(2015, 2, 12),
          todos: [
            {
              id: 3,
              title: 'Comprar comida',
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis nesciunt repellendus deserunt pariatur quidem ab nobis, obcaecati ratione eos cumque et unde quam doloribus consectetur reprehenderit! Tenetur maxime voluptates molestiae?',
              date: new Date(2015, 2, 12, 1),
              done: true
            },
            {
              id: 4,
              title: 'Ir a meetup',
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis nesciunt repellendus deserunt pariatur quidem ab nobis, obcaecati ratione eos cumque et unde quam doloribus consectetur reprehenderit! Tenetur maxime voluptates molestiae?',
              date: new Date(2015, 2, 12, 4),
              done: true
            },
          ]
        },
        {
          date: new Date(2015, 4, 12),
          todos: [
            {
              id: 5,
              title: 'Sacar a la mascota',
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis nesciunt repellendus deserunt pariatur quidem ab nobis, obcaecati ratione eos cumque et unde quam doloribus consectetur reprehenderit! Tenetur maxime voluptates molestiae?',
              date: new Date(2015, 4, 12, 3),
              done: false
            },
          ]
        },
      ];
    }
  }
])

