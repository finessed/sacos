angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.hOME', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/hOME.html',
        controller: 'hOMECtrl'
      }
    }
  })

  .state('tabsController.cALCULATOR', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/cALCULATOR.html',
        controller: 'cALCULATORCtrl'
      }
    }
  })

  .state('tabsController.aBOUT', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/aBOUT.html',
        controller: 'aBOUTCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tIPS', {
    url: '/page5',
    templateUrl: 'templates/tIPS.html',
    controller: 'tIPSCtrl'
  })

  .state('tabsController.hEREFORYOURBUSINESS', {
    url: '/page6',
    views: {
      'tab1': {
        templateUrl: 'templates/hEREFORYOURBUSINESS.html',
        controller: 'hEREFORYOURBUSINESSCtrl'
      }
    }
  })

  .state('tabsController.hEREFORYOU', {
    url: '/page7',
    views: {
      'tab1': {
        templateUrl: 'templates/hEREFORYOU.html',
        controller: 'hEREFORYOUCtrl'
      }
    }
  })

  .state('iNVESTORRELATIONS', {
    url: '/page8',
    templateUrl: 'templates/iNVESTORRELATIONS.html',
    controller: 'iNVESTORRELATIONSCtrl'
  })

  .state('cONTACT', {
    url: '/page9',
    templateUrl: 'templates/cONTACT.html',
    controller: 'cONTACTCtrl'
  })

$urlRouterProvider.otherwise('/page1/page2')


});