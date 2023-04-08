import React from 'react';
import logo from '../img/cloud2.png';
import { useState , useEffect } from 'react';


const OuterBox = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState('mumbai');

    useEffect(()=>{
        const fetchApi=async()=>{
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=d2a34a1583e51bce5ed1eb154f3ddbaa`
            const resopnse= await(fetch(url));
            const resJson= await resopnse.json();
            // console.log(resJson)
            setCity(resJson);
        }


         fetchApi();
    },[search])





  return (

    <div className='container ' >
        <div className=' container bg-secondary box'>
            <input className=' my-3 cityenter' onChange={(e)=>{setSearch(e.target.value)}} placeholder='Enter Your city..'/>
        {
            !city ? (<p>No Data Found</p>):
            (
                <div>
                <div className='row'>
                <div className='phwv col'>
                Precipitation: 0% <br/>
                Humidity: <br/>
                Wind: 3 km/h<br/>
                Visibility:3000 <br/>
                </div>
                <div  className='col'>
                    <img src={logo} width={120} alt='cloud'/>
                    
                </div>
                </div>
                <div className='weather'>
                    {city.weather.main} {search}</div>
                <div className='temp'>
                Temp: {city.main.temp}  &nbsp; F/C
                </div>
                <div className='container suntime '>
                sunrise:1680915429 &nbsp;&nbsp;
                sunset:1680960221
    
                </div>
                </div>
            )
        }
        </div>
      
    </div>
  )
}

export default OuterBox
 