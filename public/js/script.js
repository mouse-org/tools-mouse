angular.module('tools', [])
	.controller('header', ['$scope', function($scope)
	{
		$scope.pages = pages_array;
	}]);