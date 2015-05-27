angular.module('starter.services', [])

.factory('Exhibitors', function($http){
  var o = {};
  o.exhibitors = [
    /*{
      name: "CollegeNET",
      address: "805 SW Broadway, Suite 1600",
      city: "Portland",
      state: "OR",
      zip: "97205",
      staff: ["Bruce Sylva"],
      description: "CollegeNET, Inc. is a leader in providing web-based on-demand technologies, helping institutions improve services to students and prospects, reduce paper consumption and save money. CollegeNET’s Series 25© web-based administrative systems provide optimized course and event scheduling and management, e-calendar publishing, ticket and merchandise sales, facilities and resource management, and master planning."
    },
    {
      name: "CollegeSource, Inc.",
      address: "1327 E Kemper Rd, Suite 3000",
      city: "Cincinnati",
      state: "OH",
      zip: "45246",
      staff: ["Melani Pratt", "Shelly Jackson"],
      description: "CollegeSource, Inc. has been creating information technology solutions for higher education since 1971. More than 2,000 institutions and millions of users worldwide utilize CollegeSource products for degree audit, degree planning, and transfer articulation."
    },
    {
      name: "College Scheduler LLC",
      address: "389 Connors Ct, Suite E",
      city: "Chico",
      state: "CA",
      zip: "95926",
      staff: ["Haley Zitnitsky", "Jonathan Dela Cruz", "Brett Conner"],
      description: "College Scheduler provides a web-basd schedule planner for use by students to create schedules each semester. Our institutions experience increased enrollment credit hours, increased on time graduation and time savings in academic advising! Real time course demand reports available to Registrar’s Office. Works with Banner, Datatel, PeopleSoft & Homegrown. Used by 52+ institutions around the country large & small"
    },
    {
      name: "Credentials Solutions",
      address: "436 W Frontage Rd, Suite 200",
      city: "Northfield",
      state: "IL",
      zip: "60093",
      staff: ["Thomas McKechney"],
      description: "Founded in 1997, Credentials Solutions specializes in a suite of online services. TranscriptsPlus®, working with SIS integrated software RoboRegistrar®, automates the delivery of all forms of electronic transcripts as well as the printing/mailing of paper transcripts. The ParkingPlus® service issues and manages parking permits.  All services include 12 hour/day customer service."
    },
    {
      name: "Digital Architecture",
      address: "5015 South Florida Avenue",
      city: "Lakeland", 
      state: "FL",
      zip: "33813",
      staff: ["John Schoenborn"],
      description: "Digital Architecture transforms the way colleges and universities manage curriculum from inception, through the approval process and publication.  Acalog™ is the leading academic catalog management system, delivering thousands of e-catalogs at hundreds of colleges and universities. Our curriculum management system, Curriculog™, transforms a cumbersome and complex curriculum path into an intuitive, automated process."
    }*/
  ];
  o.getAll = function(){
    $http.get('localhost:8000/api/exhibitors').success(function(data){
      o.exhibitors = angular.copy(data);
    });
  };
  return o;
})

.factory('Speakers', function(){
	var o = {};
	o.speakers = [
    {
      name: "Dr. Alan C. Lamborn",
      session: "Opening Session",
      day: "Wednesday, July 17th",
      time: "12:30 - 2:00",
      location: "Grand Ballroom",
      title: "The Case for Interdivisional Collaboration: A Sudden Transition from Best Practice to Necessity"
    },
    {
      name: "Mike Reilly",
      session: "General Session",
      day: "Thursday, July 18th",
      time: "1:30 - 3:00",
      location: "Grand Ballroom",
      title: "Federal & AACRAO Updates"
    },
    {
      name: "Robin Brown, Ph.D.",
      session: "Closing Session",
      day: "Friday, July 19th",
      time: "11:00 - 12:30",
      location: "Grand Ballroom",
      title: "You've Got to Bring It!"
    },
    {
      name: "LeRoy Rooker",
      session: "FERPA Update",
      day: "Thursday, July 18th",
      time: "3:15 - 4:15 & 4:30 - 5:30",
      location: "Windsor I"
    }
  ];
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