<?php
// define variables and set to empty values
$firstname = $lastname = $email = $message = "";
$firstnameErr = $lastnameErr = $emailErr = $messageErr = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {

	//first name error checking
  if (empty($_POST['firstname'])) {
  	$firstnameErr = 'First name is required';
  }
  else {
  	$firstname = test_input($_POST['firstname']);
  	if (!preg_match("/^[a-zA-Z ]*$/",$firstname)) {
		$firstnameErr = "Only letters and white space allowed";
	}
  }

	//lastname error checking
  if (empty($_POST['lastname'])) {
  	$lastnameErr = 'Last name is required';
  }
  else {
  	$lastname = test_input($_POST['lastname']);
  	if (!preg_match("/^[a-zA-Z ]*$/",$lastname)) {
		$lastnameErr = "Only letters and white space allowed";
	}
  }

	//email error checking
  if (empty($_POST['email'])) {
  	$emailErr = 'Email address is required';
  }
  else {
  	$email = test_input($_POST["email"]);
  	if (!preg_match("/^[a-zA-Z ]*$/",$email)) {
		$emailErr = "Only letters and white space allowed";
	}
  }

  //message error checking
  if (empty($_POST['message'])) {
  	$messageErr = 'Please enter a message';
  }
  else {
	$message = test_input($_POST['message']);
  	if (!preg_match("/^[a-zA-Z ]*$/",$message)) {
		$messageErr = "Only letters and white space allowed";
	}
  }

}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

?>