const express = require("express");
const axios = require("axios");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: "https://zainabtheprogrammer.github.io",
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"]
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.options("*", cors({
  origin: "https://zainabtheprogrammer.github.io",
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"]
}));

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.post("/api/shortenUrl", async (req, res) => {
  const { url } = req.body;
  if (!url) return res.status(400).json({ error: "URL is required" });

  try {
    const response = await axios.post(
      "https://cleanuri.com/api/v1/shorten",
      new URLSearchParams({ url }).toString(),
      { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
    );
    res.json({ shortUrl: response.data.result_url });
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ error: "Failed to shorten URL" });
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
