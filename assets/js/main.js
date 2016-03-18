$.getJSON("https://openapi.etsy.com/v2/users/active?api_key=hr9qkeabvt5jn57akxmxzm0o", function(data) {
  console.log(data.results.listing_id);
});
