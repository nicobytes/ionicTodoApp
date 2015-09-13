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

