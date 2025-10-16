<?php
require_once __DIR__ . '/config.php';
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Get the request method and path
$method = $_SERVER['REQUEST_METHOD'];
$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$path = str_replace('/api/', '', $path);

// Route requests
switch ($path) {
    case 'contact':
        if ($method === 'POST') {
            handleContactForm();
        } else {
            http_response_code(405);
            echo json_encode(['error' => 'Method not allowed']);
        }
        break;
    
    case 'service-selection':
        if ($method === 'POST') {
            handleServiceSelection();
        } else {
            http_response_code(405);
            echo json_encode(['error' => 'Method not allowed']);
        }
        break;
    
    default:
        http_response_code(404);
        echo json_encode(['error' => 'Endpoint not found']);
        break;
}

function handleContactForm() {
    try {
        // Get JSON input
        $input = json_decode(file_get_contents('php://input'), true);
        
        // Validate required fields
        $required_fields = ['name', 'email', 'phone', 'message'];
        foreach ($required_fields as $field) {
            if (empty($input[$field])) {
                throw new Exception("Field '$field' is required");
            }
        }
        
        // Sanitize input
        $name = htmlspecialchars(trim($input['name']));
        $email = filter_var(trim($input['email']), FILTER_SANITIZE_EMAIL);
        $phone = htmlspecialchars(trim($input['phone']));
        $message = htmlspecialchars(trim($input['message']));
        
        // Validate email
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            throw new Exception("Invalid email address");
        }
        
        // Validate phone (basic validation)
        if (!preg_match('/^[0-9+\s()-]+$/', $phone)) {
            throw new Exception("Invalid phone number format");
        }
        
        // Send email
        $to = CONTACT_EMAIL;
        $subject = 'New Contact Form Submission - Creative Nexus';
        
        $email_message = "
        <html>
        <head>
            <title>New Contact Form Submission</title>
        </head>
        <body>
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> $name</p>
            <p><strong>Email:</strong> $email</p>
            <p><strong>Phone:</strong> $phone</p>
            <p><strong>Message:</strong></p>
            <p>$message</p>
            <hr>
            <p><em>Submitted on: " . date('Y-m-d H:i:s') . "</em></p>
        </body>
        </html>
        ";
        
        $headers = [
            'MIME-Version: 1.0',
            'Content-type: text/html; charset=UTF-8',
            'From: ' . FROM_EMAIL,
            'Reply-To: ' . $email,
            'X-Mailer: PHP/' . phpversion()
        ];
        
        if (mail($to, $subject, $email_message, implode("\r\n", $headers))) {
            // Log the submission (optional)
            logSubmission($name, $email, $phone, $message);
            
            echo json_encode([
                'success' => true,
                'message' => 'Message sent successfully! We\'ll get back to you within 24 hours.'
            ]);
        } else {
            throw new Exception("Failed to send email");
        }
        
    } catch (Exception $e) {
        http_response_code(400);
        echo json_encode([
            'success' => false,
            'error' => $e->getMessage()
        ]);
    }
}

function handleServiceSelection() {
    try {
        // Get JSON input
        $input = json_decode(file_get_contents('php://input'), true);
        
        // Validate required fields
        if (empty($input['service'])) {
            throw new Exception("Service selection is required");
        }
        
        $service = htmlspecialchars(trim($input['service']));
        $name = isset($input['name']) ? htmlspecialchars(trim($input['name'])) : '';
        $email = isset($input['email']) ? filter_var(trim($input['email']), FILTER_SANITIZE_EMAIL) : '';
        $phone = isset($input['phone']) ? htmlspecialchars(trim($input['phone'])) : '';
        $message = isset($input['message']) ? htmlspecialchars(trim($input['message'])) : '';
        
        // Validate email if provided
        if (!empty($email) && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            throw new Exception("Invalid email address");
        }
        
        // Send service selection email
        $to = CONTACT_EMAIL;
        $subject = "Service Selection: $service - Creative Nexus";
        
        $email_message = "
        <html>
        <head>
            <title>Service Selection Request</title>
        </head>
        <body>
            <h2>Service Selection Request</h2>
            <p><strong>Selected Service:</strong> $service</p>";
        
        if (!empty($name)) {
            $email_message .= "<p><strong>Name:</strong> $name</p>";
        }
        if (!empty($email)) {
            $email_message .= "<p><strong>Email:</strong> $email</p>";
        }
        if (!empty($phone)) {
            $email_message .= "<p><strong>Phone:</strong> $phone</p>";
        }
        if (!empty($message)) {
            $email_message .= "<p><strong>Additional Message:</strong></p><p>$message</p>";
        }
        
        $email_message .= "
            <hr>
            <p><em>Submitted on: " . date('Y-m-d H:i:s') . "</em></p>
        </body>
        </html>
        ";
        
        $headers = [
            'MIME-Version: 1.0',
            'Content-type: text/html; charset=UTF-8',
            'From: ' . FROM_EMAIL,
            'Reply-To: ' . (!empty($email) ? $email : CONTACT_EMAIL),
            'X-Mailer: PHP/' . phpversion()
        ];
        
        if (mail($to, $subject, $email_message, implode("\r\n", $headers))) {
            // Log the service selection (optional)
            logServiceSelection($service, $name, $email, $phone, $message);
            
            echo json_encode([
                'success' => true,
                'message' => 'Service selection received! We\'ll contact you with more details.'
            ]);
        } else {
            throw new Exception("Failed to send service selection");
        }
        
    } catch (Exception $e) {
        http_response_code(400);
        echo json_encode([
            'success' => false,
            'error' => $e->getMessage()
        ]);
    }
}

function logSubmission($name, $email, $phone, $message) {
    $log_entry = date('Y-m-d H:i:s') . " - Contact Form: $name ($email) - $phone\n";
    file_put_contents(LOG_DIR . 'contact_form.log', $log_entry, FILE_APPEND | LOCK_EX);
}

function logServiceSelection($service, $name, $email, $phone, $message) {
    $log_entry = date('Y-m-d H:i:s') . " - Service Selection: $service - $name ($email) - $phone\n";
    file_put_contents(LOG_DIR . 'service_selections.log', $log_entry, FILE_APPEND | LOCK_EX);
}
?>
