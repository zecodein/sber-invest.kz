var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycbz1SNjNDbSLw6ngsnNgH8fto2Oq0sx4O5-JIJVGnCbgMyTjI91j/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})