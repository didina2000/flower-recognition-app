const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/wikipedia", async (req, res) => {
  const { plantName } = req.query;
  try {
    const wikipediaUrl = `https://ro.wikipedia.org/w/api.php?action=query&format=json&prop=extracts%7Cpageimages&titles=${encodeURIComponent(
      plantName
    )}&exintro=1&explaintext=1&redirects=1&pithumbsize=300`;

    const response = await axios.get(wikipediaUrl);

    // Assuming you want to send only the 'query' part of the response to the client
    res.json(response.data.query);
  } catch (error) {
    console.error("Error fetching Wikipedia data:", error.message);
    res.status(500).json({ error: "Error fetching Wikipedia data" });
  }
});

const PORT = 5173;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
