function age(){
	var birthyear= prompt("which year you were born");
	var ageindays = (2020-birthyear)*365 ;
	var h1 =document.createElement("h1");
	var text=document.createTextNode("you are"+ageindays+"days old");
	h1.setAttribute('id','ageindays');
	h1.appendChild(text);
	document.getElementById('bg').appendChild(h1);


}
function reset(){
	document.getElementById("ageindays").remove();
}