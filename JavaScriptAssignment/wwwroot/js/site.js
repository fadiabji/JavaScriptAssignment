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


//Exercise 3
const getCheckSundayYear = () => {
    let year = document.getElementById("yearSundayInput").value;
    document.getElementById("yearSundayOutput").innerHTML = checkSundayYear(year);
}

function checkSundayYear(year) {
    const time = new Date(year, 0, 1);
    var day = time.getDay();
    var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];
    if (daylist[day] === "Sunday") {
        return "Sunday is the 1st of january.";
    } else
        return "No Sunday isn't 1st of January.";
}

//Exercise 4
const getCheckGuessingnumber = () => {
    let number = parseInt(document.getElementById("guessingGameInput").value);
    document.getElementById("guessingGameOutput").innerHTML = checkgetGuessingnumber(number);
}

function checkgetGuessingnumber(number) {
    let randNumer = Math.floor(Math.random() * 11);
    if (number == randNumer ) {
        return "Good Job! you guessed right number " + randNumer;
    } else {
        return "Wrong number! try again the number was: " + randNumer;
    }
}

//Exercise 5

var now = new Date();
var start = new Date(now.getFullYear(), 0, 0);
var diff = now - start;
var oneDay = 1000 * 60 * 60 * 24;
var day = Math.floor(diff / oneDay);
var daysToChristmes = 365 - day;
document.getElementById("daysToChristmas").innerHTML = daysToChristmes + " days";


//Exercise 6

const getReverseNumber = () => {
    let num = document.getElementById("reverseNumInput").value;
    document.getElementById("reverseNumOutput").innerHTML = flipOrderNumber(num);
}

function flipOrderNumber(num) {
    return num.split("").reverse().join("");
}

//Exercise 7
const getTextCombination = () => {
    let wordtext = document.getElementById("wordInput").value;
    document.getElementById("wordOutput").innerHTML = getTextCombinationResult(wordtext);
}
    function getTextCombinationResult(wordtext) {
        var wordArray = wordtext.split("");
        let text = "";
        var textResult = [];
        for (let i = 0; i < wordArray.length; i++) {
            text = wordArray[i]
            textResult.push(text)

            for (let j = i + 1; j < wordArray.length; j++) {
                text += wordArray[j]

                textResult.push(text)
            }
        }
        return textResult.join(' ');
    }




//Exercise 8
const getAlphabitical = () => {
    let inputText = document.getElementById("input8").value;
    document.getElementById("output8").innerHTML = getAlphabiticalResult(inputText);
}

    function getAlphabiticalResult(inputText) {
        return inputText.split('').sort().join('');
}



//Exercise 9
const getLongstWord = () => {
    let inputText = document.getElementById("input9").value;
    document.getElementById("output9").innerHTML = getLongstWordResult(inputText);
}

function getLongstWordResult(inputText) {
    let uppercaseText = inputText.toUpperCase();
    let testArray = uppercaseText.split(' ');
    console.log(testArray)
    var max_str = testArray[0].length;
    var ans = testArray[0];

    for (var i = 1; i < testArray.length; i++) {
        var maxi = testArray[i].length;
        if (maxi > max_str) {
            ans = testArray[i];
            max_str = maxi;
        }
    }
    return ans
}

//Exercise 10
const checkIsPrime = () => {
    let inputnumber = parseInt(document.getElementById("input10").value);
    document.getElementById("output10").innerHTML = checkIsPrimeResult(inputnumber);
}

function checkIsPrimeResult(inputnumber) {
    for (let i = 2, s = Math.sqrt(inputnumber); i <= s; i++) {
        if (inputnumber % i === 0) return false;
    }
        return inputnumber > 1;
   }

//Exercise 11
const getTypeofVariable = () => {
    var inputValue = document.getElementById("input11").value;
    console.log(typeof inputValue)
    document.getElementById("output11").innerHTML = getTypeofVariableResult(inputValue);
}

function getTypeofVariableResult(inputValue) {
    return typeof inputValue;
}

//Exercise 12

var even ="";
var odd = "";
for (var i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        even += i + " is Even! ,"
    }
    else {
        odd += i + " is Odd! ,"
    }
}
    
document.getElementById("output12").innerHTML = even + odd;


//Exercise 13

document.getElementById("output13").innerHTML = getHabbyNumbers();

function getHabbyNumbers() {
    var index = 0;
    var happyNumbes = '';
    for (var i = 10; i > 5000; i++) {
        numArry = i.split('');
        numArry[0] = math.sqrt(numArry[0])
        numArry[1] = math.sqrt(numArry[1])
        if (numArry[0] + numArry[1] === 1) {
            happyNumbes += i + " is a Happy Number! \n"
            return happyNumbes;
            index += 1
            if (index >= 10) {
                break;
            }
        }
    }
}

//break the number 19 into separate digits of 1 and 9.
//square each digit
//sum the squares
//check if the sum equals 1
//if the sum is 1, return true
//otherwise, go back to step 1 and repeat.