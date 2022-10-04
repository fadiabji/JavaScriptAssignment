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
    document.getElementById("yearoutput").innerHTML = leapyear(year);
}
function leapyear(year) {
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                return "The year is a leap year"
            }
            else {
                return "The year is not a leap year";
            }
        }
        else
        {
            return "The year is a leap year"
        }

        }
        else
        {
        return "The year is not a leap year"
        }
    }

