import "./Hero.css";
import OtherInfo from "../OtherInfo/OtherInfo";
import UserWeather from "../UserWeather/UserWeather";
function Hero(props) {
    return (
        <div id='hero-box'>
            <UserWeather daysAndData={props.days_and_data} locationAndData={props.location_and_data}></UserWeather>
            <OtherInfo daysAndData={props.days_and_data} locationAndData={props.location_and_data}></OtherInfo>
        </div>
    )
}

export default Hero;