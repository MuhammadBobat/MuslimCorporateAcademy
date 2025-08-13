// Mailjet Email Service for Newsletter Subscriptions
// This service automatically sends emails when new blog posts are added

class EmailService {
  constructor() {
    this.adminEmail = 'info@muslimcorporateacademy.org';
    this.subscribers = this.loadSubscribers();
    
    // Mailjet configuration
    this.mailjetConfig = {
      apiKey: 'bca164315ca46d518adffca63455d9a0',
      secretKey: 'bffbd2cea0e5e6d89ce30975020d4ee6',
      domain: 'muslimcorporateacademy.org',
      fromEmail: 'info@muslimcorporateacademy.org'
    };
  }

  // Load existing subscribers from localStorage
  loadSubscribers() {
    try {
      const stored = localStorage.getItem('newsletter_subscribers');
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Error loading subscribers:', error);
      return [];
    }
  }

  // Save subscribers to localStorage
  saveSubscribers() {
    try {
      localStorage.setItem('newsletter_subscribers', JSON.stringify(this.subscribers));
    } catch (error) {
      console.error('Error saving subscribers:', error);
    }
  }

  // Subscribe a new email address
  async subscribe(email) {
    if (!this.isValidEmail(email)) {
      throw new Error('Invalid email format');
    }

    if (this.subscribers.includes(email)) {
      throw new Error('Email already subscribed');
    }

    this.subscribers.push(email);
    this.saveSubscribers();
    
    console.log(`New subscription: ${email}`);
    
    return {
      success: true,
      message: 'Successfully subscribed to newsletter',
      email: email
    };
  }

  // Validate email format
  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Get total subscriber count
  getSubscriberCount() {
    return this.subscribers.length;
  }

  // Test function to diagnose API issues
  async testMailjetConnection() {
    try {
      console.log('=== Testing Mailjet Connection ===');
      console.log('API Key:', this.mailjetConfig.apiKey);
      console.log('Secret Key:', this.mailjetConfig.secretKey);
      console.log('Domain:', this.mailjetConfig.domain);
      console.log('From Email:', this.mailjetConfig.fromEmail);
      console.log('Subscribers:', this.subscribers);
      
      // Test basic fetch to Mailjet via CORS proxy
      const corsProxy = 'https://cors-anywhere.herokuapp.com/';
      const mailjetUrl = 'https://api.mailjet.com/v3.1/send';
      
      console.log('Using CORS proxy:', corsProxy);
      console.log('Target URL:', mailjetUrl);
      
      const testResponse = await fetch(corsProxy + mailjetUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Basic ' + btoa(`${this.mailjetConfig.apiKey}:${this.mailjetConfig.secretKey}`),
          'Origin': window.location.origin
        },
        body: JSON.stringify({
          Messages: [{
            From: { Email: this.mailjetConfig.fromEmail, Name: 'Test' },
            To: [{ Email: this.mailjetConfig.fromEmail, Name: 'Test' }],
            Subject: 'Test Connection',
            TextPart: 'This is a test email to verify the connection.',
            HTMLPart: '<h1>Test Email</h1><p>This is a test email to verify the Mailjet connection is working.</p>'
          }]
        })
      });
      
      console.log('Test response status:', testResponse.status);
      console.log('Test response ok:', testResponse.ok);
      
      if (testResponse.ok) {
        const result = await testResponse.json();
        console.log('Test successful:', result);
        return { success: true, message: 'Connection test successful', result };
      } else {
        const errorText = await testResponse.text();
        console.log('Test failed with status:', testResponse.status);
        console.log('Error response:', errorText);
        return { success: false, message: `Test failed: ${testResponse.status}`, error: errorText };
      }
      
    } catch (error) {
      console.error('Connection test error:', error);
      console.error('Error type:', error.constructor.name);
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
      
      return { 
        success: false, 
        message: `Connection test failed: ${error.message}`,
        error: error.message,
        type: error.constructor.name
      };
    }
  }

  // Send new blog notification to all subscribers via Mailjet
  async sendNewBlogNotification(blogPost) {
    const { title, preview, id } = blogPost;
    
    if (this.subscribers.length === 0) {
      return {
        success: true,
        message: 'No subscribers to notify',
        recipients: 0
      };
    }

    // Professional email template
    const emailData = {
      Messages: [{
        From: {
          Email: this.mailjetConfig.fromEmail,
          Name: 'Muslim Corporate Academy'
        },
        To: this.subscribers.map(email => ({
          Email: email,
          Name: email.split('@')[0]
        })),
        Subject: `New Article: ${title}`,
        HTMLPart: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: #2d5a2d; color: white; padding: 20px; text-align: center;">
              <h1 style="margin: 0; font-size: 24px;">Muslim Corporate Academy</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">Weekly Commercial Awareness</p>
            </div>
            
            <div style="padding: 30px 20px; background: white;">
              <h2 style="color: #2d5a2d; margin-bottom: 20px;">New Article Published</h2>
              
              <h3 style="color: #333; margin-bottom: 15px;">${title}</h3>
              <p style="color: #666; line-height: 1.6; margin-bottom: 25px;">${preview}</p>
              
              <div style="text-align: center; margin: 30px 0;">
                <a href="https://muslimcorporateacademy.org/blog/${id}" 
                   style="background: #2d5a2d; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; display: inline-block;">
                  Read Full Article →
                </a>
              </div>
              
              <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
              
              <p style="color: #888; font-size: 14px; text-align: center;">
                This email was sent to you because you subscribed to our newsletter.<br>
                <a href="https://muslimcorporateacademy.org/unsubscribe?email={{EMAIL}}" style="color: #2d5a2d;">Unsubscribe</a>
              </p>
            </div>
          </div>
        `
      }]
    };

    try {

              // Send email via Mailjet API with CORS proxy
        console.log('Attempting to send email via Mailjet...');
        console.log('API Key:', this.mailjetConfig.apiKey);
        console.log('Recipients:', this.subscribers);
        
        const corsProxy = 'https://cors-anywhere.herokuapp.com/';
        const mailjetUrl = 'https://api.mailjet.com/v3.1/send';
        
        console.log('Using CORS proxy:', corsProxy);
        console.log('Target URL:', mailjetUrl);
        
        const response = await fetch(corsProxy + mailjetUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + btoa(`${this.mailjetConfig.apiKey}:${this.mailjetConfig.secretKey}`),
            'Origin': window.location.origin
          },
          body: JSON.stringify(emailData)
        });

      console.log('Response status:', response.status);
      console.log('Response headers:', response.headers);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Mailjet API error: ${errorData.ErrorMessage || response.statusText}`);
      }

      const result = await response.json();
      
      console.log('Email sent successfully via Mailjet:', result);
      
      return {
        success: true,
        message: `New blog notification sent to ${this.subscribers.length} subscribers via Mailjet`,
        recipients: this.subscribers.length,
        mailjetResponse: result
      };

    } catch (error) {
      console.error('Error sending email via Mailjet:', error);
      
      // Try alternative approach with different headers
      try {
        console.log('Trying alternative API call...');
        const altResponse = await fetch('https://api.mailjet.com/v3.1/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + btoa(`${this.mailjetConfig.apiKey}:${this.mailjetConfig.secretKey}`),
            'Accept': 'application/json'
          },
          mode: 'cors',
          body: JSON.stringify(emailData)
        });
        
        if (altResponse.ok) {
          const result = await altResponse.json();
          console.log('Alternative method worked:', result);
          return {
            success: true,
            message: `New blog notification sent to ${this.subscribers.length} subscribers via Mailjet (alternative method)`,
            recipients: this.subscribers.length,
            mailjetResponse: result
          };
        }
      } catch (altError) {
        console.error('Alternative method also failed:', altError);
      }
      
      // Fallback to console logging if Mailjet fails
      console.log('Sending new blog notification to subscribers:', this.subscribers.length);
      console.log('Blog post:', { title, preview, id });
      
      return {
        success: false,
        message: `Failed to send emails: ${error.message}`,
        recipients: this.subscribers.length,
        error: error.message
      };
    }
  }
}

const emailService = new EmailService();
export default emailService; 