angular.module('app.controllers', [])
.controller('newPaymentCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

  let TWDRate = {
    'TWD': 1,
    'USD': 31.7246,
    'HKD': 4.0893,
    'SGD': 22.9304
  };


  let contact = {
    'Jeremy Yen': {
        'Picture' : 'img/mic73kYRGmZ8uiiAFrfw_2016-11-191.31.16.png',
        'PassportName' : 'Jeremy Yen',
        'Email' : 'Jeremy@gmail.com',
        'PaymentType' : 'Western Union',
        'AccountNumber' : 'Jeremy Yen',
        'Country' : 'United State',
        'Note' : ''
    },
    'Isaac Chan': {
        'Picture' : 'img/APFI9BgCS2qiaWkK2EJV_2016-11-191.31.29.png',
        'PassportName' : 'Isaac Chan',
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

  $scope.next = function ($event) {
    let amount = document.getElementById('pay-amount').value,
        country = document.getElementById('pay-country').value,
        comm = document.getElementById('pay-commission').value;

    let data = {
      amount: amount,
      country: country,
      commission: comm,
    };
    console.log("A : " + data.amount);
    localStorage.clear();
    console.log("B : " + data.amount);
    localStorage.setItem('data', JSON.stringify(data));
    localStorage.setItem('contact', JSON.stringify(contact));
    localStorage.setItem('TWDRate', JSON.stringify(TWDRate));
    console.log("C : " + data.amount);
    // console.log(JSON.parse(localStorage.getItem('data')).amount);
  };
}])
.controller('historyCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
  let data = JSON.parse(localStorage.getItem('data'));
  $scope.name = localStorage.getItem('key');
  $scope.amount = data.amount;
  $scope.currency = data.country;
  $scope.commission = data.commission;
  $scope.expire_day = localStorage.getItem('expire_day');
  let name = localStorage.getItem('key');
  console.log(name);
  let contact = JSON.parse(localStorage.getItem('contact'));
  $scope.contact = contact[name];
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

  $scope.next = function (key) {
    localStorage.setItem('key', key);
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
  $scope.next = function ($event) {
    let expire_day = document.getElementById('expire_day').value;
    
    localStorage.setItem('expire_day', expire_day);
  };
}])
.controller('paymentCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
    $('#pay-dbs-account').hide();
    $('#pay-btc').hide();
    $('#rate').hide();
    $('#payment-button5').hide();

    let data = JSON.parse(localStorage.getItem('data'));
    $scope.amount = data.amount;
    $scope.country = data.country;
    let name = localStorage.getItem('key');
    let contact = JSON.parse(localStorage.getItem('contact'));
    $scope.contact = contact[name];
    console.log("D : " + data.amount);
  $scope.change_type = function ($event) {
    console.log('change');
    $('#payment-button5').show();
    let val = $('#select').val();
    if( val == '1' ) { // DBS account

      let data = JSON.parse(localStorage.getItem('data'));
      let TWDRate = JSON.parse(localStorage.getItem('TWDRate'));
      let convert = Math.floor(TWDRate[data.country] * data.amount);
      console.log(convert);

      $('#pay-dbs-account').show();
      $('#pay-btc').hide();
      $('#rate').show();

      $('#rate-amount').html(data.amount);
      $('#rate-curreny').html(data.country);
      $('#rate-exchange').html(convert);
      $('#rate-base').html('TWD');

    } else if( val == '2' ) {

      let BTCRate = 24061;
      let data = JSON.parse(localStorage.getItem('data'));
      let TWDRate = JSON.parse(localStorage.getItem('TWDRate'));
      let convert = Math.round(TWDRate[data.country] * data.amount / BTCRate * 100000000) / 100000000;
      console.log(convert);

      $('#pay-btc').show();
      $('#pay-dbs-account').hide();
      $('#rate').show();

      $('#rate-amount').html(data.amount);
      $('#rate-curreny').html(data.country);
      $('#rate-exchange').html(convert);
      $('#rate-base').html('BTC');
      $('#btc-address').html(sha1(new Date().getTime()));
    }
  }
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
  $scope.data = JSON.parse(localStorage.getItem('data'));

}])
.controller('paymentDetailCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
  $scope.data = JSON.parse(localStorage.getItem('data'));
  let name = localStorage.getItem('key');
  let contact = JSON.parse(localStorage.getItem('contact'));
  $scope.contact = contact[name];
  $scope.expire_day = localStorage.getItem('expire_day');
}])
.controller('paymentDetail2Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
  $scope.data = JSON.parse(localStorage.getItem('data'));
  let name = localStorage.getItem('key');
  let contact = JSON.parse(localStorage.getItem('contact'));
  $scope.contact = contact[name];
  $scope.expire_day = localStorage.getItem('expire_day');
}])
.controller('inProgressCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
  $scope.data = JSON.parse(localStorage.getItem('data'));
  let name = localStorage.getItem('key');
  let contact = JSON.parse(localStorage.getItem('contact'));
  $scope.contact = contact[name];
  $scope.expire_day = localStorage.getItem('expire_day');
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
