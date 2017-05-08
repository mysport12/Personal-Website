import React from 'react';
import ReactDom from 'react-dom';

function Contact() {
	return(
		<div>
			<p>Email: cmart1220@gmail.com</p>
			<div className='contactForm'>
			<form method='post' action='<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>'>
			    First Name: <span className='formError'>* <?php echo $firstnameErr;?></span><input type='text' name='firstname' placeholder='Enter your first name'></input>
			    Last Name: <span className='formError'>* <?php echo $lastnameErr;?></span><input type='text' name='lastname' placeholder='Enter your last name'></input>
			    Email: <span className='formError'>* <?php echo $emailErr;?></span><input type='email' name='email' placeholder='Enter your email address'></input>
			    Message: <span className='formError'>* <?php echo $messageErr;?></span><textarea rows='10' name='message' placeholder='Enter your message here'></textarea>
			    <input type='submit' value='Send' className='formButton'></input>
			    <input type='reset' value='Cancel' className='formButton'></input>
			</form>
			</div>
		</div>
	)
}