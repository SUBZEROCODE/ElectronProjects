window.$ = window.jQuery = require('./jquery-min.js');

//plaintext is retrieved from a hidden value(should be set in code for security)
		var plaintext = setPlaintext();

		//Get the ciphertext message.
		var ciphertext = setCipherText();

		//Create a variable to store result of calculation
		var newCipherText = "";

		var debug = "false";

		var guessButtonCreated = false;

	//Functionality for when the page is loaded.
	$( document ).ready(function() {

			if(debug){
				alert(plaintext + "Compared to:" + ciphertext)
			}
    		checkwin(plaintext,ciphertext);
	});

	//When a select box value is changed do the following.
	$( "select" ).on("change",function() {

		//Debug mode set here.
		debug = false;

		//This represents the guess selected by the user.
		var guessLetter = this.value;

		//This represents the id of the element to be changed.
		var letterToChange = this.id;

		//This represents the id of the element to be changed.
		var previousCipherText = newCipherText;

		//Value we are trying to find(should be hidden)

		if(debug){
			alert("Value to be found:" + plaintext);
			alert("Ciphertext is" + ciphertext);

			alert("Current value:" + ciphertext + "/n" + "Expected value:" + plaintext);
			alert("Guessed letter:" + guessLetter);
			alert("Letter ID:" + letterToChange);
		}

		else{
      alert("Playing game");
    }

		for (var i = 0; i < ciphertext.length; i++) {

    var currentValueLetter = ciphertext[i].toUpperCase();

		if(debug){

			alert("Comparing:" + letterToChange + currentValueLetter);
		}


		if (letterToChange == currentValueLetter){

			if(debug){

				alert("Changing" + letterToChange + "to" + guessLetter);
				alert("Previous ciphertext:" + previousCipherText);
			}

			newCipherText = newCipherText .substring(0, i) + guessLetter + newCipherText.substring(i+1);

		}

		else if (previousCipherText.length < 1){

			if(debug){alert("Only just begun");}

			newCipherText = newCipherText .substring(0, i) + currentValueLetter + newCipherText .substring(i+1);

		}

		else if(previousCipherText != newCipherText){

			newCipherText = newCipherText .substring(0, i) + previousCipherText[i] +   newCipherText.substring(i+1);

		}

	}

	$("#testzone").html("Final result:" + newCipherText);

  $("#printzone").html("Current plaintext:" + newCipherText );

	checkwin(plaintext,newCipherText);

});

$( "#guessInput" ).on("click",function(){

			$( "#guessInput" ).val("");

			if(guessButtonCreated == false){

				var newBtn = document.createElement("button");

				newBtn.id = 'guessBtn';


				newBtn.onclick = function(){

						var guessAllowed = true;

						if(guessAllowed){

							alert("Trying a guess")

							newCipherText = $( "#guessInput" ).val();

							plaintextLC = plaintext.toLowerCase();
							newCipherTextLC = newCipherText.toLowerCase();

							checkwin(newCipherTextLC,plaintextLC)

						}

				};

				var guessText = document.createTextNode("Guess");
				newBtn.appendChild(guessText);

				$('#guesszone').append(newBtn);

				guessButtonCreated = true;
			}



});



function checkwin(plaintext,ciphertext){

	var result = 0;

	if(plaintext == ciphertext){

		$("#printzone").html("Congratulations you cracked this cipher!");
		result = 1;
	}

	else{
		alert("Almost there");
	}

	return result;

};

//For future complexity and being able to guess.

function setPlaintext(){

	return $("#hiddenCipherText").val();
}

function setCipherText(){

	return $( "#gamezone").attr('value');
}
