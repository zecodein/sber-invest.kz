<?php include 'sentMail.php';?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link href="style/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">

</head>
<body>

<form action="" method="post" class="needs-validation">
<div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Ваше Имя*</label>
            <input type="text" class="form-control"  name="name" required id="exampleFormControlInput1" placeholder="Иван Иванов">
            <div class="invalid-tooltip">
              Введите свое имя.
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Номер телефона*</label>
            <input type="tel" pattern="[8]{1}[0-9]{10}" required name="tel" class="form-control" id="exampleFormControlInput1" size="11" placeholder="8 (777) 123 4567">
            <div class="invalid-tooltip">
              Номер не заполнен.
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Электронная почта</label>
            <input type="email" required name="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
          </div>

          <select class="form-select mb-3"  name="subject" aria-label="Default select example">
            <option selected>Выберите категорию</option>
            <option value="1">Веб-сайт</option>
            <option value="2">Программное обеспечение и веб-сервисы</option>
            <option value="3">Мобильные приложения</option>
          </select>

          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Комментарии</label>
            <textarea class="form-control" name="message" id="exampleFormControlTextarea1" placeholder="Расскажите нам о своем запросе" rows="3"></textarea>
          </div>
          <div>
            <p class="success"> <?php echo $success;  ?></p>
            <p class="failed"> <?php echo $failed;  ?></p>
          </div>
          <div class="mb-3">
            <button class="btn btn-primary" type="submit" name="submit">Связаться</button>
          </div>
</form>



    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>

<script src="js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

</body>
</html>