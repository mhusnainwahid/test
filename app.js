

// function work (){
//     console.log ("I am woeking")
// }

// const { Name } = require("selenium-webdriver/lib/command");

// const work1 = () => {
//     console.log("I am working")
// }

// work();
// work1();


// function work (a,b){
//    return a + b;
// }
// const work1 = (a,b) => a + b;
 
// console.log (work(3 ,5));
// console.log(work1(4,6));




// const evens = [2,4,6,8,10]

// const odd = evens.map(function(val){
//     return val - 1; 
// })

// console.log (odd)

// const evens = [2,4,6,8,10]

// const odd = evens.map(val => val - 1)
//     console.log(odd)


// const numbers = [1,2,3,4,5,6,7,8,9,10];
// const evens = numbers.filter (val => val % 2 === 0)
// console.log(evens)

// const numbers = [1,2,3,4,5,6,7,8,9,10];
//  const evens = numbers.filter (val => val % 2 === 0)
//  console.log(evens)

// evens.forEach(val => console.log(val))



// var a;
// for (a = 1;a < 10;a = a + 3){
//     console.log(a)
// }


// for (i = 0;i < 5;i++){
//     alert ("Hello World");
// }


// for (var i = 1;i <= 10;i++){
//     document.write("2" + "X" + i + "=" + 2*i + "<br>")
// }


// var names = ["Ali","Basit","Ghous"]
 
// for (var i = 0; i < names.length; i++){
//     console.log(names[i])
// }


// var cities =["Karachi","Lahore","Islamabad","Peshawar"]

// for (var i = 0;i < cities.length;i++){
//    if(cities[i] === "Karachi"){
//     alert(cities [i] + "is a cleanest city")
//    }
// }

// for (i = 1;i > 0;i++ ){
//     console.log(i)
// }

// for (var i = 1; i > 0; i++){
//     if(i === 100){
//         break
//     }
//     console.log("hello")
// }


// var name = "Basit"
 
// switch (name){
//     case"Ghous":
//       alert("Hello Ghous")
//        break;
//     case "Basit":
//         alert("Hello Basit")
//         break;
//     default:
//        alert("Hello")
// }

// const names = prompt("Enter your name")

// switch (names){
//     case "Husnain":
//       alert("Hello Boss")
//       break;
//     default:
//       alert("Hello" + " " + names )
// }


// var b = 0;
// while(b < 10){
//     console.log(b);
//     b++
// }

// for (a = 0;a < 10;a++){
//     console.log(a)
// }

// var b = 0;
// do{
//     console.log(b)
//     b++;
// }
// while(b < 10);




// for (var a = 1; a<102; a=a+ 10){
//     console .log(a + "<br>")
// }

// for(var a = 1; a <= 100; a= a+ 10){
//     for(var b = a ; b < a + 10; b++ ){
//         console.log(b +" ");

//     }
//     console.log("<br>");

// }


// var a = "Ghous"
// console.log(a.charAt(4))


// var para = "this is example";
 
// var para1 = para.replace("exmaple","text");
// console.log(para1)

// var num = 1.9;
// var round = Math.floor(num)
// console.log(round)

// var random = Math.random()
// console.log(random)

// const val = 5;
// console.log (`This is my number ${val}`)



// const  x = 0, y = 0;
// const obj = {x,y};

// console.log(obj);

// const obj = {key: 5};

// var objkey = "key";
// console.log(obj[objkey]);

// const quux = () => Math.random();
// let obj = {
//     foo: "bar",
//     ["bar" + quux() ]: 42
// }
// console.log(obj)

// const setValue = () => {
//     const para = document.getElementById("para");
//     para.innerHTML= "this is example text"
// }

// class RailwayForm{
//     submit(){
//         alert ("form is submitted")
//     }
//     cancel(){
//         alert("Your form is cancel")
//     }
//     fill(givenname){
//         this.name  = givenname
   
//     }
// }

// let harry = new RailwayForm()
// let rohan = new RailwayForm()

// harry.submit()
// rohan.submit()
// rohan.cancel()

// let harryForm = new RailwayForm()
// harryForm.fill ("harry")
// let rohanForm = new RailwayForm()
// rohanForm.fill("rohan")

// harryForm.submit()
// rohanForm.submit()
// rohanForm.cancel()



// let a = 1;
// let b = 2;
// let c = 3;

// console.log("avg sum of a and b is" + (a + b)/2)
// console.log("avg sum of b and c is" + (b + c)/2)
// console.log("avg sum of c and a is" + (c + a)/2)

//with the help function
// avgsum = (x,y) => {
//     return Math.ceil(x + y)/2
//     console.log ("done");

// }
// console.log(avgsum (a,b))
// console.log(avgsum (b,c))
// console.log(avgsum (c,a))

//arr.map method
// let arr = [25,45,65]
// let a = arr.map((value)=>{
//     // console.log(value)
//     return value + 1

// })
// console.log(a)

// let arr = [25,45,65]
// let a = arr.map((value,index,array)=>{
//     // console.log(value)
//     return value,index,array

// })
// console.log(a)

//arr.filter method

// let arr= [23,45,34,0,3,6,8]
// let a = arr.filter((a)=>{
//     return a < 10

// })
// console.log(a,arr)

//arr.reduce method
// let arr = [1,3,4,2,3,5,7]
// let b = arr.reduce((a1,a2)=>{
//     return a1 + a2 
// })
// console.log(b)


console.log("Hey this is Husnain")



