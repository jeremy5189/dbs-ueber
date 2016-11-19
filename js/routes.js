angular.module('app.routes', []).config(function ($stateProvider, $urlRouterProvider) {
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('dBSBer.newPayment', {
    url: '/new_payment',
    views: {
      'side-menu21': {
        templateUrl: 'templates/newPayment.html',
        controller: 'newPaymentCtrl'
      }
    }
  })

  .state('dBSBer.history', {
    url: '/history',
    views: {
      'side-menu21': {
        templateUrl: 'templates/history.html',
        controller: 'historyCtrl'
      }
    }
  })

  .state('dBSBer.myContact', {
    url: '/my_contacts',
    views: {
      'side-menu21': {
        templateUrl: 'templates/myContact.html',
        controller: 'myContactCtrl'
      }
    }
  })

  .state('dBSBer.selectRecipient', {
    url: '/select_recipient',
    views: {
      'side-menu21': {
        templateUrl: 'templates/selectRecipient.html',
        controller: 'selectRecipientCtrl'
      }
    }
  })

  .state('dBSBer', {
    url: '/side-menu',
    templateUrl: 'templates/dBSBer.html',
    controller: 'dBSBerCtrl'
  })

  .state('dBSBer.settings', {
    url: '/settings',
    views: {
      'side-menu21': {
        templateUrl: 'templates/settings.html',
        controller: 'settingsCtrl'
      }
    }
  })

  .state('dBSBer.smartContract', {
    url: '/smart_contract',
    views: {
      'side-menu21': {
        templateUrl: 'templates/smartContract.html',
        controller: 'smartContractCtrl'
      }
    }
  })

  .state('dBSBer.payment', {
    url: '/payment',
    views: {
      'side-menu21': {
        templateUrl: 'templates/payment.html',
        controller: 'paymentCtrl'
      }
    }
  })

  .state('editContact', {
    url: '/edit_contact',
    templateUrl: 'templates/editContact.html',
    controller: 'editContactCtrl'
  })

  .state('dBSBer.paymentInYourCountry', {
    url: '/payment_in_your_country',
    views: {
      'side-menu21': {
        templateUrl: 'templates/paymentInYourCountry.html',
        controller: 'paymentInYourCountryCtrl'
      }
    }
  })

  .state('dBSBer.paymentDetail', {
    url: '/payment_detail',
    views: {
      'side-menu21': {
        templateUrl: 'templates/paymentDetail.html',
        controller: 'paymentDetailCtrl'
      }
    }
  })

  .state('dBSBer.paymentDetail2', {
    url: '/payment_detail_plus',
    views: {
      'side-menu21': {
        templateUrl: 'templates/paymentDetail2.html',
        controller: 'paymentDetail2Ctrl'
      }
    }
  })

  .state('dBSBer.inProgress', {
    url: '/in_progress',
    views: {
      'side-menu21': {
        templateUrl: 'templates/inProgress.html',
        controller: 'inProgressCtrl'
      }
    }
  });

  $urlRouterProvider.otherwise('/login');
});
