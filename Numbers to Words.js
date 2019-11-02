var input = prompt("Please enter a number: ");
var leftSide_zeroCounter = 0;
//this variable will tell us whether the leftSide_zeroCounter is already calculated or not,
//so that we avoid doing the same thing bcuz the function getRealLength() is called twice
let iszeroCounter_Calculated = false;


/* THIS SHOULD BE OUR FUNCTION */
//console.log(input + " -- length: " + getRealLength(input) + " -- " + getNumberVolume(input) + " -- " + leftSide_zeroCounter + " zero \'0\' in the left side. -- " + startConverting(input));

/**** NEW LOGIC ****
006452698012

006 452 698 012

[0, 0, 6] [4,5, 2] [6, 9, 8] [0, 1, 2]

[0, 0, 6]"Billions" [4, 5, 2]"Millions" [6, 9, 8]"Thousands" [0, 1, 2]""

["", "", 6]"Billions" [4, 5, 2]"Millions" [6, 9, 8]"Thousands" ["", 1, 2]""

["", "", "six"]"Billions" ["four", 5, "two"]"Millions" ["six", 9, "eight"]"Thousands" ["", 1, 2]""

["", "", "six"]"Billions" ["four", "five", "two"]"Millions" ["six", "ninety", "eight"]"Thousands" ["", "twelve"]""

"six Billions four five two Millions six ninety eight Thousands twelve"
*******************/
console.log(input);
console.log(numberToArrray(input));
console.log(addUpToTrillionsText(numberToArrray(input)));
console.log(writeOnes(addUpToTrillionsText(numberToArrray(input))));
console.log(writeHundreds(writeOnes(addUpToTrillionsText(numberToArrray(input)))));
/* THIS SHOULD BE OUR FUNCTION */
//006452698012

function numberToArrray(number){
    //this function will do the following:
    //006452698012 --> [0, 0, 6] [4,5, 2] [6, 9, 8] [0, 1, 2]
    let myBigArray = [];
    let mySmallArray = [];
    for(let i=0; i<number.length; i++){
        mySmallArray.push(number[i]);
        if(mySmallArray.length == 3){
            //lets puh this small array to the big array
            myBigArray.push(mySmallArray);
            mySmallArray = [];
        }
        else if(i == number.length-1){
            //so this is the last character in the number, we'll add the character zero '0' to remaining positions in small array
            //and then push it to the big array
            do{
                mySmallArray.push("0");
            }while(mySmallArray<3)            
        }
    }
    return myBigArray;
}

function addUpToTrillionsText(arrayOfArrays){
    //this function does the following:
    //[0, 0, 6] [4,5, 2] [6, 9, 8] [0, 1, 2] -------> [0, 0, 6, "Billions"] [4, 5, 2, "Millions"] [6, 9, 8, "Thousands"] [0, 1, 2, ""]
    let range = ["", "Thousands", "Millions", "Billions", "Trillions"];
    let rangeIndex = 0;
    for(let i = arrayOfArrays.length-1; i>=0; i--){
        arrayOfArrays[i].push(range[rangeIndex]);
        rangeIndex = rangeIndex + 1;
    }
    return arrayOfArrays;
}

function writeOnes(arrayOfArrays){
    //this function does the following:
    //[0, 0, 6, "Billions"] [4, 5, 2, "Millions"] [6, 9, 8, "Thousands"] [0, 1, 2, ""]
    // ------> [0, 0, "six", "Billions"] [4, 5, "two", "Millions"] [6, 9, "eight", "Thousands"] [0, 1, 2, ""]
    for(let i =0; i<arrayOfArrays.length; i++){
        if(arrayOfArrays[i][1] != "1"){
            //so it won't be a teen number
            arrayOfArrays[i][2] = oneNumber_toWord(arrayOfArrays[i][2]);
        }
    }
    return arrayOfArrays;
}
function oneNumber_toWord(character){
    switch (character) {
        case "0":
            return "Zero";
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

function writeTens(){

}

function writeHundreds(arrayOfArrays){
    //this function does the following:
    //[0, 0, "six", "Billions"] [4, 5, "two", "Millions"] [6, 9, "eight", "Thousands"] [0, 1, 2, ""]
    // -------> ["", 0, "six", "Billions"] ["four", 5, "two", "Millions"] ["six", 9, "eight", "Thousands"] ["", 1, 2, ""]
    for(let i =0; i<arrayOfArrays.length; i++){
        arrayOfArrays[i][0] = oneNumber_toWord(arrayOfArrays[i][0]);
    }
    return arrayOfArrays;
}

function textArray_toWords(){

}


/***************************** OLD LOGIC ******************************/

function getRealLength(number) {
    //this function will return the real length of the parameter 'number'
    //It will check whether there are zeros '0' in the left side of 'number' and ignore them
    let length = number.length;

    for (let i = 0; i < number.length; i++) {
        if (number[i] == "0") {
            length = length - 1;
            if (!iszeroCounter_Calculated) {
                leftSide_zeroCounter = leftSide_zeroCounter + 1;
            }
        }
        else{
            break;
        }
    }
    iszeroCounter_Calculated = true;
    return length;
}

function getNumberVolume(number) {
    switch (getRealLength(number)) {
        case 0:
            return "Zero";
            break;
        case 1:
            return "Ones";
            break;
        case 2:
            return "Tens";
            break;
        case 3:
            return "Hundreds";
            break;
        case 4:
            return "Thousands";
            break;
        case 5:
            return "Ten Thousands";
            break;
        case 6:
            return "Hundred Thousands";
            break;
        case 7:
            return "Millions";
            break;
        case 8:
            return "Ten Millions";
            break;
        case 9:
            return "Hundred Millions";
            break;
        case 10:
            return "Billions";
            break;
        case 11:
            return "Ten Billions";
            break;
        case 12:
            return "Hundred Billions";
            break;
        case 13:
            return "Trillions";
    }
}
function getNumberVolumeIndex(number) {
    //this function return the index of getNumberVolume(number) in the array
    //["Trillions", "Hundred Billions", "Ten Billions", "Billions", "Hundred Millions", "Ten Millions", "Millions", "Hundred Thousands"]
    //so that we know which word to start with
    switch (getNumberVolume(number)) {
        case "Trillions":
            return 0;
            break;
        case "Hundred Billions":
            return 1;
            break;
        case "Ten Billions":
            return 2;
            break;
        case "Billions":
            return 3;
            break;
        case "Billions":
            return 4;
            break;
        case "Hundred Millions":
            return 5;
            break;
        case "Ten Millions":
            return 6;
            break;
        case "Millions":
            return 7;
        case "Hundred Thousands":
            return 8;
            break;
    }
}

function startConverting(number) {
    if (number < 10) {
        return displayOnes_inWords(number[number.length - 1]);
    }
    else if (number < 20) {
        return displayTens_lessThanNineteen_inWords((number[number.length - 2] + number[number.length - 1]));
    }
    else {
        //so here it is a number that we SHOULD BUILD its words
        let myArray = ["Trillions", "Hundred Billions", "Ten Billions", "Billions", "Hundred Millions", "Ten Millions", "Millions", "Hundred Thousands"];
        let columnIndex = getNumberVolumeIndex(number);
        let output = "";
        for (let i = leftSide_zeroCounter; i < number.length; i++) {
            if(number[i] != "0"){
                output = output + displayOnes_inWords(number[i]) + " " + myArray[columnIndex];
                columnIndex++;
            }
            else{
                columnIndex++;
            }           
            console.log(columnIndex + output);
        }
        return output;
    }
}

function displayOnes_inWords(character) {
    switch (character) {
        case "0":
            return "Zero";
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

function displayTens_lessThanNineteen_inWords(tens) {
    switch (tens) {
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
function displayTens_moreThanNineteen_inWords(character) {
    switch (character) {
        case 2:
            return "Twenty";
            break;
        case 3:
            return "Thirty";
            break;
        case 4:
            return "Fourty";
            break;
        case 5:
            return "Fifty";
            break;
        case 6:
            return "Sixty";
            break;
        case 7:
            return "Seventy";
            break;
        case 8:
            return "Eighty";
            break;
        case 9:
            return "Ninety";
            break;
    }
}

