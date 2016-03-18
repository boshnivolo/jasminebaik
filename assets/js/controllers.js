doodleScript.controller('ListListingController', ['$scope', '$http', function($scope, $http){
    //Server call to get listings
    $http.get("https://openapi.etsy.com/v2/listings/active?api_key=hr9qkeabvt5jn57akxmxzm0o")
      .then(function(response){
        $scope.listings = response.data;
      })
    };
