import React, { useState } from 'react'

const WeatherDay = ({ iconday, tempfday, tempcday, dateday, humidityday, uvday}) => {
    const [temp, setTemp] = useState(tempcday);
    const [f, setF] = useState("C");
    const toggletemp = () => {
        if (temp === tempcday) {
            setTemp(tempfday)
            setF("F")
        }
        else {
            setTemp(tempcday)
            setF("C")
        }
    }
    return (
        <div className='my-4'>
            <div className="card">
                <img src={iconday} className="card-img-top" alt='icon' style={{ height: "50px", width: "50px" }} />
                <div className="card-body">
                    <h5 style={{ cursor: 'pointer' }} onClick={toggletemp}>{temp}°{f}</h5>
                    <h5 className="card-title">{new Date(dateday).toLocaleString(undefined, { timeZone: 'Asia/Kolkata', hour12: true })}</h5>
                    <h4>{humidityday}</h4>
                    <h4>{uvday}</h4>
                </div>
            </div>
        </div>
    )
}

export default WeatherDay
