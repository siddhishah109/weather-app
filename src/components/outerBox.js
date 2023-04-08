import React from 'react';
import logo from '../img/cloud2.png';



const OuterBox = () => {
  return (

    <div className='container ' >
        <div className=' container bg-secondary box'>
            <input className=' my-3 cityenter' placeholder='Enter Your city..'/>
            <div className='row'>
            <div className='phwv col'>
            Precipitation: 0% <br/>
            Humidity: 58%<br/>
            Wind: 3 km/h<br/>
            Visibility:3000 <br/>
            </div>
            <div  className='col'>
                <img src={logo} width={120} alt='cloud'/>
                
            </div>
            </div>
            <div className='weather'>
                Haze</div>
            <div className='temp'>
            Temp: 303.14  &nbsp; F/C
            </div>
            <div className='container suntime '>
            sunrise:1680915429 &nbsp;&nbsp;
            sunset:1680960221

            </div>
        </div>
      
    </div>
  )
}

export default OuterBox
 