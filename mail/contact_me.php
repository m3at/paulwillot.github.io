<?php
$to      = 'kiwi.pwillot@gmail.com';
$subject = 'the subject';
$message = 'hello';
$headers = 'From: kiwi.pwillot@gmail.com' . "\r\n" .
    'Reply-To: kiwi.pwillot@gmail.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);
return true;
?>
