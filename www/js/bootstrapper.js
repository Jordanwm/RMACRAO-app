var app = angular.module('bootstrapper', ['starter.services', 'ionic', 'ionic.utils']);

app.run(function($q, $ionicLoading, $ionicPlatform, Year, Sessions, Exhibitors, Speakers, Maps){
	$ionicLoading.show({
		template: 'Loading...'
	})

	var promises = [];

	promises.push(Year.loadFromWeb());
    promises.push(Sessions.loadFromWeb());
    promises.push(Speakers.loadFromWeb());
    promises.push(Exhibitors.loadFromWeb());
    promises.push(Maps.loadFromWeb());

    $q.all(promises).then(function(results){
    	$ionicPlatform.ready(function() {
			angular.bootstrap(document, ['starter']);
			$ionicLoading.hide();
		});
    });
});