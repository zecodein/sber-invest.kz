document.getElementById("adressSame").addEventListener("change", function() {
  if (this.checked) {
    document.getElementById("adressProzh").value = document.getElementById(
      "adressProp"
    ).value;
  } else {
    document.getElementById("adressProzh").value = "";
  }
});
function on_change(el, text) {
  var selectedOption = document.getElementById(el);
  if (selectedOption.checked) {
    document.getElementById(text).style.display = "block";
  } else {
    document.getElementById(text).style.display = "none"; // Hide el
  }
}

const form = document.getElementById("form");
const name = document.getElementById("name");
const surname = document.getElementById("surname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const tel = document.getElementById("tel");
const citizen = document.getElementById("citizen");
const adressProp = document.getElementById("adressProp");
const adressProzh = document.getElementById("adressProzh");

const sale1 = document.getElementById("sale1");

const sale1quant = document.getElementById("sale1quant");

const otherdeal = document.getElementById("otherdeal");

const taxdeduct1 = document.getElementById("taxdeduct1");

const PolitikaKonf = document.getElementById("PolitikaKonf");

form.addEventListener("submit", e => {
  submit = checkInputs();
  if (!submit) {
    e.preventDefault();
  } else {
    // document.getElementById("form").submit();
  }
});

function checkInputs() {
  var sumbitForm = true;

  // trim to remove the whitespaces
  const nameValue = name.value.trim();
  const surnameValue = surname.value.trim();
  const lastnameValue = lastname.value.trim();
  const emailValue = email.value.trim();
  const telValue = tel.value.trim();
  const citizenValue = citizen.value.trim();
  const adressPropValue = adressProp.value.trim();
  const adressProzhValue = adressProzh.value.trim();

  const sale1quantValue = sale1quant.value.trim();
  const otherdealValue = otherdeal.value.trim();
  const taxdeduct1Value = taxdeduct1.value.trim();

  submitForm = true;
  if (surnameValue === "") {
    setErrorFor(surname, "Заполните поле Фамилия");
    submitForm = false;
  } else {
    setSuccessFor(surname);
  }

  if (nameValue === "") {
    setErrorFor(name, "Заполните поле Имя");
    submitForm = false;
  } else {
    setSuccessFor(name);
  }

  if (lastnameValue === "") {
  } else {
    setSuccessFor(lastname);
  }

  if (emailValue === "") {
    setErrorFor(email, "Заполните поле Почта");
    submitForm = false;
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Неверный формат почты");
    submitForm = false;
  } else {
    setSuccessFor(email);
  }

  if (telValue === "") {
    setErrorFor(tel, "Заполните поле Номер");
    submitForm = false;
  } else if (!validatePhone(telValue)) {
    setErrorFor(tel, "Неверный номер");
    submitForm = false;
  } else {
    setSuccessFor(tel);
  }

  if (citizenValue === "") {
    setErrorFor(citizen, "Заполните поле Гражданство");
    submitForm = false;
  } else {
    setSuccessFor(citizen);
  }

  if (adressPropValue === "") {
    setErrorFor(adressProp, "Заполните поле Адрес прописки");
    submitForm = false;
  } else {
    setSuccessFor(adressProp);
  }

  if (adressProzhValue === "") {
    setErrorFor(adressProzh, "Заполните поле Адрес проживания");
    submitForm = false;
  } else {
    setSuccessFor(adressProzh);
  }

  if (sale1.checked && sale1quantValue === "") {
    setErrorFor(sale1quant, "Заполните Данное поле");
    submitForm = false;
  } else if (!sale1.checked) {
  } else {
    setSuccessFor(sale1quant);
  }

  if (includedeclr.checked && otherdealValue === "") {
    setErrorFor(otherdeal, "Заполните Данное поле");
    submitForm = false;
  } else if (!includedeclr.checked) {
  } else {
    setSuccessFor(otherdeal);
  }

  if (taxdeduct.checked && taxdeduct1Value === "") {
    setErrorFor(taxdeduct1, "Заполните Данное поле");
    submitForm = false;
  } else if (!taxdeduct.checked) {
  } else {
    setSuccessFor(taxdeduct1);
  }

  if (PolitikaKonf.checked) {
  } else {
    submitForm = false;
  }
  return submitForm;
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

function validatePhone(phoneNumber) {
  var phoneNumberPattern = /^([+]?\d{1,2}[-\s]?|)\d{3}[-\s]?\d{3}[-\s]?\d{4}$/;
  return phoneNumberPattern.test(phoneNumber);
}

// AJAZ GOOGLE FORM

$("#form").submit(function(event) {
  event.preventDefault();
  $("#feedback").html("");
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
    for (var i = 0; i < taxresidentnames.length; i++) {
      if (taxresidentnames[i].checked) {
        taxresidentnames_value = taxresidentnames[i].value;
      }
    }
    for (var i = 0; i < sale1names.length; i++) {
      if (sale1names[i].checked) {
        sale1names_value = sale1names[i].value;
      }
    }
    for (var i = 0; i < dividendnames.length; i++) {
      if (dividendnames[i].checked) {
        dividendnames_value = dividendnames[i].value;
      }
    }
    for (var i = 0; i < includedeclrnames.length; i++) {
      if (includedeclrnames[i].checked) {
        includedeclrnames_value = includedeclrnames[i].value;
      }
    }
    for (var i = 0; i < taxdeductnames.length; i++) {
      if (taxdeductnames[i].checked) {
        taxdeductnames_value = taxdeductnames[i].value;
      }
    }

    // Get data
    var data = {
      "entry.2005620554": $("#surname").val(),
      "entry.1065046570": $("#name").val(),
      "entry.1045781291": $("#lastname").val(),
      "entry.1861226139": $("#email").val(),
      "entry.1166974658": $("#tel").val(),
      "entry.839337160": $("#citizen").val(),
      "entry.433364251": $("#adressProp").val(),
      "entry.537497422": $("#adressProzh").val(),
      "entry.2055792815": taxresidentnames_value,
      "entry.2114019434": sale1names_value,
      "entry.576407941": $("#sale1quant").val(),
      "entry.2059019536": dividendnames_value,
      "entry.647440173": includedeclrnames_value,
      "entry.2019584137": $("#otherdeal").val(),
      "entry.1428466992": taxdeductnames_value,
      "entry.873435385": $("#taxdeduct1").val(),
      "entry.1548640145": $("#tarif").val(),
    };

    // Validate form
    var formSuccess = true;
    Object.keys(data).forEach(function(key, index) {
      if (
        !data[key] &&
        key != "entry.576407941" &&
        key != "entry.2019584137" &&
        key != "entry.873435385" &&
        key != "entry.1548640145"
      ) {
        formSuccess = false;
        $("#feedback").html(
          '<label class="text-danger">Заполните все вопросы</label>'
        );
      }
    });

    if (formSuccess) {
        document.getElementById("submit").disabled = true;
      // Send request
      $.ajax({
        // url: 'https://docs.google.com/forms/d/e/1FAIpQLSdnW7ixrovoi7V7sJQihWouPztZL4GoRMAP5SpoVh2UfMhxOQ/formResponse',

        url:
          "https://docs.google.com/forms/d/e/1FAIpQLSdvcX5VR24xIjMeHO9Y-enPIyf7U0_mL3Oc_9xlgJ1ND1rZgw/formResponse",
        // url: 'https://docs.google.com/forms/d/1WrqRqGKkbmaoLWeJjN4JcxfkJzbu7lfNsBDGOAE_hhM/edit',
        type: "POST",
        crossDomain: true,
        dataType: "xml",
        data: data,
        success: function(jqXHR, textStatus, errorThrown) {
          
          console.log("Enter on success");
          $("#feedback").html(
            '<label class="text-success">Форма отправлена!</label>'
          );
        },
        error: function(jqXHR, textStatus, errorThrown) {
          console.log("Enter on error");
          $("#feedback").html(
            '<label class="text-success">Форма отправлена!</label>'
          );
        }
      });
    }
  }, 300);
});
