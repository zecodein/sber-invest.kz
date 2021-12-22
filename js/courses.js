var checkBox = document.getElementById("Podarok");
// Get the output text
var PodarochniySertif = document.getElementById("PodarochniySertif");
document.getElementById("Podarok").addEventListener("change", function () {
  if (this.checked) {
    PodarochniySertif.style.display = "block";
  } else {
    PodarochniySertif.style.display = "none";
  }
});
// Get the checkbox
var OformitSert = document.getElementById("OformitSert");
var OformitZayav = document.getElementById("OformitZayav");
// Get the output text
var PodarokOnClick = document.getElementById("Podarok");
OformitSert.addEventListener("click", function () {
  PodarokOnClick.checked = "true";
  PodarochniySertif.style.display = "block";
});
OformitZayav.addEventListener("click", function () {
  $("#Podarok").prop("checked", false);
  PodarochniySertif.style.display = "none";
});

const VesKurs = document.getElementById("VesKurs");
// Get the output text

const PoryadokNal = document.getElementById("PoryadokNal");
const LocalRynok = document.getElementById("LocalRynok");
const ZaPredelami = document.getElementById("ZaPredelami");
const VychetyISald = document.getElementById("VychetyISald");
const Diagramma = document.getElementById("Diagramma");
const ObrSvz = document.getElementById("ObrSvz");
const Skidka = document.getElementById("Skidka");

VesKurs.addEventListener("change", function () {
  if (this.checked) {
    LocalRynok.checked = "true";
    ZaPredelami.checked = "true";
    VychetyISald.checked = "true";
    Skidka.checked = "true";
    ObrSvz.checked = "true";
  } else {
    $("#LocalRynok").prop("checked", false);
    $("#ZaPredelami").prop("checked", false);
    $("#VychetyISald").prop("checked", false);
    $("#Skidka").prop("checked", false);

    // LocalRynok.checked = "false";
    // ZaPredelami.checked = "false";
    // VychetyISald.checked = "false";
    // Skidka.checked = "false";
  }
});

const elements = document.querySelectorAll(".form-check-input");

// adding the event listener by looping
elements.forEach((element) => {
  element.addEventListener("change", function () {
    if (element.checked === false) {
      $("#VesKurs").prop("checked", false);
      $("#Skidka").prop("checked", false);
    }

    total_fee = totalFee();

    if (VesKurs.checked) {
      total_fee = $("#VesKurs").val();
    }

    console.log(total_fee);
    // $("#feedback").html(total_fee);

    $("#totalPrice").html(total_fee + " тг");
  });
});

const form = document.getElementById("form");
const surname = document.getElementById("surname");
const name = document.getElementById("name");
const lastname = document.getElementById("lastname");
const tel = document.getElementById("tel");
const email = document.getElementById("email");

const surname_Pol = document.getElementById("surname_Pol");
const name_Pol = document.getElementById("name_Pol");
const lastname_Pol = document.getElementById("lastname_Pol");
const tel_Pol = document.getElementById("tel_Pol");
const email_Pol = document.getElementById("email_Pol");

const Podarok = document.getElementById("Podarok");
form.addEventListener("submit", (e) => {
  submit = checkInputs();
  if (!submit) {
    e.preventDefault();
  } else {
    // document.getElementById("form").submit();
  }
});
function totalFee() {
  var PoryadokNal = document.getElementById("PoryadokNal");
  var LocalRynok = document.getElementById("LocalRynok");
  var ZaPredelami = document.getElementById("ZaPredelami");
  var VychetyISald = document.getElementById("VychetyISald");
  var Diagramma = document.getElementById("Diagramma");
  var ObrSvz = document.getElementById("ObrSvz");
  if (PoryadokNal.checked) {
    var PoryadokNal_fee = $("#PoryadokNal").val();
  } else {
    var PoryadokNal_fee = 0;
  }

  if (LocalRynok.checked) {
    var LocalRynok_fee = $("#LocalRynok").val();
  } else {
    var LocalRynok_fee = 0;
  }

  if (ZaPredelami.checked) {
    var ZaPredelami_fee = $("#ZaPredelami").val();
  } else {
    var ZaPredelami_fee = 0;
  }

  if (VychetyISald.checked) {
    var VychetyISald_fee = $("#VychetyISald").val();
  } else {
    var VychetyISald_fee = 0;
  }

  if (Diagramma.checked) {
    var Diagramma_fee = $("#Diagramma").val();
  } else {
    var Diagramma_fee = 0;
  }

  if (ObrSvz.checked) {
    var ObrSvz_fee = $("#ObrSvz").val();
  } else {
    var ObrSvz_fee = 0;
  }

  // alert(tuition_fee)
  var total_fee =
    parseInt(PoryadokNal_fee) +
    parseInt(LocalRynok_fee) +
    parseInt(ZaPredelami_fee) +
    parseInt(VychetyISald_fee) +
    parseInt(Diagramma_fee) +
    parseInt(ObrSvz_fee);
  return total_fee;
}

function checkInputs() {
  var sumbitForm = true;

  // trim to remove the whitespaces
  const nameValue = name.value.trim();
  const surnameValue = surname.value.trim();
  const lastnameValue = lastname.value.trim();
  const emailValue = email.value.trim();
  const telValue = tel.value.trim();

  const name_PolValue = name_Pol.value.trim();
  const surname_PolValue = surname_Pol.value.trim();
  const lastname_PolValue = lastname_Pol.value.trim();
  const email_PolValue = email_Pol.value.trim();
  const tel_PolValue = tel_Pol.value.trim();

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

  if (Podarok.checked) {
    if (surname_PolValue === "") {
      setErrorFor(surname_Pol, "Заполните поле Фамилия");
      submitForm = false;
    } else {
      setSuccessFor(surname_Pol);
    }

    if (name_PolValue === "") {
      setErrorFor(name_Pol, "Заполните поле Имя");
      submitForm = false;
    } else {
      setSuccessFor(name_Pol);
    }

    if (lastname_PolValue === "") {
    } else {
      setSuccessFor(lastname_Pol);
    }

    if (email_PolValue === "") {
      setErrorFor(email_Pol, "Заполните поле Почта");
      submitForm = false;
    } else if (!isEmail(email_PolValue)) {
      setErrorFor(email_Pol, "Неверный формат почты");
      submitForm = false;
    } else {
      setSuccessFor(email_Pol);
    }

    if (tel_PolValue === "") {
      setErrorFor(tel_Pol, "Заполните поле Номер");
      submitForm = false;
    } else if (!validatePhone(tel_PolValue)) {
      setErrorFor(tel_Pol, "Неверный номер");
      submitForm = false;
    } else {
      setSuccessFor(tel_Pol);
    }
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

// AJAX GOOGLE FORM

$("#form").submit(function (event) {
  event.preventDefault();
  $("#feedback").html("");
  setTimeout(function () {
    var VesKurs = "Нет";
    var Vstuplenie = "Нет";
    var ProgrammaKursa = "Нет";
    var PoryadokNal = "Нет";
    var LocalRynok = "Нет";
    var ZaPredelami = "Нет";
    var VychetyISald = "Нет";
    var Diagramma = "Нет";
    var PodgRaschet = "Нет";
    var Skidka = "Нет";
    var Podarok = "Нет";
    var ObrSvz = "Нет";

    if ($("#VesKurs").is(":checked")) {
      VesKurs = "Да";
    }
    if ($("#Vstuplenie").is(":checked")) {
      Vstuplenie = "Да";
    }
    if ($("#ProgrammaKursa").is(":checked")) {
      ProgrammaKursa = "Да";
    }
    if ($("#PoryadokNal").is(":checked")) {
      PoryadokNal = "Да";
    }
    if ($("#LocalRynok").is(":checked")) {
      LocalRynok = "Да";
    }
    if ($("#ZaPredelami").is(":checked")) {
      ZaPredelami = "Да";
    }
    if ($("#VychetyISald").is(":checked")) {
      VychetyISald = "Да";
    }
    if ($("#Diagramma").is(":checked")) {
      Diagramma = "Да";
    }
    if ($("#PodgRaschet").is(":checked")) {
      PodgRaschet = "Да";
    }
    if ($("#Skidka").is(":checked")) {
      Skidka = "Да";
    }
    if ($("#Podarok").is(":checked")) {
      Podarok = "Да";
    }
    if ($("#ObrSvz").is(":checked")) {
      ObrSvz = "Да";
    }
    // Get data
    var data = {
      "entry.312643852": VesKurs,
      "entry.1900210667": Vstuplenie,
      "entry.445182499": ProgrammaKursa,
      "entry.110349566": PoryadokNal,
      "entry.1270709721": LocalRynok,
      "entry.1985937576": ZaPredelami,
      "entry.470403761": VychetyISald,
      "entry.770136661": Diagramma,
      "entry.1084585482": PodgRaschet,
      "entry.889249229": ObrSvz,
      "entry.973358631": Skidka,
      "entry.785559364": Podarok,

      "entry.1132072097": $("#surname").val(),
      "entry.1308261533": $("#name").val(),
      "entry.210657771": $("#lastname").val(),
      "entry.1965831746": $("#tel").val(),
      "entry.2121781874": $("#email").val(),

      "entry.2085742647": $("#surname_Pol").val(),
      "entry.802595060": $("#name_Pol").val(),
      "entry.1214734007": $("#lastname_Pol").val(),
      "entry.637914283": $("#tel_Pol").val(),
      "entry.505551139": $("#email_Pol").val(),

      "entry.1916921526": totalFee(),
    };

    // Validate form
    var formSuccess = true;
    Object.keys(data).forEach(function (key, index) {
      if (
        !data[key] &&
        key != "entry.210657771" &&
        key != "entry.2085742647" &&
        key != "entry.802595060" &&
        key != "entry.1214734007" &&
        key != "entry.637914283" &&
        key != "entry.505551139"
      ) {
        formSuccess = false;
        $("#feedback").html(
          '<label style=" border-radius: 1em; padding:10px;border: solid red 2px" class="text-danger text-center">Заполните поля корректно</label>'
        );
      }
    });

    if (!checkInputs()) {
      formSuccess = false;
      $("#feedback").html(
        '<label style=" border-radius: 1em; padding:10px;border: solid red 2px" class="text-danger text-center">Заполните поля корректно</label>'
      );
    }

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
          $("#feedback").html(
            '<label class="text-success text-center">Заявка принята! В ближайшее время на ваш почтовый ящик будет отправлено письмо с дальнейшими инструкциями!</label>'
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
