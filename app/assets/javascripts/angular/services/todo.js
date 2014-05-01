App.factory('Todo', ['$resource', function($resource){ 
  return $resource('/api/todos/:id', {id:'@id'});
}]);