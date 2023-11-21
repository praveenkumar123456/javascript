let fruits=["apple","banana","papayaa"];

console.log(fruits[0]);

//fruits[2]="coconut";

// console.log(fruits);

fruits.push("lemon");

fruits.unshift("mango");//add element in brginning
fruits.shift();//remove element from beginning


let length=fruits.length;
console.log("length is:=> ",length);

let index= fruits.indexOf("apple");

console.log("index of apple is:=> ",index);

console.log(fruits);

let prices=[2,,34,56,7,343];

// for(let i=0;i<prices.length;i++)
// {
//     console.log(prices[i]);
// }    



for(let price of prices)
{
    console.log(price);
}


