function fun()
{
var a,b;
a=document.getElementById("id1").value;
b=document.getElementById("id2").value;
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