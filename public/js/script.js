angular.module('tools', [])
	.controller('header', ['$scope', function($scope)
	{
		$scope.pages = [
			{
				"name": "About Badges",
				"url": "/badges"
			},
			{
				"name": "About Courses",
				"url": "/courses"
			},
			{
				"name": "Help",
				"url": "/help"
			},
			{
				"name": "Help: Accounts and Registration",
				"url": "/help/accounts-and-registration"
			},
			{
				"name": "Help: Badges and Credly",
				"url": "/help/badges-and-credly"
			},
			{
				"name": "Help: Frequently Asked Questions",
				"url": "/help/faq"
			},
			{
				"name": "Help: Groups and Playlists",
				"url": "/help/groups-and-playlists"
			},
			{
				"name": "Help: Projects",
				"url": "/help/projects"
			}
			]
	}]);