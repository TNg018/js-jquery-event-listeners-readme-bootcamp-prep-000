function getIt() {
  $( "p" ).click(function() {
  alert( "Hey!" );
});
}

function frameIt() {
  $('img').on('load', function() {
  $("img").addClass("tasty")
  });
}
