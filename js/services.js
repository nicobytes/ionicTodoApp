angular.module('starter.services', [])
.factory('TodoFirebase',[
  '$firebaseArray','$firebaseObject',
  function($firebaseArray, $firebaseObject) {
    return {
      //retorna la referencia a la base de datos 'todos'
      allRef: function(){
        return new Firebase('https://ionic-todoapp.firebaseio.com/todos');
      },
      //La referencia la retorna como un array de firebase
      all: function(){
        return $firebaseArray(this.allRef());
      },
      //retorna la referencia  a un objeto 'todo'
      getRef: function(id){
        return new Firebase('https://ionic-todoapp.firebaseio.com/todos/' + id);
      },
      //La referencia la retorna como un objeto de firebase
      get: function(id){
        return $firebaseObject(this.getRef(id));
      }
    };
  }
])
.factory('todoService', function(TodoFirebase) {
  var todos = TodoFirebase.all();
  return {
    getAll: function () {
      return todos;
    },
    create: function(todo){
      todos.$add({
        title: todo.title,
        description: todo.description,
        date: new Date(todo.date).getTime(),
        done: todo.done || false
      });
    },
    update: function(todo){
      var todoObj = TodoFirebase.getRef(todo.$id);
      todoObj.update({
        title: todo.title,
        description: todo.description,
        date: new Date(todo.date).getTime(),
        done: todo.done || false
      });
    },
    delete: function(todo){
      var todoObj = TodoFirebase.getRef(todo.$id);
      todoObj.remove();
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
