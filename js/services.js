angular.module('starter.services', [])

.factory('todoService', function() {
  var todos = [
    {
      id: 1,
      title: 'Hacer las compras',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis nesciunt repellendus deserunt pariatur quidem ab nobis, obcaecati ratione eos cumque et unde quam doloribus consectetur reprehenderit! Tenetur maxime voluptates molestiae?',
      date: new Date(2015, 8, 4, 7),
      done: true
    },
    {
      id: 2,
      title: 'Leer una novela',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis nesciunt repellendus deserunt pariatur quidem ab nobis, obcaecati ratione eos cumque et unde quam doloribus consectetur reprehenderit! Tenetur maxime voluptates molestiae?',
      date: new Date(2015, 9, 4, 7),
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
      date: new Date(2015, 8, 4, 9),
      done: false
    },
  ]
  return {
    getAll: function () {
      return todos;
    },
    create: function(todo){
      var todos = this.getAll();
      todos.push(todos);
      return todos;
    },
    delete: function(todo){
      var todos = this.getAll();
      var index = todos.indexOf(todo);
      todos.splice(index, 1);
      return todos;
    },
    getGroupDate: function(){
      var todos = this.getAll().map(function(item){
        var date = new Date(item.date);
        item.shortDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        return item;
      });
      return _.map(_.groupBy(todos, 'shortDate'), function(item, i){
        return {
          date: new Date(i),
          todos: item
        };
      });
    },
  };
});
