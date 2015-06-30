/**
 * Each section of the site has its own module. It probably also has
 * submodules, though this boilerplate is too simple to demonstrate it. Within
 * `src/app/home`, however, could exist several additional folders representing
 * additional modules that would then be listed as dependencies of this one.
 * For example, a `note` section could have the submodules `note.create`,
 * `note.delete`, `note.edit`, etc.
 *
 * Regardless, so long as dependencies are managed correctly, the build process
 * will automatically take take of the rest.
 *
 * The dependencies block here is also where component dependencies should be
 * specified, as shown below.
 */
angular.module( 'ngBoilerplate.home', [
  'ui.router',
  'plusOne'
])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
.config(function config( $stateProvider ) {
  $stateProvider.state( 'home', {
    url: '/home',
    views: {
      "main": {
        controller: 'HomeCtrl',
        templateUrl: 'home/home.tpl.html'
      }
    },
    data:{ 
      pageTitle: 'Home'
    }
  });
})

/**
 * And of course we define a controller for our route.
 */
.controller( 'HomeCtrl', function HomeController( $scope ) {
  
  $scope.temperature = getRandomNumber(6, 20).toString();
  
  
  randomDate = randomDate(new Date(2015, 0, 1), new Date());
  $scope.dayOfTheWeek = weekday[randomDate.getDay()];
  $scope.day = randomDate.getDate().toString();
  $scope.month = randomDate.getMonth().toString();
  
  var daysOfTheWeek = new Array(7);
  daysOfTheWeek[0]=  "Sunday";
  daysOfTheWeek[1] = "Monday";
  daysOfTheWeek[2] = "Tuesday";
  daysOfTheWeek[3] = "Wednesday";
  daysOfTheWeek[4] = "Thursday";
  daysOfTheWeek[5] = "Friday";
  daysOfTheWeek[6] = "Saturday";
  
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }
  
  
});

