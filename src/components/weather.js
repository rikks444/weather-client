import React from 'react';

const Weather = ({ data }) => {
    const {
        name,
        coord: { lon, lat },
        weather,
        main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
        visibility,
        wind: { speed, deg },
        clouds: { all: cloudiness },
        rain,
        sys: { country, sunrise, sunset },
    } = data;


    const formatTimestamp = (timestamp) => {
        const date = new Date(timestamp * 1000);
        return date.toLocaleTimeString();
    };

    return (
        <div className="weather-display" style={{ color: "black" }}>
            <h1>Weather in {name}, {country}</h1>
            <p>Coordinates: {lat}, {lon}</p>
            <h2>Current Weather</h2>
            {weather.map((w, index) => (
                <div key={index}>
                    <p>{w.main} ({w.description})</p>
                    <img src={`http://openweathermap.org/img/wn/${w.icon}.png`} alt={w.description} />
                </div>
            ))}
            <p>Temperature: {temp / 10}°C (feels like {feels_like / 10}°C)</p>
            <p>Min Temperature: {temp_min / 10}°C</p>
            <p>Max Temperature: {temp_max / 10}°C</p>
            <p>Pressure: {pressure} hPa</p>
            <p>Humidity: {humidity}%</p>
            <p>Visibility: {visibility} meters</p>
            <p>Wind: {speed} m/s at {deg}°</p>
            <p>Cloudiness: {cloudiness}%</p>
            {rain && <p>Rain (last hour): {rain['1h']} mm</p>}
            <p>Sunrise: {formatTimestamp(sunrise)}</p>
            <p>Sunset: {formatTimestamp(sunset)}</p>
        </div>
    );
};

export default Weather;
