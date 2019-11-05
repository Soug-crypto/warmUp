// write a function that takes a string as an argument 
// and returns the string reversed word by word 
// Example : reverseStr("hi there how is the weather today") ==>> "today weather the is how there hi"
//
//
// Note : you can`t use any built-in functions 


function reverseStr (str) {

	var indexBengin = str.length, indexEnd = str.length, acc = "";

	for (var i = str.length - 1; i >= 0; i--) {
		if (str[i] === " " || i === 0){

			indexBegin = i;

			if (i===0) {
				acc = acc + " ";
			}

			for (var j = indexBegin; j < indexEnd; j++) {
				acc = acc + str[j]
			}

			indexEnd = i
		}
	}

	return acc

}


