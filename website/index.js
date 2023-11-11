let k=12;

k=k+1;
console.log(k);

console.log("praveen age is ",k,"he is an engineer");

document.getElementById("p1").innerHTML="praveen is "+k +" old";
document.getElementById("p2").innerHTML="praveen "+"kumar";
document.getElementById("p3").innerHTML="praveen "+"kuamr "+"parihar;"


let username;

document.getElementById("mybutton").onclick=function(){
    username=document.getElementById("mytext").value;
    username+=1;//username act as a string 
    username=Number(username);//username convert into string
    username+=1;
    console.log(username);

    document.getElementById("hii").innerHTML="preaveenkuamr";

}


let age=window.prompt("how old are you");
age=Number(age);
age+=4;
console.log("happy birthday to you now you are ",age," old");

let x;
let y;
let z;

x=Number("3.14");
y=String(13);
z=Boolean("praveen");

console.log(x,typeof x);
console.log(y,typeof y);
console.log(z,typeof z);



