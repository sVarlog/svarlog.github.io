<?php 
if(isset($_POST['name']) and isset($_POST['phone'])){
	$name = htmlspecialchars($_POST['name']);
	$phone = htmlspecialchars($_POST['phone']);
	$current = 1;
	$args = [$name, $phone];
	sendMail(1, $args);
} else if(isset($_POST['tel'])){
	$tel = htmlspecialchars($_POST['tel']);
	$current = 2;
	$args = [$tel];
	sendMail(2, $args);
} else if(isset($_POST['consultationName']) and isset($_POST['consultationPhone'])){
	$consultationName = htmlspecialchars($_POST['consultationName']);
	$consultationPhone = htmlspecialchars($_POST['consultationPhone']);
	$current = 3;
	$args = [$consultationName, $consultationPhone];
	sendMail(3, $args);
}
function sendMail($current, $args){
	if($current == 1){
		mail('mirkosmetologabeauty@gmail.com', "Клиент хочет узнать об прессотерапии", "Данные клиента с сайта apparaty-pressoterapii\n" . "---------------------------------------------\n" . "\nИмя - " . $args[0] . "\nТелефон - " . $args[1]);
	} else if($current == 2){
		mail('mirkosmetologabeauty@gmail.com', "Клиент хочет секретную скидку", "Данные клиента с сайта apparaty-pressoterapii\n" . "---------------------------------------------\n" .  "\nТелефон - " . $args[0]);
	} else if($current == 3){
		mail('mirkosmetologabeauty@gmail.com', "Клиент хочет получить консультацию", "Данные клиента с сайта apparaty-pressoterapii\n" . "---------------------------------------------\n" .  "\nИмя - " . $args[0] . "\nТелефон - " . $args[1]);
	}
	header('Location: ' . 'https://apparaty-pressoterapii.mirkosmetologa.com/thanks.php');
}
?>