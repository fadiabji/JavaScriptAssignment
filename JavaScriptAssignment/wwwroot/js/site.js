// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


//Exercise 1
setInterval(myTimer, 1000);
function myTimer() {
    const time = new Date();
    var day = time.getDay();
    var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];
    document.getElementById("datetime").innerHTML = daylist[day] +", "+ time.toLocaleTimeString();
}

//Exercise 2
const getinputyear = () => {
    let year = document.getElementById("inputyear").value; 
    document.getElementById("inputyear").innerHTML = year; 
    console.log(year);
    document.getElementById("yearoutput").innerHTML = leapyear();
}
function leapyear() {
    if (getinputyear % 4 == 0) {
        if (getinputyear % 100 == 0) {
            if (getinputyear % 400 == 0) {
                return "It is leap year"
            } else {
                return "not leap year"
            }
        } else {
            return "It is leap year"
        }

    } else {
        return "not leap year"
    }
}

//function leapyear(getinputyear) {
//    return ((getinputyear % 4 == 0) && (getinputyear % 100 != 0)) || (getinputyear % 400 == 0);
//}

//To determine whether a year is a leap year, follow these steps:
//If the year is evenly divisible by 4, go to step 2. Otherwise, go to step 5.
//If the year is evenly divisible by 100, go to step 3. Otherwise, go to step 4.
//If the year is evenly divisible by 400, go to step 4. Otherwise, go to step 5.
//The year is a leap year(it has 366 days).
//The year is not a leap year(it has 365 days).