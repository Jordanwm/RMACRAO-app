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

.controller('HomeCtrl', function($scope, $ionicHistory, Year){
  $scope.year = Year.year;
})

.controller('DaysCtrl', function($scope, Sessions) {
  $scope.days = Sessions.days;
})

.controller('SessionsCtrl', function($scope, $state, $stateParams, DaySessions) {
  $scope.dayId = $stateParams.day;
  $scope.day = DaySessions;
  $scope.sessions = DaySessions.sessions;
  $scope.goToEvents = function(index){
    if ($scope.sessions[index].events.length > 1 || $scope.sessions[index].events.length === 0){
      $state.go('app.events', {day: $scope.dayId, session: index});
    } else if ($scope.sessions[index].events.length === 1) {
      $state.go('app.event', {day: $scope.dayId, session: index, event: 0});
    }
  };
})

.controller('EventsCtrl', function($scope, $stateParams, Sessions, SessionEvents) {
	$scope.dayId = $stateParams.day;
	$scope.sessionId = $stateParams.session;
  $scope.session = SessionEvents;
  $scope.events = SessionEvents.events;
})

.controller('EventCtrl', function($scope, $sce, $ionicModal, Event) {
  $scope.event = Event;
  $scope.survey = $sce.trustAsResourceUrl($scope.event.survey + '?embedded=true');

  $ionicModal.fromTemplateUrl('templates/survey.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.openModal = function() {
    $scope.modal.show();
  };

  $scope.closeModal = function() {
    $scope.modal.hide();
  };

  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });

  // $scope.openSurvey = function() {
  //   cordova.InAppBrowser.open($scope.event.survey, '_blank', 'location=yes');
  // };

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

.controller('MapsCtrl', function($scope, $ionicModal, Maps) {
  $scope.maps = Maps.maps;

  $ionicModal.fromTemplateUrl('templates/map.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.openModal = function() {
    $scope.modal.show();
  };

  $scope.closeModal = function() {
    $scope.modal.hide();
  };

  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });

  $scope.imageSrc = '';
  $scope.name = '';

  $scope.showImage = function(index) {
    $scope.imageSrc = "http://mobiledev.rmacrao.org/";
    $scope.imageSrc += $scope.maps[index].img_path;
    console.log($scope.imageSrc);
    $scope.name = $scope.maps[index].name
    $scope.openModal();
  }

  $scope.showErr = false;
  $scope.error = function(el){
    el.style.display = 'none';
    $scope.showErr = true;
  };
})

.controller('MessageCtrl', function($scope, Year){
  $scope.year = Year.year;
});