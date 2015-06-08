// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ionic.utils'])

.run(function($ionicPlatform, $http, Year) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
    
    Year.loadFromWeb();

  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
  })

  .state('app.welcome', {
    url: "/welcome",
    views: {
      'menuContent': {
        controller: 'WelcomeCtrl',
        templateUrl: "templates/welcome.html",
        resolve: {
          yearPromise: function(Year){
            return Year.getYear();
          }
        }
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
        controller: 'DaysCtrl'
      }
    }
  })
  
  .state('app.sessions', {
    url: "/days/:day",
    views: {
      'menuContent': {
        templateUrl: "templates/sessions.html",
        controller: 'SessionsCtrl'
      }
    }
  })
  
  .state('app.events', {
    url: "/days/:day/session/:session",
    views: {
      'menuContent': {
        templateUrl: "templates/events.html",
        controller: 'EventsCtrl'
      }
    }
  })

  .state('app.event', {
    url: "/days/:day/session/:session/event/:event",
    views: {
      'menuContent': {
        templateUrl: "templates/event.html",
        controller: 'EventCtrl'
      }
    }
  })

  .state('app.speakers', {
    url: "/speakers",
    views: {
      'menuContent': {
        templateUrl: "templates/speakers.html",
        controller: 'SpeakersCtrl'
      }
    }
  })

  .state('app.speaker', {
    url: "/speakers/:speaker",
    views: {
      'menuContent': {
        templateUrl: "templates/speaker.html",
        controller: 'SpeakerCtrl'
      }
    }
  })

  .state('app.exhibitors', {
    url: "/exhibitors",
    views: {
      'menuContent': {
        templateUrl: "templates/exhibitors.html",
        controller: 'ExhibitorsCtrl'
      }
    }
  })

  .state('app.exhibitor', {
    url: "/exhibitors/:exhibitor",
    views: {
      'menuContent': {
        templateUrl: "templates/exhibitor.html",
        controller: 'ExhibitorCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/welcome');
});
