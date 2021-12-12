// Get the checkbox
var checkBox = document.getElementById("Podarok");
// Get the output text
var text = document.getElementById("PodarochniySertif");
document.getElementById("Podarok").addEventListener("change", function () {
  if (this.checked) {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
});

const surname = document.getElementById("surname");
const fname = document.getElementById("fname");
const lastname = document.getElementById("lastname");
const tel = document.getElementById("tel");
const email = document.getElementById("email");
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
  const fnameValue = fname.value.trim();
  const surnameValue = surname.value.trim();
  const lastnameValue = lastname.value.trim();
  const emailValue = email.value.trim();
  const telValue = tel.value.trim();

  submitForm = true;
  if (surnameValue === "") {
    setErrorFor(surname, "Заполните поле Фамилия");
    submitForm = false;
  } else {
    setSuccessFor(surname);
  }

  if (fnameValue === "") {
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
    // var VesKurs=$("#VesKurs").is(":checked");
    // var Vstuplenie=$("#Vstuplenie").is(":checked");
    // var ProgrammaKursa=$("#ProgrammaKursa").is(":checked");
    // var PoryadokNal=$("#PoryadokNal").is(":checked");
    // var LocalRynok=$("#LocalRynok").is(":checked");
    // var ZaPredekamix=$("#ZaPredekamix").is(":checked");
    // var VychetyISald=$("#VychetyISald").is(":checked");
    // var Diagramma=$("#Diagramma").is(":checked");
    // var PodgRaschet=$("#PodgRaschet").is(":checked");
    // var Skidka=$("#Skidka").is(":checked");
    // var Podarok=$("#Podarok").is(":checked");
    // Get data
    var data = {
      "entry.312643852": $("#VesKurs").is(":checked"),
      "entry.1900210667": $("#Vstuplenie").is(":checked"),
      "entry.445182499": $("#ProgrammaKursa").is(":checked"),
      "entry.110349566": $("#PoryadokNal").is(":checked"),
      "entry.1270709721": $("#LocalRynok").is(":checked"),
      "entry.1985937576": $("#ZaPredekamix").is(":checked"),
      "entry.470403761": $("#VychetyISald").is(":checked"),
      "entry.770136661": $("#Diagramma").is(":checked"),
      "entry.1084585482": $("#PodgRaschet").is(":checked"),
      "entry.973358631": $("#Skidka").is(":checked"),
      "entry.785559364": $("#Podarok").is(":checked"),

      "entry.1132072097": $("#surname").val(),
      "entry.1308261533": $("#fname").val(),
      "entry.210657771": $("#lastname").val(),
      "entry.1965831746": $("#tel").val(),
      "entry.2121781874": $("#email").val(),

      "entry.2085742647": $("#surname_Pol").val(),
      "entry.802595060": $("#name_Pol").val(),
      "entry.1214734007": $("#lastname_Pol").val(),
      "entry.637914283": $("#tel_Pol").val(),
      "entry.505551139": $("#email_Pol").val(),
    };

    // Validate form
    var formSuccess = true;
    Object.keys(data).forEach(function (key, index) {
      if (!data[key]) {
        formSuccess = false;
        $("#feedback").html(
          '<label class="text-danger">Заполните поля корректно</label>'
        );
      }
    });

    if (formSuccess) {
      document.getElementById("submit").disabled = true;
      // Send request
      $.ajax({
        // url: 'https://docs.google.com/forms/d/e/1FAIpQLSdnW7ixrovoi7V7sJQihWouPztZL4GoRMAP5SpoVh2UfMhxOQ/formResponse',

        url: "https://docs.google.com/forms/d/e/1FAIpQLSdXEosfgyMNreIXx66UP-L5ZaRPKSqt8DObJRLEaFQKjYt5cw/formResponse",
        // url: 'https://docs.google.com/forms/d/1WrqRqGKkbmaoLWeJjN4JcxfkJzbu7lfNsBDGOAE_hhM/edit',
        type: "POST",
        crossDomain: true,
        dataType: "xml",
        data: data,
        success: function (jqXHR, textStatus, errorThrown) {
          console.log("Enter on success");
          $("#feedback").html('<label class="text-success">Успешно!</label>');
        },
        error: function (jqXHR, textStatus, errorThrown) {
          console.log("Enter on error");
          $("#feedback").html('<label class="text-success">Успешно!</label>');
        },
      });
    }
  }, 300);
});
