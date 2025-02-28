<?php
session_start();

// Hardcoded user credentials
$valid_email = "admin@example.com";
$valid_password = "admin123"; // Plain text (Not secure, just for testing)

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = trim($_POST["email"]);
    $password = trim($_POST["password"]);

    // Check if credentials match
    if ($email === $valid_email && $password === $valid_password) {
        $_SESSION["user_id"] = 1; // Fake user ID
        $_SESSION["email"] = $email;

        // Redirect to home page
        header("Location: ../home.php");
        exit();
    } else {
        echo "<script>alert('Invalid email or password.'); window.location.href='../index.html';</script>";
    }
}
?>
