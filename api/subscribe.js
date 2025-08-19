// Vercel Serverless Function for Mailchimp subscription
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { email } = req.body;

    if (!email || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      return res.status(400).json({ error: "Invalid email address" });
    }

    const MAILCHIMP = {
      DC: "us14",
      LIST_ID: "52f386d464",
      API_KEY: "944e7c66f7c636593d91c7164c107a87-us14"
    };

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
      throw new Error(result.detail || "Failed to subscribe");
    }

  } catch (error) {
    console.error("Subscription error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to subscribe. Please try again later."
    });
  }
}
