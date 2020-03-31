if($_SERVER['REQUEST_METHOD'] === 'GET') {
    print "\nThe server request method is GET!\n\n<br><br>";

    foreach ($_GET as $key => $value) {
        print "$key = $value<br>\n";
    }
}

function greeting() {
echo "greeting";
}

function factorial() {
echo "factorial";
}

function reverseString() {
echo "reverse string"
}

function sumOfSquares () {
echo "sum of squares";
}