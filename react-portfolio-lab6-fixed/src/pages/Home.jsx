// src/pages/Home.jsx
import React, { useEffect, useState } from "react"; 
import Footer from "../components/Footer";

export default function Home() {
  // -----------------------------
  // WEATHER STATE
  // -----------------------------
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // -----------------------------
  // FETCH WEATHER ON LOAD
  // -----------------------------
  useEffect(() => {
    async function fetchWeather() {
      try {
        const geoRes = await fetch(
          `https://geocoding-api.open-meteo.com/v1/search?name=Halifax&format=json`
        );
        const geoData = await geoRes.json();

        if (!geoData.results || geoData.results.length === 0) {
          setError("City not found.");
          setLoading(false);
          return;
        }

        const { latitude, longitude, name } = geoData.results[0];

        const weatherRes = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m&timezone=auto`
        );

        const weatherData = await weatherRes.json();

        setWeather({
          city: name,
          temp: weatherData.current.temperature_2m,
          humidity: weatherData.current.relative_humidity_2m,
        });
      } catch (err) {
        setError("Unable to fetch weather.");
      } finally {
        setLoading(false);
      }
    }

    fetchWeather();
  }, []);

  return (
    <>
      {/* Bootstrap CDN */}
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />

      {/* HEADER */}
      <header className="header bg-primary text-white py-4 shadow-sm">
        <h1 className="text-center fw-bold display-5">Welcome to My Portfolio</h1>
      </header>

      {/* MAIN SECTION */}
      <section id="home" className="container my-5">
        <div className="p-4 p-md-5 bg-white rounded-4 shadow home-container">

          <p className="home-subtitle">
            Hi there, my name is <strong>Praise Babalola</strong> and I am pursuing a 
            Bachelor of Applied Computer Science at Dalhousie University. Throughout my 
            academic journey, I have always sought to solve intricate problems, which 
            eventually led me down the computer science path. As these are still the early 
            days of my career, I am eager to connect with others, collaborate on innovative 
            projects, and contribute meaningfully to a company's mission.
          </p>

          {/* -----------------------------
              WEATHER WIDGET (Lab 6)
             ----------------------------- */}
          <div className="mt-4">
            <h3 className="text-center mb-3">🌤 Current Weather</h3>

            {loading && (
              <p className="text-center text-secondary">Loading weather...</p>
            )}

            {error && (
              <p className="text-center text-danger">{error}</p>
            )}

            {weather && (
              <div className="card mx-auto" style={{ maxWidth: "350px" }}>
                <div className="card-body text-center">
                  <h4 className="card-title fw-bold">{weather.city}</h4>
                  <p className="card-text fs-4">
                    🌡 Temperature: <strong>{weather.temp}°C</strong>
                  </p>
                  <p className="card-text fs-5">
                    💧 Humidity: <strong>{weather.humidity}%</strong>
                  </p>
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
