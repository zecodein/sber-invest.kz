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
    $("#ObrSvz").prop("checked", false);

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
    if (
      element.checked === false &&
      element != document.getElementById("Podarok")
    ) {
      $("#VesKurs").prop("checked", false);
      $("#Skidka").prop("checked", false);
      $("#ObrSvz").prop("checked", false);
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
    var PoryadokNal = "Нет, 0 тг";
    var LocalRynok = "Нет, 0 тг";
    var ZaPredelami = "Нет, 0 тг";
    var VychetyISald = "Нет, 0 тг";
    var Diagramma = "Нет, 0 тг";
    var PodgRaschet = "Нет";
    var Skidka = "Нет";
    var Podarok = "Нет";
    var ObrSvz = "Нет";

    var VK = false;
    var LK = false;
    var ZPR = false;
    var VS = false;

    if ($("#VesKurs").is(":checked")) {
      VesKurs = "Да";
      VK = true;
    }
    if ($("#Vstuplenie").is(":checked")) {
      Vstuplenie = "Да";
    }
    if ($("#ProgrammaKursa").is(":checked")) {
      ProgrammaKursa = "Да";
    }
    if ($("#PoryadokNal").is(":checked")) {
      PoryadokNal = "Да, 10 000 тг";
    }
    if ($("#LocalRynok").is(":checked")) {
      LocalRynok = "Да, 10 000 тг";
      LK = true;
    }
    if ($("#ZaPredelami").is(":checked")) {
      ZaPredelami = "Да, 10 000 тг";
      ZPR = true;
    }
    if ($("#VychetyISald").is(":checked")) {
      VychetyISald = "Да, 10 000 тг";
      VS = true;
    }
    if ($("#Diagramma").is(":checked")) {
      Diagramma = "Да, 10 000 тг";
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

    if (!VK && !LK && !ZPR && !VS) {
      Link =
        "https://auth.robokassa.kz/Merchant/Index.aspx?MerchantLogin=Sber-Invest&InvId=0&Culture=ru&Encoding=utf-8&OutSum=20000&SignatureValue=8dba8adb7f284f09a20952144974e80c";
    } else if (!VK && LK && !ZPR && !VS) {
      Link =
        "https://auth.robokassa.kz/Merchant/Index.aspx?MerchantLogin=Sber-Invest&InvId=0&Culture=ru&Encoding=utf-8&OutSum=30000&SignatureValue=2919adfad560d8a8c71abe153a829b23";
    } else if (!VK && LK && !ZPR && VS) {
      Link =
        "https://auth.robokassa.kz/Merchant/Index.aspx?MerchantLogin=Sber-Invest&InvId=0&Culture=ru&Encoding=utf-8&OutSum=40000&SignatureValue=58f58616e4725eecc19c9ad9afcfa873";
    } else if (!VK && !LK && ZPR && !VS) {
      Link =
        "https://auth.robokassa.kz/Merchant/Index.aspx?MerchantLogin=Sber-Invest&InvId=0&Culture=ru&Encoding=utf-8&OutSum=30000&SignatureValue=2919adfad560d8a8c71abe153a829b23";
    } else if (!VK && !LK && ZPR && VS) {
      Link =
        "https://auth.robokassa.kz/Merchant/Index.aspx?MerchantLogin=Sber-Invest&InvId=0&Culture=ru&Encoding=utf-8&OutSum=40000&SignatureValue=58f58616e4725eecc19c9ad9afcfa873";
    } else if (!VK && !LK && !ZPR && VS) {
      Link =
        "https://auth.robokassa.kz/Merchant/Index.aspx?MerchantLogin=Sber-Invest&InvId=0&Culture=ru&Encoding=utf-8&OutSum=30000&SignatureValue=2919adfad560d8a8c71abe153a829b23";
    } else if (!VK && LK && ZPR && !VS) {
      Link =
        "https://auth.robokassa.kz/Merchant/Index.aspx?MerchantLogin=Sber-Invest&InvId=0&Culture=ru&Encoding=utf-8&OutSum=40000&SignatureValue=58f58616e4725eecc19c9ad9afcfa873";
    } else if (VK && LK && ZPR && VS) {
      Link =
        "https://auth.robokassa.kz/Merchant/Index.aspx?MerchantLogin=Sber-Invest&InvId=0&Culture=ru&Encoding=utf-8&OutSum=70000&SignatureValue=a01653dbac12aa9087fa1d312ef395c7";
    } else if (!VK && LK && ZPR && VS) {
      Link =
        "https://auth.robokassa.kz/Merchant/Index.aspx?MerchantLogin=Sber-Invest&InvId=0&Culture=ru&Encoding=utf-8&OutSum=50000&SignatureValue=6ca1be5c595e59dacc09b7802b20886c";
    }
    // Get data
    var data = {
      "entry.157247829": VesKurs,
      "entry.827809678": Vstuplenie,
      "entry.66218428": ProgrammaKursa,
      "entry.1202909372": PoryadokNal,
      "entry.1799324774": LocalRynok,
      "entry.1383402806": ZaPredelami,
      "entry.1987514379": VychetyISald,
      "entry.1965411966": Diagramma,
      "entry.1996471710": PodgRaschet,
      "entry.1143691647": ObrSvz,
      "entry.1923884229": Skidka,
      "entry.527132034": Podarok,

      "entry.407960184": $("#surname").val(),
      "entry.1370446521": $("#name").val(),
      "entry.393019122": $("#lastname").val(),
      "entry.426447496": $("#tel").val(),
      "entry.1865767076": $("#email").val(),

      "entry.1463319336": $("#surname_Pol").val(),
      "entry.755249184": $("#name_Pol").val(),
      "entry.1106846703": $("#lastname_Pol").val(),
      "entry.132568228": $("#tel_Pol").val(),
      "entry.341313495": $("#email_Pol").val(),

      "entry.51422421": totalFee(),

      "entry.64658960": Link,
    };

    // Validate form
    var formSuccess = true;
    Object.keys(data).forEach(function (key, index) {
      if (
        !data[key] &&
        key != "entry.393019122" &&
        key != "entry.1463319336" &&
        key != "entry.755249184" &&
        key != "entry.1106846703" &&
        key != "entry.132568228" &&
        key != "entry.341313495"
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
        // url: "https://docs.google.com/forms/d/e/1FAIpQLSdXEosfgyMNreIXx66UP-L5ZaRPKSqt8DObJRLEaFQKjYt5cw/formResponse",
        url: "https://docs.google.com/forms/d/e/1FAIpQLScp_RH5HFvOTT8H92WGZRcpZxOw7c4Nw97Cblm2GXqPtUqRpA/formResponse",

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
