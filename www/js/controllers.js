angular.module('starter.controllers', [])

.controller('WelcomeCtrl', function($scope, $ionicHistory, $ionicScrollDelegate, Year){
  $scope.year = Year.year;
  $ionicHistory.nextViewOptions({
    disableBack: true
  });
  $scope.show = false;
  $scope.showMessage = function(){
    $scope.show = !$scope.show;
    $ionicScrollDelegate.resize()
  };
})

.controller('HomeCtrl', function($scope, Year){
  $scope.year = Year.year;
})

.controller('DaysCtrl', function($scope, Sessions) {
  $scope.days = Sessions.days;
})

.controller('SessionsCtrl', function($scope, $stateParams, DaySessions) {
  $scope.dayId = $stateParams.day;
  $scope.sessions = DaySessions;
})

.controller('EventsCtrl', function($scope, $stateParams, Sessions, SessionEvents) {
	$scope.dayId = $stateParams.day;
	$scope.sessionId = $stateParams.session;
  $scope.time = Sessions.days[$stateParams.day].sessions[$stateParams.session].time;
  $scope.events = Sessions.days[$stateParams.day].sessions[$stateParams.session].events;
  $scope.events = eventspromise;
})

.controller('EventCtrl', function($scope, $stateParams, Sessions) {
  $scope.event = Sessions.days[$stateParams.day].sessions[$stateParams.session].events[$stateParams.event];
})



.controller('SpeakersCtrl', function($scope, Speakers) {
  $scope.speakers = Speakers.speakers;
})
.controller('ExhibitorsCtrl', function($scope, Exhibitors) {
  $scope.exhibitors = Exhibitors.exhibitors;
})

.controller('SpeakerCtrl', function($scope, $stateParams, Speaker){
  $scope.speaker = Speaker;
})
.controller('ExhibitorCtrl', function($scope,$stateParams, Exhibitor) {
  $scope.exhibitor = Exhibitor;
})





.controller('MessageCtrl', function($scope, Year){
  $scope.year = Year.year;
});
