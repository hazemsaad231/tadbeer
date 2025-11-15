
import AboutContent from "./about/aboutContent";
import HeroContent from "./hero/heroContent";
import ProfileContent from "./profile/profile";
import ServicesContent from "./services/services";

const HomePage = () => {
    return (
        <div>
        <HeroContent/>
        <AboutContent/>
        <ServicesContent/>
        <ProfileContent/>            
        </div>
    );
}

export default HomePage ;