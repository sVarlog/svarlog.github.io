<?php
if(isset($_POST['name1']) and isset($_POST['tel1'])){
	$name = htmlspecialchars($_POST['name1']);
	$tel = htmlspecialchars($_POST['tel1']);
	$current = 'Заявка на демонстрацию';
	echo "1";
	sendMail($name, $tel, $current);
} else if(isset($_POST['name2']) and isset($_POST['tel2'])){
	$name = htmlspecialchars($_POST['name2']);
	$tel = htmlspecialchars($_POST['tel2']);
	$current = 'Детали окупаемости';
	echo "2";
	sendMail($name, $tel, $current);
} else if(isset($_POST['name3']) and isset($_POST['tel3'])){
	$name = htmlspecialchars($_POST['name3']);
	$tel = htmlspecialchars($_POST['tel3']);
	$current = 'Консультация';
	echo "3";
	sendMail($name, $tel, $current);
} else {
	header('location: ' . 'https://smartsonic.mirkosmetologa.com');
}
function sendMail($name, $tel, $current){
	mail('mirkosmetologabeauty@gmail.com', 'Данные с сайта smartSonic', "Форма:" . $current . "\n-----------------------------\n" . "Имя: " . $name . "\nТелефон: " . $tel);
	header('location: ' . 'https://smartsonic.mirkosmetologa.com/thanks.php');
}
?>