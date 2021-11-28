// Process contact form
$('#contact-form').submit(function(event) {
  event.preventDefault();
  $('#feedback').html('');
  setTimeout(function() {
  	// Get data
    var data = {
      'entry.2005620554': $('#form-name').val(),
      'entry.1045781291': $('#form-email').val(),
      'entry.1065046570': $('#form-phone').val(),
      'entry.1166974658': $('#form-message').val(),
      'entry.839337160': $('#form-comment').val()
    };

    // Validate form
    var formSuccess = true;
    Object.keys(data).forEach(function(key, index) {
      if (!data[key]) {
        formSuccess = false;
        $('#feedback').html('<label class="text-danger">Please complete all fields</label>');
      }
    });

    if (formSuccess) {
      // Send request
      $.ajax({
        // url: 'https://docs.google.com/forms/d/e/1FAIpQLSdnW7ixrovoi7V7sJQihWouPztZL4GoRMAP5SpoVh2UfMhxOQ/formResponse',
        
        url: 'https://docs.google.com/forms/d/e/1FAIpQLSdvcX5VR24xIjMeHO9Y-enPIyf7U0_mL3Oc_9xlgJ1ND1rZgw/formResponse',
        // url: 'https://docs.google.com/forms/d/1WrqRqGKkbmaoLWeJjN4JcxfkJzbu7lfNsBDGOAE_hhM/edit',
        type: 'POST',
        crossDomain: true,
        dataType: "xml",
        data: data,
        success: function(jqXHR, textStatus, errorThrown) {
          console.log('Enter on success');
          $('#feedback').html('<label class="text-success">Message sent!</label>');
        },
        error: function(jqXHR, textStatus, errorThrown) {
          console.log('Enter on error');
          $('#feedback').html('<label class="text-success">Message sent!</label>');
        }
      });
    }
  }, 300);
});
