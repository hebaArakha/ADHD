<?php
if (isset($_GET['success'])) {
    $signupMSG = "You signed up successfully, now log in!";
}
if (isset($_POST['email'])) {
    $email = $_POST['email'];
}
if (isset($_POST['password'])) {
    $password = $_POST['password'];
}

if (isset($email) && isset($password)) {
    $connection = mysqli_connect("localhost", "root", "", "ADHD");
    $query = "select id , email , password from users where email ='$email'";
    $result = $connection->query($query);
    if ($result->num_rows > 0) {
        if ($row = $result->fetch_assoc()) {
            if (password_verify($password, $row['password'])) {
                session_start();
                $token = bin2hex(random_bytes(32));
                $_SESSION['token'] = $token;
                $_SESSION['id'] = $row['id'];
                header("Location:report.php");
            } else {
                $password_err = "Wrong password";
            }
        }
    } else {

        $email_err = "No such email in database";
        $connection->close();
    }
}
include_once '../login.php';