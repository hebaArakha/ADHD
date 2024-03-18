<?php
$errors = array();
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    if (isset ($_POST["name"])) {
        $name = $_POST['name'];
        // Name validation
        $name_pattern = '/^[a-zA-Z\s]+$/';
        if (!preg_match($name_pattern, $name)) {
            $name_err = "* Please enter a valid name using alphabetic characters. Special characters and numbers are not allowed.";
            $errors[] = $name_err;
        }
    }
    if (isset ($_POST["password"])) {
        $password = $_POST['password'];
        // Password validation
        $password_pattern = '/^[a-z0-9_]+$/';
        if (!preg_match($password_pattern, $password) || strlen($password) < 8) {
            $password_err = "* Password must be at least 8 characters. Only lowercase letters, numbers, and underscores are allowed.";
            $errors[] = $password_err;
        }
    }
    if (isset ($_POST["email"])) {
        $email = $_POST['email'];
        // Email validation
        $email_pattern = '/^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/';
        if (!filter_var($email, FILTER_VALIDATE_EMAIL) || !preg_match($email_pattern, $email)) {
            $email_err = "* Please enter a valid email.";
            $errors[] = $email_err;
        }
    }
    if (isset ($_POST["phone"])) {
        $phone = $_POST['phone'];
        // Phone validation
        $phone_pattern = '/^\+(?:[0-9] ?){6,14}[0-9]$/';
        if (!preg_match($phone_pattern, $phone)) {
            $phone_err = "* Please enter a valid phone number in the international format, including the country code. Example: +1234567890.";
            $errors[] = $phone_err;
        }
    }

    // Hash the password
    $hashedPassword = password_hash($password, PASSWORD_BCRYPT);

    // If there are no errors, perform database insertion and redirection
    if (count($errors) === 0) {
        $connection = new mysqli("localhost", "root", "", "ADHD");
        if ($connection->connect_error) {
            $errors[] = $connection->connect_error;
            die (json_encode(array("error" => $errors)));
        }
        //check if email exists
        $query = "select id from users where email ='$email'";
        $result = $connection->query($query);
        if ($result->num_rows == 0) {
            $query = "INSERT INTO users (name, email, password, phone) VALUES ('$name', '$email', '$hashedPassword', '$phone')";
            $connection->query($query);
            $connection->close();
            header("Location: login.php?success");
            exit(); // Ensure that no further code is executed after redirection
        } else {
            $connection->close();
            $email_err = "This email is already registered, try to log in instead.";
        }
    }
}

// If there are errors or the script was accessed via GET method, print errors or include registration form
// if (!empty($errors)) {
//     print_r($errors);
// } else {
include_once '../register.php';
// }
