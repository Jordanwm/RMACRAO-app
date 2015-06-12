angular.module('ionic.utils', [])

.factory('$localStorage', function($window){
  return {
    set: function(key, value) {
      $window.localStorage[key] = value;
    },
    get: function(key, defaultValue) {
      return $window.localStorage[key] || defaultValue;
    },
    setObject: function(key, value) {
      $window.localStorage[key] = JSON.stringify(value);
    },
    getObject: function(key) {
      return JSON.parse($window.localStorage[key] || '{}');
    }
  }
});

//STARTER SERVICES
angular.module('starter.services', ['ionic.utils'])

.factory('Year', function($http, $localStorage, $q){
  var o = {};
  o.year = [];
  o.getYear = function(){
    var dfr = $q.defer()

    dfr.resolve(o.year = $localStorage.getObject('year'));

    return dfr.promise;
  };
  o.loadFromWeb = function(){
    return $http.get('http://mobiledev.rmacrao.org/api/year').success(function(data){
      $localStorage.setObject('year', angular.copy(data));
    });
  };
  return o;
})

.factory('Exhibitors', function($http, $q, $localStorage){
  var o = {};
  o.exhibitors = [];
  o.getExhibitor = function(index) {
    var dfr = $q.defer();

    dfr.resolve($localStorage.getObject('exhibitors')[index]);

    return dfr.promise;
  }
  o.getExhibitors = function() {
    var dfr = $q.defer();

    dfr.resolve(o.exhibitors = $localStorage.getObject('exhibitors'));

    return dfr.promise;
  }
  o.loadFromWeb = function(){
    return $http.get('http://mobiledev.rmacrao.org/api/exhibitors').then(function(res){
      $localStorage.setObject('exhibitors', angular.copy(res.data));
    });
  };
  return o;
})

.factory('Speakers', function($http, $q, $localStorage){
  var o = {};
  o.speakers = [];
  o.getSpeaker = function(index) {
    var dfr = $q.defer();

    dfr.resolve($localStorage.getObject('speakers')[index]);

    return dfr.promise;
  }
  o.getSpeakers = function() {
    var dfr = $q.defer();

    dfr.resolve(o.speakers = $localStorage.getObject('speakers'));

    return dfr.promise;
  }
  o.loadFromWeb = function(){
    return $http.get('http://mobiledev.rmacrao.org/api/speakers').then(function(res){
      $localStorage.setObject('speakers', angular.copy(res.data));
    });
  };
  return o;
})

.factory('Sessions', function($http, $q, $localStorage){
	var o = {};
	o.days = [];
  o.sessions = [];
  o.getDays = function() {
    var dfr = $q.defer();

    dfr.resolve(o.days = $localStorage.getObject('days'));

    return dfr.promise;
  };
  o.getSessions = function(id) {
    var dfr = $q.defer();

    dfr.resolve($localStorage.getObject('days')[id].sessions);

    return dfr.promise;
  };
  o.loadFromWeb = function(){
    return $http.get('http://mobiledev.rmacrao.org/api/days').then(function(res){
      $localStorage.setObject('days', angular.copy(res.data));
    });
  };
  return o;
});