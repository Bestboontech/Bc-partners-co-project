export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  console.log({ body: req.body });

  // Send email using EmailJS API
  try {
    const response = await fetch(
      "https://api.emailjs.com/api/v1.0/email/send",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: process.env.EMAILJS_SERVICE_ID,
          template_id: process.env.EMAILJS_TEMPLATE_ID,
          user_id: process.env.EMAILJS_USER_ID,
          template_params: {
            ...req.body,
          },
        }),
      }
    );

    if (response.ok) {
      res.status(200).json({ message: "Your mail is sent!" });
    } else {
      const error = await response.json();
      res.status(500).json({ error });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
