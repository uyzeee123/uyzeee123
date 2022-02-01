function validateFormOnSubmit(feedback)
{
	
	var reason = "";
	reason += validatename(feedback.name);
	reason += validatesubject(feedback.subject);
	reason += validateemail(feedback.email);
	reason += validatetelnum(feedback.telno);
	reason += validatemessage(feedback.message);
	
	if(reason!= "")
	{
		alert("All the required fields are empty!!!");
		return false;
		
	}
	return true;
	
	
function validateEmpty(fld)
{
		var error = "";
		if(fld.value.length == 0)
		{
			fld.style.background = "#FF3399";
			error = alert("Please fill in the required fields \n");		
		}
		else {
			fld.style.background = "#FFFFFF";
		}
		return error;
}	

function validatename(fld)
{
	var error = "";
	
	if(fld.value == "") {
		fld.style.background = "#FF3399";
		fld.focus();
		error = alert("You didn't enter a valid name");
	}
	
	else {
		fld.style.background = "FFFFFF";
		
	} 
	
	return error;
		}

function trim(s)
{
	return s.replace(/^\s+|\s+$,"/);
}

function validateemail(fld)
{
	var error = "";
	var tfld = trim(fld.value);
	var emailFilter = /^[^@]+@[^@.]+\.[^@]*\w\w$/;
	var illegalChars = /[\(\)\<\>\,\;\:\\\"\[\]]/;
	
	if(fld.value == "") {
		fld.style.background = "#FF3399";
		error = alert("You didn't enter an email address .\n");
	} else if(!emailFilter.test(tfld)) {
		fld.style.background = "#FF3399";
		error = alert("Please enter a valid email address. \n");
	}
		else if(fld.value.match(illegalChars))
		{
			fld.style.background = "#FF3399";
			error = alert("The email address contains illegal characters. \n");
		}
		else {
			fld.style.background = "FFFFFF";
		}
		return error;
	}

function validatetelnum(fld)
{
	var error = "";
	var stripped = fld.value.replace(/[\(\)\.\-\ ]/g);
	
	if(fld.value == "")
{
	error = alert("You didn't enter a phone number.\n");
	fld.style.background = "#FF3399";	
} else if(isNaN(parseInt(stripped)))
{
	error = alert("The phone number contains wrong characters");
	fld.style.background = "#FF33CC";
}
return error;
}

function validatemessage(fld)
{
	var error = "";
	if(fld.value == "")
	{
		error = alert("Please leave a feedback...");
		fld.style.background = "#FF3399";
	}
return error;
	}

function validatesubject(fld)
{
	var error = "";
	if(fld.value == "")
	{
		error = alert("Please fill in the subject");
		fld.style.background = "#FF3399";
}
return error;
}	

}