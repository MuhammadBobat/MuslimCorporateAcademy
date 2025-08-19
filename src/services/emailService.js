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

      if (response.ok) {
        return {
          success: true,
          message: result.message,
          email: email
        };
      } else {
        throw new Error(result.error || "Failed to subscribe");
      }

    } catch (error) {
      console.error("Subscription error:", error);
      throw error;
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
