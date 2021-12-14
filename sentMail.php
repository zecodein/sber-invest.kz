<?php  
    
if(isset($_POST['submit'])) {
 $mailto = "erdauletbatalov@gmail.com";  //My email address
 //getting customer data
 $name = $_POST['name']; //getting customer name
 $fromEmail = $_POST['email']; //getting customer email
 $phone = $_POST['tel']; //getting customer Phome number
//  $subject = $_POST['subject']; //getting subject line from client
 $subject2 = "Подтверждение: Ваш запрос был отправлен успешно!"; // For customer confirmation
    
 //Email body I will receive
    $message = "Cleint Name: " . $name . "\n"
    . "Phone Number: " . $phone . "\n\n";
    
 //Message for client confirmation
    $message2 = "Уважаемый " . $name . "\n\n"
    . "Спасибо за обращение! Мы свяжемся с вами в ближайщее время!  подтверждением заявки и запрос необходимых для подготовки расчета и заполнения декларации документов. " . "\n\n"
    . "С уважением," . "\n" . "SberInvest";
    
 //Email headers
 $headers = "From: " . $mailto; // Client email, I will receive (optionally, can be client email)
 $headers2 = "From: " . $mailto; // This will receive client 
    
 //PHP mailer function
    
  $result1 = mail($mailto, $subject, $message, $headers); // This email sent to My address
  $result2 = mail($fromEmail, $subject2, $message2, $headers2); //This confirmation email to client
    
  //Checking if Mails sent successfully
    
    if ($result1 && $result2) {
    $success = "Ваше запрос был отправлен успешно!";
    } else {
    $failed = "Извините! Ваш запрос не был отправлен, проверьте данные и попробуйте отправить снова.";
    }
    
}
    
?>