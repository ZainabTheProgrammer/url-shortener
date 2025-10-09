import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // ✅ Vercel already parses JSON request body automatically
    const { url } = req.body;

    if (!url) {
      return res.status(400).json({ error: "URL is required" });
    }

    const response = await axios.post(
      "https://cleanuri.com/api/v1/shorten",
      new URLSearchParams({ url }).toString(),
      { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
    );

    return res.status(200).json({ shortUrl: response.data.result_url });
  } catch (error) {
    console.error(error.response?.data || error.message);
    return res.status(500).json({ error: "Failed to shorten URL" });
  }
}
