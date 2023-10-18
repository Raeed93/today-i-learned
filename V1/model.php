<?php

function gin_and_tonic_price_calculator($quantity)
{
	
	$gin_and_tonic_price = 10;
	
	$total_spent = $quantity * $gin_and_tonic_price;
	
	// Return the $total_spent so we can use it in the next function
	return $total_spent; 
	
}

function generate_eligibility_message()
{
	$total_spent = gin_and_tonic_price_calculator(5); // 5 bottles bought
	
	if ($total_spent >= 30) {
		
		$eligibility_message = 'You have spent ' . $total_spent . ' dollars and ARE eligible for a free bottle.';

	} else {
		
		$eligibility_message = 'You have spent ' . $total_spent . ' dollars and are not eligible for a free bottle.';
	}
	
	return $eligibility_message; // Return the correct message
}

function validate_message_length_then_echo_to_terminal()
{  
    $message = generate_eligibility_message();
	if (strlen($message) <= 255) { // if the length of message is less than 255 characters
		echo $message;
	} else {
		echo 'There was an error processing this message';
	}
	
	// NO RETURN VALUE, we do not need to store anything from this function because we will not use it anywhere else.
	// This function only exists to validate the message passed in, and echo a message based on whether that validation
	// passes or not.
}

// Now we have 3 functions, 2 of them return a value, one doesn't because we do not need to store anything from that function anywhere to use later in this program.

// Finally, we will have a function that uses the return value of the above 2 functions. This function is called the `entry point` to the program, or the `driver function`
// because it 'drives' the execution of the program.

function determine_if_eligibile_for_free_bottle()
{
	// Check that we are eligible for a free bottle of Gin and Tonic and generate the correct message
	$eligibility_message = generate_eligibility_message();

	// Finally, validate the returned message above - this function call does not return the anything, it just echo's the result to the terminal.
	
	// In other words, if you assigned the function call to a variable, that variable would be NULL
	// This function just `does something`, and that's all we want here as we do
	// not need to store the result to use in other parts of this program.
	
	validate_message_length_then_echo_to_terminal($eligibility_message); // Check that the message is not over 255 characters.
	
	}
	
	// Now, call the `driver` function and all the other functions will be called.
	determine_if_eligibile_for_free_bottle();