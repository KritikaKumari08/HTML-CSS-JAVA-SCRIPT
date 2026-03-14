//DOM(Document Object Model)
//window objects

console.log(window);  
console.log(window.document);  //window ke andar document hai
console.dir(window.document);  //display properties and methods of object in dom
console.dir(document);
console.dir(document.body);  //document ke andar body hai
window.console.log("Hii!");
alert("Ooo");          // alert with the message
window.alert("Ooo");
window.confirm("Are you sure?");  //take permission 
window.prompt("Enter name");       //takes input


//selecting ID
console.log(document.getElementById("id1"));
console.log(document.getElementById("pqr"));     //this id doesn't exist,just checking the output

//selecting CLASS
let parr=document.getElementsByClassName("box");
console.dir(parr);
console.log(parr);
console.log(document.getElementsByClassName("pqr"));  //this class doesn't exist,just checking the output

//selecting TAGS
var z=document.getElementsByTagName("li");
console.dir(z);
console.log(z);

//query with TAGS
let x=document.querySelector("li");
console.log(x);
console.dir(x);
let y=document.querySelectorAll("li");
console.log(y);

//CLASS
let p=document.querySelector(".box");
console.log(p);
console.dir(p);
let q=document.querySelectorAll(".box");
console.log(q);

//ID
let r=document.querySelector("#id1");  //we can't use document.querySelectorAll for id as it is unique.
console.log(r);


//tagName
let a=document.querySelector("p");  // way 1
console.log(a);
console.log(a.tagName);   //ye jo tage use hua hai uska name batata hai

let b=document.querySelector("#id1");
// console.log(b);
console.log(b.tagName);   

//innerText
let c=document.querySelector("p");
console.log(c);
console.log(c.innerText);   // print the content written in the tag

let d=document.querySelector("ul");
// console.log(d);
console.log(d.innerText);   

let f=document.querySelector("li");
// console.log(f);
console.log(f.innerText);   

// //extract morebthan one content
let e=document.querySelectorAll("li");   // way 2 
e.forEach(li => {
  console.log(li.innerText);
});

let g = document.querySelectorAll("li");  // way 3

 let texts = [...g].map(li => li.innerText);  // print list
 console.log(texts);

console.log(document.getElementById("id1").innerText);  // way 4

//innerHTML
const abc= document.getElementById("id1"); 
console.log(abc.innerHTML);

let pqr = document.getElementsByClassName("abc");  //undefined why???
console.log(pqr.innerHTML);

const items = document.querySelectorAll("li");  // with multiple samre tags
items.forEach(li => {
  console.log(li.innerHTML);
});

const ul = document.querySelector("ul");   //Insert HTML dynamically
ul.innerHTML += "<li>New Item</li>";


//Attributes

let mno=document.querySelector("div");
console.log(mno);
let id=mno.getAttribute("class");
console.log(id);

let para=document.querySelector("p");  //undefined  why???
console.log(para.setAttribute("class","box3"));

let a=document.querySelector("#id1");
a.onclick = () => {
  alert("Hii!");
};

document.querySelector("buttom").onclick=()=>{
//   console.log("Hii!");
 }