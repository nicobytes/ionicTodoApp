angular.module('starter.services', [])

.factory('todoStorage', function() {
  var STORAGE_ID = 'todos';
  return {
    query: function () {
      return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
    },
    save: function (todos) {
      localStorage.setItem(STORAGE_ID, JSON.stringify(todos));
    },
    addTodo: function(todo){
      var newTodo = {
        name: todo.name,
        text: todo.text,
        date: new Date(todo.date),
        done: todo.done || false
      };
      var todos = this.query();
      todos.push(newTodo);
      this.save(todos);
      return todos;
    },
    deleteTodo: function(todo){
      var todos = this.query();
      var index = todos.indexOf(todo);
      todos.splice(index, 1);
      this.save(todos);
      return todos;
    }
  };
});
