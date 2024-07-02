import './UserWeather.css';

function UserWeather() {
    return (
       <div id='main'>
           <div id='sub-main'>
                <div id='location'>
                    <div id='l-sub'>
                        <div id="location-icon" ></div>
                        <span id="ltext">LOCATION</span>
                    </div>
                    <br></br>  
                    <span id="date-text">Monday 29, May 2003, 09:00AM</span>
                </div>
                <div id="main-info">
                    <div className="sub-m">
                        <span id="temp">26.7℃</span>
                   </div>
                    <div className="sub-m" id="sub-mm">
                        <div id="w-image"></div>
                        <span id="maintext">Mostly <br></br>cloudy</span>
                    </div>
                </div>
                <div id="more-info">
                    <div className='more-info-sub'>
                        <div className='mi-icon'></div>
                        <span className='mi-val'>30%</span>
                        <span className='mi-text'>lorem ipsum</span>
                    </div>
                    <div className='more-info-sub'>
                        <div className='mi-icon'></div>
                        <span className='mi-val'>12 km/h</span>
                        <span className='mi-text'>Wind speed</span>
                    </div>
                    <div className='more-info-sub'>
                        <div className='mi-icon'></div>
                        <span className='mi-val'>10%</span>
                        <span className='mi-text'>Humidity</span>
                    </div>
                </div>
        </div>
       </div>
    );
};

export default UserWeather;