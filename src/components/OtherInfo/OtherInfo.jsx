import styles from './OtherInfo.module.css';
import WeatherBox from '../WeatherBox/WeatherBox';

function OtherInfo(props) {
    return (
        <div id={styles.main}>
            <div id={styles.subMain}>
                <span className={styles.otherTitle}>7-DAYS FORCAST</span>
                <div id={styles.otherTop} className={styles.half}>
                    {props.daysAndData.map((dayData)=> {
                        return (
                           <WeatherBox key={props.daysAndData.indexOf(dayData)} data={dayData}></WeatherBox>
                        )
                    })}
                </div>
                <span className={styles.otherTitle}>Other cities</span>
                <div className={styles.half}>
                    {props.locationAndData.map((data)=>{
                        return (
                        <div key={props.locationAndData.indexOf(data)} className={styles.otherLocations}>
                            <span className={styles.olTxt}>{data.location}</span>
                            <div className={styles.subBox}>
                                <div className={styles.olIcon}></div>
                                <span className={styles.olW}>{data.info}</span>
                            </div>
                            <span className={styles.wI}>Wind speed: {data.windspeed}/ Humidity :{data.humidity}</span>
                        </div>  
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default OtherInfo;