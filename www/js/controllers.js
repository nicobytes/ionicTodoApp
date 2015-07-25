angular.module('starter.controllers', [])

//Controlador de las tareas del dia de hoy
.controller('TodayCtrl', [
  '$scope',
  function($scope) {

    $scope.todos = getTodos();

    function getTodos(){
      return [
        {
          id: 1,
          name: 'Hacer las compras',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis nesciunt repellendus deserunt pariatur quidem ab nobis, obcaecati ratione eos cumque et unde quam doloribus consectetur reprehenderit! Tenetur maxime voluptates molestiae?',
          date: new Date(),
          done: true
        },
        {
          id: 2,
          name: 'Leer una novela',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis nesciunt repellendus deserunt pariatur quidem ab nobis, obcaecati ratione eos cumque et unde quam doloribus consectetur reprehenderit! Tenetur maxime voluptates molestiae?',
          date: new Date(),
          done: false
        },
         {
          id: 3,
          name: 'Comprar comida',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis nesciunt repellendus deserunt pariatur quidem ab nobis, obcaecati ratione eos cumque et unde quam doloribus consectetur reprehenderit! Tenetur maxime voluptates molestiae?',
          date: new Date(),
          done: true
        },
        {
          id: 4,
          name: 'Ir a meetup',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis nesciunt repellendus deserunt pariatur quidem ab nobis, obcaecati ratione eos cumque et unde quam doloribus consectetur reprehenderit! Tenetur maxime voluptates molestiae?',
          date: new Date(),
          done: true
        },
        {
          id: 5,
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
  '$scope',
  function($scope) {

    $scope.todos = getTodos();

    function getTodos(){
      return [
        {
          id: 1,
          name: 'Comprar comida',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis nesciunt repellendus deserunt pariatur quidem ab nobis, obcaecati ratione eos cumque et unde quam doloribus consectetur reprehenderit! Tenetur maxime voluptates molestiae?',
          date: new Date(),
          done: true
        },
        {
          id: 2,
          name: 'Ir a meetup',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis nesciunt repellendus deserunt pariatur quidem ab nobis, obcaecati ratione eos cumque et unde quam doloribus consectetur reprehenderit! Tenetur maxime voluptates molestiae?',
          date: new Date(),
          done: true
        },
        {
          id: 3,
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
  '$scope',
  function($scope) {

    $scope.todos = getTodos();

    function getTodos(){
      return [
        {
          id: 1,
          name: 'Comprar comida',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis nesciunt repellendus deserunt pariatur quidem ab nobis, obcaecati ratione eos cumque et unde quam doloribus consectetur reprehenderit! Tenetur maxime voluptates molestiae?',
          date: new Date(),
          done: true
        },
        {
          id: 2,
          name: 'Ir a meetup',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis nesciunt repellendus deserunt pariatur quidem ab nobis, obcaecati ratione eos cumque et unde quam doloribus consectetur reprehenderit! Tenetur maxime voluptates molestiae?',
          date: new Date(),
          done: true
        },
        {
          id: 3,
          name: 'Sacar a la mascota',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis nesciunt repellendus deserunt pariatur quidem ab nobis, obcaecati ratione eos cumque et unde quam doloribus consectetur reprehenderit! Tenetur maxime voluptates molestiae?',
          date: new Date(),
          done: false
        },
      ];
    }
  }
])

