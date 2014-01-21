function TodoCtrl($scope){
    $scope.todos= [
        {text:'Planejar o próximo estudo da kolaborativa.', done:true},
        {text:'Organizar o Akademia php.', done:false}];

    $scope.addTodo = function (){
        $scope.todos.push({text:$scope.todoText,done:false});
        $scope.todoText='';
    };
    $scope.remaining= function (){};
    $scope.archive = function (){};

}
