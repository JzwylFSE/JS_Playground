import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

export default function WeatherApp() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");

  const getWeatherEmoji = (weatherId) => {
    switch (true) {
      case weatherId >= 200 && weatherId < 300:
        return "⛈️";
      case weatherId >= 300 && weatherId < 400:
        return "🌧️";
      case weatherId >= 500 && weatherId < 600:
        return "🌧️";
      case weatherId >= 600 && weatherId < 700:
        return "❄️";
      case weatherId >= 700 && weatherId < 800:
        return "🌫️";
      case weatherId === 800:
        return "☀️";
      case weatherId >= 801 && weatherId < 810:
        return "☁️";
      default:
        return "❓";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!city) {
      setError("Please enter a city");
      setWeatherData(null);
      return;
    }

    try {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error("Could not fetch weather data");
      }

      const data = await response.json();
      setWeatherData({
        city: data.name,
        temp: (data.main.temp - 273.15).toFixed(1), // Convert Kelvin to Celsius
        humidity: data.main.humidity,
        description: data.weather[0].description,
        weatherId: data.weather[0].id,
      });
      setError("");
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    }
  };

  return (
    <div className={styles.container}>
      <Link to="/" className={styles.homeLink}>
        Home
      </Link>
      <h2>You might have to generate your own API Key for the Weather App to work</h2>
      <form className={styles.weatherForm} onSubmit={handleSubmit}>
        <input
          type="text"
          className={styles.cityInput}
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit" className={styles.submitButton}>
          Get Weather
        </button>
      </form>
      {error && (
        <div className={styles.card}>
          <p className={styles.errorDisplay}>{error}</p>
        </div>
      )}
      {weatherData && (
        <div className={styles.card}>
          <h1 className={styles.cityDisplay}>{weatherData.city}</h1>
          <p className={styles.tempDisplay}>{weatherData.temp}°C</p>
          <p className={styles.humidityDisplay}>
            Humidity: {weatherData.humidity}%
          </p>
          <p className={styles.descDisplay}>{weatherData.description}</p>
          <h1 className={styles.weatherEmoji}>
            {getWeatherEmoji(weatherData.weatherId)}
          </h1>
        </div>
      )}
    </div>
  );
}
