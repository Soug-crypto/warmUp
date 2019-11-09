// You are given an input string.

// For each symbol in the string if it's the first character occurence, replace it with a '1', else replace it with the amount of times you've already seen it...

// But will your code be performant enough?
// Examples:

// input   =  "Hello, World!"
// result  =  "1112111121311"

// input   =  "aaaaaaaaaaaa"
// result  =  "123456789101112"


function countOcurrance(str){
	var arr = str.split(''), acc = '', resultArray = [];

	for (var i = 0; i < arr.length; i++) {

		acc = 1;

		for (var j = 0; j < i; j++) {
			
			if (arr[i]===arr[j]) {
				acc = acc + 1;
			}
			
		}

		resultArray.push(acc)

	}

	return resultArray.join('');

}