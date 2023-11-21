
let fruits=["apple","orange","banana"];
let vegetables=["carrots","onions","potato"];
let meat=["eggs","chicken","fish"];

let grocerylist=[fruits,vegetables,meat];


for(let list of grocerylist)
{
    for(let food of list)
    {
        console.log(food);
    }
}