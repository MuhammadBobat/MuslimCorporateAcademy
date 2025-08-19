// Mailchimp integration for newsletter subscriptions
class EmailService {
  constructor() {
    // Your Mailchimp credentials
    this.mailchimpConfig = {
      audienceId: '52f386d464',
      dataCenter: 'us14',
      apiKey: '944e7c66f7c636593d91c7164c107a87-us14'
    };
    
    // CORS proxy URL (we'll use cors-anywhere as a temporary solution)
    this.corsProxy = 'https://cors-anywhere.herokuapp.com/';
  }

  // Subscribe a new email address to Mailchimp list
  async subscribe(email) {
    if (!this.isValidEmail(email)) {
      throw new Error('Invalid email format');
    }

    try {
      // Store email in localStorage as backup
      this.storeEmailLocally(email);

      // Mailchimp API endpoint
      const url = `${this.corsProxy}https://${this.mailchimpConfig.dataCenter}.api.mailchimp.com/3.0/lists/${this.mailchimpConfig.audienceId}/members`;
      
      const data = {
        email_address: email,
        status: 'subscribed',
        merge_fields: {
          FNAME: email.split('@')[0], // Use part before @ as first name
          SOURCE: 'Website Subscription'
        }
      };

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Authorization': `apikey ${this.mailchimpConfig.apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (response.ok) {
        return {
          success: true,
          message: 'Successfully subscribed to newsletter',
          email: email
        };
      } else if (result.title === 'Member Exists') {
        return {
          success: true,
          message: 'You are already subscribed to our newsletter',
          email: email
        };
      } else {
        throw new Error(result.detail || 'Failed to subscribe');
      }

    } catch (error) {
      console.error('Subscription error:', error);
      
      // If API call fails, at least we have the email stored locally
      return {
        success: false,
        message: 'Subscription temporarily stored. We\'ll add you to our list soon!',
        email: email
      };
    }
  }

  // Store email locally as backup
  storeEmailLocally(email) {
    try {
      const storedEmails = localStorage.getItem('pending_subscriptions') || '[]';
      const emails = JSON.parse(storedEmails);
      if (!emails.includes(email)) {
        emails.push(email);
        localStorage.setItem('pending_subscriptions', JSON.stringify(emails));
      }
    } catch (error) {
      console.error('Error storing email locally:', error);
    }
  }

  // Get locally stored emails
  getPendingSubscriptions() {
    try {
      const storedEmails = localStorage.getItem('pending_subscriptions') || '[]';
      return JSON.parse(storedEmails);
    } catch (error) {
      console.error('Error reading stored emails:', error);
      return [];
    }
  }

  // Validate email format
  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}

const emailService = new EmailService();
export default emailService;