angular.module('specter.tab.create.controller', ['restangular'])
.controller('createCtrl', ['$scope', '$ionicActionSheet', '$ionicPopup', 
  'Restangular', 'stacheService', function($scope, $ionicActionSheet, 
    $ionicPopup, Restangular, stacheService){
    $scope.data = {
      currentTags: {}
    };

    // Triggered on a button click, or some other target
    $scope.show = function() {
      // Show the action sheet
      var hideSheet = $ionicActionSheet.show({
        buttons: [{
          text: 'Funny'
        }, {
          text: 'Puzzle'
        }, {
          text: 'Event'
        }, {
          text: 'Add a tag...'
        }],
        addText: 'Add a tag',
        cancelText: 'Done',
        cancel: function() {
          // add cancel code..
        },
        buttonClicked: function(index, data) {
          if (index === 3) {
            // clicked add tags button
            $scope.showPopup();
          } else {
            $scope.data.currentTags[data.text] = true;
          }
        }
      });

      // For example's sake, hide the sheet after two seconds
      // $timeout(function() {
      //   hideSheet();
      // }, 2000);

    };

    $scope.showPopup = function() {
      var myPopup = $ionicPopup.show({
        template: '<input type="text" ng-model="data.newTag">',
        title: 'Enter a new tag',
        // subTitle: 'Please use normal things',
        scope: $scope,
        buttons: [{
          text: 'Cancel'
        },
        {
          text: '<b>Save tag</b>',
          type: 'button-positive',
          onTap: function(e) {
            $scope.data.currentTags[$scope.data.newTag] = true;
            $scope.data.newTag = '';
          }
        }, ]
      });
      myPopup.then(function(res) {
        // console.log('Tapped!', res);
      });
    };

    $scope.saveStache = function() {
       var newStache = {
          title: $scope.data.titleText,
          author: 'cool mitch',
          lon: 40,
          lat: 5,
          content: 'this is a cool test stache',
          locked: false,
          clue:'',
          password: null,
          tags: Object.keys($scope.data.currentTags)
        };
      stacheService.saveStache(newStache);
    };
}]);


  // function($scope, $ionicActionSheet, $ionicPopup, $timeout, Restangular) {

  
  // };

  // $scope.saveStache = function() {
  //   var staches = Restangular.all('staches');

  //   var newStache = {
  //     title: $scope.data.titleText,
  //     author: 'cool mitch',
  //     lon: 40,
  //     lat: 5,
  //     content: 'this is a cool test stache',
  //     locked: false,
  //     clue:'',
  //     password: null,
  //     tags: Object.keys($scope.data.currentTags)
  //   };
  //   console.log('saving', newStache);
  //   staches.post(newStache);
  // };
// });
