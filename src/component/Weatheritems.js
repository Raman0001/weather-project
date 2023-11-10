// import React, { Component } from 'react'

// class Weatheritem extends Component {
//   render() {
//     let { country, region, name, tempc, tempf, icon } = this.props;
//     return (
//       <div>
//         <div className="card">
//           <div className="card-body">
//             <img src={icon} className="card-img-top" alt='icon' style={{ height: "50px", width: "50px" }} />
//             <h1 className="card-title">{country}</h1>
//             <h5 className="card-title">{region}</h5>
//             <h5 className="card-title">{name}</h5>
//             <h5 className="card-title">{tempc}</h5>
//             <h5 className="card-title">{tempf}</h5>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }
// export default Weatheritem

import React,{useState} from 'react';


const WeatherItem = ({ country, region, name, tempc, tempf,icon,humidity,uv,date}) => {
  const [temp,setTemp] = useState(tempc);
  const [f,setF] = useState("C");
  const toggletemp = ()=>{
    if(temp === tempc){
      setTemp(tempf)
      setF("F")
    }
    else{
      setTemp(tempc)
      setF("C")
    }

  }
  return (
      <div className="card">
        <div className="card-body">
          <img src={icon} className="card-img-top" alt='icon' style={{ height: "50px", width: "50px" }} />
          <h1 className="card-title">{country}</h1>
          <h5 className="card-title">{region}</h5>
          <h5 className="card-title">{name}</h5>
          <h5 style={{cursor:'pointer'}} onClick={toggletemp}>{temp}° {f}</h5>
          <h5 className="card-title"></h5>
          <h5 className="card-title">humidity {humidity}</h5>
          <h5 className="card-title">uv {uv}</h5>
          <h5 className="card-title">{new Date(date).toLocaleString(undefined, {timeZone: 'Asia/Kolkata', hour12: true})}</h5>         
        </div>
      </div>
  );
}

export default WeatherItem;
