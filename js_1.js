// // 1. const와 let의 차이점
// // : 예전에는 var를 많이 사용하는 방식이였지만 var는 언어보호 단점
// // -> const 와 let로 구분을 주게 되었다. 
// // 기본적으로 const를 쓰고 필요할 때만 let을 쓰되, var은 쓰지 말것.

// const a = 5;
// const b = 2;
// // const는 값을 업데이트 할수 없음 let만 가능

// let myName = "nico";
// // let는 생성할때만 사용

// console.log(a + b);
// console.log(a * b);
// console.log(a / b);
// console.log("hello " + myName);

// myName = "nicolas";
// // let 업데이트

// console.log("your new name is " + myName)










// // 2. true, false, null, undefined 배우기

// // const amIFat = null;
// // null : 비어있음

// const amIFat = true;
// // true : 켜져있음

// // const amIFat = false;
// // false : 꺼져있음

// // null 값 은 자연적으로 발생하지 않음 ( 어떤 것이 없다는 것을 확실히 하기 위해 씀)
// let something;
// console.log(something, amIFat);
// // undefined 타입은 variable이 메모리에 만들어졌고, 
// // 컴퓨터가 이 variavle에 대해서 인지하고 있지만, 값이 없는것. 










// // 3. array의 목적 : 하나의 variable 안에 데이터의 list를 가지는 것.
// // array : 가장 기초적이고, 필수적인 데이터 구조이며 값을 리스트로 정리하는 것
// const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

// // const nonsense = [1, 2, "hello", false, null, true, undefined, "nico"];

// //Get Item from Array
// // console.log(daysOfWeek[5]);
// console.log(daysOfWeek);
// // array 만드는 방법 [] 안에 찾고싶은 순서번호 넣기
// // 컴퓨터는 0부터 숫자를 세기때문에 찾고싶은 순서번호 -1 해야함 

// // Add one more day to the array
// daysOfWeek.push("sun");

// console.log(daysOfWeek);


// //예시 2번째
// const toBuy = ["potato", "tomato", "pizza"];

// console.log(toBuy[2]);









// // 4. Objects 에 대해
// const player = {
//     name: "nico",
//     points : 10,
//     fat : true,
// };
// // console.log(player["name"]);

// // console.log(player);
// // player.fat = false;
// // console.log(player);

// // console.log(player);
// // player.lastName = "potato";
// // console.log(player);

// console.log(player);
// player.points = player.points + 15;
// console.log(player.points);









// 5. Functions part One
// function sayHello(){
//     console.log("hello");
// }

// ex)
// sayHello();
// sayHello();
// sayHello();
// sayHello();


// ex)
// function sayHello(nameOfPerson, age){
//     console.log("Hello my name is" + nameOfPerson + " and I'm " + age);
// }

// // console.log("hello");
// sayHello("nico", 10);
// sayHello("dal", 23);
// sayHello("lynn", 21);


// ex)
// function plus(firstNumber, secondNumber){
//     console.log(firstNumber + secondNumber);
// }
// function divide(a, b) {
//     console.log(a /b);
// }

// plus(8, 60);
// divide(98, 20);


// ex)
// const player = {
//     name: "nico",
//     sayHello: function (otherPersonsName) {
//         console.log("hello" + otherPersonsName + " nice to meet you ");
//     },
// };

// console.log(player.name);
// player.sayHello("lynn");

// ex)
// function plus(a ,b) {
//     console.log(a +b);
// }

// plus(5, 5);









// // 6. Recap (1)
// const toBuy = ["potato", "tomato", "pizza"];

// console.log(toBuy);
// toBuy[2] = "water";
// console.log(toBuy);
// toBuy.push("meat");
// console.log(toBuy);


// 6. Recap (2)

// // ex)
// const player = {
//     name: "Ni",
//     age: 98,
// };

// console.log(player);
// player.name = "nicolas";
// console.log(player);
// player.sexy = "soon";
// console.log(player,console);

// ex)
// function plus(a, b){
//     console.log(a + b);
// }

// plus(5, 10);
// plus(555454, 145450);
// plus(555454.222, 145450.4545);
// plus(555454.222, 145450.4545);

// ex)
// function minusFive(a, b){
//     console.log(a - 5);
// }

// minusFive(5, 10, 12, 34, 4, 5, 6, 7);

// ex)
// const calculator = {
//     add: function (a, b) {
//         console.log(a,b);
//     },
// };

// calculator.add(5,1)


// //ex = 더하기, 빼기, 나누기, 곱하기
// // 기본 (일반 계산기 ):
// const calcultor = {
// add: function (a, b) {
// console.log(a + b);
// },
// minus: function (a, b) {
// console.log(a - b);
// },
// plus: function (a, b) {
// console.log (a / b);
// },
// multi: function (a, b) {
// console.log (a * b);
// },
// power: function (a, b) {
// console.log (a ** b);
// },
// };

// calcultor.add(1, 1);
// calcultor.minus(8, 8);
// calcultor.plus(1, 6);
// calcultor.multi(1, 5);
// calcultor.power(9, 4);

// // 응용 ( 같은 숫자(2,8)의 + , - , / , * , ** 를 한번에 알아내는 계산기 ) :
// const calculator = {
// son : function(a,b){
// console.log(a +b );
// console.log(a -b );
// console.log(a /b );
// console.log(a*b)
// console.log(a **b );
// },
// };

// calculator.son(2,8)



//2202-12-13

// const player = {
//     name: "Nico",
//     age: 98,
// };
// console.log(player);
// player.name = "nicolas";
// console.log(player);
// player.sexy = "soon";
// console.log(player, console);

// function plus(a, b) {
//     console.log(a + b);
// }

// plus(5, 10);
// plus(52324, 1035);
// plus(5343333, 14340);
// plus(34345, 13434343430);

// const calculator = {
//     add: function(a, b){
//         console.log(a, b);
//     },
// };

// calculator.add(5, 1);

// const calculator = {
//     add: function(a, b){
//         console.log(a + b);
//     },
//     powerof: function(a, b){
//         console.log(a - b);
//     },
//     times: function(a, b){
//         console.log(a * b);
//     },
//     divide: function(a, b){
//         console.log(a / b);
//     },
//     square: function(a, b){
//         console.log(a ** b);
//     },
// };

// calculator.add(1, 2);
// calculator.powerof(11, 2);
// calculator.times(10, 2);
// calculator.divide(10, 2);
// calculator.square(10, 2);

// 나의 한국 나이 계산하기
// const age = 96;
// function calculateKrAge(age0fForeigner){
//     return age0fForeigner + 2;
// }


// const krAge = calculateKrAge(age);

// console.log(krAge);


// 조건문
// const age = parseInt(prompt("How old are you?"));

// if(isNaN(age) || age < 0){
//     /// condition === true
//     console.log("please write a real positive number");
// } else if (age < 18) {
//     console.log("You are too young");
// } else if (age >= 18 && age <= 50) {
//     console.log("You can drink");
// } else if (age > 50 && age <= 80) {
//     console.log("You should exercise");
// } else if(age === 100) {
//     console.log("wow you are wise");
// } else if (age > 80) {
//     console.log("You can do whatever you want.");
// }



// 자바스크립트 HTML
// const h1 = document.querySelector(".hello h1");

// function handleTitleClick(){
//     h1.style.color = "blue";
// }

// function handleMouseEnter(){
//     h1.innerText = "Mouse is here!";
// }

// function handleMouseLeave(){
//     h1.innerText = "Mouse is gone!";
// }

// function handleWindowResize(){
//     document.body.style.backgroundColor = "tomato";
// }

// function handleWindowCopy(){
//     alert("copier!");
// }

// function handleWindowOfflie(){
//     alert("SOS no WIFI");
// }

// function handleWindowOnline(){
//     alert("ALL GOOD");
// }

// h1.addEventListener("click", handleTitleClick);
// h1.addEventListener("mouseenter", handleMouseEnter);
// h1.addEventListener("mouseleave", handleMouseLeave);

// window.addEventListener("resize", handleWindowResize);
// window.addEventListener("copy", handleWindowCopy);
// window.addEventListener("offlie", handleWindowOfflie);
// window.addEventListener("online", handleWindowOnline);



// 자바스크립트의 CSS
// const h1 = document.querySelector(".hello h1");

// function handleTitleClick(){
//     const currentColor = h1.style.color;
//     let newColor;
//     if (currentColor === "blue"){
//         newColor = "tomato";
//     }
//     else {
//         newColor = "blue";
//     }
//     h1.style.color = newColor;
// }

// h1.addEventListener("click", handleTitleClick);



// 줄인 코드
// const h1 = document.querySelector(".hello h1");

// function handleTitleClick(){
//     h1.classList.toggle("clicked");
// }

// h1.addEventListener("click", handleTitleClick);



// 로그인
const loginForm = document.querySelector("#login-form");
const loginInput= document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}







