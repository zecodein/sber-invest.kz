function handleSubmit() {
  const tarif = document.getElementById('tarif').value;
  const price = document.getElementById('price').value;

  sessionStorage.setItem("TARIF", tarif);
  sessionStorage.setItem("PRICE", price);

  return;
}

const queryString = window.location.search;
console.log(queryString);

// var queryString = location.search.substring(1);
var tarif = document.getElementById("tarif");
var tarifOptions = document.getElementById("tarifOptions");

var form240min = document.getElementById("form240min");
var form240stand = document.getElementById("form240stand");
var form240prem = document.getElementById("form240prem");

form240min.addEventListener("click", function () {
  tarifOptions.value = "min";
  $("#price").html("<label >От 20 тыс. тенге*</label>");
});
form240stand.addEventListener("click", function () {
  tarifOptions.value = "stand";
  $("#price").html("<label >От 50 тыс. тенге*</label>");
});
form240prem.addEventListener("click", function () {
  tarifOptions.value = "prem";
  $("#price").html("<label >От 100 тыс. тенге*</label>");
});

tarifOptions.addEventListener("change", function () {
  if (tarifOptions.value === "min") {
    $("#price").html("<label >От 20 тыс. тенге*</label>");
  } else if (tarifOptions.value === "stand") {
    $("#price").html("<label >От 50 тыс. тенге*</label>");
  } else if (tarifOptions.value === "prem") {
    $("#price").html("<label >От 100 тыс. тенге*</label>");
  }
});

document.getElementById("adressSame").addEventListener("change", function () {
  if (this.checked) {
    document.getElementById("adressProzh").value =
      document.getElementById("adressProp").value;
  } else {
    document.getElementById("adressProzh").value = "";
  }
});
$("input[type=radio][name=sale1quantradio]").change(function () {
  if (this.value == "Менее 50") {
    document.getElementById("sale1quant").value = this.value;
  } else if (this.value == "50-100") {
    document.getElementById("sale1quant").value = this.value;
  } else if (this.value == "более 100") {
    document.getElementById("sale1quant").value = this.value;
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
// const lastname = document.getElementById("lastname");
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

form.addEventListener("submit", (e) => {
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
  // const lastnameValue = lastname.value.trim();
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

  // if (lastnameValue === "") {
  // } else {
  //   setSuccessFor(lastname);
  // }

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
    sale1quant.value = "";
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

$("#form").submit(function (event) {
  event.preventDefault();
  $("#feedback").html("");
  setTimeout(function () {
    const taxresidentnames = document.getElementsByName("taxresident");
    const sale1names = document.getElementsByName("sale1");
    const dividendnames = document.getElementsByName("dividend");
    const includedeclrnames = document.getElementsByName("includedeclr");
    const taxdeductnames = document.getElementsByName("taxdeduct");
    const patreonnames = document.getElementsByName("patreon");

    var taxresidentnames_value;
    var sale1names_value;
    var dividendnames_value;
    var includedeclrnames_value;
    var taxdeductnames_value;
    var patreonnames_value;
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
    for (var i = 0; i < patreonnames.length; i++) {
      if (patreonnames[i].checked) {
        patreonnames_value = patreonnames[i].value;
      }
    }

    // Get data
    var data = {
      "entry.552099895": $("#surname").val(),
      "entry.640670863": "Декларация",
      "entry.552135976": $("#name").val(),
      // "entry.1462956229": $("#lastname").val(),
      "entry.601304414": $("#email").val(),
      "entry.940607535": $("#tel").val(),
      "entry.1315104526": $("#citizen").val(),
      "entry.513607428": $("#adressProp").val(),
      "entry.1070097278": $("#adressProzh").val(),
      "entry.516662231": taxresidentnames_value,
      "entry.956035623": sale1names_value,
      "entry.833732978": $("#sale1quant").val(),
      "entry.1741365612": dividendnames_value,
      "entry.1612478037": includedeclrnames_value,
      "entry.1486739758": $("#otherdeal").val(),
      "entry.530956502": taxdeductnames_value,
      "entry.949391439": $("#taxdeduct1").val(),
      "entry.1182572961": $("#tarifOptions").val(),

      "entry.1148544009": queryString,

      "entry.1128154228": patreonnames_value,
    };

    // Validate form
    var formSuccess = true;
    Object.keys(data).forEach(function (key, index) {
      if (
        !data[key] &&
        key != "entry.833732978" &&
        key != "entry.1486739758" &&
        key != "entry.949391439" &&
        key != "entry.1182572961" &&
        key != "entry.1462956229" &&
        key != "entry.1148544009" &&
        key != "entry.1128154228"
      ) {
        formSuccess = false;
        $("#feedback").html(
          '<label  style=" border-radius: 1em; padding:10px;border: solid red 2px" class="text-danger text-center">Заполните поля корректно</label>'
        );
      }
    });
    if (!checkInputs()) {
      formSuccess = false;
      $("#feedback").html(
        '<label  style=" border-radius: 1em; padding:10px;border: solid red 2px" class="text-danger text-center">Заполните поля корректно</label>'
      );
    }

    if (formSuccess) {
      document.getElementById("submit").disabled = true;
      // Send request
      $.ajax({
        // url: 'https://docs.google.com/forms/d/e/1FAIpQLSdnW7ixrovoi7V7sJQihWouPztZL4GoRMAP5SpoVh2UfMhxOQ/formResponse',

        // url: "https://docs.google.com/forms/d/e/1FAIpQLSdvcX5VR24xIjMeHO9Y-enPIyf7U0_mL3Oc_9xlgJ1ND1rZgw/formResponse",
        url: "https://docs.google.com/forms/d/e/1FAIpQLSfe3Z44BKFQr8FaUUfRthzeYEruJerk-rtR-gq-D0cxczHK-g/formResponse",
        type: "POST",
        crossDomain: true,
        dataType: "xml",
        data: data,
        success: function (jqXHR, textStatus, errorThrown) {
          console.log("Enter on success");
          $("#feedback").html(
            '<label  style=" border-radius: 1em; padding:10px;border: solid green 2px" class="text-success text-center">Форма заполнена! На ваш почтовый ящик отправлено письмо с дальнейшими инструкциями!</label>'
          );
        },
        error: function (jqXHR, textStatus, errorThrown) {
          console.log("Enter on error");
          $("#feedback").html(
            '<label style=" border-radius: 1em; padding:10px;border: solid green 2px"  class="text-success text-center">Заявка принята! В ближайшее время на ваш почтовый ящик будет отправлено письмо с дальнейшими инструкциями!</label>'
          );
        },
      });
    }
  }, 300);
});