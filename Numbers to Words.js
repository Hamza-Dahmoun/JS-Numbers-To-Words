var input = prompt("Please enter a number: ");
var leftSide_zeroCounter = 0;
//this variable will tell us whether the leftSide_zeroCounter is already calculated or not,
//so that we avoid doing the same thing bcuz the function getRealLength() is called twice
let iszeroCounter_Calculated = false;


/* THIS SHOULD BE OUR FUNCTION */
console.log(input + " -- length: " + getRealLength(input) + " -- " + getNumberVolume(input) + " -- " + leftSide_zeroCounter + " zero \'0\' in the left side. -- " + startConverting(input));


/* THIS SHOULD BE OUR FUNCTION */



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

function startConverting(number) {
    if(number<10){
        console.log(displayOnes_inWords(number[number.length-leftSide_zeroCounter]));
    }
    else if(number<20){
        console.log(displayTens_lessThanNineteen_inWords(number));
    }
    else{
        //so here it is a number that we should build its words

    }
    /*for (let i = leftSide_zeroCounter - 1; i < getRealLength(input); i++) {

    }*/
}

function displayOnes_inWords(character) {
    switch (character) {
        case 0:
            return "Zero";
            break;
        case 1:
            return "One";
            break;
        case 2:
            return "Two";
            break;
        case 3:
            return "Three";
            break;
        case 4:
            return "Four";
            break;
        case 5:
            return "Five";
            break;
        case 6:
            return "Six";
            break;
        case 7:
            return "Seven";
            break;
        case 8:
            return "Eight";
            break;
        case 9:
            return "Nine";
            break;
    }
}

function displayTens_lessThanNineteen_inWords(tens) {
    switch (tens) {
        case 10:
            return "Ten";
            break;
        case 11:
            return "Eleven";
            break;
        case 12:
            return "Twelve";
            break;
        case 13:
            return "Thirteen";
            break;
        case 14:
            return "Fourteen";
            break;
        case 15:
            return "Fifteen";
            break;
        case 16:
            return "Sixteen";
            break;
        case 17:
            return "Seventeen";
            break;
        case 18:
            return "Eightteen";
            break;
        case 19:
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

