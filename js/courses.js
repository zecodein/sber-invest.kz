const PolitikaKonf = document.getElementById("PolitikaKonf");

PolitikaKonf.addEventListener("change", function () {
  if (this.checked) {
    PolKonfCheck.style.display = "block";
  } else {
    PolKonfCheck.style.display = "none";
  }
});

const queryString = window.location.search;
console.log(queryString);

const firstUTM = document.getElementById("firstUTM");
const secondUTM = document.getElementById("secondUTM");
const thirdUTM = document.getElementById("thirdUTM");
const forthUTM = document.getElementById("forthUTM");
const fifthUTM = document.getElementById("fifthUTM");
const sixthUTM = document.getElementById("sixthUTM");
const seventhUTM = document.getElementById("seventhUTM");
const eighthUTM = document.getElementById("eighthUTM");
const ninethUTM = document.getElementById("ninethUTM");
const PODfirstUTM = document.getElementById("PODfirstUTM");
const PODsecondUTM = document.getElementById("PODsecondUTM");
const PODthirdUTM = document.getElementById("PODthirdUTM");
const PODforthUTM = document.getElementById("PODforthUTM");
const PODfifthUTM = document.getElementById("PODfifthUTM");
const PODsixthUTM = document.getElementById("PODsixthUTM");
const PODseventhUTM = document.getElementById("PODseventhUTM");
const PODeighthUTM = document.getElementById("PODeighthUTM");
const PODninethUTM = document.getElementById("PODninethUTM");

firstUTM.value = queryString;
secondUTM.value = queryString;
thirdUTM.value = queryString;
forthUTM.value = queryString;
fifthUTM.value = queryString;
sixthUTM.value = queryString;
seventhUTM.value = queryString;
eighthUTM.value = queryString;
ninethUTM.value = queryString;
PODfirstUTM.value = queryString;
PODsecondUTM.value = queryString;
PODthirdUTM.value = queryString;
PODforthUTM.value = queryString;
PODfifthUTM.value = queryString;
PODsixthUTM.value = queryString;
PODseventhUTM.value = queryString;
PODeighthUTM.value = queryString;
PODninethUTM.value = queryString;

// Get the checkbox
var OformitSert = document.getElementById("OformitSert");
var OformitZayav = document.getElementById("OformitZayav");
// Get the output text

var PodarokOnClick = document.getElementById("Podarok");
OformitSert.addEventListener("click", function () {
  PodarokOnClick.checked = "true";
  PodFifthForm.style.display = "block";
  FifthForm.style.display = "none";
  VesKurs.checked = "true";
  LocalRynok.checked = "true";
    ZaPredelami.checked = "true";
    VychetyISald.checked = "true";
    Skidka.checked = "true";
    ObrSvz.checked = "true";
});
OformitZayav.addEventListener("click", function () {
  $("#Podarok").prop("checked", false);
  PodFifthForm.style.display = "none";
  FifthForm.style.display = "block";
  VesKurs.checked = "true";
  LocalRynok.checked = "true";
    ZaPredelami.checked = "true";
    VychetyISald.checked = "true";
    Skidka.checked = "true";
    ObrSvz.checked = "true";
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

const FirstForm = document.getElementById("FirstForm");
const SecondForm = document.getElementById("SecondForm");
const ThirdForm = document.getElementById("ThirdForm");
const ForthForm = document.getElementById("ForthForm");
const FifthForm = document.getElementById("FifthForm");
const SixthForm = document.getElementById("SixthForm");
const SeventhForm = document.getElementById("SeventhForm");
const EighthForm = document.getElementById("EighthForm");
const NinethForm = document.getElementById("NinethForm");

const PodFirstForm = document.getElementById("PodFirstForm");
const PodSecondForm = document.getElementById("PodSecondForm");
const PodThirdForm = document.getElementById("PodThirdForm");
const PodForthForm = document.getElementById("PodForthForm");
const PodFifthForm = document.getElementById("PodFifthForm");
const PodSixthForm = document.getElementById("PodSixthForm");
const PodSeventhForm = document.getElementById("PodSeventhForm");
const PodEighthForm = document.getElementById("PodEighthForm");
const PodNinethForm = document.getElementById("PodNinethForm");

const Podarok = document.getElementById("Podarok");

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
      LocalRynok.checked === false &&
      ZaPredelami.checked === true &&
      VychetyISald.checked === false &&
      Podarok.checked === false
    ) {
      SeventhForm.style.display = "block"; //////////////////
    } else {
      SeventhForm.style.display = "none";
    }

    if (
      LocalRynok.checked === true &&
      ZaPredelami.checked === false &&
      VychetyISald.checked === false &&
      Podarok.checked === false
    ) {
      EighthForm.style.display = "block"; //////////////
    } else {
      EighthForm.style.display = "none";
    }

    if (
      LocalRynok.checked === false &&
      ZaPredelami.checked === false &&
      VychetyISald.checked === true &&
      Podarok.checked === false
    ) {
      SixthForm.style.display = "block"; ///////////
    } else {
      SixthForm.style.display = "none";
    }

    if (
      LocalRynok.checked === true &&
      ZaPredelami.checked === true &&
      VychetyISald.checked === false &&
      Podarok.checked === false
    ) {
      ThirdForm.style.display = "block"; /////////////
    } else {
      ThirdForm.style.display = "none";
    }

    if (
      LocalRynok.checked === false &&
      ZaPredelami.checked === true &&
      VychetyISald.checked === true &&
      Podarok.checked === false
    ) {
      FirstForm.style.display = "block"; ////////////////////
    } else {
      FirstForm.style.display = "none";
    }

    if (
      LocalRynok.checked === true &&
      ZaPredelami.checked === false &&
      VychetyISald.checked === true &&
      Podarok.checked === false
    ) {
      SecondForm.style.display = "block"; ////////////////////
    } else {
      SecondForm.style.display = "none";
    }

    if (
      LocalRynok.checked === false &&
      ZaPredelami.checked === false &&
      VychetyISald.checked === false &&
      Podarok.checked === false
    ) {
      NinethForm.style.display = "block"; ////////////////
    } else {
      NinethForm.style.display = "none";
    }

    if (
      VesKurs.checked === false &&
      LocalRynok.checked === true &&
      ZaPredelami.checked === true &&
      VychetyISald.checked === true &&
      Podarok.checked === false
    ) {
      ForthForm.style.display = "block"; //////////////
    } else {
      ForthForm.style.display = "none";
    }

    if (
      VesKurs.checked === true &&
      LocalRynok.checked === true &&
      ZaPredelami.checked === true &&
      VychetyISald.checked === true &&
      Podarok.checked === false
    ) {
      FifthForm.style.display = "block"; /////////////
    } else {
      FifthForm.style.display = "none";
    }

    if (
      LocalRynok.checked === false &&
      ZaPredelami.checked === true &&
      VychetyISald.checked === false &&
      Podarok.checked === true
    ) {
      PodSeventhForm.style.display = "block"; //////////////////
    } else {
      PodSeventhForm.style.display = "none";
    }

    if (
      LocalRynok.checked === true &&
      ZaPredelami.checked === false &&
      VychetyISald.checked === false &&
      Podarok.checked === true
    ) {
      PodEighthForm.style.display = "block"; //////////////
    } else {
      PodEighthForm.style.display = "none";
    }

    if (
      LocalRynok.checked === false &&
      ZaPredelami.checked === false &&
      VychetyISald.checked === true &&
      Podarok.checked === true
    ) {
      PodSixthForm.style.display = "block"; ///////////
    } else {
      PodSixthForm.style.display = "none";
    }

    if (
      LocalRynok.checked === true &&
      ZaPredelami.checked === true &&
      VychetyISald.checked === false &&
      Podarok.checked === true
    ) {
      PodThirdForm.style.display = "block"; /////////////
    } else {
      PodThirdForm.style.display = "none";
    }

    if (
      LocalRynok.checked === false &&
      ZaPredelami.checked === true &&
      VychetyISald.checked === true &&
      Podarok.checked === true
    ) {
      PodFirstForm.style.display = "block"; ////////////////////
    } else {
      PodFirstForm.style.display = "none";
    }

    if (
      LocalRynok.checked === true &&
      ZaPredelami.checked === false &&
      VychetyISald.checked === true &&
      Podarok.checked === true
    ) {
      PodSecondForm.style.display = "block"; ////////////////////
    } else {
      PodSecondForm.style.display = "none";
    }

    if (
      LocalRynok.checked === false &&
      ZaPredelami.checked === false &&
      VychetyISald.checked === false &&
      Podarok.checked === true
    ) {
      PodNinethForm.style.display = "block"; ////////////////
    } else {
      PodNinethForm.style.display = "none";
    }

    if (
      VesKurs.checked === false &&
      LocalRynok.checked === true &&
      ZaPredelami.checked === true &&
      VychetyISald.checked === true &&
      Podarok.checked === true
    ) {
      PodForthForm.style.display = "block"; //////////////
    } else {
      PodForthForm.style.display = "none";
    }

    if (
      VesKurs.checked === true &&
      LocalRynok.checked === true &&
      ZaPredelami.checked === true &&
      VychetyISald.checked === true &&
      Podarok.checked === true
    ) {
      PodFifthForm.style.display = "block"; /////////////
    } else {
      PodFifthForm.style.display = "none";
    }

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

// const form = document.getElementById("form");
// const surname = document.getElementById("surname");
// const name = document.getElementById("name");
// const lastname = document.getElementById("lastname");
// const tel = document.getElementById("tel");
// const email = document.getElementById("email");

// const surname_Pol = document.getElementById("surname_Pol");
// const name_Pol = document.getElementById("name_Pol");
// const lastname_Pol = document.getElementById("lastname_Pol");
// const tel_Pol = document.getElementById("tel_Pol");
// const email_Pol = document.getElementById("email_Pol");

// const Podarok = document.getElementById("Podarok");
// form.addEventListener("submit", (e) => {
//   submit = checkInputs();
//   if (!submit) {
//     e.preventDefault();
//   } else {
//     // document.getElementById("form").submit();
//   }
// });

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
