var number = prompt("Please enter a number: ");
console.log(number);

/* THIS SHOULD BE OUR FUNCTION */

/* THIS SHOULD BE OUR FUNCTION */



function getRealLength(number) {
    //this function will return the real length of the parameter 'number'
    //It will check whether there are zeros '0' in the right side of 'number' and ignore them
    let length = number.length;
    for (let i = 0; i < number.length; i++) {
        if (number[i] == "0") {
            length = length - 1;
        }
    }
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