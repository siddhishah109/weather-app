import React from 'react'

const OuterBox = () => {
  return (
    <div className='container ' >
        <div className=' container bg-secondary box'>
            <input className=' my-3 cityenter' placeholder='Enter Your city..'/>
            <div>
            Precipitation: 0% <br/>
            Humidity: 58%<br/>
            Wind: 3 km/h<br/>
            </div>
            <div>
                Haze
                           </div>
        </div>
      
    </div>
  )
}

export default OuterBox
 