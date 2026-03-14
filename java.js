console.log("Hii");

function Do()
{
    alert("JKDFV" );
}
function done()  
{
    alert("eknfern");
}

function keyDownHandler(event){
    console.log("Key passed:"+ event.key);
}


// FORM VALIDATE

function validateForm(){
    let name=document.myForm.username.value;
    let email=document.myForm.email.value;

    if(name==""){
        alert("Name must be filled out");
        return false;
    }

    if(email==""){
        alert("Email must be filled out");
        return false;
    }
    let pattern=/^(^)+@(^)+\.[a-z][2,3]$/;
    if(!email.match(pattern)){
        alert("Please enter a valid email address.");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}


1 // ANOTHER FILE



console.log("Hii!");
// OBJECTS
let student={name:"Kritika",age:19,isvote:true,cgpa:9.8};
console.log(student);
console.log(typeof student);
student.age += 1         //reassigning the value
student.name="Meenu"
console.log(student.name);
console.log(student["age"]);

//CONDITIONAL STATEMENT
let Age=21;       //only if condition used
if (Age >= 18) {
    console.log("you are eligible to vote");
} 

let mode="dark";
let color;
if (mode==="dark"){
    console.log(color="black");
}else {
    console.log(color="white");
}

let a=10;
if (a%2==0) {
    console.log("even");
}else {
    console.log("odd");
}

let light="blue";
if (light =="red"){
    console.log("stop");
}else if (light=="green"){
    onsole.log("go");
}else if (light=="yellow"){
    console.log("slow down");
}else{
    console.log("invalid");
}

//TERNARY OPERATOR

grow >= 18 ? console.log("adult") :console.log("not adult"); //ERROR

let value=prompt("enter a number");
if (value % 5==0){
    console.log("multiple of five");
}else {
    console.log("not multiple of five");
}

for (let i=1;i<=5;i=i+1){
    console.log("Kritika");
}

for (let u=1;u<=50;u++){
    console.log("LPU");
}
console.log("loop has ended")

//SUM WITH LOOP
let sum=0;
for (let m=1;m<=10;m++){
    sum =sum+m;
}

let n=20; // THIS LOOP WILL RUN ONCE
do{
    console.log("APNA COLLEGE");
    n++
}while (n<=10);

//FOR OF LOOP (STRING AND ARRAY)

let str="Kritika";
for(let i of str){
    console.log("i"+i);
}

//Size of string

let character="JavaScript";
let size=0;
for(let char of character){
    console.log("char",char);
    size++;
}
console.log("Total size",size);

//DOM 

document.getElementById("#<idname>")
document.getElementsByClassName("<classname>")
document.getElementsByTagName("<any tag name>")
document.querySelector("<any tag/idname/classname>")
document.querySelectorAll("<any tag/idname/classname>")


let arr=[97,98,92,57,76];
const output=arr.filter((val)=>{
    console.log(val>90);
});


console.log(u);
var u=10;

let x=5;
x=x+2;
console.log(x);

// x=10; global variable(unintesionally)

