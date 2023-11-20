

document.getElementById("sButton").onclick=function(){
    let temp;

    if(document.getElementById("cButton").checked)
    {
            temp=document.getElementById("temp").value;
            temp=Number(temp);
            temp=getcelsius(temp);
            document.getElementById("mylabel").innerHTML=temp+ "°c";

    }
    else if(document.getElementById("fButton").checked)
    {
        temp=document.getElementById("temp").value;
        temp=Number(temp);
        temp=getfahrenheit(temp);
        document.getElementById("mylabel").innerHTML=temp+ "°f";


    }
    else{
        document.getElementById("mylabel").innerHTML="please select any of two option";
    }
}

function getcelsius(temp)
{
        return (temp-32)*(5/2);
}

function getfahrenheit(temp)
{
        return temp *9/5+32;
}