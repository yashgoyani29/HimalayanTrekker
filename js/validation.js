function checkdata(frm)
{	
	var email, password, status;

	email = frm.email.value;
	password = frm.password.value;
	status=true;

	document.getElementById("email-msg").style.display="none";
	frm.email.style.borderColor="rgba(0,0,0,0.1)";

	document.getElementById("password-msg").style.display="none";
	frm.password.style.borderColor="rgba(0,0,0,0.1)";

	if (email.length==0 || email=="") 
	{
		frm.email.style.borderColor="red";
		document.getElementById("email-msg").style.display="block";
		status = false;
	}


	if (password.length==0 || password=="") 
	{
		frm.password.style.borderColor="red";
		document.getElementById("password-msg").style.display="block";
		status = false;
	}


	if (status==false) 
	{
		return false;
	}
	else
	{
		return true;
	}
}

function checkdata2(frm)
{	
	var email, password, uname, status;

	email = frm.email.value;
	password = frm.password.value;
	uname = frm.uname.value;
	status=true;

	document.getElementById("email-msg").style.display="none";
	frm.email.style.borderColor="rgba(0,0,0,0.1)";

	document.getElementById("password-msg").style.display="none";
	frm.password.style.borderColor="rgba(0,0,0,0.1)";
	
	document.getElementById("uname-msg").style.display="none";
	frm.uname.style.borderColor="rgba(0,0,0,0.1)";


	if (email.length==0 || email=="") 
	{
		frm.email.style.borderColor="red";
		document.getElementById("email-msg").style.display="block";
		status = false;
	}


	if (password.length==0 || password=="") 
	{
		frm.password.style.borderColor="red";
		document.getElementById("password-msg").style.display="block";
		status = false;
	}

	if (uname.length==0 || uname=="") 
	{
		frm.uname.style.borderColor="red";
		document.getElementById("uname-msg").style.display="block";
		status = false;
	}


	if (status==false) 
	{
		return false;
	}
	else
	{
		return true;
	}
}

function checkdata3(frm)
{	
	var email, number, bname, status;

	email = frm.email.value;
	bname = frm.bname.value;
	number = frm.number.value;
	status=true;

	document.getElementById("email-msg").style.display="none";
	frm.email.style.borderColor="rgba(0,0,0,0.1)";

	document.getElementById("bname-msg").style.display="none";
	frm.bname.style.borderColor="rgba(0,0,0,0.1)";
	
	document.getElementById("number-msg").style.display="none";
	frm.number.style.borderColor="rgba(0,0,0,0.1)";


	if (email.length==0 || email=="") 
	{
		frm.email.style.borderColor="red";
		document.getElementById("email-msg").style.display="block";
		status = false;
	}


	if (bname.length==0 || bname=="") 
	{
		frm.bname.style.borderColor="red";
		document.getElementById("bname-msg").style.display="block";
		status = false;
	}

	if (number.length==0 || number=="" || number.length!=10) 
	{
		frm.number.style.borderColor="red";
		document.getElementById("number-msg").style.display="block";
		status = false;
	}


	if (status==false) 
	{
		return false;
	}
	else
	{
		return true;
	}
}