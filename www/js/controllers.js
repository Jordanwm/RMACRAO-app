angular.module('starter.controllers', [])

.controller('WelcomeCtrl', function($scope, Year){
  $scope.year = Year.year;
})

.controller('HomeCtrl', function($scope, Year){
  $scope.year = Year.year;
})

.controller('DaysCtrl', function($scope, Sessions) {
  $scope.days = Sessions.days;
})

.controller('SessionsCtrl', function($scope, $stateParams, Sessions) {
	$scope.dayId = $stateParams.day;
  $scope.day = Sessions.days[$stateParams.day].day;
  $scope.sessions = Sessions.days[$stateParams.day].sessions;
})

.controller('EventsCtrl', function($scope, $stateParams, Sessions) {
	$scope.dayId = $stateParams.day;
	$scope.sessionId = $stateParams.session;
  $scope.time = Sessions.days[$stateParams.day].sessions[$stateParams.session].time;
  $scope.events = Sessions.days[$stateParams.day].sessions[$stateParams.session].events;
})

.controller('EventCtrl', function($scope, $stateParams, Sessions) {
  $scope.event = Sessions.days[$stateParams.day].sessions[$stateParams.session].events[$stateParams.event];
})

.controller('SpeakersCtrl', function($scope, Speakers) {
  $scope.speakers = Speakers.speakers;
})

.controller('SpeakerCtrl', function($scope, $stateParams, Speakers){
  $scope.speaker = Speakers.speakers[$stateParams.speaker];
})

.controller('ExhibitorsCtrl', function($scope, Exhibitors) {
  $scope.exhibitors = Exhibitors.exhibitors;
})

.controller('ExhibitorCtrl', function($scope,$stateParams, Exhibitors) {
  $scope.exhibitor = Exhibitors.exhibitors[$stateParams.exhibitor];
});
