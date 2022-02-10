//list of starting numbers
let numbers = [100, 50, 10, 1];

bitCountArrayToNumberArray(numberArrayToBitCountArray(numbers));

/**
 * 
 * @param {Array} numbers list of numbers to convert to bit count
 * @returns array of the accurancy of each numbers bits
 */
function numberArrayToBitCountArray(numbers) {

    let binaryNumbers = numbers
        .map(number => number.toString(2))//convert to binary
        .map(number => number.split('')//reverse the string because we want to count from the right
            .reverse()
            .join(''))
        .map(number => number.split('') //convert the string to an number array
            .map(Number));

    // get the max length of the binary numbers and fill resultArray up with 0
    let resultArray = new Array(Math.max(...binaryNumbers.map(number => number.length))).fill(0);

    // loop through the binary numbers and add the bits to the resultArray 
    binaryNumbers.forEach(binaryArray => {

        // the innerCounter is used to count the bits from the left to the right
        let innerCounter = 0;
        binaryArray.forEach(element => {

            resultArray[innerCounter++] += element;

        });
        innerCounter = 0;
    });

    console.log(resultArray);
    return resultArray;
}

/**
 * 
 * @param {Array} bitsCount array of the accurancy of each numbers bits
 */
function bitCountArrayToNumberArray(bitsCount) {

    let resultArray = [];
    let tempString = "";

    //while the bitsCount array is not empty
    while (bitsCount.reduce((a, b) => a + b, 0) > 0) {
        //loop through the bitsCount array and add the bits to the tempString
        bitsCount.forEach(element => {
            tempString += (element > 0) ? '1' : '0';
        });

        //reduce the accurancy of the bits by one in the bitsCount array
        bitsCount = bitsCount.map(element => element -= 1);

        //reverse the tempstring and convert it to a number wich is pushed to the resultArray
        resultArray.push(parseInt(tempString.split('').reverse().join(''), 2));
        tempString = "";
    }
    console.log(resultArray);
    return resultArray;
}