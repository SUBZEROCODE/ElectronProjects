/***************************************************************
/*This javascript code initialises selectboxes and options.
***************************************************************/

//Set the minimum and maximum alphabet ranges for testing purposes.
const alphabetRange = {
	minChar: 65, //65 is A
	maxChar: 90  //90 is Z
}

// For each letter ranging from 65(A) to maxAlphaChar(Usually 89 or Z)
for (var i = alphabetRange.minChar; i <= alphabetRange.maxChar; i++) {

    //Variable to store the character being currently used.
    var initialLetter = String.fromCharCode(i);

    //Write a row for each letter.
    document.write('<td class = "plain">' + initialLetter + "</td>");
}

document.write('</tr><tr>')

//For each of the letters provide a possible guess letter.
for (var j = alphabetRange.minChar; j <= alphabetRange.maxChar ; j++) {

    //Variable to store the guess entry char currently being created.
    var guessLetter = String.fromCharCode(j);

    document.write('<td class = "cipher">');

    document.write('<select type="text"');

    document.write('id ="' + guessLetter + '">')

    //For each of the letters provide a possible guess letter.
    for (var k = alphabetRange.minChar ; k <= alphabetRange.maxChar; k++) {

      //Variable to store the option value currently being created.
      var optionChar = String.fromCharCode(k)

      document.write('<option value="');

      document.write(optionChar + '"');

      if(optionChar == guessLetter){

        document.write('selected>');
      }

      else{
        document.write('>');
      }

      document.write(optionChar + '</option>');

    }

}

document.write('</tr>');
