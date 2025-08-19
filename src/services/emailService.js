// Newsletter subscription service
class EmailService {
  constructor() {
    this.apiEndpoint = "/api/subscribe";
  }

  // Subscribe a new email address to newsletter
  async subscribe(email) {
    if (!this.isValidEmail(email)) {
      throw new Error("Invalid email format");
    }

    try {
      const response = await fetch(this.apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email })
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || result.message || "Failed to subscribe");
      }

      return {
        success: true,
        message: result.message,
        email: email
      };

    } catch (error) {
      console.error("Subscription error:", error);
      throw new Error(error.message || "Failed to subscribe. Please try again later.");
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
