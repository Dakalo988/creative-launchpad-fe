# PHP Backend Deployment Guide for Afrihost

## Overview
This guide will help you deploy the PHP backend API to your Afrihost hosting account while keeping your React frontend.

## File Structure for Afrihost
```
your-domain.com/
├── api/                    # PHP backend files
│   ├── index.php          # Main API handler
│   ├── config.php         # Configuration file
│   ├── .htaccess          # URL rewriting rules
│   └── logs/              # Log files (auto-created)
├── public/                # Your React build files
│   ├── index.html
│   ├── assets/
│   └── ...
└── vite.config.ts         # Vite configuration (development only)
```

## Deployment Steps

### 1. Upload PHP Files to Afrihost
1. Upload the entire `api/` folder to your domain's root directory
2. Set permissions for the `api/logs/` directory to 755 (if it doesn't exist, it will be created automatically)

### 2. Configure Vite for Production
Update your `vite.config.ts` to handle API routing:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'public',
    assetsDir: 'assets',
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:80', // Adjust based on your Afrihost setup
        changeOrigin: true,
      }
    }
  }
})
```

### 3. Build and Deploy React Frontend
```bash
npm run build
```
This creates a `public/` folder with your React build files.

### 4. Upload to Afrihost
1. Upload the contents of the `public/` folder to your domain's root
2. Upload the `api/` folder to your domain's root
3. Your file structure should look like:
   ```
   your-domain.com/
   ├── index.html          # React app
   ├── assets/             # React assets
   ├── api/                # PHP backend
   └── ...
   ```

### 5. Configure .htaccess for React Router
Create a `.htaccess` file in your root directory:

```apache
# Enable URL rewriting
RewriteEngine On

# Handle React Router (SPA)
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_URI} !^/api/
RewriteRule . /index.html [L]

# API routes
RewriteCond %{REQUEST_URI} ^/api/
RewriteRule ^api/(.*)$ api/index.php [QSA,L]
```

### 6. Email Configuration
The PHP scripts are configured to send emails to `info@creativeneuxs.co.za`. Make sure:
1. This email exists in your Afrihost control panel
2. Email sending is enabled in your hosting package
3. Consider setting up SPF/DKIM records for better deliverability

## Testing the Deployment

### Test Contact Form
1. Visit your website
2. Fill out the contact form
3. Check if you receive an email at `info@creativeneuxs.co.za`
4. Check the browser console for any errors

### Test Service Selection
1. Click on any service plan
2. Check if you receive a service selection email
3. Verify the success toast notification appears

## Troubleshooting

### Common Issues:

1. **CORS Errors**: The PHP API includes CORS headers, but if you still get errors, check your browser's developer console.

2. **Email Not Sending**: 
   - Verify email settings in Afrihost control panel
   - Check PHP mail() function is enabled
   - Look at server error logs

3. **404 Errors on API Calls**:
   - Verify `.htaccess` files are uploaded correctly
   - Check that mod_rewrite is enabled on your Afrihost account
   - Ensure file permissions are correct (644 for files, 755 for directories)

4. **React App Not Loading**:
   - Check that `index.html` is in the root directory
   - Verify all asset paths are correct
   - Check browser console for 404 errors on assets

### Log Files
The API creates log files in `api/logs/`:
- `contact_form.log` - Contact form submissions
- `service_selections.log` - Service selection requests

Check these files if you need to debug issues.

## Cost Benefits
- **PHP hosting**: Much cheaper than Node.js hosting on Afrihost
- **No server management**: Afrihost handles all server maintenance
- **Automatic scaling**: Afrihost handles traffic spikes
- **Built-in email**: No need for external email services

## Security Considerations
- The API includes basic security headers
- Input validation and sanitization is implemented
- Consider adding rate limiting for production use
- Monitor log files for suspicious activity

## Next Steps
1. Test thoroughly on your Afrihost staging environment
2. Set up monitoring for email delivery
3. Consider adding a database for storing submissions (optional)
4. Implement additional security measures as needed
