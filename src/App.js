import './App.css';
import { useRef, useState } from 'react';
import Weather from './components/weather';
import ThemeToggleButton from './components/ThemeToggleButton';

function App() {

  const [data, setData] = useState()
  const weatherInputRef = useRef()
  async function getWeatherData() {
    const cityName = weatherInputRef.current.value
    const data = await fetch(`${process.env.REACT_APP_BASE_URL}/${cityName}`)
    const weatherData = await data.json()
    setData(weatherData)
  }

  return (
    <div className="App">
      <ThemeToggleButton />
      <h1>Weather APP</h1>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px', justifyContent: 'center' }}>
        <input ref={weatherInputRef} placeholder='Enter City Name' />
        <button onClick={getWeatherData}>Search</button>
        {data && <Weather data={{ ...data.data, name: data.cityName }} />}

      </div>
    </div>
  );
}

export default App;
