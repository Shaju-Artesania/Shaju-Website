<?php
// Set headers to handle AJAX request
header('Content-Type: application/json');

// Get form data
$name = isset($_POST['name']) ? htmlspecialchars($_POST['name']) : '';
$email = isset($_POST['email']) ? filter_var($_POST['email'], FILTER_SANITIZE_EMAIL) : '';
$subject = isset($_POST['subject']) ? htmlspecialchars($_POST['subject']) : '';
$message = isset($_POST['message']) ? htmlspecialchars($_POST['message']) : '';

// Validate form data
if (empty($name)) {
    echo json_encode(['success' => false, 'message' => 'Please enter your name.']);
    exit;
}

if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['success' => false, 'message' => 'Please enter a valid email address.']);
    exit;
}

if (empty($subject)) {
    echo json_encode(['success' => false, 'message' => 'Please enter a subject.']);
    exit;
}

if (empty($message)) {
    echo json_encode(['success' => false, 'message' => 'Please enter your message.']);
    exit;
}

// Set recipient email (change this to your email address)
$to = "elise.hoofteer@gmail.com";

// Set email subject
$email_subject = "New Contact Form Submission: $subject";

// Build email content
$email_content = "Name: $name\n";
$email_content .= "Email: $email\n\n";
$email_content .= "Message:\n$message\n";

// Set email headers
$headers = "From: $name <$email>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Send email
$mail_sent = mail($to, $email_subject, $email_content, $headers);

// Return response
if ($mail_sent) {
    echo json_encode([
        'success' => true, 
        'message' => 'Your message has been sent successfully!'
    ]);
} else {
    echo json_encode([
        'success' => false, 
        'message' => 'There was an error sending your message. Please try again later.'
    ]);
}
?>