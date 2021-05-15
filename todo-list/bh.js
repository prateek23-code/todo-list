
 function inc(){
	
     var count = prompt("ENTER TASK TO DO") ;
	 var h1 =document.createElement("h1");
	 h1.innerHTML= count;
	 h1.setAttribute('id','count');
	 
	 document.getElementById('display').appendChild(h1);


}
function reset(){
	
	document.getElementById("count").remove();
}