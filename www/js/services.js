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

.factory('Sessions', function(){
	var o = {};
	o.days = [
    {
    	day: "Wednesday",
    	sessions: [
    		{time: "7:30 - 5:30", name: "Registration Open", events: [
    			{
    				title: "Registration Open",
    				location: "Foyer"
    			}
    		]},
			  {time: "8:00 - 11:00", name: "Pre-Conference Workshop", events: [
			  	{
			  		title: "Creating a Respectful Working Environment", 
			  		description: "Nearly everyone would say they want a respectful working environment.",
			  		presenters: ["Thomas Sebok"],
			  		intro: "Sally Page",
			  		location: "Windsor I"
			  	}
			  ]},
			  {time: "11:00 - 12:30", name: "First Timers Luncheon", events: [
			  	{
			  		title: "First Time Attendee Luncheon",
			  		description: "Are you new to RMACRAO?",
			  		location: "Windsor II"
			  	}
			  ]},
			  {time: "12:00 - 5:30", name: "Exhibitor Area Open", events: [
          {
            title: "Exhibitor Area Open",
            location: "Salon D"
          }
        ]},
			  {time: "12:30 - 2:00", name: "Opening Session", events: [
          {
            title: "The Case for Interdivisional Collaboration: A Sudden Transition from Best Practice to Necessity",
            description: "Over the last six to ten years there has been a dramatic increase in conversation on- and off-campus about the best ways to deepen student learing, improve persistence and graduation rates, decrease time to degree completion, and expand access to historically underserved populations.",
            presenters: ["Dr. Alan Lamborn"],
            intro: "Chris Seng",
            locations: "Centennial Ballroom"
          }
        ]},
			  {time: "2:00 - 2:30", name: "Refreshments Break with Exhibitors", events: [
          {
            title: "Refreshments Break with Exhibitors",
            locations: "Salon D"
          }
        ]},
			  {time: "2:30 - 3:30", name: "Concurrent Sessions I", events: [
          {
            title: "It is an Art not a Science-International Transfer Evaluation Roundtable",
            description: "Most people who work with International Transfer Evaluation know it is much more of an art than it will ever be a science.",
            presenters: ["Dawn Carver", "Lois Frederick"],
            intro: "Susan Wheeler",
            location: "Windsor II"
          },
          {
            title: "Military/Veteran Friendly Really?",
            description: "This presentation will review the topic of what truly makes an institution military and veteran friendly.",
            presenters: ["Marc Barker", "Glen Vance"],
            intro: "Jacobo Varela",
            location: "Windsor I"
          },
          {
            title: "Without a Doubt: Identifying Students for Customer Service Pursposes",
            description: "This panel presentation will discuss how to positively identify students and former students via phone, email, or live chat in order to allow access to online records or provide customer service concerning academic records within the bounds of FERPA.",
            presenters: ["Susan Dorsey", "Stephanie Protsman", "Renee Seidel", "Ilene Withers"],
            intro: "Jeanne Breiner",
            location: "Cheyenne I"
          },
          {
            title: "Parchment Exchange - eTranscripts and More!",
            description: "Parchment - the 'leader in eTranscipt Exchange' will showcase the latest enhanced platfrom for electronic transcripts with Parchment's Send and Receive services.",
            presenters: ["Dennis Dulniak", "Corey Wahl"],
            intro: "Matt Smith",
            location: "Greeley"
          }
        ]},
			  {time: "3:45 - 4:45", name: "Concurrent Sessions II"},
			  {time: "5:30 - 5:45", name: "Group Photo"},
			  {time: "5:45 - 7:45", name: "President's Reception"}
    	]
    },
    {
    	day: "Thursday",
    	sessions: [
    		{time: "8:00 - 6:00", name: "Registration Open"},
    		{time: "8:00 - 11:30", name: "Exhibitor Area Open"},
    		{time: "8:00 - 9:30", name: "Concurrent Sessions III"},
    		{time: "9:30 - 10:00", name: "Refreshments Break with Exhibitors"},
    		{time: "10:00 - 11:00", name: "Concurrent Sessions IV"},
    		{time: "11:15 - 1:00", name: "RMACRAO Luncheon & Business Meeting"},
    		{time: "1:00 - 1:30", name: "Dessert with Exhibitors"},
    		{time: "1:30 - 5:30", name: "Exhibitor Area Open"},
    		{time: "1:30 - 3:00", name: "General Session"},
    		{time: "3:15 - 4:15", name: "Concurrent Sessions V"},
    		{time: "4:30 - 5:30", name: "Concurrent Sessions VI"},
    		{time: "6:00 - 10:00", name: "BBQ in Old Town"}
    	]
    },
    {
    	day: "Friday",
			sessions: [
				{time: "8:00 - 10:30", name: "Registration Open"},
				{time: "8:00 - 11:00", name: "Exhibitor Area Open"},
				{time: "8:15 - 9:15", name: "Concurrent Sessions VII"},
				{time: "9:15 - 9:45", name: "Refreshements with Exhibitors"},
				{time: "9:45 - 10:45", name: "Concurrent Sessions VIII"},
				{time: "11:00 - 12:30", name: "Closing Session"},
				{time: "1:00 - 3:00", name: "RMACRAO Board of Directors Meeting"},
				{time: "1:30 - 4:00", name: "Banner Users of Mount States (BUMS) Meeting"}
			]
		}
  ];
  return o;
});