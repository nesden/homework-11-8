let a = 10;
let b = 5;
let c = a + b;
console.log(c);

let num1 = 5 + 10 * 3 - 1;
let num2 = num1 / 8 + 2;
console.log(num2);

let number = 10;
number++;
number++;
number += 5;
number--;
number *= 2;
console.log(number);

console.log((10 == 10 && 20 == 30 || 5 % 2 == 1));
console.log((10 == 10 || 20 == 30 && 5 % 2 == 1));
console.log((33 > 20) || (2 < 12) && 10 || 2 <= 3 && !true);
//true?
console.log((true && false || 8 < 10 && !false));
console.log((true || false && 5 <= 9 || 10 != 38));

console.log(!false || !true && !false && !true);
//true?
console.log(((!10) && (10) || (!10) && (10) && 2 < 9 || true));


//ex1 second page 
function bigger1(n1, n2) {
    if (n1 > n2)
        return n1
    return n2
}

function eq2(n1, n2) {
    if (n1 == n2) {
        n1++
        return n1;
    }
}
function small3(a, b, c, d) {
    let small;
    if ((a < 5 && a > 1) || (b < 5 && b > 1) || (c < 5 && c > 1) || (d < 5 && d > 1)) {
        return -1
    }
    if (a < b) {
        small = a;
    }
    else {
        small = b
    }

    if (small > c) {
        small = c
    }

    if (small > d) {
        small = d
    }
    return small;
}

function eve4(a) {
    if (a % 2 == 0) {
        return "even"
    }
    return "odd"
}

function areEqua5(a, b, c, d) {
    if (a == b && b == c && c == d) {
        return "all nums are euqal"
    }
    if (a == b || a == c || a == d || b == c || b == d || c == d)
        return "two numbers are equal"
    //if the task asked for exactly 2 numbers the code will be longer since i woult\d have to add alot of (a == b &&a != c && a != d ) 
    return "no number is euqal to another"
}

function day6(day) {
    if (day < 1 || day > 7) {
        return "error"
    }
    if (day == 1) {
        return "sunday";
    }
    if (day == 2) {
        return "monday"
    }
    if (day == 3) {
        return "tuesday"
    }
    if (day == 4) {
        return "wednesday"
    }
    if (day == 5) {
        return "thursday"
    }
    if (day == 6) {
        return "friday"
    }
    if (day == 7) {
        return "saturday"
    }
}


function month7(month) {
    if (month < 1 || month > 12) {
        return -1;
    }
    if (month == 1||month==3||month==5||month==7||month==8||month==10||month==12) {
        return 31
    }
    if (month == 2) {
        return 28
    }
    else{
        return 30
    }
  
}

var x=2;
function global8() {
 console.log(x);
 
}


function local9() {
 let cheese="yellow"
console.log(cheese+" is a weird color");
 
}

global8();

local9();


