import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../context/GlobalContext';
import Clear from './Weather/Clear'
import Snow from './Weather/Snow'
import Clouds from './Weather/Clouds'
import Tornado from './Weather/Tornado'
import Drizzle from './Weather/Drizzle'
import Rain from './Weather/Rain'
import Thunderstorm from './Weather/Thunderstorm'

function Weather() {
    const { currentWeather } = useContext(GlobalContext);
    const [temp, setTemp] = useState('')
    const [cityName, setCityName] = useState('')
    const [weatherType, setWeatherType] = useState('')

    useEffect(() => {
        // Checking for the existence of weatherCounter or weatherCounter < 50
        if (localStorage.getItem('weatherCounter') === null || localStorage.getItem('weatherCounter') > 25) {
            currentWeather();
        } else {
            getCurrentWeather();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // This function settings the weather info from local storage
    function getCurrentWeather() {
        // Setting local weather counter
        var weatherCounter = localStorage.getItem('weatherCounter')
        // Setting values
        setTemp(JSON.parse(localStorage.getItem('weatherData')).main.temp)
        setCityName(JSON.parse(localStorage.getItem('weatherData')).name)
        setWeatherType(JSON.parse(localStorage.getItem('weatherData')).weather[0].main)
        // Increment weather counter
        weatherCounter++
        // Setting weather counter
        localStorage.setItem('weatherCounter', weatherCounter)
    }

    function checkWeatherType(weather_type){
        // Returning a weather type based on weather 
        switch(weather_type){
            case 'Clear':
                return <Clear />;

            case 'Clouds':
                return <Clouds />;

            case 'Tornado':
                return <Tornado />;

            case 'Drizzle':
                return <Drizzle />;

            case 'Rain':
                return <Rain />;

            case 'Thunderstorm':
                return <Thunderstorm />;

            case 'Snow':
                return <Snow />;

            default:
                return <Clouds />;
        }
    }

    return (
        <div className="flex w-full">
            { checkWeatherType(weatherType) }
            <div className="text-4xl font-bold text-gray-300">{cityName ? cityName : 'Raleigh' }</div>
            <div className="text-4xl ml-4 text-gray-300"> ,  {temp ? Math.floor(temp) : '80'} &#8457;</div>
        </div>
    )
}

export default Weather
