// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ionic.utils', 'ngCordova'])

.run(function($ionicPlatform, $cordovaSplashscreen, $location, $state) {
  document.addEventListener("deviceready", function(){
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      //StatusBar.styleDefault();
    }

    $cordovaSplashscreen.hide();
    $location.path("/welcome");
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
  })

  .state('welcome', {
    url: "/welcome",
    controller: 'WelcomeCtrl',
    templateUrl: "templates/welcome.html",
    resolve: {
      yearPromise: function(Year){
        return Year.getYear();
      }
    }
  })

  .state('app.home', {
    url: "/home",
    views: {
      'menuContent': {
        templateUrl: "templates/home.html",
        controller: "HomeCtrl",
        resolve: {
          yearPromise: function(Year){
            return Year.getYear();
          }
        }
      }
    }
  })

  .state('app.days', {
    url: "/days",
    views: {
      'menuContent': {
        templateUrl: "templates/days.html",
        controller: 'DaysCtrl',
        resolve: {
          daysPromise: function(Sessions) {
            return Sessions.getDays();
          }
        }
      }
    }
  })
  
  .state('app.sessions', {
    url: "/days/:day",
    views: {
      'menuContent': {
        templateUrl: "templates/sessions.html",
        controller: 'SessionsCtrl',
        resolve: {
          DaySessions: function(Sessions, $stateParams){
            return Sessions.getSessions($stateParams.day).then(function(data){
              return data;
            });
          }
        }
      }
    }
  })
  
  .state('app.events', {
    url: "/days/:day/session/:session",
    views: {
      'menuContent': {
        templateUrl: "templates/events.html",
        controller: 'EventsCtrl',
        resolve: {
          SessionEvents: function(Sessions, $stateParams){
            return Sessions.getEvents($stateParams.day, $stateParams.session).then(function(data){
              return data;
            });
          }
        }
      }
    }
  })

  .state('app.event', {
    url: "/days/:day/session/:session/event/:event",
    views: {
      'menuContent': {
        templateUrl: "templates/event.html",
        controller: 'EventCtrl',
        resolve: {
          Event: function(Sessions, $stateParams){
            return Sessions.getEvent($stateParams.day, $stateParams.session, $stateParams.event).then(function(data){
              return data;
            });
          }
        }
      }
    }
  })

  .state('app.speakers', {
    url: "/speakers",
    views: {
      'menuContent': {
        templateUrl: "templates/speakers.html",
        controller: 'SpeakersCtrl',
        resolve: {
          speakersPromise: function(Speakers){
            return Speakers.getSpeakers();
          }
        }
      }
    }
  })

  .state('app.speaker', {
    url: "/speakers/:speaker",
    views: {
      'menuContent': {
        templateUrl: "templates/speaker.html",
        controller: 'SpeakerCtrl',
        resolve: {
          Speaker: function(Speakers, $stateParams){
            return Speakers.getSpeaker($stateParams.speaker);
          }
        }
      }
    }
  })

  .state('app.exhibitors', {
    url: "/exhibitors",
    views: {
      'menuContent': {
        templateUrl: "templates/exhibitors.html",
        controller: 'ExhibitorsCtrl',
        resolve: {
          exhibitorsPromise: function(Exhibitors){
            return Exhibitors.getExhibitors();
          }
        }
      }
    }
  })

  .state('app.exhibitor', {
    url: "/exhibitors/:exhibitor",
    views: {
      'menuContent': {
        templateUrl: "templates/exhibitor.html",
        controller: 'ExhibitorCtrl',
        resolve: {
          Exhibitor: function(Exhibitors, $stateParams){
            return Exhibitors.getExhibitor($stateParams.exhibitor);
          }
        }
      }
    }
  })

  .state('app.info', {
    url: "/info",
    views: {
      'menuContent': {
        templateUrl: "templates/info.html",
      }
    }
  })

  .state('app.maps', {
    url: "/maps",
    views: {
      'menuContent': {
        templateUrl: "templates/maps.html",
        controller: "MapsCtrl",
        resolve: {
          mapsPromise: function(Maps){
            return Maps.getMaps();
          }
        }
      }
    }
  })
  
  .state('app.president_message', {
    url: "/message",
    views: {
      'menuContent': {
        templateUrl: "templates/message.html",
        controller: "MessageCtrl",
        resolve: {
          yearPromise: function(Year){
            return Year.getYear();
          }
        }
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
