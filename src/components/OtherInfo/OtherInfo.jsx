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
                <div className={styles.half}></div>
            </div>
        </div>
    );
};

export default OtherInfo;