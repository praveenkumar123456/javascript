
let count=0;
document.getElementById("abutton").onclick=function()
{

count-=1;
document.getElementById("mylabel").innerHTML=count;

}
document.getElementById("bbutton").onclick=function(){

    count=0;
    document.getElementById("mylabel").innerHTML=count;
    
    }

 document.getElementById("cbutton").onclick=function(){

        count+=1;
        document.getElementById("mylabel").innerHTML=count;
        
        }