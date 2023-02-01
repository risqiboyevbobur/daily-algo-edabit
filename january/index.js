// function reverseString(str) {
//     var c = "";
//     for (var i = str.length - 1; i >= 0; i--) {
//         c += str[i];
//     }
//     return c ;
// }
// console.log(reverseString('hura'));

// function rever(str){
//     let c = ""
//     for(let i = str.length -1; i >= 0; i--){
//         c+= str[i]
//     }
//     return c
// }
// console.log(rever('hura'));

// function news(str){
//     let a = ""
//     for(let i = str.length -1; i>= 0; i--){
//         a+= str[i]
//     }
//     return a
// }
// console.log(news('hura'));

// function news(str){
//     let a = ""
//     for(let i = str.length -1 ; i >= 0; i-- ){
//         a+= str[i]
//     }
//     return a
// }
// console.log(news('bobur'));

// function b(price, persent){
//     return price-(price * persent)/100
// }
// console.log(b(100, 37)); ------------------- colculate present

// function a(b){
//     return b % 10
// }
// console.log(a(34));

// function c(v){
//    return v.toString().length
// }
// console.log(c(24100));

// function myFunc(a, b) {
//   let obj = {
//     num1: a,
//     num2: b,
//     funcs(){
//    return obj.num1 + obj.num2 % 2 === 0 ?  true : false
//     }
// }
// return obj.funcs()
// }
// console.log(myFunc());

// function num(a, b){
//    return Math.floor(b / a)
// }
// console.log(num(4,13));

// function num(a, b, c, d){
//     return Math.max(a + b + c) < d ? true : false
// }
// console.log(num(100, 200, 300, 900));

//  function sum([a,b,c], [d,e,f]){
// let total = sum.reduce((total, value) => total + value)
// return total
//  }
//  console.log();

// / let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let total = nums.reduce((total, value) => total + value )
// console.log(total);   // 45

// 1)

// let sum2 = [2,3,2]
// if(sum2.length <= 2){
// console.log(sum2);
// }else if(sum2.length === 0){
//     console.log(0);
// }else{
//     console.log(sum2[0] + sum2[1]);
// }

// 2)

// const arr = (a, b) => {
//     return `${a[1]}` `${b[1]}`
// }

// 3

// 4)let arr = (a, b) => {
//  a || b === 6 && a + b || a - b === 6 ? console.log(true) : console.log(false);
// }

// 5
// let a = (b) => {
//     return `Hello  ${b} `
// }

// 6

// let a = (a, b) => {
//     if(a > b){
//         return ">"
//     }else if(a === b){
//         return "="
//     }else{
//         return "<"
//     }
// }

//  7 // let a = (b) => {
//     return b + b + b
// }
// console.log(a('jhb'));

// const arrays = (a, b)=>{
//     return `${a[0]} ${b[0]}`
// }
// console.log(arrays([1, 2,3], [4, 5,6 ]));

// let arr = (a) =>{
//     if(a.length < 2){
//         return a
//     }else if(a.length === 0){
//         return 0
//     }else{
//         return a[0] + a[1]
//     }
// }
// console.log(arr([1,2,3]));

// let arr = (a, b)=>{
//     return `${a[1]} ${b[1]}`
// }
// console.log(arr([1,2,3],[4,5,6]));

// let arr = (a, b) => {
//   return a == 6 || a + b == 6 || b == 6 || a - b == 6 || b - a == 6
//     ? true
//     : false;
// };
// console.log(arr(3, 3));

// let name = (a) => {
//     return `Hello ${a}`
// }
// console.log(name("bobur"));

// let a = (a,b) =>{
//     if(a < b){
//         return "<"
//     }else if(a > b){
//         return ">"
//     }else{
//         return "="
//     }
// }
// console.log(a(9,9));

// let a = (a) => {
//     return a.repeat(3)
// }
// console.log(a('bobur'));

// let a = (d,c)=>{
//     return `${d[0]} ${c[0]}`
// }
// console.log(a([1,2,3],[4,5,6]));

// let a = (a)=>{
//   return a[0] === 6 || a[a.length -1 ] === 6 ? true : false
// }
// console.log(a([1,2,3,6,5]));

// let a = (b, d)=> {
// let c = 0
//     for(let i = b; i < d; i++){
//      c = c + i
//     }
//     return c
// }
// console.log(a(10,20));

// let a = (b, d) => {
//   let c = 0;
//   for (let i = b; i <= d; i++) {
//     if (i % 2 === 0) {
//       c += i;
//     }
//   }
//   console.log(c);
// };
// a(51, 150);

// let a = (age1,age2)=>{
//     return age1 - age2*2

// }
// console.log(a(55,30));

// const num = (a) => {
//   let b = 0;
//   for (let i = 1; i <= a; i++) {
//     b = b + i ** 3;
//   }
//   return b
// };
// console.log(num(8));

// let a = (n)=>{
//     return Math.round(n / 10) + Math.round(n % 10)
// }
// console.log(a(71));

// let a = (b) => {
//   let c = 0;
//   for (let i = 0; i <= b; i++) {
//     if (i % 2 === 1) {
//       c += i;
//     }
//   }
//   console.log(c);
// };
// a(5);

// let a = (b) => {
//   for (let i = 0; i <= b; i++) {
//     if (b % 2 == 0) {
//       i % 2 == 0 ? i : null;
//     }
//   return i;

//   }
// };
// console.log(a(36));

// function even(num) {
//     let count = 0;//1
//     for(let i = 1; i <= num; i++) {//i=3
//         if(num % i === 0 && i % 2 === 0) {
//             count++;
//         }
//     }

//     return count;
// }

// // 1,2,4,6,9,12,18,36

// console.log(even(36));