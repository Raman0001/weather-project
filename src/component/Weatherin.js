import React,{useState} from 'react'

const Weatherin = ({ time, tempcin, tempfin, iconin }) => {
    const [temp, setTemp] = useState(tempcin);
    const [f, setF] = useState("C");
    const toggletemp = () => {
        if (temp === tempcin) {
            setTemp(tempfin)
            setF("F")
        }
        else {
            setTemp(tempcin)
            setF("C")
        }
    }
    return (
        <div className='my-4'>
        <div className="card">
            <div className="card-body">
            <img src={iconin} className="card-img-top" alt='icon' style={{ height: "50px", width: "50px" }} />
            <h5 style={{ cursor: 'pointer' }} onClick={toggletemp}>{temp}°{f}</h5>
            <h5 className="card-title" >{new Date(time).toLocaleString(undefined, { timeZone: 'Asia/Kolkata', hour12: true })}</h5>
            </div>
        </div>
        </div>
    )
}

export default Weatherin

