import Banner from "../../components/homeComponents/Banner/Banner";
import FeaturedRooms from "../../components/homeComponents/FeaturedRooms/FeaturedRooms";
import Newsletter from "../../components/homeComponents/Newsletter/Newsletter";
import OurLocation from "../../components/homeComponents/OurLocation/OurLocation";
import TopServices from "../../components/homeComponents/TopServices/TopServices";

const Home = () => {
  return (
    <div>
      <Banner />
      <TopServices />
      <FeaturedRooms />
      <Newsletter />
      <OurLocation />
    </div>
  );
};

export default Home;
