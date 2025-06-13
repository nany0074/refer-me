<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

// Enable CORS if needed
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Only accept POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405); // Method Not Allowed
    echo json_encode(["error" => "Only POST requests are allowed"]);
    exit;
}

// Fetch POST data (FormData sends data here)
$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$phone = trim($_POST['phone'] ?? '');
$subject = trim($_POST['subject'] ?? '');
$message = trim($_POST['message'] ?? '');

// Basic validation
if (!$name || !$email || !$phone || !$subject || !$message) {
    http_response_code(400);
    echo json_encode(["error" => "All fields are required"]);
    exit;
}

// Validate email format
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["error" => "Invalid email format"]);
    exit;
}

// Validate phone format (Indian format example: +919876543210)
if (!preg_match('/^\+91[6-9][0-9]{9}$/', $phone)) {
    http_response_code(400);
    echo json_encode(["error" => "Invalid phone format. Use +919876543210"]);
    exit;
}

// Sanitize inputs to prevent XSS
function sanitize($data) {
    return htmlspecialchars(strip_tags($data));
}

$name = sanitize($name);
$email = sanitize($email);
$phone = sanitize($phone);
$subject = sanitize($subject);
$message = sanitize($message);

// Send email using PHPMailer
$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';  // Change to your SMTP server
    $mail->SMTPAuth = true;
    $mail->Username = 'nanybharadwaj1979@gmail.com'; // Your SMTP username
    $mail->Password = 'vozp qqld bmsw dncr';   // Your SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    // Recipients
    $mail->setFrom($email, $name);
    $mail->addAddress('nanybharadwaj1979@gmail.com'); // Your email address where messages are received

    // Content
    $mail->isHTML(true);
    $mail->Subject = $subject;
   $mail->Body = "
    <div style='font-family: Arial, sans-serif; line-height: 1.6;'>
        <h2 style='color: #333;'>Contact Form Submission</h2>
        
        <div style='background: #f9f9f9; padding: 15px; border-radius: 5px;'>
            <p><strong style='color: #555;'>Name:</strong> {$name}</p>
            <p><strong style='color: #555;'>Email:</strong> {$email}</p>
            <p><strong style='color: #555;'>Phone:</strong> {$phone}</p>
            <p><strong style='color: #555;'>Message:</strong></p>
            <div style='background: white; padding: 10px; border-left: 3px solid #ccc; margin-top: 5px;'>
                " . nl2br(htmlspecialchars($message)) . "
            </div>
        </div>
        
        <p style='margin-top: 20px; font-size: 0.9em; color: #777;'>
            This email was sent from the contact form on your website.
        </p>
    </div>
";

    $mail->send();

    echo json_encode(["message" => "Email sent successfully!"]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(["error" => "Mailer Error: " . $mail->ErrorInfo]);
}
