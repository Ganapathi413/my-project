const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const { CLOUD_NAME, API_KEY, API_SECRET } = process.env;

// 🔹 Fetch Images Only from "Ganapathi" Folder
app.get("/get-ganapathi-images", async (req, res) => {
  try {
    const auth = Buffer.from(`${API_KEY}:${API_SECRET}`).toString("base64");

    const response = await axios.get(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/resources/image`, // Fetch images
      {
        headers: { Authorization: `Basic ${auth}` },
        params: {
          type: "upload", // Fetch only uploaded images
          prefix: "Ganapathi/", // Filter images within "Ganapathi" folder
        },
      }
    );

    res.json({ images: response.data.resources });
  } catch (error) {
    console.error("Cloudinary Fetch Error:", error.response?.data || error.message);
    res.status(500).json({ error: "Failed to fetch images", details: error.response?.data });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
