import axios from 'axios'
import React, { useState } from 'react'

const Weatherapp = () => {
  const APIKEY = '8fb965a1aa6d6b93b198a1991098d677'
    const [city,setCity] = useState('')
    const [weather,setWeather]= useState(null)
    const [error,setError] = useState(null)

    const add =async (e)=>{
        e.preventDefault()
        console.log(city);
        try {
          const recieve = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric`)
        setWeather(recieve.data)
        console.log(weather);
        setError('')
        setCity('')
        } catch (error) {
          setError('Please Enter a correct City Name')
          setWeather(null)
        }
        
        
        
        
    }
  return (
    <div className='min-h-screen bg-gradient-to-br from-cyan-500 to-blue-500 ...'>
      <div className=' pt-10 mx-auto w-[500px]'>
        <form onSubmit={add} className='w-[100%] gap-2 flex'>
        <input value={city} className='flex-1 p-2 rounded-md' onChange={(e)=>setCity(e.target.value)} type="text" />
        <button type='submit' className='w-[120px] p-4 text-center rounded-md bg-violet-600 text-white'>Search</button>
        </form>
      </div>
    {
      error && <p className='mx-auto font-bold text-center text-red-400 mt-4 text-2xl'>
        {error}
      </p>
    }




      {weather && 
      <div className='mx-auto w-[500px]'>
        <div className='justify-self-center mt-6'>
          <h1 className='text-white text-4xl'>{weather.name}</h1>
          <div className='text-white text-center'>{Math.round(weather.main.temp)}°C</div>
          <div>
            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}/>
          </div>
        </div>
        <div className='flex justify-between'>
          <div className='w-[120px] h-[120px] bg-blue-600 rounded-md pt-6'>
            <h1 className='text-white text-center text-xl'>
              Feels like
            </h1>
            <div className='text-white text-center text-xl'>
              {weather.main.feels_like}
            </div>
          </div>
          <div className='w-[120px] h-[120px] bg-blue-600 rounded-md pt-6'>
            <h1 className='text-white text-center text-xl'>
              humidity
              </h1>
              <div className='text-white text-center text-xl'>
              {weather.main.humidity
              }
            </div>
          </div>
        </div>
      </div>
      }
    </div>
  )
}

export default Weatherapp
