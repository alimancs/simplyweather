import styles from './OtherInfo.module.css';

function OtherInfo() {
    const daysAndData = [
        {day:'Mon',temp:'12 ℃'},
        {day:'Tues',temp:'0 ℃'},
        {day:'Wed',temp:'-10 ℃'},
        {day:'Thurs',temp:'100 ℃'},
        {day:'Fri',temp:'24 ℃'},
        {day:'Sat',temp:'-1 ℃'},
        {day:'Sun',temp:'34 ℃'},
    ]
    const locationAndData = [
        {location:'USA', info:'rainy', windspeed:'20 km/h', humidity:'10%'},
        {location:'USA', info:'rainy', windspeed:'20 km/h', humidity:'10%'},
        {location:'USA', info:'rainy', windspeed:'20 km/h', humidity:'10%'},
        {location:'USA', info:'rainy', windspeed:'20 km/h', humidity:'10%'},
        {location:'USA', info:'rainy', windspeed:'20 km/h', humidity:'10%'},
    ]
    return (
        <div id={styles.main}>
            <div id={styles.subMain}>
                <span className={styles.otherTitle}>7-DAYS FORCAST</span>
                <div id={styles.otherTop} className={styles.half}>
                    {daysAndData.map((dayData)=> {
                        return (
                           <div className={styles.days}>
                                <span className={styles.dayTitle}>{dayData.day}</span>
                                <div className={styles.dayIcon}></div>
                                <span className={styles.dayTemp}>{dayData.temp}</span>
                            </div>
                            
                        )
                    })}
                </div>
                <span className={styles.otherTitle}>Other cities</span>
                <div className={styles.half}>
                    {locationAndData.map((data)=>{
                        return (
                        <div className={styles.otherLocations}>
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