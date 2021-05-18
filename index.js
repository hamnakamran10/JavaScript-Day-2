console.log('Numbers in Js')//string

var num1= parseInt(prompt('Enter no.1 =')) //integers
var num2= parseInt(prompt('Enter no.2 ='))

// console.log("By division =",num1/num2/num3)
// console.log("By addition =",num1+num2+num3)
// console.log("By product =",num1*num2*num3)
// console.log("By Subtraction =",num1-num2-num3)
// console.log("Reminder =",num1%num2%num3)

var add= num1+num2;
var subt= num1-num2;
var mult= num1*num2;
var div= num1/num2;
var rem= num1%num2;

document.getElementById('add').innerHTML=add
document.getElementById('subt').innerHTML=subt
document.getElementById('mult').innerHTML=mult
document.getElementById('div').innerHTML=div
document.getElementById('rem').innerHTML=rem
alert('Thank you 👍🤩')