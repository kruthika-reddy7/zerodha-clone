const a=1;
let firstname="kruhtika";
let age=18;
let isSingle= true;

//understading if else statements in javascript
/*
if (isSingle == true)
console.log( firstname + " is single");
else
console.log(firstname + " is not single");
*/


//for loops
/*let answer=100;
for(let i=0;i<=answer;i+=2){
    console.log(i*2);
    
}*/

//arrays
/*
const ages =[ 4,7,9,67,34,78,56,45,67];
let val;
let count=0;
for(i=0;i<ages.length;i++) {
    
    if(age[i]<age[i+1]){
        val=ages[i+1];
    }
    count++;
    if(count==ages.length) {
        console.log(val);
    }
}

const personArray=["srija" , "suchitha","akhil","pavan0"];
const genderArray=["female","female","male","male"];

for(i=0;i<personArray.length;i++)
{
    if(genderArray[i]=="female") {
        console.log(personArray[i]);
    }
}

const user1 = {
    firstname: "kruthika",
    gender:"female"
}

console.log(user1['gender']);

const allUsers = [ {
    firstName:"kruthika",
    Gender:"female"
} ,{
    firstName:"puneeth",
    Gender:"male"
},
{
    firstName:"akhila",
    Gender:"female"
}]
for(let i=0;i<allUsers.length;i++) {
    if(allUsers[i]["Gender"]=="female")
        console.log(allUsers[i]["firstName"])
}
    


function sum(a,b) {
    //do things with the input and return an output
    return a+b;
}
const value = sum(1,2)
console.log(value);
*/

/*function calculateArithmetic(a,b,type) {
    if (type=="sum") {
        const value = sum(a,b);
        return value;
    }
    if(type=="subtraction") {
        const value = subtraction(a,b);
        return value;
    }
}
function sum(a,b) {
    return a+b;
}
function subtraction(a,b) {
    return a-b;
}
const value = calculateArithmetic(5,3,"sum") ;
console.log(value);

const item = {
     name:"kruthika",
     marks:"100" ,
     attendance:"76"
}
console.log(item.name);*/
/*function sum(n1,n2) {
    let result = n1+n2;
    return result;
}
function displayResult(data) {
    console.log("Sum of two numbers is:"+ data);
}
//console.log(displayResult(sum(5,3)))
let kr=sum(4,7);
displayResult(kr);*/

/*let userType= prompt("Are you a student or faculty?", "student");
let isbookwanted = confirm("Do you need any book");

console.log("visitor:" + userType);
console.log("Book wanted: "+ isbookwanted);*/
//console.log("hyderabad");
