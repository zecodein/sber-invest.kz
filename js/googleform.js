// Process contact form
$('#form').submit(function(event) {
    event.preventDefault();
    $('#feedback').html('');
    setTimeout(function() {

    const taxresidentnames = document.getElementsByName("taxresident");
    const sale1names = document.getElementsByName("sale1");
    const dividendnames = document.getElementsByName("dividend");
    const includedeclrnames = document.getElementsByName("includedeclr");
    const taxdeductnames = document.getElementsByName("taxdeduct");


    var taxresidentnames_value;
    var sale1names_value;
    var dividendnames_value;
    var includedeclrnames_value;
    var taxdeductnames_value;
    for(var i = 0; i < taxresidentnames.length; i++){
        if(taxresidentnames[i].checked){
            taxresidentnames_value = taxresidentnames[i].value;
        }
    }
    for(var i = 0; i < sale1names.length; i++){
        if(sale1names[i].checked){
            sale1names_value = sale1names[i].value;
        }
    }
    for(var i = 0; i < dividendnames.length; i++){
        if(dividendnames[i].checked){
            dividendnames_value = dividendnames[i].value;
        }
    }
    for(var i = 0; i < includedeclrnames.length; i++){
        if(includedeclrnames[i].checked){
            includedeclrnames_value = includedeclrnames[i].value;
        }
    }
    for(var i = 0; i < taxdeductnames.length; i++){
        if(taxdeductnames[i].checked){
            taxdeductnames_value = taxdeductnames[i].value;
        }
    }
    
        // Get data
      var data = {
        'entry.433364251': $('#form-surname').val(),
        'entry.537497422': $('#form-name').val(),
        'entry.576407941': $('#form-lastname').val(),
        'entry.647440173': $('#form-email').val(),
        'entry.839337160': $('#form-tel').val(),
        'entry.873435385': $('#form-citizen').val(),
        'entry.1045781291': $('#form-adressProp').val(),
        'entry.1065046570': $('#form-adressProp').val(),
        // 'entry.1166974658': taxresidentnames_value,
        // 'entry.1428466992': sale1names_value,
        'entry.1861226139': $('#form-sale1quant').val(),
        // 'entry.2005620554': dividendnames_value,
        // 'entry.2019584137': includedeclrnames_value,
        'entry.2055792815': $('#form-otherdeal').val(),
        // 'entry.2059019536': taxdeductnames_value,
        'entry.2114019434': $('#form-taxdeduct1').val(),
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