
//   constructor() {
//     super();
//     this.state = {
//       report: [],
//       city: this.city
//     };
//   }
//   componentDidMount() {
//     fetch(`https://api.weatherapi.com/v1/current.json?key=46cd81a7ba1e4d389ad165913230411&q=pune&aqi=no`)
//       .then((res) => res.json())
//       .then((json) => {
//         this.setState({
//           report: [json]
//         });
//       });


import React, { useState, useEffect } from 'react';
import Weatheritem from './Weatheritems.js';
import WeatherDay from './WeatherDay.js';
import Weatherin from './Weatherin.js';

const Weather = () => {
  const [report, setReport] = useState([]);
  const [city, setCity] = useState("pune");
  const [forecast, setForecast] = useState([]);
  const [hour, setHour] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setError(null); // Clear previous errors
      fetch(`https://api.weatherapi.com/v1/forecast.json?key=46cd81a7ba1e4d389ad165913230411&q=${city}&aqi=no&days=7`)
        .then((res) => {
          if (!res.ok) {
            throw new Error('City not found'); // Throw an error if response is not OK
          }
          return res.json();
        })
        .then((json) => {
          setReport([json]);
          setHour(json.forecast.forecastday[0].hour);
          setForecast(json.forecast.forecastday);
        })
        .catch((error) => {
          setError("not found", error);
        });
    } catch (error) {
      setError("An unexpected error occurred.",error);
    }
  }, [city]);

  const handlenOnReplace = () => {
    let newText = city.replaceAll(city, to);
    setCity(newText);
  };

  const [from] = useState(city);
  const [to, setTo] = useState("");

  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-body-tertiary mb-5">
        <div className="container-fluid">
          <h1 className="navbar-brand">Weather</h1>
          <div>
            <input type="text" onChange={(event) => { setTo(event.target.value) }} />
            <button type="button" onClick={handlenOnReplace}>Submit</button>
          </div>
        </div>
      </nav>
      <div className='container-fluid'>
        <div className="my-3 mx-3">
          {error ? (
            <div>
              <p className='d-flex justify-content-center align-items-center'>{error}</p>
            </div>
          ) : (
            report.map(element => {
              return <div key={element.location.tz_id}>
                <Weatheritem icon={element.current.condition.icon} country={element.location.country} region={element.location.region} name={element.location.name} tempc={element.current.temp_c} tempf={element.current.temp_f} humidity={element.current.humidity}
                  uv={element.current.uv} date={element.location.localtime} />
                <p value={city}></p>
              </div>
            })
            )}
        </div>
      </div>
      {error ? ("") :  <div className='container-fluid'>
        <h1>weather per hour</h1>
        <div className="my-3 mx-3">
          <div className="row">
            {
              hour.map(element => {
                return (<div className="col-md-2 ">
                  <Weatherin key={element.condition.code} iconin={element.condition.icon} tempcin={element.temp_c} tempfin={element.temp_f} time={element.time} />
                  <p value={city}></p>
                </div>
              )})
            }
          </div>
      </div>
        </div>}


      {error ? ("") : <div className='container-fluid'>
        <h1>weather per day</h1>
        <div className="container-fluid">
          <div className="row">
            {forecast.map(element => {
             return(<div className="col-md-3" key={element.day.condition.code} >
                <WeatherDay iconday={element.day.condition.icon} tempcday={element.day.avgtemp_c} tempfday={element.day.avgtemp_f} humidityday={element.day.avghumidity} uvday={element.day.uv} dateday={element.date}
                />
              </div>)
})}
          </div>
        </div>
      </div>}
    </div>
  );
}

export default Weather;
