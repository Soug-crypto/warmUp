/* your task is to write a function that returns the smallest and largest integers in an unsorted string.
Input
    Your function will receive two arguments:

        A string comprised of integers in an unknown range; these numbers will be out of order
        An integer value representing the size of the range


Output
    Your function should return the starting (minimum) and ending (maximum) numbers of the range in the form of an array/list comprised of two integers.
    Test Example

    let inputString = '1568141291110137';

    mysteryRange(inputString,10) // [6,15]

        -The 10 numbers in this string are:
        -15 6 8 14 12 9 11 10 13 7
        -Therefore the range of numbers is from 6 to 15

Technical Details

    -The maximum size of a range will be 100 integers
    -The starting number of a range will be: 0 < n < 100
 */

//psuedoCode:
// split the string of integers into an array
//concatenate the strings according to the length of the range parameter
//use parseInt to transform the string to a number
//Find max and min


function mysteryRange(str, range){

	var arr1=str.split(""), resultingArray=[]; 

	var rangeLength = range.toString().split("").length

  for (var i = 0; i < arr1.length; i = i+range.length) {

    if (arr1.length%rangeLength === 0) {

    	console.log("got into the if-condition")

      var strAcc="";

      for (var j = 0; j < rangeLength; j++) {
      	console.log("got into the second foor-loop")

        strAcc= strAcc + arr1[i+j];
        j++;

      }

      resultingArray.push(strAcc);

    }

  }

  return resultingArray

}
		//handle the case when the range does not a divisor 
   //parseInt(resultingArray)
   //return Max and Min


