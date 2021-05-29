var move = 0;
var w = window.innerWidth
var w2
function Reset(){ 
move = 0;
move2 = 0; document.getElementById("ufo").style.marginLeft= 0+"px";
 document.getElementById("ufo").style.marginTop= 0+"px";   
}
function fun(){
    w2 = 280+move
    var sc= document.getElementById("c").value;
    if(sc>0){
        move=move+(1*sc);
    }
   if(sc<0){
   
       move = move-(-1*sc);
   }
   if(sc==0){
       move = move;
   } document.getElementById("ufo").style.marginLeft= move+"px";
}
setInterval(fun,10)
var move2 = 0;
function fun2(){
    var sc= document.getElementById("c2").value;
    if(sc>0){
        move2=move2+sc*1;
    }
   if(sc<0){
       move2 = move2-(-1*sc);
   }
   if(sc==0){
       move2 = move2;
   } document.getElementById("ufo").style.marginTop= move2+"px";
}
setInterval(fun2,10)
function Can(){
    document.getElementById("c").value=0;
}
function Can2(){
    document.getElementById("c2").value = 0;
}
alert("Hope you all Enjoy flying Ufo 😁 ")
