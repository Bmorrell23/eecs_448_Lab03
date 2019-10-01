function validate()
{
	var password = document.getElementById("firstPass");
	var validPass = document.getElementById("secondPass");
	console.log(password);
	console.log(validPass);

	if(password.value == validPass.value && password.length >= 8 && validPass.length >= 8)
	{
		alert("Passwords Match!");
	}
	else {
		if(password.length <= 8 || validPass.length <= 8)
			{
				alert("Passwords must be at least 8 characters silly!");
			}
		else
			{
				alert("Passwords don't match!!");
			}	
	}
}

function greetingFunc()
{
	alert("Stop eating meat.  Recycle.  Vote!!!");
}

