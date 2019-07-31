function key()
{
var a,b,c,d,e,f,g;
a=document.getElementsByName("fname")[0].value;
b=document.getElementsByName("lname")[0].value;
c=document.getElementsByName("uid")[0].value;
d=document.getElementsByName("pass")[0].value;
e=document.getElementsByName("pin")[0].value;
f=document.getElementsByName("phno")[0].value;
g=document.getElementsByName("emai")[0].value;
p1=/[A-Z]{3,}/;
p1=/[A-Z]{3,}/;
r=p1.test(a);
if(r==true)
{
	if(p2.test(b)==true)
	{
		alert("welecome");
		return true;
	
	}
	else{
		alert("not valid");
		return false;
	}
	
}
else{
	alert("not valid");
	return false;
}
}