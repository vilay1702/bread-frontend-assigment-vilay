import CenterCard from "../components/CenterCard";
import Slider from "../components/Slider";
import background from '../images/background.png';

const Home = () => {
    return ( 
        <div>
            <img src={background} className="cardBG" style={{
            }} alt="" />
            <CenterCard />
            <Slider />
        </div>
    )
}

export default Home
