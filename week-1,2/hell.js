function hell()
{
var a,b;
a=document.getElementsByName("uname")[0].value;
b=document.getElementsByName("pass")[0].value;
p1=/[A-Za-z]{3,}/;
p1=/[A-Za-z0-9@#$~_*]{8,}/;
r=p1.test(a);
if(r==true)
{
	if(p2.test(b)==true)
	{
		alert("welecome");
		return true;
	
	}
	else{
		alert("invalid username or password");
		return false;
	}
	
}
else{
	alert("invalid username or password");
	return false;
}
}