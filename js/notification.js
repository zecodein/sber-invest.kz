
const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const tel = document.getElementById("tel");
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
  const emailValue = email.value.trim();
  const telValue = tel.value.trim();

  submitForm = true;

  if (nameValue === "") {
    setErrorFor(name, "Заполните поле Имя");
    submitForm = false;
  } else {
    setSuccessFor(name);
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
    // Get data
    var data = {
      "entry.640670863": "Ответ на уведомление",
      "entry.552135976": $("#name").val(),
      "entry.601304414": $("#email").val(),
      "entry.940607535": $("#tel").val(),
    };

    // Validate form
    var formSuccess = true;
    Object.keys(data).forEach(function (key, index) {
      if (
        !data[key]
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
        // url: "https://docs.google.com/forms/d/e/1FAIpQLScLyZl5LsrxnbhBdPeKtWcBRZRVzgZOIdAhP_bBUUygzI9ZrA/formResponse",
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
