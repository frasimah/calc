<?php


$secret = '6LfhU34qAAAAAANI5oXg1y_n3zkU2VwZoB8z43lp';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require_once '/var/www/www-root/data/www/reffection.ru/PHPMailer/src/Exception.php';
require_once '/var/www/www-root/data/www/reffection.ru/PHPMailer/src/PHPMailer.php';
require_once '/var/www/www-root/data/www/reffection.ru/PHPMailer/src/SMTP.php';
require_once '/var/www/www-root/data/www/reffection.ru/recaptcha/autoload.php';



$json = file_get_contents('php://input');

$data = json_decode($json);

$num_send = file_get_contents('/var/www/www-root/data/www/reffection.ru/num.txt');



if (!empty($data->recaptchaToken)) {
    // создать экземпляр службы recaptcha, используя секретный ключ
    $recaptcha = new \ReCaptcha\ReCaptcha($secret);
    // получить результат проверки кода recaptcha
    $resp = $recaptcha->verify($data->recaptchaToken, $_SERVER['REMOTE_ADDR']);
    // если результат положительный, то...
    if ($resp->isSuccess()) {

        if (!empty($data->phone)) {
            $Name = '';

            $token = "7493855099:AAGVw6xXO2fAwOs34EAO5ZaCK8unJ0hPVQ4"; // Тут пишем токен
            $chat_id = "-1002107968229"; // Тут пишем ID чата, куда будут отправляться сообщения
            //$sitename = "reforme.kata.agency"; //Указываем название сайта


            $Name = '<b>Заявка №:</b> ' . trim(strip_tags($num_send)) . ' - ' . date('d.m.Y') . '%0A';

            if ($data->name !== '' && $data->name) {
                $Name .= '<b>Имя:</b> ' . trim(strip_tags($data->name)) . '%0A';
            }


            if ($data->site !== '' && $data->site) {
                $Name .= '<b>Сайт:</b> ' . trim(strip_tags($data->site)) . '%0A';
            }

            $Telephone = '<b>Телефон:</b> ' . trim(strip_tags($data->phone)) . '%0A';


            $total = "<b>Заявка с сайта</b>" . '%0A%0A' . $Name . '' . $Telephone . '';


            //mail('kuntr.dream@gmail.com', 'Reedem from website', $total,"MIME-Version: 1.0\r\nContent-type: text/html; charset=utf-8\r\n From: no-reply@kata.agency\r\n");
            $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$total}", "r");


            $mail = new PHPMailer;
            $mail->CharSet = 'UTF-8';


            // Настройки SMTP
            $mail->isSMTP();
            $mail->SMTPAuth = true;
            $mail->SMTPDebug = 0;

            $mail->Host = 'ssl://smtp.yandex.ru';
            $mail->Port = 465;
            $mail->Username = 'leads-box@reffection.com';
            $mail->Password = 'rvtuxzhhnajnyqpk';

            // От кого
            $mail->setFrom('leads-box@reffection.com', 'reffection.com');

            // Кому
            $mail->addAddress('leads@reffection.com', '');
            $mail->addAddress('kuntr.dream@gmail.com', '');
            $mail->addAddress('987and123@gmail.com', '');

            // Тема письма
            $mail->Subject = 'Заявка с сайта';

            $Name = '<b>Заявка №:</b> ' . trim(strip_tags($num_send)) . ' - ' . date('d.m.Y') . '<br>';


            if ($data->name !== '' && $data->name) {
                $Name .= '<b>Имя:</b> ' . trim(strip_tags($data->name)) . '<br>';
            }

            if ($data->site !== '' && $data->site) {
                $Name .= '<b>Сайт:</b> ' . trim(strip_tags($data->site)) . '<br>';
            }


            $Telephone = '<b>Телефон:</b> ' . trim(strip_tags($data->phone)) . '<br>';


            $total = "<b>Заявка с сайта</b>" . '<br>' . $Name . '' . $Telephone . '';
            $body = $total;
            $mail->msgHTML($body);


            $mail->send();


            echo json_encode(array("Result" => "Success"));

            $data->date = $num_send . ' - ' . date('d.m.Y');
            $num_send = $num_send + 1;
            file_put_contents('/var/www/www-root/data/www/reffection.ru/num.txt', $num_send);


            file_put_contents('/var/www/www-root/data/www/reffection.ru/sends/' . time() . '.json', json_encode($data));
            exit;
        } else {
            echo json_encode(array("Result" => "Error"));
            exit;
        }
    } else {


        echo json_encode(array("Result" => 'captcha_error'));
        exit;


    }

} else {
    echo json_encode(array("Result" => "Error"));
    exit;
}
?>