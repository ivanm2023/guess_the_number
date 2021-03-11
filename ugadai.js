let attempts=3;
let computer=random(1,10);
document.querySelector(".proverka").onclick=function(){
	let user=document.querySelector("input").value;
	if (user>computer) {
		document.querySelector(".podskazka").innerHTML="ЗАГАДАННОЕ ЧИСЛО МЕНЬШЕ";
	}
  if (user<computer){
	document.querySelector(".podskazka").innerHTML="ЗАГАДАННОЕ ЧиСЛО БОЛЬШЕ";

 }
    if (user==computer){
    	document.querySelector(".podskazka").innerHTML="ВЫ ВЫИГРАЛИ!... ЩЕЛБАН ПО ЛБУ";
    	document.querySelector(".proverka").disabled=true;
    }
    attempts--;
    document.querySelector(".popitki").innerHTML=attempts;
    if (attempts==0) {
    	document.querySelector(".proverka").disabled=true;
    }
 }

    document.querySelector(".novoya_igra").onclick=function(){
         attempts=3;
         document.querySelector(".proverka").disabled=false;
         document.querySelector(".popitki").innerHTML=attempts;
         computer=random(1,10);
         document.querySelector(".podskazka").innerHTML="я НЕ буду подсказывать";
         document.querySelector("input").value="";
    }
 function random(a,b){
 	return Math.floor(Math.random() * (b - a + 1)) + a;
 }
