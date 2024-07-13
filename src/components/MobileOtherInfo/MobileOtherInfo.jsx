import styles from './MobileOtherInfo.module.css'
import WeatherBox from '../WeatherBox/WeatherBox';

function MobileOtherInfo(props) {
    return (
        <div className={styles.main}>
           <div className={styles.otherTop}>
           <span className={styles.otherTitle}>7-DAYS FORCAST</span>
                <div className={styles.sdcontainer}>
                    {props.daysNdata.map((dayData)=> {
                        return (
                           <WeatherBox key={props.daysNdata.indexOf(dayData)} data={dayData}></WeatherBox>
                        )
                    })}
                </div>
           </div>
           <div className={styles.otherBtm}>

           </div>
        </div>
    )
}

export default MobileOtherInfo;