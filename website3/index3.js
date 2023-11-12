let a;
let b;
let c;

// a=window.prompt("enter the side a");
// a=Number(a);

// b=window.prompt("enter the side ");
// b=Number(b);

// c=Math.sqrt(Math.pow(a,2)+Math.pow(b,2));

// console.log("hypothenius is :=> ",c);



document.getElementById("buttonsumbit").onclick=function(){ 

a=document.getElementById("atextbox").value;
a=Number(a);

b=document.getElementById("btextbox").value;
b=Number(b);

c=Math.sqrt(Math.pow(a,2)+Math.pow(b,2));

document.getElementById("alabel").innerHTML="Side C:  " +c;

console.log("side c is =:> ",c);

}

