import styles from './WeatherBox.module.css';
function WeatherBox(props) {
    return (
        <div  className={styles.days}>
        <span className={styles.dayTitle}>{props.data.day}</span>
        <div className={styles.dayIcon}></div>
        <span className={styles.dayTemp}>{props.data.temp}</span>
        </div>
    )
}

export default WeatherBox;