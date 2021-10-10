"use strict";

function isPalindrome() {
	const str = document.checker.palindrome.value;

	const paragraph = document.createElement("P");
	const correctWord = document.createTextNode(str + " is a palindrome 😃");
	const correctWord2 = document.createTextNode(str + " is not a palindrome 😞");

	document.getElementById("answer").innerHTML = "";

	if (str === str.split("").reverse().join("")) {
		paragraph.appendChild(correctWord);
		document.getElementById("answer").appendChild(paragraph);
	} else {
		paragraph.appendChild(correctWord2);
		document.getElementById("answer").appendChild(paragraph);
	}
}
isPalindrome();
