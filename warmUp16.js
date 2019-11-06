// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" 
//as possible.
// You can use each character in text at most once. Return the maximum number of instances that can be formed.

// Example 1:
// Input: text = "nlaebolko"
// Output: 1

// Example 2:
// Input: text = "loonbalxballpoon"
// Output: 2

// Example 3:
// Input: text = "RebootKamp"
// Output: 0
 
// Constraints:
// 1 <= text.length <= 10^4
// text consists of lower case English letters only.

function chop(str){

	var arr = str.split('');
	var arr2;
	var acc = 0;


	if (str.length < 6) {
		return acc
	}


	if (arr.indexOf("b") !== -1 &&arr.indexOf("a")!== -1 &&arr.indexOf("l")!== -1 &&arr.indexOf("o")!== -1 &&arr.indexOf("n")!== -1){

		arr2 = arr.splice(arr.indexOf("l"),1);
		arr2 = arr.splice(arr.indexOf("o"),1);

		if (arr.indexOf("b")&&arr.indexOf("a")&&arr.indexOf("l")&&arr.indexOf("o")&&arr.indexOf("n")){

			arr2 = arr.splice(arr.indexOf("b"),1);
			arr2 = arr.splice(arr.indexOf("a"),1);
			arr2 = arr.splice(arr.indexOf("l"),1);
			arr2 = arr.splice(arr.indexOf("o"),1);
			arr2 = arr.splice(arr.indexOf("n"),1);

			acc = acc + 1;
		}

	}

	return chop (arr2.join(''));
	
}

