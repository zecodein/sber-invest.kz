<?php include 'sentMail.php';?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link
      href="style/bootstrap.min.css"
      rel="stylesheet"
      crossorigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"
    />
    <!-- <link rel="stylesheet" href="/style/style.css" /> -->
    <link rel="stylesheet" href="/style/courses.css" />

    <!-- js for query -->
    <title>Сбережения и инвестиции</title>
    <link
      href="style/bootstrap.min.css"
      rel="stylesheet"
      crossorigin="anonymous"
    />
    <script
      src="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/js/bootstrap.min.js"
      integrity="sha384-oesi62hOLfzrys4LxRF63OJCXdXDipiYWBnvTl9Y9/TRlw5xlKIEHpNyvvDShgf/"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
      integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
      crossorigin="anonymous"
    ></script>
    <script
      type="module"
      src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
    ></script>
    <script
      nomodule
      src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
    ></script>
    <link href="style/courses.css" rel="stylesheet" crossorigin="anonymous" />
  </head>
  <body>
    <!-- Navbar menu -->
    <nav
      class="
        navbar navbar-expand-lg navbar-dark
        py-1 py-sm-3
        bg-dark
        sticky-top
      "
    >
      <div class="container">
        <div class="d-flex text-nowrap">
          <a href="index.html"
            ><img
              src="/style/img/logo0-0bg.png"
              alt=""
              width="50px"
              class="mx-3"
          /></a>
          <a
            href="index.html"
            class="
              d-flex
              sberInv
              navbar-brand
              my-0 my-sm-1
              text-wrap
              align-items-center
            "
            >СБЕРЕЖЕНИЯ И ИНВЕСТИЦИИ</a
          >
        </div>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarID"
          aria-controls="navbarID"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="navbar-collapse collapse" id="navbarID">
          <ul class="navbar-nav">
            <li class="nav-item d-block">
              <a href="services.html" class="nav-link text-nowrap"
                >Налоговая декларация</a
              >
            </li>

            <li class="nav-item d-block">
              <a href="courses.html" class="nav-link active text-nowrap"
                >Курс «Налоги инвестора в Казахстане»</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- HEADER -->
    <!-- style="background: url('https://fs03.getcourse.ru/fileservice/file/download/a/143375/sc/212/h/9d9ba98ec777006c32a619c070f9cf8d.jpg') no-repeat fixed; background-size: cover; background-position:center; 
    height: 100%; height: 500px; background-blend-mode: darken; opacity: 0;" -->
    <section
      class="text-white p-lg-50 text-center pt-5"
      style="
        height: 500px;
        background:
      /* top, transparent black, faked with gradient */ linear-gradient(
            rgba(0, 0, 0, 0.7),
            rgba(0, 0, 0, 0.7)
          ),
          /* bottom, image */ url(style/img/courses_bg.png);
      "
    >
      <header
        class="header show-on-scroll h-50 pt-5"
        style="display: flex; flex-direction: column; justify-content: center"
      >
        <h2 class="heading">Курс</h2>
        <h1 class="heading text-warning">НАЛОГИ ИНВЕСТОРА В КАЗАХСТАНЕ</h1>
      </header>
      <a href="#OformitSert" class="btn btn-warning text-white fs-3">Начать</a>
    </section>

    <section class="p-5 bg-light text-secondary py-5 text-center">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="lead">
              <p
                class="m-auto"
                style="text-align: left; max-width: 1280px; width: auto"
              >
                Налоги являются самой большой статьей расходов инвестора. В этом
                курсе собраны принципы налогообложения и налоговой отчетности
                инвестора в Казахстане. Знания, полученные на курсе, позволят
                трезво судить о налоговой эффективности ваших инвестиций и
                экономить за счет ее своевременной оптимизации и корректировки
                (при необходимости).
              </p>
              <p
                class="m-auto pt-2"
                style="text-align: left; max-width: 1280px; width: auto"
              >
                Закончив курс, вы сможете самостоятельно, без помощи налогового
                консультанта, подготовить и подать налоговую декларацию.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="m-auto p-5" style="background: #1a1b22; color: white">
      <h2
        class="text-uppercase text-center m-auto"
        style="max-width: 960px; width: auto"
      >
        <strong
          >Курсы расчитаны на инвесторов без специальной налоговой
          подготовки</strong
        >
      </h2>
      <br />
      <div class="container">
        <div class="row">
          <div class="col-md">
            <h3 class="text-uppercase text-warning">Курс будет полезен</h3>
            <hr style="height: 5px; border: none" />
            <br />
            <ul>
              <li>
                инвесторам, имеющим локальные и зарубежные брокерские счета
              </li>
              <li>инвесторам Tabys, iKapitalist, Proportunity и QuantDART</li>
              <li>
                физическим лицам, с любыми зарубежными активами в собственности
              </li>
              <li>
                всем интересующимся налогообложением инвестиций на фондовом
                рынке
              </li>
            </ul>
          </div>
          <div class="col-md">
            <h3 class="text-uppercase text-warning">Вы научитесь</h3>
            <hr style="height: 5px; border: none" />
            <br />
            <ul>
              <li>
                разбираться в налогообложении инвестиции и его особенностях
              </li>
              <li>
                правильно определять налоговые последствия включения того или
                иного актива в свой портфель (оценивать налоговую эффективность)
              </li>
              <li>
                понимать, в каких случаях необходимо самостоятельно
                декларировать свои доходы на локальном и зарубежных рынках
              </li>
              <li>
                правильно учитывать и «брать в зачет» налоги, уплаченные в
                иностранном государстве
              </li>
              <li>снижать налоги с помощью вычетов</li>
              <li>
                самостоятельно готовить расчет и документы для подачи налоговой
                декларации
              </li>
              <li>
                своевременно и правильно заполнять декларацию по форме 240 в
                личном кабинете налогоплательщика и отправлять ее в налоговый
                орган
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="p-5" style="background: #f5f6f7">
      <h2
        class="text-uppercase text-center m-auto"
        style="max-width: 960px; width: auto"
      >
        <strong>КАК УСТРОЕН КУРС</strong>
      </h2>
      <br />
      <div class="container mb-3">
        <div class="row">
          <p class="mx-auto mb-0">
            Программа курса состоит из двух частей: теоретической и
            практической. В теорию вошли общий порядок налогообложения и
            отчетность инвестора в Казахстане. Рассматриваются традиционные
            инструменты на локальном и зарубежных рынках, инструменты Tabys,
            iKapitalist, Proportunity и QuantDART, производные финансовые
            инструменты, IPO и крипта. Отдельная видео-лекция посвящена
            налоговым вычетам, инструментам налоговых консультантов и в каких
            случаях к ним нужно обращаться.
          </p>
          <p class="mx-auto mt-1">
            Практическая часть состоит из 3 видео-инструкций как самостоятельно
            подготовить расчет и подать декларацию в кабинете налогоплательщика.
          </p>

          <div class="col-lg">
            <br />
            <div
              class="row"
              style="
                display: flex;
                align-items: center;
                justify-content: center;
              "
            >
              <div
                class="col-12 col-md-4 ps-0"
                style="display: flex; justify-content: center"
              >
                <div
                  class="card"
                  style="
                    border-radius: 50%;
                    width: 100px;
                    height: 100px;
                    border: solid #7d9cda 2px;
                  "
                >
                  <span class="h1 m-auto text-warning">5</span>
                </div>
              </div>
              <div class="col-12 col-lg-6">
                <div class="card-body px-0 text-center">
                  Видео-лекций теории
                </div>
              </div>
              <div class="col-12 col-lg-2 ps-0">
                <div class="h1 text-center">+</div>
              </div>
            </div>
          </div>

          <div class="col-lg">
            <br />
            <div
              class="row"
              style="
                display: flex;
                align-items: center;
                justify-content: center;
              "
            >
              <div
                class="col-12 col-md-4 ps-0"
                style="display: flex; justify-content: center"
              >
                <div
                  class="card"
                  style="
                    border-radius: 50%;
                    width: 100px;
                    height: 100px;
                    border: solid #7d9cda 2px;
                  "
                >
                  <span class="h1 m-auto text-warning">3</span>
                </div>
              </div>
              <div class="col-12 col-lg-6">
                <div class="card-body px-0 text-center">
                  Видео-лекций практики
                </div>
              </div>
              <div class="col-12 col-lg-2 ps-0">
                <div class="h1 text-center">+</div>
              </div>
            </div>
          </div>

          <div class="col-lg">
            <br />
            <div
              class="row"
              style="
                display: flex;
                align-items: center;
                justify-content: center;
              "
            >
              <div
                class="col-12 col-md-4 ps-0"
                style="display: flex; justify-content: center"
              >
                <div
                  class="card"
                  style="
                    border-radius: 50%;
                    width: 100px;
                    height: 100px;
                    border: solid #7d9cda 2px;
                  "
                >
                  <span class="h1 m-auto text-warning">2</span>
                </div>
              </div>
              <div class="col-12 col-lg-6">
                <div class="card-body px-0 text-center">
                  Месяцев обратной связи в чате учеников*
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div class="row">
          <div class="col-md">
            <div style="font-size: 10px">
              *Задавать вопросы и обмениваться опытом с коллегами в обучении в
              телеграмм чате курса можно будет в течение 6 месяцев. Время работы
              спикера/куратора в чате ограничено и зависит от загруженности.
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- СОДЕРЖАНИЕ -->
    <section class="my-3">
      <h2 class="text-center my-3"><strong>СОДЕРЖАНИЕ КУРСА</strong></h2>

      <div class="container">
        <div
          id="accordion"
          style="
            border: solid #fff 0px;
            border-radius: 0.25em;
            box-shadow: 1em 1em 2em 0.25em rgba(0, 0, 0, 0.2);
          "
        >
          <div class="card">
            <div class="card-header text-start" id="headingOne">
              <h5 class="mb-0">
                <button
                  class="btn text-start"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <ins>Вступление к курсу «Налоги инвестора в Казахстане»</ins>
                </button>
              </h5>
            </div>

            <div
              id="collapseOne"
              class="collapse show"
              aria-labelledby="headingOne"
              data-parent="#accordion"
            >
              <div class="card-body">
                <ul>
                  <li>Видео - Ролик вступление</li>
                  <li>Программа курса</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingTwo">
              <h5 class="mb-0">
                <button
                  class="btn collapsed text-start"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <ins> Порядок налогообложения физических лиц в РК </ins>
                </button>
              </h5>
            </div>
            <div
              id="collapseTwo"
              class="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordion"
            >
              <div class="card-body">
                <ul>
                  <li>Налоговые резиденты РК</li>
                  <li>У кого возникает обязательство по подаче декларации?</li>
                  <li>
                    Порядок налогообложения (сроки, ставки, уплата налога,
                    штрафы)
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingThree">
              <h5 class="mb-0">
                <button
                  class="btn collapsed text-start"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  <ins> Налогообложение доходов на локальных рынках </ins>
                </button>
              </h5>
            </div>
            <div
              id="collapseThree"
              class="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordion"
            >
              <div class="card-body">
                <ul>
                  <li>Операции с ценными бумагами</li>
                  <li>Дивиденды, купоны и вознаграждения</li>
                  <li>Tabys, iKapitalist, Proportunity и QuantDART</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingFour">
              <h5 class="mb-0">
                <button
                  class="btn collapsed text-start"
                  data-toggle="collapse"
                  data-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  <ins> Налогообложение доходов за пределами РК </ins>
                </button>
              </h5>
            </div>
            <div
              id="collapseFour"
              class="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordion"
            >
              <div class="card-body">
                <ul>
                  <li>Операции с ценными бумагами на зарубежных рынках</li>
                  <li>Страны со льготным налогообложением</li>
                  <li>Дивиденды, купоны и вознаграждения</li>
                  <li>
                    Производные финансовые инструменты, IPO, крипто валюты
                  </li>
                  <li>
                    Налогообложение Активов – На что нужно обратить внимание
                    перед включением актива в портфель
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingFive">
              <h5 class="mb-0">
                <button
                  class="btn collapsed text-start"
                  data-toggle="collapse"
                  data-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  <ins> Налоговые вычеты и сальдирование </ins>
                </button>
              </h5>
            </div>
            <div
              id="collapseFive"
              class="collapse"
              aria-labelledby="headingFive"
              data-parent="#accordion"
            >
              <div class="card-body">
                <ul>
                  <li>Операции с ценными бумагами на зарубежных рынках</li>
                  <li>Страны со льготным налогообложением</li>
                  <li>Дивиденды, купоны и вознаграждения</li>
                  <li>
                    Производные финансовые инструменты, IPO, крипто валюты
                  </li>
                  <li>
                    Налогообложение Активов – На что нужно обратить внимание
                    перед включением актива в портфель
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingSix">
              <h5 class="mb-0">
                <button
                  class="btn collapsed text-start"
                  data-toggle="collapse"
                  data-target="#collapseSix"
                  aria-expanded="false"
                  aria-controls="collapseSix"
                >
                  <ins>
                    Инструменты инвестора - Диаграммы налогообложения активов
                  </ins>
                </button>
              </h5>
            </div>
            <div
              id="collapseSix"
              class="collapse"
              aria-labelledby="headingSix"
              data-parent="#accordion"
            >
              <div class="card-body">
                <ul>
                  <li>
                    Рассмотрим диаграммы налогообложения активов от «Сбережения
                    и Инвестиции» (Дивиденды и Ценные Бумаги)
                  </li>
                  <li>
                    Пошагово разберем, как ими пользоваться на примере активов
                    на локальном и зарубежных рынках
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingSeven">
              <h5 class="mb-0">
                <button
                  class="btn collapsed text-start"
                  data-toggle="collapse"
                  data-target="#collapseSeven"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  <ins> Подготовка расчета </ins>
                </button>
              </h5>
            </div>
            <div
              id="collapseSeven"
              class="collapse"
              aria-labelledby="headingSeven"
              data-parent="#accordion"
            >
              <div class="card-body">
                <ul>
                  <li>
                    На примере реального портфеля определим, какие доходы
                    облагаются налогом, а какие нет.
                  </li>
                  <li>
                    Подготовим расчет по операциям с ценными бумагами и
                    дивидендам для дальнейшего заполнения декларации по форме
                    240.00 в личном кабинете налогоплательщика
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingEight">
              <h5 class="mb-0">
                <button
                  class="btn collapsed text-start"
                  data-toggle="collapse"
                  data-target="#collapseEight"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  <ins> Заполнение декларации (ФНО240) </ins>
                </button>
              </h5>
            </div>
            <div
              id="collapseEight"
              class="collapse"
              aria-labelledby="headingEight"
              data-parent="#accordion"
            >
              <div class="card-body">
                <ul>
                  <li>
                    Пошагово разберем заполнение декларации по форме 240.00 в
                    личном кабинете налогоплательщика
                  </li>
                  <li>
                    Пошаговая видео инструкция по расчету налогооблагаемой базы
                    и сумм налогов на основе условного портфеля. (+ расчет в
                    excel формате)
                  </li>
                  <li>
                    Пошаговая инструкция заполнения декларации по форме 240
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div class="container text-end my-2">
          <button class="btn btn-secondary text-start">
            Скачать Силлабус курса «Налоги инвестора в Казахстане» полностью
          </button>
        </div>
      </div>
    </section>

    <section class="p-5" style="background: #fafafc">
      <h2
        class="text-uppercase text-center m-auto"
        style="max-width: 960px; width: auto"
      >
        <strong>ДОПОЛНИТЕЛЬНО ВЫ ПОЛУЧИТЕ</strong>
      </h2>
      <br />
      <div
        class="card mb-3 mx-auto"
        style="max-width: 1200px; border: none; background: #fafafc"
      >
        <div class="row g-0">
          <div class="col-md-4">
            <img style="max-width: 250px" src="style/img/success.png" alt="" />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <ul>
                <li>Все презентации курса в PDF формате</li>
                <li>
                  Прикладные инструменты инвестора:
                  <ul style="list-style: none">
                    <li>
                      - диаграмма налогообложения активов по ценным бумагам
                    </li>
                    <li>- диаграмма налогообложения активов по дивидендам</li>
                  </ul>
                </li>
                <li>
                  Пошаговая видео инструкция по расчету налогооблагаемой базы и
                  сумм налогов на основе условного портфеля. (+ расчет в excel
                  формате)
                </li>
                <li>Пошаговая инструкция заполнения декларации по форме 240</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="p-5" style="background: #fff5ef">
      <div class="container">
        <div class="row">
          <div class="col-md">
            <div
              class="card mb-3 border-0"
              style="max-width: 540px; background: #fff5ef"
            >
              <div class="row g-0">
                <div class="col-lg-6">
                  <img
                    style="max-width: 250px"
                    src="style/img/repnikov.png"
                    alt=""
                  />
                </div>
                <div class="col-lg-6">
                  <div class="card-body">
                    <h5 class="card-title">Автор курса</h5>
                    <p class="card-text">
                      Директор проекта Сбережения и Инвестиции.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <h5><strong>Александр Репников</strong></h5>

            <p>
              Ведущий курсов по портфельным инвестициям и финансовой
              грамотности, независимый финансовый советник, автор книги
              «Сбережения и Инвестиции», руководитель полевых работ в компании
              Schlumberger.
            </p>
            <p>
              С 2016 года активно работает над темой сбережений и инвестиций в
              Казахстане. Имеет диплом MBA в Geneva Business School со
              специализацией в международных финансах. Работа над диссертацией
              легла в основу книги и проекта «Сбережения и Инвестиции».
            </p>
          </div>

          <div class="col-md">
            <div
              class="card mb-3 border-0"
              style="max-width: 540px; background: #fff5ef"
            >
              <div class="row g-0">
                <div class="col-lg-6">
                  <img
                    style="border-radius: 500%; max-width: 250px"
                    src="style/img/repnikova.png"
                    alt=""
                  />
                </div>
                <div class="col-lg-6">
                  <div class="card-body">
                    <h5 class="card-title">Спикер курса</h5>
                    <p class="card-text">Налоговый консультант</p>
                  </div>
                </div>
              </div>
            </div>
            <h5><strong>Людмила Репникова</strong></h5>
            <p>
              Налоговый консультант 1-й категории, член Палаты Налоговых
              Консультантов Казахстана. Ведущая курсов по финансовой грамотности
              и налогообложению.
            </p>
            <p>
              С 2010 года работает в компании EY. Имеет обширный опыт
              предоставления услуг по вопросам налогообложения для местных и
              иностранных компаний.
            </p>
            <p>
              С 2020 года Людмила в рамках проекта «Сбережения и Инвестиции»
              консультирует частных инвесторов касательно налоговой отчетности.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Costs -->
    <section>
      <div class="container">
        <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
          <h1 class="display-4 fw-normal">Стоимость</h1>
          <p class="fs-5 text-muted"></p>
        </div>

        <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
          <div class="col-md-6">
            <div class="card mb-4 rounded-3 shadow-sm border-dark minPacket">
              <div class="card-header py-2 text-white bg-dark border-dark">
                <h4 class="my-0 fw-normal">
                  Курс Общий порядок налогообложения
                </h4>
                <!-- <hr class="my-2"/><h4 class="my-0 fw-normal py-0">Налоговая декларация</h4> -->
              </div>
              <div class="card-body d-flex flex-column">
                <div class="list-group-flush mt-3 mb-4 text-start">
                  <div class="text-center">
                    Видео-инструкции как самостоятельно подготовить расчет и
                    подать декларацию (практическая часть) находится в общем
                    доступе на нашем YouTube канале и доступны бесплатно.
                  </div>
                </div>
                <a
                  target="_blank"
                  href="https://www.youtube.com/watch?v=QYYXfve5YcU&ab_channel=BatyrkhanYelemes"
                  class="btn btn-dark w-50 mt-auto mx-auto ZakazUsl"
                  >Учитесь бесплатно</a
                >
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="card mb-4 rounded-3 shadow-sm border-warning stdPacket">
              <div
                class="card-header py-2 text-white bg-warning border-warning"
              >
                <h4 class="my-0 fw-normal">
                  Налоги инвестора. Весь цикл курсов
                </h4>
                <!-- <hr class="my-2"/><h4 class="my-0 fw-normal py-0">Налоговая декларация+</h4> -->
              </div>
              <div class="card-body d-flex flex-column">
                <div class="list-group-flush mt-3 mb-4 text-start">
                  <div class="text-center">
                    Купить курс можно как целиком, так и частично, выбрав
                    интересующие вас части.
                  </div>
                </div>
                <a
                  id="OformitZayav"
                  data-bs-toggle="modal"
                  href="#exampleModalToggle"
                  role="button"
                  class="
                    btn btn-warning
                    w-50
                    mt-auto
                    mx-auto
                    text-white
                    ZakazUsl
                  "
                  >Оформить заявку</a
                >

                <div
                  class="modal fade"
                  id="exampleModalToggle"
                  aria-hidden="true"
                  aria-labelledby="exampleModalToggleLabel"
                  tabindex="-1"
                >
                  <div class="modal-dialog modal-dialog-centered modal-xl">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalToggleLabel">
                          Оформить заказ
                        </h5>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body text-start">
                        <form id="form" method="post" >
                          <div class="form-check form-switch">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              id="VesKurs"
                              value="80000"
                              checked
                            />
                            <label class="form-check-label w-75" for="VesKurs"
                              >Налоги Инвестора в Казахстане. Весь курс целиком </label
                            ><span class="text-end" style="float: right"
                              >80 000 тг</span
                            >
                          </div>
                          <p class="mt-3">
                            или выбрать только интересующие вас темы:
                          </p>
                          <!-- <hr class="my-1" /> -->
                          <div class="form-check form-switch">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              id="Vstuplenie"
                              value="Yes"
                              checked
                              disabled
                            />
                            <label
                              class="form-check-label w-75"
                              for="Vstuplenie"
                              >Вступление к курсу «Налоги инвестора в
                              Казахстане»</label
                            >
                          </div>
                          <hr class="my-1" />
                          <div class="form-check form-switch">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              id="ProgrammaKursa"
                              value="Yes"
                              checked
                              disabled
                            />
                            <label
                              class="form-check-label w-75"
                              for="ProgrammaKursa"
                              >Программа курса «Налоги инвестора в
                              Казахстане»</label
                            >
                          </div>
                          <hr class="my-1" />
                          <div class="form-check form-switch">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              id="PoryadokNal"
                              value="10000"
                              checked
                              disabled
                            />
                            <label
                              class="form-check-label w-75"
                              for="PoryadokNal"
                              >Порядок налогообложения физических лиц в
                              РК</label
                            ><span class="text-end" style="float: right"
                              >10 000 тг</span
                            >
                          </div>
                          <hr class="my-1" />
                          <div class="form-check form-switch">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              id="LocalRynok"
                              value="10000"
                              checked
                            />
                            <label
                              class="form-check-label w-75"
                              for="LocalRynok"
                              >Налогообложение доходов на локальных
                              рынках</label
                            ><span class="text-end" style="float: right"
                              >10 000 тг</span
                            >
                          </div>
                          <hr class="my-1" />
                          <div class="form-check form-switch">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              id="ZaPredelami"
                              value="10000"
                              checked
                            />
                            <label
                              class="form-check-label w-75"
                              for="ZaPredelami"
                              >Налогообложение доходов за пределами РК</label
                            ><span class="text-end" style="float: right"
                              >10 000 тг</span
                            >
                          </div>
                          <hr class="my-1" />
                          <div class="form-check form-switch">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              id="VychetyISald"
                              value="10000"
                              checked
                            />
                            <label
                              class="form-check-label w-75"
                              for="VychetyISald"
                              >Налоговые вычеты и сальдирование</label
                            ><span class="text-end" style="float: right"
                              >10 000 тг</span
                            >
                          </div>
                          <hr class="my-1" />
                          <div class="form-check form-switch">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              id="Diagramma"
                              value="10000"
                              checked
                              disabled
                            />
                            <label class="form-check-label w-75" for="Diagramma"
                              >Диаграмма налогообложения активов</label
                            ><span class="text-end" style="float: right"
                              >10 000 тг</span
                            >
                          </div>
                          <hr class="my-1" />
                          <div class="form-check form-switch">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              id="PodgRaschet"
                              value="Yes"
                              checked
                              disabled
                            />
                            <label
                              class="form-check-label w-75"
                              for="PodgRaschet"
                              >Подготовка расчета & Заполнение декларации</label
                            >
                          </div>
                          <hr class="my-1" />
                          <div class="form-check form-switch">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              id="ObrSvz"
                              value="20000"
                              checked
                            />
                            <label class="form-check-label w-75" for="ObrSvz"
                              >Обратная связь и чат учеников в течении 2-х
                              месяцев</label
                            ><span class="text-end" style="float: right"
                              >20 000 тг</span
                            >
                          </div>
                          <hr class="my-1" />

                          <div class="form-check form-switch">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              id="Skidka"
                              value="10"
                              checked
                              disabled
                            />
                            <label class="form-check-label w-75" for="Skidka"
                              >Скидка 10% на услугу
                              <a href="/form240.html"
                                >«Подготовка декларации (форма 240)»</a
                              ></label
                            ><span class="text-end" style="float: right"
                              >-10%</span
                            >
                          </div>

                          <br />
                          <div class="form-check form-switch">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              id="Podarok"
                            />
                            <label class="form-check-label w-75" for="Podarok"
                              >Оформить подарочный сертификат</label
                            >
                          </div>
                          <br />
                          <div class="form-check form-switch">
                            <label class="form-check-label w-75">Итого:</label
                            ><span
                              id="totalPrice"
                              class="text-end"
                              style="float: right"
                            ></span>
                          </div>

                          <div class="row">
                            <div class="col-12 col-lg-6">
                              <div class="card">
                                <div class="card-header">
                                  <h5 class="card-title mb-0">
                                    <span class="text-danger">*</span> Фамилия
                                  </h5>
                                </div>
                                <div class="card-body form-control">
                                  <input
                                    id="surname"
                                    type="text"
                                    name="surname"
                                    class="form-control"
                                    placeholder="Фамилия"
                                  />
                                  <small>Error Message</small>
                                </div>
                              </div>

                              <div class="card">
                                <div class="card-header">
                                  <h5 class="card-title mb-0">
                                    <span class="text-danger">*</span> Имя
                                  </h5>
                                </div>
                                <div class="card-body form-control">
                                  <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    class="form-control"
                                    placeholder="Имя"
                                  />
                                  <small>Error Message</small>
                                </div>
                              </div>

                              <div class="card">
                                <div class="card-header">
                                  <h5 class="card-title mb-0">Отчество</h5>
                                </div>
                                <div class="card-body">
                                  <input
                                    id="lastname"
                                    type="text"
                                    name="patronomic"
                                    class="form-control"
                                    placeholder="Отчество"
                                  />
                                </div>
                              </div>
                            </div>
                            <div class="col-12 col-lg-6">
                              <div class="card">
                                <div class="card-header">
                                  <h5 class="card-title mb-0">
                                    <span class="text-danger">*</span> Телефон
                                    для связи (сотовый)
                                  </h5>
                                </div>
                                <div class="card-body form-control">
                                  <input
                                    id="tel"
                                    type="tel"
                                    name="tel"
                                    class="form-control"
                                    pattern="[0-9]{,2}-[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                    value="+7"
                                  />
                                  <small>Error Message</small>
                                </div>
                              </div>

                              <div class="card">
                                <div class="card-header">
                                  <h5 class="card-title mb-0">
                                    <span class="text-danger">*</span>
                                    Электроная почта
                                  </h5>
                                </div>
                                <div class="card-body form-control">
                                  <input
                                    id="email"
                                    type="text"
                                    name="email"
                                    class="form-control"
                                    placeholder="e-mail"
                                  />
                                  <small>Error Message</small>
                                </div>
                              </div>
                            </div>

                            <br />

                            <div
                              class="container px-0"
                              id="PodarochniySertif"
                              style="display: none"
                            >
                              <div class="card mt-3">
                                <div class="card-header">
                                  <h5 class="card-title mb-0">
                                    Получатель подарочного сертификата
                                  </h5>
                                  <br />
                                  <div class="row">
                                    <div class="col-12 col-lg-6">
                                      <div class="card">
                                        <div class="card-header">
                                          <h5 class="card-title mb-0">
                                            <span class="text-danger">*</span>
                                            Фамилия
                                          </h5>
                                        </div>
                                        <div class="card-body form-control">
                                          <input
                                            id="surname_Pol"
                                            type="text"
                                            name="surname_Pol"
                                            class="form-control"
                                            placeholder="Фамилия"
                                          />
                                          <small>Error Message</small>
                                        </div>
                                      </div>

                                      <div class="card">
                                        <div class="card-header">
                                          <h5 class="card-title mb-0">
                                            <span class="text-danger">*</span>
                                            Имя
                                          </h5>
                                        </div>
                                        <div class="card-body form-control">
                                          <input
                                            type="text"
                                            id="name_Pol"
                                            name="name_Pol"
                                            class="form-control"
                                            placeholder="Имя"
                                          />
                                          <small>Error Message</small>
                                        </div>
                                      </div>

                                      <div class="card">
                                        <div class="card-header">
                                          <h5 class="card-title mb-0">
                                            Отчество
                                          </h5>
                                        </div>
                                        <div class="card-body">
                                          <input
                                            id="lastname_Pol"
                                            type="text"
                                            name="patronomic_Pol"
                                            class="form-control"
                                            placeholder="Отчество"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div class="col-12 col-lg-6">
                                      <div class="card">
                                        <div class="card-header">
                                          <h5 class="card-title mb-0">
                                            <span class="text-danger">*</span>
                                            Телефон для связи (сотовый)
                                          </h5>
                                        </div>
                                        <div class="card-body form-control">
                                          <input
                                            id="tel_Pol"
                                            type="tel"
                                            name="mobile"
                                            class="form-control"
                                            pattern="[0-9]{,2}-[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                            value="+7"
                                          />
                                          <small>Error Message</small>
                                        </div>
                                      </div>

                                      <div class="card">
                                        <div class="card-header">
                                          <h5 class="card-title mb-0">
                                            <span class="text-danger">*</span>
                                            Электроная почта
                                          </h5>
                                        </div>
                                        <div class="card-body form-control">
                                          <input
                                            id="email_Pol"
                                            type="text"
                                            name="email"
                                            class="form-control"
                                            placeholder="e-mail"
                                          />
                                          <small>Error Message</small>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <br />
                          <div class="" style="display: flex">
                            <input
                              id="PolitikaKonf"
                              class="m-1"
                              type="checkbox"
                              value=""
                            />
                            <label
                              required
                              class="form-check-label ms-2"
                              for="flexCheckDefault"
                              >«С политикой конфиденциальности и договором
                              оказания услуг (договор - оферта) ознакомлен. С
                              правилами оказания услуг согласен»
                            </label>

                            <br />
                          </div>
                          <div class="modal-footer">
                            <div class="container">
                              <div class="mt-1 text-center" id="feedback"></div>
                              <div>
                                <p class="success">
                                  <?php echo $success;  ?></p>
                                </p>

                                <p class="failed">
                                  <?php echo $failed;  ?></p>
                                </p>
                              </div>

                              <button
                                type="submit"
                                id="submit"
                                name="submit"
                                class="btn btn-success my-3 w-100"
                              >
                                Отправить заявку
                              </button>
                            </div>
                            <div class="container">
                              <span class="text-danger">*</span> Нажимая на
                              кнопку, вы соглашаетесь на обработку персональных
                              данных.
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div
                    class="modal fade"
                    id="exampleModalToggle2"
                    aria-hidden="true"
                    aria-labelledby="exampleModalToggleLabel2"
                    tabindex="-1"
                  >
                    <div class="modal-dialog modal-dialog-centered">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalToggleLabel2">
                            Modal 2
                          </h5>
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div class="modal-body">
                          Hide this modal and show the first with the button
                          below.
                        </div>
                        <div class="modal-footer">
                          <button
                            class="btn btn-primary"
                            data-bs-target="#exampleModalToggle"
                            data-bs-toggle="modal"
                            data-bs-dismiss="modal"
                          >
                            Back to first
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="
            card
            mb-4
            rounded-3
            shadow-sm
            bg-white
            border-success
            minPacket
            d-flex
          "
        >
          <div class="row">
            <div class="col-12 col-lg-8 m-auto text-center">
              <div class="row">
                <div class="col-12 col-lg-4">
                  <img
                    src="style/img/gift.png"
                    alt=""
                    width="150px"
                    class="mx-3"
                  />
                </div>
                <div class="col-12 col-lg-8 text-center m-auto">
                  <span class="h3"> Этот курс можно подарить </span>
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-4 d-flex my-4 my-lg-0">
              <a
                id="OformitSert"
                data-bs-toggle="modal"
                href="#exampleModalToggle"
                role="button"
                class="
                  btn btn-success
                  h4
                  m-auto
                  justify-content-center
                  text-center text-white
                  ZakazUsl
                "
                >Оформить сертификат</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="text-center text-white mt-2 bg-dark">
      <!-- Grid container -->
      <div class="container p-4 pb-0">
        <div class="row">
          <div class="col-12 col-sm-6 text-start mb-3 mb-sm-0">
            Сбережения и Инвестиции – это проект направленный на развитие общей
            финансовой грамотности в Казахстане.
          </div>
          <div class="col-12 col-sm-6 text-end">
            <p>
              Политика конфиденциальности <br />
              Договор - Оферта
            </p>
          </div>
        </div>
      </div>
    </footer>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="courses.js"></script>
    <script src="js/bootstrap.bundle.min.js"></script>
  </body>
</html>
