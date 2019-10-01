function validate()
{
	var password = document.getElementById("firstPass");
	var validPass = document.getElementById("secondPass");

	if(password.value == validPass.value && password.value.length >= 8 && validPass.value.length >= 8)
	{
		alert("Passwords Match!");
	}
	else {
		if(password.value.length <= 8 || validPass.value.length <= 8)
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