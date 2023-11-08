import ReactHelmet from "../../components/commonComponents/ReactHelmet";
import Banner from "../../components/homeComponents/Banner/Banner";
import FeaturedRooms from "../../components/homeComponents/FeaturedRooms/FeaturedRooms";
import Newsletter from "../../components/homeComponents/Newsletter/Newsletter";
import OurLocation from "../../components/homeComponents/OurLocation/OurLocation";
import SpacialOffers from "../../components/homeComponents/SpacialOffers/SpacialOffers";
import TopServices from "../../components/homeComponents/TopServices/TopServices";

const Home = () => {
  return (
    <div>
      <ReactHelmet title="Hotel X | Home" />
      <Banner />
      <TopServices />
      <FeaturedRooms />
      <SpacialOffers />
      <OurLocation />
      <Newsletter />
    </div>
  );
};

export default Home;
