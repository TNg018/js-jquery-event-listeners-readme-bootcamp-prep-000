function getIt() {
  $( "p" ).click(function() {
  alert( "Hey!" );
});
}

function frameIt() {
  $('img').on('load', function() {
  $('img').addClass("tasty")
  });
}

function submitIt() {
  $("form").submit(function(event) {
    alert( "Your form is going to be submitted now." );
    event.preventDefault();
  });
}
