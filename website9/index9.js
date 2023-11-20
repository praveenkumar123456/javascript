

let width;
let height;


width=window.prompt("enter the width");
height=window.prompt("enter the height");

area=getarea(width,height);

console.log("area is :=>",area);

document.getElementById("la").innerHTML=area;
function getarea(width,height)
{

    return width*height;    
}
