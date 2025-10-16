<?php
// Configuration file for Creative Nexus API

// Email configuration
define('CONTACT_EMAIL', 'info@creativenexus.co.za');
define('FROM_EMAIL', 'noreply@creativenexus.co.za');

// API configuration
define('API_VERSION', '1.0');
define('MAX_MESSAGE_LENGTH', 1000);
define('MAX_NAME_LENGTH', 100);
define('MAX_EMAIL_LENGTH', 255);

// Rate limiting (optional - for preventing spam)
define('RATE_LIMIT_ENABLED', true);
define('RATE_LIMIT_MAX_REQUESTS', 5); // per minute
define('RATE_LIMIT_WINDOW', 60); // seconds

// Logging configuration
define('LOG_ENABLED', true);
define('LOG_DIR', __DIR__ . '/logs/');

// Create logs directory if it doesn't exist
if (LOG_ENABLED && !is_dir(LOG_DIR)) {
    mkdir(LOG_DIR, 0755, true);
}

// Error reporting (disable in production)
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Timezone
date_default_timezone_set('Africa/Johannesburg');
?>
