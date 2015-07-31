var app = angular.module('IAM', ['ui.router']);

app.config([
	'$stateProvider',
	'$urlRouterProvider',
	function ($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('home', {
				url: '/home',
				templateUrl: '/home.html',
				controller: 'MainCtrl'
			})
			.state('about', {
				url: '/about',
				templateUrl: '/about.html',
				controller: 'MainCtrl'
			})
			.state('careers', {
				url: '/careers',
				templateUrl: '/careers.html',
				controller: 'MainCtrl'
			})
			.state('clients', {
				url: '/clients',
				templateUrl: '/clients.html',
				controller: 'MainCtrl'
			})
			.state('contact', {
				url: '/contact',
				templateUrl: '/contact.html',
				controller: 'MainCtrl'
			})
			.state('team', {
				url: '/team',
				templateUrl: '/team.html',
				controller: 'MainCtrl'
			})
		$urlRouterProvider.otherwise('home');
	}]);

app.controller('MainCtrl', [
	'$scope',
	function ($scope) {
		$scope.$on('$viewContentLoaded', function () {
			if (window.location.hash.substring(2) === "home") {
				$('#logo').width("30%");
			} else {
				$('#logo').width("10%");
			}
		});

		$scope.aboutus = [
			{
				id: 'aboutiam',
				name: 'YOU PRESENT, WE SOLVE.',
				content: [
				 'International Advertising Mob consists of some of the brightest and most innovative minds on campus at the University of Illinois at Urbana-Champaign. IAM offers free advertising and marketing consulting to our local international stores, utilizing our knowledge and imagination to the full extent.',
				 'We take a multidisciplinary approach to working on our clients\' business with our staff members coming from various scholarly backgrounds ranging from web designers to writers, psychologists, artists, mathematicians, and engineers. In our interactive environment, we work side by side, acquiring practical expertise in the field as projects continue. ',
				 'You present your business, we present solutions—solutions to better the world. IAM not only provides solutions for your business but also helps out the community. Currently a World Vision child sponsor, IAM dedicates all profits from fund raisers and projects to children in need. At IAM, we present solutions to the world by participating in various charitable foundations.'
			 ]
			},
			{
				id: 'intro',
				name: 'Introduction',
				content: [
				 'I am Ju Young Choi, founder and president of International Advertising Mob.',
				 'It\' not about my intelligence,\nIt\'s not about my advertising background, and\n It\'s not about showcasing my pride.',
				 'These are what I really stand for- values that define who IAM and what IAM.',
				 'I influence.\nI provide solutions and contents that can lead the world.',
				 'I contribute.\nI don’t stop at acquiring academic knowledge and contribute to the world.',
				 'I don’t stagnate.\nI continue to face my problems and fix them through communicating with experts.',
				 'I challenge.\nI challenge not for personal benefits, but for those in need.\nLast but not least, I challenge with those who share the warmth.',
				 'IAM happy everyday.'
			 ]
			},
		];


		$scope.teams = [
			{
				id: 'ae',
				name: 'ACCOUNT EXECUTIVE',
				image: 'img/team_photo/ae.jpg',
				content: 'The brains. The researchers. The compass.'
			},
			{
				id: 'business',
				name: 'BUSINESS',
				image: 'img/team_photo/business.jpg',
				content: 'The postmen. A pack of wolves. The activists.'
			},
			{
				id: 'creative',
				name: 'CREATIVE',
				image: 'img/team_photo/creative-music.jpg',
				content: 'The craftsmen. The inventors. The colorful minds.'
			},
			{
				id: 'internal',
				name: 'INTERNAL',
				image: 'img/team_photo/internal.jpg',
				content: 'The workers behind the scene. The operating system.'
			},
			{
				id: 'media',
				name: 'MEDIA',
				image: 'img/team_photo/media.jpg',
				content: 'The postmen. A pack of wolves. The activists.'
			},
			{
				id: 'tech',
				name: 'TECH',
				image: 'img/team_photo/creative-developer.jpg',
				content: 'The brains. The researchers. The compass.'
			},
			{
				id: 'china',
				name: 'CHINA',
				image: 'img/team_photo/china.jpg',
				content: 'The brains. The researchers. The compass.'
			}
		];

		$scope.navs = [
			{
				id: "home",
				image: "img/nav/icon_iam.png",
				content: "About Us"
			},
			{
				id: "about",
				image: "img/nav/icon_about.png",
				content: "About Us"
			},
			{
				id: "team",
				image: "img/nav/icon_team.png",
				content: "The Team"
			},
			{
				id: "careers",
				image: "img/nav/icon_careers.png",
				content: "Careers"
			},
			{
				id: "clients",
				image: "img/nav/icon_clients.png",
				content: "Clients"
			},
			{
				id: "contact",
				image: "img/nav/icon_contact.png",
				content: "Contact"
			}
		];

		$scope.careers = [
			{
				id: 'ae',
				team_name: 'ACCOUNT EXECUTIVE',
				contents: [
					"Account Executive Team act as a link between client and the team. AE Team must understand the client's needs/objectives and liaise with the team throughout the projects.",
					"Team director and assistant-directors are responsible for reporting the project progress to both external and internal departments.",
					"Team members have to be able to communicate in daily basis, conduct extensive research and analyze the data according to the client\'s request."
				],
				positions: [
					{
						position_id: "ae_ae",
						position_name: "Account Executive",
						description: [
							"Understand clients\' business goals and assist to reach the goals",
							"Report progress and delays to both client and the president",
							"Watch for signs of trouble and make sure both client and the president are fully aware of the project status"
						],
						pre_req: [
							"Ability to set and handle multiple proximate goals",
							"Effective business communication skills between client and IAM",
							"Resilience, being able to deal with problems and constructive criticism"
						]
					},
					{
						position_id: "ae_ap",
						position_name: "Account Planner",
						description: [
							"Commission, conduct and analyze qualitative and quantitative research",
							"Analyze data, trends and reports relevant to the client’s business",
							"Monitoring the effectiveness of the campaign from customers' perspective"
						],
						pre_req: [
							"Highly sensitive in cultural/social trends",
							"Excellent research and analytical thinking skills",
							"Being able to evaluate audience response and understand sales figures from their perspective"
						]
					},
					{
						position_id: "ae_nb",
						position_name: "New Business",
						description: [
							"Identify and cultivate for new business opportunities",
							"Develops negotiating strategies and positions by studying company strategies and operations",
							"Analyze and examine the value of the business before becoming a client"
						],
						pre_req: [
							"Strong presentation and verbal communication skills",
							"Possessing confidence and good interpersonal skills",
							"Ability to work within certain constraints"
						]
					}
				]
			},
		];

	}]);