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
  $scope.day = DaySessions;
  $scope.sessions = DaySessions.sessions;
})

.controller('EventsCtrl', function($scope, $stateParams, Sessions, SessionEvents) {
	$scope.dayId = $stateParams.day;
	$scope.sessionId = $stateParams.session;
  $scope.session = SessionEvents;
  $scope.events = SessionEvents.events;
})

.controller('EventCtrl', function($scope, Event) {
  $scope.event = Event;
  $scope.openSurvey = function() {
    cordova.InAppBrowser.open($scope.event.survey, '_blank', 'location=yes');
  };
})

.controller('SpeakersCtrl', function($scope, Speakers) {
  $scope.speakers = Speakers.speakers;
})
.controller('SpeakerCtrl', function($scope, $stateParams, Speaker){
  $scope.speaker = Speaker;
})

.controller('ExhibitorsCtrl', function($scope, Exhibitors) {
  $scope.exhibitors = Exhibitors.exhibitors;
})
.controller('ExhibitorCtrl', function($scope,$stateParams, Exhibitor) {
  $scope.exhibitor = Exhibitor;
})

.controller('MessageCtrl', function($scope, Year){
  $scope.year = Year.year;
});
