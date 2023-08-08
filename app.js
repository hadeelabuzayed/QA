"use strict";
let userName = prompt('Enter your name');
console.log(userName)

let mark = prompt('Welcome ' + userName + ', please enter your mark');
console.log(mark);
let mark1 = Math.floor(mark);
if (mark1 >= 0 && mark1 <= 49) {
    alert( 'Your result is (F) , so you are fail');
}
else if (mark1 >= 50 && mark1 <= 60) {
    alert('Your result is(D) , so you are pass');
}
else if (mark1 >= 61 && mark1 <= 70) {
    alert('Your result is (C) , so you are pass');
}
else if (mark1 >= 71 && mark1 <= 80) {
    alert( 'Your result is (B) , so you are pass');
}
else if (mark1 >= 81 && mark1 <= 90) {
    alert('Your result is (A) , so you are pass');
}
else if (mark1 >= 91 && mark1 <= 100) {
    alert('Your result is (A+) , so you are pass');
}
else {
    alert('Invalid mark');
}



