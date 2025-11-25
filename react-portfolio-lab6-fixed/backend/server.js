// backend/server.js
import express from "express";
import cors from "cors";
import fs from "fs";
import fetch from "node-fetch";
import path from "path";
import { fileURLToPath } from "url";

console.log("🚀 Starting backend server...");

const app = express();
app.use(cors());
app.use(express.json());

// For ESM __dirname support
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ---------- PROJECTS ROUTE ----------
app.get("/api/projects", (req, res) => {
  try {
    const filePath = path.join(__dirname, "projects.json");
    const data = fs.readFileSync(filePath, "utf-8");
    const projects = JSON.parse(data);

    console.log("✅ Projects loaded successfully");
    res.json(projects);
  } catch (err) {
    console.error("❌ ERROR loading projects:", err);
    res.status(500).json({ error: "Failed to load projects" });
  }
});

// ---------- WEATHER ROUTE ----------
app.get("/api/weather", async (req, res) => {
  try {
    const apiKey = process.env.OPENWEATHER_KEY || "NO_KEY_FOUND"; // put key in env for Netlify
    const city = "Halifax";

    if (apiKey === "NO_KEY_FOUND") {
      console.warn("⚠️ WARNING: No OPENWEATHER_KEY found in environment variables");
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    console.log("🌍 Fetching weather:", url);

    const response = await fetch(url);
    if (!response.ok) throw new Error("Bad API response");

    const data = await response.json();

    const weatherData = {
      city: data.name,
      temperature: data.main.temp,
      humidity: data.main.humidity,
      description: data.weather[0].description,
    };

    console.log("☁️ Weather fetched:", weatherData);
    res.json(weatherData);
  } catch (err) {
    console.error("❌ ERROR fetching weather:", err);
    res.status(500).json({ error: "Failed to fetch weather" });
  }
});

// ---------- START SERVER ----------
app.listen(5000, () => {
  console.log("✅ Server running on http://localhost:5000");
});
