import AboutContent from "./aboutpage";
import HeroContent from "./hero";
import ProfileContent from "./profile/profile";
import ServicesContent from "./services/services";

const HomePage = () => {
    return (
        <div>
            <HeroContent/>
            <AboutContent/>
            <ServicesContent/>
          {/* <ProfileContent/>             */}
        </div>
    );
}

export default HomePage ;