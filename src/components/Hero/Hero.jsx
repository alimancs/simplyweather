import "./Hero.css";
import OtherInfo from "../OtherInfo/OtherInfo";
import UserWeather from "../UserWeather/UserWeather";
function Hero() {
    return (
        <div id='hero-box'>
            <UserWeather></UserWeather>
            <OtherInfo></OtherInfo>
        </div>
    )
}

export default Hero;