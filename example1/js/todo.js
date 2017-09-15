angular.module('todoApp', [])
  .controller('TodoListController', function() {
    var todoList = this;
    todoList.todos = [{ //elementos visibles por default en la lista en formato json {key:'value', 'value', key:'value'}
        text: 'learn AngularJS',
        done: true
      },
      {
        text: 'build an checkbox list',
        done: false
      },
      {
        text: 'build an AngularJS app',
        done: false
      }
    ];

    todoList.addTodo = function() { //funcion asignada al formulario en html
      todoList.todos.push({ //agrega un item a la lista llamando a la funcion
        text: todoList.todoText, //agrega el texto del input
        done: false //asigna un valor false para asignar al contador el numero de intems incompletos
      });
      todoList.todoText = ''; //dejar el campo vacio una vez enviado el item
    };

    todoList.remaining = function() {
      var count = 0; //contador inicializado en cero
      angular.forEach(todoList.todos, function(todo) { //
        count += todo.done ? 0 : 1; //asigna un valor si el item esta o no seleccionado para mostrar el valor restante de los elementos
      });
      return count;//regresa el valor total en la variable 'remaining'
    };

    todoList.archive = function() { //funcion para eliminar los item dentro de la lista
      var oldTodos = todoList.todos;
      todoList.todos = [];
      angular.forEach(oldTodos, function(todo) { 
        if (!todo.done) todoList.todos.push(todo); //compara si en la lista los item son verdaderos o falsos
      });
    };
  });
