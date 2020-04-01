<?php

    $function = empty($_GET['function']) ? 'error' : $_GET['function']; 
        
    switch($function) {
        case 'greeting':
            if(empty($_POST['firstname']) or empty($_POST['lastname'])) {
                die('ERROR: You must provide both a first name and a last name.');
            }
            
            greeting($_POST['firstname'], $_POST['lastname']);
            break;
        case 'factorial':
            if(empty($_GET['number'])) {
                die('ERROR: You must provide a number.');
            }

            $number = $_GET['number'];
            if(intval($number) === 0) {
                die('ERROR: The provided value is not numerical.');
            }

            $result = factorial($number);
            echo 'The factorial of ' . $number . ' is ' . $result . '.';
            break;
        case 'reversestring':
            if(empty($_GET['string'])) {
                die('ERROR: You must provide a string.');
            }

            $string = $_GET['string'];
            $result = reverseString($string);
            echo 'The reverse of ' . $string . ' is ' . $result . '!';
            break;
        case 'sumofsquares':
            if(empty($_GET['n1']) or empty($_GET['n2'])) {
                die('ERROR: You must supply two values.');
            }

            $n1 = $_GET['n1'];
            $n2 = $_GET['n2'];

            if(intval($n1) === 0 or intval($n2) === 0) {
                die('ERROR: One or more of the provided values are not numerical.');
            }
            if($n1 >= $n2) {
                die('ERROR: The first value must be smaller than the second value.');
            }

            $result = sumOfSquares($n1, $n2);
            echo 'The sum of squares between ' . $n1 . ' and ' . $n2 . ' is ' . $result . '.';
            break;
        case 'error':
            echo 'ERROR: No function was selected.';
            break;
        default:
            echo 'ERROR: Function does not exist.';
    }

    function greeting($firstname, $lastname) {
        echo "Hello " . $firstname . ' ' . $lastname . '!';
    }

    function Factorial($number){ 
        $factorial = 1; 
        for($i = 1; $i <= $number; $i++) { 
          $factorial = $factorial * $i; 
        } 

        return $factorial; 
    } 

    function reverseString($string) {
        return strrev($string);
    }

    function sumOfSquares($n1, $n2) {
        $sum = 0;
            
        for ($i = $n1; $i <= $n2; $i++) {
            $sum += $i * $i;
        }

        return $sum;
    }

?>