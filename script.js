function validEmail(str) {
  //your JS code here.
	str=str.trim();
	if(str.length==0)return false;
	if(str[0]=='@')return false;
	if(!str.includes('@'))return false;
	if(!str.includes('.com') && !str.includes('.co.in') && !str.includes('.edu'))return false;
	return true;
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));