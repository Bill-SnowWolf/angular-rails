App.controller('TodosCtrl', ['$scope', 'Todo', function($scope, Todo) {  
  $scope.todos        = Todo.query();
  $scope.selectedTodo = null;

  // Set the selected screencast to the one which was clicked.
  $scope.showTodo = function( todo ){
    $scope.selectedTodo = todo
  };

}]);