"use strict";
let userName = prompt('Enter your name');
console.log(userName);
let mark = prompt('Welcome ' + userName + ', please enter your mark');
console.log(mark);

if (mark >= 0 && mark <= 49) {
    alert( 'Your result is (F) , so you are fail');
}
else if (mark >= 50 && mark <= 60) {
    alert('Your result is(D) , so you are pass');
}
else if (mark >= 61 && mark <= 70) {
    alert('Your result is (C) , so you are pass');
}
else if (mark >= 71 && mark <= 80) {
    alert( 'Your result is (B) , so you are pass');
}
else if (mark >= 81 && mark <= 90) {
    alert('Your result is (A) , so you are pass');
}
else if (mark >= 91 && mark <= 100) {
    alert('Your result is (A+) , so you are pass');
}
else {
    alert('Invalid mark');
}



