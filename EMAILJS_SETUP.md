# EmailJS Setup Instructions

To make the contact form fully functional, you need to set up EmailJS. Follow these steps:

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (200 emails/month on free tier)

## Step 2: Create an Email Service

1. Go to **Email Services** in your EmailJS dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID** (e.g., `service_xxxxxxx`)

## Step 3: Create an Email Template

1. Go to **Email Templates** in your EmailJS dashboard
2. Click **Create New Template**
3. Use the following template variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{subject}}` - Email subject
   - `{{message}}` - Message content
   - `{{to_email}}` - Your email (avikmandal2022@gmail.com)

4. Example template:
   ```
   Subject: {{subject}}
   
   From: {{from_name}} ({{from_email}})
   
   Message:
   {{message}}
   ```

5. Note down your **Template ID** (e.g., `template_xxxxxxx`)

## Step 4: Get Your Public Key

1. Go to **Account** > **General** in your EmailJS dashboard
2. Find your **Public Key** (e.g., `xxxxxxxxxxxxx`)

## Step 5: Update Configuration

1. Open `src/config/emailjs.config.ts`
2. Replace the placeholder values with your actual credentials:
   ```typescript
   export const emailjsConfig = {
     publicKey: 'YOUR_ACTUAL_PUBLIC_KEY',
     serviceId: 'YOUR_ACTUAL_SERVICE_ID',
     templateId: 'YOUR_ACTUAL_TEMPLATE_ID',
   };
   ```

## Step 6: Test the Form

1. Start your development server: `npm start`
2. Navigate to the Contact page
3. Fill out and submit the form
4. Check your email inbox for the message

## Fallback Behavior

If EmailJS is not configured, the form will automatically fall back to opening the user's email client with a pre-filled mailto link. This ensures the contact form always works, even without EmailJS setup.

## Troubleshooting

- **Form not sending**: Check that all three values (publicKey, serviceId, templateId) are correctly set
- **Email not received**: Check your spam folder and verify your email service is properly connected
- **Template variables not working**: Make sure the variable names in your template match exactly (case-sensitive)

## Security Note

The Public Key is safe to expose in frontend code. EmailJS uses it to identify your account, but it doesn't grant full access. Never share your Private Key or API Secret.

