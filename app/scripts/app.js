var app = angular.module('rappiDemo', ['ngAnimate']);

/*var news = [
  {
	"id": 1,
	"title": "AGOTADO CHALECO DOBLE FAZ BOGOTÁ HUMANA/CLARA ALCALDESA",
	"content": "Ni un solo ejemplar del chaleco doble faz “Bogotá Humana-Clara alcaldesa” quedaba esta mañana en las dependencias distritales. La prenda, marca Polo, desde luego, ha sido muy apetecida por los funcionarios de la Bogotá Humana por lo práctica que les resulta.",
	"image": "http://lorempixel.com/300/300"
  },
  {
	"id": 2,
	"title": "Falcao pide no ir sentado en el bus de la selección",
	"content": "Una novedad inesperada trajo el nuevo bus de la selección Colombia que será estrenado por el equipo de Pekerman la próxima semana cuando este se reúna para enfrentar a Perú en Barranquilla por la primera fecha de las eliminatorias a Rusia 2018.",
	"image": "http://lorempixel.com/300/300"
  },
  {
	"id": 3,
	"title": "El Papa y el Che fueron al mismo preescolar",
	"content": "Aimar, Bergoglio, Cáceres, D’Alessio, Enriquez, Fontanini, Guevara, Hammet…” No es la alineación de un equipo de fútbol argentino. Es la lista de párvulos encontrada en el archivo de la escuela Héroes del Mañana en San Isidro, Provincia de Buenos Aires, Argentina, que encontró hace menos de un mes Horacio Maidana, biógrafo argentino de Jorge Mario Bergoglio, al seguir los pequeños pasos de la infancia del Sumo Pontífice.",
	"image": "http://lorempixel.com/300/300"
  },
  {
	"id": 41,
	"title": "“NADA DE ECLIPSE, ATENTADO DE LA FAR DEJÓ SIN LUZ A LA LUNA”, DENUNCIA URIBE",
	"content": "Iracundo y desencajado, el expresidente Álvaro Uribe denunció hoy en rueda de prensa que la sombra que cubrió a la luna el pasado domingo en la noche fue un corte masivo de luz consecuencia de un atentado del frente “Compañera Laika” de las Farc.",
	"image": "http://lorempixel.com/300/300"
  }
]
*/

//var app = angular.module("myApp", []);
//app.controller("myCtrl", function($scope) {
//})//;

app.controller('newsCtrl', function ($scope) {
	$scope.headTitle = "";
	$scope.news = [
	{
		"id": 1,
		"title": "AGOTADO CHALECO DOBLE FAZ BOGOTÁ HUMANA/CLARA ALCALDESA",
		"content": "Ni un solo ejemplar del chaleco doble faz “Bogotá Humana-Clara alcaldesa” quedaba esta mañana en las dependencias distritales. La prenda, marca Polo, desde luego, ha sido muy apetecida por los funcionarios de la Bogotá Humana por lo práctica que les resulta.",
		"image": "http://lorempixel.com/300/300"
	},{
		"id": 2,
		"title": "Falcao pide no ir sentado en el bus de la selección",
		"content": "Una novedad inesperada trajo el nuevo bus de la selección Colombia que será estrenado por el equipo de Pekerman la próxima semana cuando este se reúna para enfrentar a Perú en Barranquilla por la primera fecha de las eliminatorias a Rusia 2018.",
		"image": "http://lorempixel.com/300/300"
	},{
		"id": 3,
		"title": "El Papa y el Che fueron al mismo preescolar",
		"content": "Aimar, Bergoglio, Cáceres, D’Alessio, Enriquez, Fontanini, Guevara, Hammet…” No es la alineación de un equipo de fútbol argentino. Es la lista de párvulos encontrada en el archivo de la escuela Héroes del Mañana en San Isidro, Provincia de Buenos Aires, Argentina, que encontró hace menos de un mes Horacio Maidana, biógrafo argentino de Jorge Mario Bergoglio, al seguir los pequeños pasos de la infancia del Sumo Pontífice.",
		"image": "http://lorempixel.com/300/300"
	},{
		"id": 41,
		"title": "“NADA DE ECLIPSE, ATENTADO DE LA FAR DEJÓ SIN LUZ A LA LUNA”, DENUNCIA URIBE",
		"content": "Iracundo y desencajado, el expresidente Álvaro Uribe denunció hoy en rueda de prensa que la sombra que cubrió a la luna el pasado domingo en la noche fue un corte masivo de luz consecuencia de un atentado del frente “Compañera Laika” de las Farc.",
		"image": "http://lorempixel.com/300/300"
	}];

	$scope.showDetail = function (n) {
		if ($scope.active != n.title) {
    		$scope.active = n.title;
    		$scope.headTitle = n.title
    	} else {
			$scope.active = null;
			$scope.headTitle = "";
	    }
	};/*function Main($scope, $http){
  
  $http.get('http://api.randomuser.me/0.4/?results=20').success(function(data) {
	$scope.users = data.results;
	$('#loader').hide();
	$('#userList').show();
  }).error(function(data, status) {
	alert('get data error!');
  });
  
  $scope.showDetail = function (u) {
	if ($scope.active != u.username) {
	  $scope.active = u.username;
	}
	else {
	  $scope.active = null;
	}
  };*/
  
  /*$scope.doPost = function() {
  
	$http.get('http://api.randomuser.me/0.4/').success(function(data) {
	  
	  var newUser = data.results[0];
	  newUser.user.text = $('#inputText').val();
	  newUser.date = new Date();
	  $scope.users.push(newUser);
   
	}).error(function(data, status) {
	  
	  alert('get data error!');
	  
	});
	
  }
}
*/

});

//$(document).ready(function() {});