
/* UPTO NOW MAX NUMBER IS 999999999999999  */
/**** NEW LOGIC ****
STEP1: 006452698012

STEP2: [0, 0, 6] [4,5, 2] [6, 9, 8] [0, 1, 2]

STEP3: [0, 0, 6]"Billions" [4, 5, 2]"Millions" [6, 9, 8]"Thousands" [0, 1, 2]""

STEP4: ["", "", 6]"Billions" [4, 5, 2]"Millions" [6, 9, 8]"Thousands" ["", 1, 2]""

STEP5: ["", "", "six"]"Billions" ["four", 5, "two"]"Millions" ["six", 9, "eight"]"Thousands" ["", 1, 2]""

STEP6: ["", "", "six"]"Billions" ["four", "fifty", "two"]"Millions" ["six", "ninety", "eight"]"Thousands" ["", "twelve"]""

STEP7: ["", "", "six"]"Billions" ["four hundreds", "fifty", "two"]"Millions" ["six hundred", "ninety", "eight"]"Thousands" ["", "twelve"]""

"six Billions four hundred fifty two Millions six hundred ninety eight Thousands twelve"
*******************/

function startWriting(){
var input = document.getElementById("inputText").value;
//var input = prompt("Please enter a number: "); 
//console.log(input);
//console.log(numberToArrray(input));
//console.log(addUpToTrillionsText(numberToArrray(input)));
//console.log(writeOnes(addUpToTrillionsText(numberToArrray(input))));
//console.log(writeHundreds(writeOnes(addUpToTrillionsText(numberToArrray(input)))));
//console.log(writeTens(writeHundreds(writeOnes(addUpToTrillionsText(numberToArrray(input))))));
//console.log(addHundredsWord(writeTens(writeHundreds(writeOnes(addUpToTrillionsText(numberToArrray(input)))))));
//console.log(textArray_toWords(addHundredsWord(writeTens(writeHundreds(writeOnes(addUpToTrillionsText(numberToArrray(input))))))));
var out = textArray_toWords(addHundredsWord(writeTens(writeHundreds(writeOnes(addUpToTrillionsText(numberToArrray(input)))))));
var outputPara = document.createElement("P");
outputPara.innerHTML = addSpacesInNumber(input) + "<br/> <br/>" + out;
outputPara.style.fontSize = "25px";
document.getElementById("outputArea").innerHTML="";
document.getElementById("outputArea").appendChild(outputPara);
}
/* ************************* */


function numberToArrray(number) {
    //this function will do the following:
    //006452698012 --> [0, 0, 6] [4,5, 2] [6, 9, 8] [0, 1, 2]
    let myBigArray = [];
    let mySmallArray = [];//this should always have three cells
    for (let i = number.length-1; i >=0; i--) {
        mySmallArray.unshift(number[i]);
        if (mySmallArray.length == 3) {
            //lets puh this small array to the big array
            myBigArray.unshift(mySmallArray);
            mySmallArray = [];
        }
        else if (i == 0) {
            //so this is the last character in the number, we'll add the character zero '0' to remaining positions in small array
            //and then push it to the big array
            do {
                mySmallArray.unshift("0");
            } while (mySmallArray.length < 3)
            myBigArray.unshift(mySmallArray);
        }
    }
    return myBigArray;
}

function addUpToTrillionsText(arrayOfArrays) {
    //this function does the following:
    //[0, 0, 6] [4,5, 2] [6, 9, 8] [0, 1, 2] -------> [0, 0, 6, "Billions"] [4, 5, 2, "Millions"] [6, 9, 8, "Thousands"] [0, 1, 2, ""]
    let range = ["", "Thousand", "Million", "Billion", "Trillion"];
    let rangeIndex = 0;
    for (let i = arrayOfArrays.length - 1; i >= 0; i--) {
        arrayOfArrays[i].push(range[rangeIndex]);
        rangeIndex = rangeIndex + 1;
    }
    return arrayOfArrays;
}

function writeOnes(arrayOfArrays) {
    //this function does the following:
    //[0, 0, 6, "Billions"] [4, 5, 2, "Millions"] [6, 9, 8, "Thousands"] [0, 1, 2, ""]
    // ------> [0, 0, "six", "Billions"] [4, 5, "two", "Millions"] [6, 9, "eight", "Thousands"] [0, 1, 2, ""]
    for (let i = 0; i < arrayOfArrays.length; i++) {
        if (arrayOfArrays[i][1] != "1") {
            //so it won't be a teen number
            arrayOfArrays[i][2] = oneNumber_toWord(arrayOfArrays[i][2]);
        }
    }
    return arrayOfArrays;
}
function oneNumber_toWord(character) {
    switch (character) {
        case "0":
            return "";
            break;
        case "1":
            return "One";
            break;
        case "2":
            return "Two";
            break;
        case "3":
            return "Three";
            break;
        case "4":
            return "Four";
            break;
        case "5":
            return "Five";
            break;
        case "6":
            return "Six";
            break;
        case "7":
            return "Seven";
            break;
        case "8":
            return "Eight";
            break;
        case "9":
            return "Nine";
            break;
    }
}

function writeHundreds(arrayOfArrays) {
    //this function does the following:
    //[0, 0, "six", "Billions"] [4, 5, "two", "Millions"] [6, 9, "eight", "Thousands"] [0, 1, 2, ""]
    // -------> ["", 0, "six", "Billions"] ["four", 5, "two", "Millions"] ["six", 9, "eight", "Thousands"] ["", 1, 2, ""]
    for (let i = 0; i < arrayOfArrays.length; i++) {
        arrayOfArrays[i][0] = oneNumber_toWord(arrayOfArrays[i][0]);
    }
    return arrayOfArrays;
}

function writeTens(arrayOfArrays) {
    //this function does the following:
    //["", 0, "six", "Billions"] ["four", 5, "two", "Millions"] ["six", 9, "eight", "Thousands"] ["", 1, 2, ""]
    // --------> ["", "", "six", "Billions"] ["four", "fifty", "two", "Millions"] ["six", "ninety", "eight", "Thousands"] ["", "twelve", ""]
    for (let i = 0; i < arrayOfArrays.length; i++) {
        if (arrayOfArrays[i][1] != "1") {
            //so it won't be a teen number
            arrayOfArrays[i][1] = oneNormalTens_toWord(arrayOfArrays[i][1]);
        }
        else{
            //so (arrayOfArrays[i][1] + arrayOfArrays[i][2]) form a number from 10~19            
            arrayOfArrays[i][2] = oneTeens_toWords((arrayOfArrays[i][1]+arrayOfArrays[i][2]));
            arrayOfArrays[i][1] = "";
        }
    }
    return arrayOfArrays;
}
function oneNormalTens_toWord(character) {
    //this  number return tens in words (except tens smaller than 20)
    switch (character) {
        case "0":
            return "";
            break;
        case "2":
            return "Twenty";
            break;
        case "3":
            return "Thirty";
            break;
        case "4":
            return "Fourty";
            break;
        case "5":
            return "Fifty";
            break;
        case "6":
            return "Sixty";
            break;
        case "7":
            return "Seventy";
            break;
        case "8":
            return "Eighty";
            break;
        case "9":
            return "Ninety";
            break;
    }
}
function oneTeens_toWords(teens){
    switch (teens) {
        case "10":
            return "Ten";
            break;
        case "11":
            return "Eleven";
            break;
        case "12":
            return "Twelve";
            break;
        case "13":
            return "Thirteen";
            break;
        case "14":
            return "Fourteen";
            break;
        case "15":
            return "Fifteen";
            break;
        case "16":
            return "Sixteen";
            break;
        case "17":
            return "Seventeen";
            break;
        case "18":
            return "Eightteen";
            break;
        case "19":
            return "Nineteen";
            break;
    }
}

function addHundredsWord(arrayOfArrays){
    //this function does the following
    //["", "", "six", "Billions"] ["four", "fifty", "two", "Millions"] ["six", "ninety", "eight", "Thousands"] ["", "twelve", ""]
    // --------> ["", "", "six", "Billions"] ["four hundreds", "fifty", "two", "Millions"] ["six hundreds", "ninety", "eight", "Thousands"] ["", "twelve", ""]
    for (let i = 0; i < arrayOfArrays.length; i++) {
        if(arrayOfArrays[i][0] != ""){
            arrayOfArrays[i][0] = arrayOfArrays[i][0] + " hundreds";
        }        
    }
    return arrayOfArrays;
}

function textArray_toWords(arrayOfArrays) {
    //this function does the following
    //["", "", "six", "Billions"] ["four hundreds", "fifty", "two", "Millions"] ["six hundreds", "ninety", "eight", "Thousands"] ["", "twelve", ""]
    // -------> six billions four hundreds fifty two millions six hundreds ninety eight thousands twelve
    let output = "";
    for (let i = 0; i < arrayOfArrays.length; i++) {
        for(let j = 0; j<arrayOfArrays[i].length; j++){
            if(arrayOfArrays[i][j]!=0){
                output = output + " " + arrayOfArrays[i][j];
            }            
        }            
    }
    return output;
}

function addSpacesInNumber(number){
    //step1: 12345678
    //step2: 87 654 321
    //step3: 123 456 78
    let number1 = "";
    let j=0;
    for(let i = number.length-1; i>=0; i--){
        number1 = number1 + number[i];
        j = j + 1;
        if(j % 3 == 0){
            number1 = number1 + " ";
        }
    }
    //Now lets reverse the new string and return it
    return number1.split("").reverse().join("");    
}
