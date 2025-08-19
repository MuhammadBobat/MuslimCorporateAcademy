// Vercel Serverless Function for Mailchimp subscription
import fetch from "node-fetch";

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
  res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");

  // Handle preflight request
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { email } = req.body;

    if (!email || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      return res.status(400).json({ error: "Invalid email address" });
    }

    // Get credentials from environment variables
    const MAILCHIMP = {
      DC: process.env.MAILCHIMP_DC || "us14",
      LIST_ID: process.env.MAILCHIMP_LIST_ID,
      API_KEY: process.env.MAILCHIMP_API_KEY
    };

    // Validate environment variables
    if (!MAILCHIMP.API_KEY || !MAILCHIMP.LIST_ID) {
      console.error("Missing Mailchimp configuration");
      return res.status(500).json({
        success: false,
        message: "Newsletter service is not properly configured"
      });
    }

    const url = `https://${MAILCHIMP.DC}.api.mailchimp.com/3.0/lists/${MAILCHIMP.LIST_ID}/members`;
    const data = {
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME: email.split("@")[0],
        SOURCE: "Website Subscription"
      }
    };

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Authorization": `apikey ${MAILCHIMP.API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();

    if (response.ok) {
      return res.status(200).json({
        success: true,
        message: "Successfully subscribed to newsletter"
      });
    } else if (result.title === "Member Exists") {
      return res.status(200).json({
        success: true,
        message: "You are already subscribed to our newsletter"
      });
    } else {
      console.error("Mailchimp error:", { 
        status: response.status,
        result,
        email 
      });
      throw new Error(result.detail || "Failed to subscribe");
    }

  } catch (error) {
    console.error("Subscription error:", {
      message: error.message,
      stack: error.stack,
      email: req.body?.email
    });
    return res.status(500).json({
      success: false,
      message: "Failed to subscribe. Please try again later.",
      error: error.message
    });
  }
}
