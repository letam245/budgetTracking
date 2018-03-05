var app = angular.module('app', []);

app.controller('main', function ($scope) {
    $scope.total = 5000;
    $scope.addRoom = "";
    $scope.addBudget = "";
    $scope.emailAddress = "";

    $scope.rooms = [
        { room: 'living room', budget: 3000 },
        { room: 'master bathroom', budget: 2700 },
        { room: 'guest bedroom', budget: 200 },
        { room: 'outdoors', budget: 1000 },
        { room: 'laundry room', budget: 400 },
        { room: 'kitchen', budget: 3300 },
        { room: 'dining room', budget: 550 },
    ];


    $scope.calculate = function () {
        var budget = $scope.total;
        for (var index in $scope.rooms) {
            budget -= $scope.rooms[index].budget;
        }
        return budget;
    };

    $scope.delete = function (index) {
        console.log(index)
        $scope.rooms.splice(index, 1);
    }

    $scope.add = function () {
        $scope.errortext = "";
        for (i = 0; i < $scope.rooms.length; i++) {
            var t = $scope.rooms[i].room.toUpperCase()
            if ($scope.addRoom.toUpperCase() === t) {
                // alert("this item already exists");
                $scope.errortext = "This item already exists"
                return;
            }
        }
      
        $scope.rooms.push({ room: $scope.addRoom.toUpperCase(), budget: $scope.addBudget })
        $scope.addRoom = "";
        $scope.addBudget = "";
    }

    $scope.email = function () {
        var data = ""
        for (var index in $scope.rooms) {
            data += $scope.rooms[index].room + ': $' + $scope.rooms[index].budget + '.\r\n  ';
        }

        window.open('mailto:' + $scope.emailAddress + '?subject=Finance&body=' + data);
    }

});