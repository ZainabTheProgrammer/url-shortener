
import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    let body = "";

    
    for await (const chunk of req) {
      body += chunk;
    }

    let data;
    try {
      data = JSON.parse(body);
    } catch {
      return res.status(400).json({ error: "Invalid JSON" });
    }

    const { url } = data;
    if (!url) {
      return res.status(400).json({ error: "URL is required" });
    }

    try {
      const response = await axios.post(
        "https://cleanuri.com/api/v1/shorten",
        new URLSearchParams({ url }).toString(),
        { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
      );

      res.status(200).json({ shortUrl: response.data.result_url });
    } catch (error) {
      console.error(error.response?.data || error.message);
      res.status(500).json({ error: "Failed to shorten URL" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
