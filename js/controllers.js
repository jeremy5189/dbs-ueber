angular.module('app.controllers', [])
.controller('newPaymentCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

  let contact = {
    'Jeremy Yen': {
        'Picture' : 'img/mic73kYRGmZ8uiiAFrfw_2016-11-191.31.16.png',
        'PassportName' : 'Jeremy Yen',
        'Email' : 'Jeremy@gmail.com',
        'PaymentType' : 'Western',
        'AccountNumber' : '',
        'Country' : 'United State',
        'Note' : ''
    },
    'Issac Chen': {
        'Picture' : 'img/TInAxhrQh6Tt7BYTIquQ_2016-11-191.31.29.png',
        'PassportName' : 'Issac Chen',
        'Email' : 'Issac@gmail.com',
        'PaymentType' : 'DBS Bank Acc',
        'AccountNumber' : '60200054321',
        'Country' : 'Singapore',
        'Note' : ''
    },
    'Richard Lin': {
        'Picture' : 'img/O1nvMW1RaikI01gv6AcQ_2016-11-191.31.41.png',
        'PassportName' : 'Richard Lin',
        'Email' : 'Richard@gmail.com',
        'PaymentType' : 'DBS Bank Acc',
        'AccountNumber' : '60200078078',
        'Country' : 'Taiwan',
        'Note' : ''
    }
  };

  localStorage.setItem('contact', JSON.stringify(contact));

  $scope.next = function ($event) {
    let amount = document.getElementById('pay-amount').value,
        country = document.getElementById('pay-country').value,
        comm = document.getElementById('pay-commission').value;

    let data = {
      amount: amount,
      country: country,
      commission: comm
    };

    localStorage.setItem('data', JSON.stringify(data));
    // console.log(JSON.parse(localStorage.getItem('data')).amount);
  };
}])
.controller('historyCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

}])
.controller('myContactCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

}])
.controller('selectRecipientCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
  $scope.contacts = JSON.parse(localStorage.getItem('contact'));
  $scope.name = "TT";
  $scope.next = function ($event) {

  };

}])
.controller('dBSBerCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

}])
.controller('settingsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

}])
.controller('smartContractCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

}])
.controller('paymentCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

}])
.controller('editContactCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

}])
.controller('paymentInYourCountryCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

}])
.controller('paymentDetailCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

}])
.controller('paymentDetail2Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

}])
.controller('inProgressCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

}])
.controller('loginCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

}])
.controller('signupCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

}])
