var app = angular.module('bootstrapper', ['starter.services', 'ionic', 'ionic.utils', 'ngCordova']);

app.run(function($q, $ionicLoading, $ionicPlatform, $ionicHistory, $ionicPopup, $localStorage, $cordovaNetwork, $state, Year, Sessions, Exhibitors, Speakers, Maps){
	document.addEventListener("deviceready", function () {
		if ($cordovaNetwork.getNetwork() == "none" && !$localStorage.getObject('year').year) {
			$ionicPopup.alert({
				title: "Internet Disconnected",
				content: "The internet is disconnected on your device. Please try again later."
			}).then(function(result) {
				navigator.app.exitApp();
			});
		} else if ($cordovaNetwork.getNetwork() == "none") {
			$ionicLoading.hide();
			angular.bootstrap(document, ['starter']);
		} else {
			load($ionicLoading, $q, Year, Sessions, Speakers, Exhibitors, Maps);
		}

		//Change default behavior of back button
	    $ionicPlatform.registerBackButtonAction(function(event){
	      console.log("Added event here")
	      if ($state.current.name == "app.home"){
	        navigator.app.exitApp();
	      } else {
	        $ionicHistory.goBack();
	      }
	    }, 100);
	});
});

function load($ionicLoading, $q, Year, Sessions, Speakers, Exhibitors, Maps){
	$ionicLoading.show({
			template: '<ion-spinner></ion-spinner><p>Loading...</p>'
		})

		var promises = [];

		promises.push(Year.loadFromWeb());
		promises.push(Sessions.loadFromWeb());
		promises.push(Speakers.loadFromWeb());
		promises.push(Exhibitors.loadFromWeb());
		promises.push(Maps.loadFromWeb());

		$q.all(promises).then(function(results){
			$ionicLoading.hide();
			angular.bootstrap(document, ['starter']);
		});
};