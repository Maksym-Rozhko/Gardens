<?php 

  $phone = $_POST['Телефон'];
  $name = $_POST['Имя'];
  $token = "**********************************************";
  $chat_id = "**************";

  $arr = array(
    'Хост' => $_POST['host'],
    'Телефон: ' => '%2B'.$phone
  );

  if($name) {
    $arr['Имя'] = $name;
  }

  foreach($arr as $key => $value) {
    $txt .= "<b>".$key."</b> ".$value."%0A";
  };


  $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");